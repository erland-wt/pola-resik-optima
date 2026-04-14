"use client";

import { useInView } from "@/hooks/useInView";
import styles from "./LayananUnggulan.module.css";
import RuangLingkup from "../RuangLingkup";
import cardsLayanan from "./MenuLayanan";

const LayananUnggulan = () => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2, once: true });

  return (
    <div
      id="Layanan"
      className="bg-[url('/images/bg-white.jpg')] bg-cover bg-center text-white py-24 sm:py-32 md:py-40"
    >
      <div
        ref={ref}
        className={styles.section + " " + (inView ? styles.sectionVisible : "")}
      >
        <div className="w-11/12 md:w-5/6 mx-auto text-center mb-10 md:mb-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3057B6] uppercase tracking-widest mb-3">
            Layanan Unggulan Kami
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#3057B6] uppercase tracking-widest">
            Solusi Kebersihan Menyeluruh
          </h2>
        </div>

        <div className="w-11/12 md:w-5/6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 lg:gap-8">
          {cardsLayanan.map((card) => (
            <div
              key={card.id}
              className="relative h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-md bg-cover bg-center"
              style={{ backgroundImage: `url(${card.bg})` }}
            >
              <div className="absolute inset-0 bg-black/70" />

              <div className="absolute inset-0 flex flex-col items-center justify-center px-5 sm:px-7 text-center">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 uppercase tracking-widest">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-200 max-w-md">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ruang Lingkup */}
        <div className="w-11/12 md:w-5/6 mx-auto mt-16 md:mt-20">
          <RuangLingkup />
        </div>
      </div>
    </div>
  );
};

export default LayananUnggulan;