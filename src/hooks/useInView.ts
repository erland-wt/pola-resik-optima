"use client";

import { useEffect, useRef, useState } from "react";

type UseInViewOptions = IntersectionObserverInit & {
  once?: boolean;
};

export function useInView<T extends HTMLElement = HTMLDivElement>(
  { threshold = 0.2, root = null, rootMargin = "0px", once = true }: UseInViewOptions = {}
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, root, rootMargin, once]);

  return { ref, inView };
}