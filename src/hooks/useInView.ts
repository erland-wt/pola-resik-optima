"use client";

import { useEffect, useRef, useState } from "react";

type UseInViewOptions = IntersectionObserverInit & {
  once?: boolean;
};

type EntryHandler = (entry: IntersectionObserverEntry) => void;

type ObserverBucket = {
  observer: IntersectionObserver;
  handlersByElement: WeakMap<Element, Set<EntryHandler>>;
  observedCount: number;
};

const buckets = new Map<string, ObserverBucket>();
const rootIds = new WeakMap<object, number>();
let rootIdCounter = 0;

function getRootId(root: Element | Document | null | undefined): string {
  if (!root) return "null";
  const key = root as object;
  const existing = rootIds.get(key);
  if (existing) return String(existing);
  const next = ++rootIdCounter;
  rootIds.set(key, next);
  return String(next);
}

function getThresholdKey(threshold: IntersectionObserverInit["threshold"]): string {
  if (Array.isArray(threshold)) return threshold.join(",");
  return String(threshold ?? 0);
}

function getBucketKey(options: IntersectionObserverInit): string {
  const rootKey = getRootId(options.root ?? null);
  const marginKey = options.rootMargin ?? "0px";
  const thresholdKey = getThresholdKey(options.threshold);
  return rootKey + "|" + marginKey + "|" + thresholdKey;
}

function getOrCreateBucket(options: IntersectionObserverInit): ObserverBucket {
  const key = getBucketKey(options);
  const existing = buckets.get(key);
  if (existing) return existing;

  const handlersByElement = new WeakMap<Element, Set<EntryHandler>>();

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const handlers = handlersByElement.get(entry.target);
      if (!handlers) continue;
      handlers.forEach((handler) => handler(entry));
    }
  }, options);

  const bucket: ObserverBucket = {
    observer,
    handlersByElement,
    observedCount: 0,
  };

  buckets.set(key, bucket);
  return bucket;
}

function observeShared(
  element: Element,
  options: IntersectionObserverInit,
  handler: EntryHandler
) {
  const key = getBucketKey(options);
  const bucket = getOrCreateBucket(options);

  let handlers = bucket.handlersByElement.get(element);
  const firstHandlerForElement = !handlers;

  if (!handlers) {
    handlers = new Set<EntryHandler>();
    bucket.handlersByElement.set(element, handlers);
  }

  handlers.add(handler);

  if (firstHandlerForElement) {
    bucket.observer.observe(element);
    bucket.observedCount += 1;
  }

  return () => {
    const currentHandlers = bucket.handlersByElement.get(element);
    if (!currentHandlers) return;

    currentHandlers.delete(handler);

    if (currentHandlers.size === 0) {
      bucket.observer.unobserve(element);
      bucket.observedCount -= 1;
    }

    if (bucket.observedCount <= 0) {
      bucket.observer.disconnect();
      buckets.delete(key);
    }
  };
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  {
    threshold = 0.2,
    root = null,
    rootMargin = "0px",
    once = true,
  }: UseInViewOptions = {}
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let stop = () => {};

    stop = observeShared(
      element,
      { threshold, root, rootMargin },
      (entry) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) stop();
        } else if (!once) {
          setInView(false);
        }
      }
    );

    return stop;
  }, [threshold, root, rootMargin, once]);

  return { ref, inView };
}