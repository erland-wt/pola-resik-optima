"use client";

import Image from "next/image";
import { useState, type TouchEvent } from "react";
import cardsLingkup from "./MenuRuangLingkup";

const SWIPE_THRESHOLD = 50;

const RuangLingkup = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const prev = () => {
    setActiveIndex((current) =>
      current === 0 ? cardsLingkup.length - 1 : current - 1
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      current === cardsLingkup.length - 1 ? 0 : current + 1
    );
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    setTouchEndX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const distance = touchStartX - touchEndX;

    if (Math.abs(distance) > SWIPE_THRESHOLD) {
      if (distance > 0) {
        next();
      } else {
        prev();
      }
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section className="pt-16 sm:pt-20 md:pt-24 pb-12 md:pb-16">
      <h3 className="text-center uppercase text-xl sm:text-2xl md:text-3xl font-semibold text-[#3057B6] tracking-widest mb-6 md:mb-8">
        Ruang Lingkup Layanan
      </h3>

      <div className="w-11/12 max-w-5xl mx-auto">
        {/* Area slide (card) */}
        <div
          className="relative overflow-hidden rounded-xl shadow-md bg-white"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {cardsLingkup.map((item) => (
              <div key={item.id} className="min-w-full">
                <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96">
                  <Image
                    src={item.bg}
                    alt={item.title}
                    fill
                    className="object-cover rounded-xl"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />

                  {/* Overlay teks di tengah gambar */}
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-5 sm:px-8">
                    <h4 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3 uppercase tracking-widest">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-100 max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kontrol: panah di luar card + indikator dot di tengah */}
        <div className="mt-5 flex items-center justify-between">
          <button
            type="button"
            onClick={prev}
            className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full bg-white/90 text-[#3057B6] shadow-md flex items-center justify-center hover:bg-[#3057B6] hover:text-white transition text-xl sm:text-2xl font-extrabold"
            aria-label="Sebelumnya"
          >
            ‹
          </button>

          <div className="flex justify-center gap-2">
            {cardsLingkup.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex
                    ? "bg-[#3057B6]"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full bg-white/90 text-[#3057B6] shadow-md flex items-center justify-center hover:bg-[#3057B6] hover:text-white transition text-xl sm:text-2xl font-extrabold"
            aria-label="Berikutnya"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default RuangLingkup;