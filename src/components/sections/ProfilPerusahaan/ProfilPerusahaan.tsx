"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import styles from "./ProfilPerusahaan.module.css";
import VisiMisi from "../VisiMisi";
import Keunggulan from "../Keunggulan";

const ProfilPrusahaan = () => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2, once: true });

  return (
    <div
      id="ProfilPerusahaan"
      className="bg-[url('/images/bg-white.jpg')] bg-cover bg-center text-white"
    >
      <div
        ref={ref}
        className={
          styles.section +
          " " +
          (inView ? styles.sectionVisible : "")
        }
      >
        <div className="w-11/12 md:w-5/6 mx-auto pt-24 md:pt-32 pb-12 md:pb-16">
          <h3 className="text-[#3057B6] uppercase tracking-widest font-light text-xs sm:text-sm">
            Profil Perusahaan
          </h3>

          <div className="mt-6 md:mt-8 flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center">
            <Image
              src="/images/Pola Resik Optima Transparant.png"
              alt="Profil Perusahaan"
              width={150}
              height={100}
              className="w-28 sm:w-36 md:w-44 lg:w-52 h-auto object-contain"
              loading="eager"
            />

            <div className="mt-2 md:mt-6 text-[#5C5C5C] text-xs sm:text-sm md:text-base leading-relaxed text-center md:text-left">
              <h1 className="tracking-widest uppercase text-[#3057B6] text-lg sm:text-xl md:text-2xl font-bold mb-3">
                Pola Resik Optima
              </h1>
              <p className="mb-3">
                Pola Resik Optima (PRO) merupakan unit bisnis spesialis jasa kebersihan di bawah
                naungan PT. Pola Inti Integrasi. Kami hadir sebagai solusi komprehensif bagi
                kebutuhan sanitasi, perawatan properti, dan penyediaan tenaga kerja ahli di bidang
                kebersihan.
              </p>
              <p>
                Dengan mengombinasikan metode pembersihan modern, tenaga kerja terlatih, dan
                manajemen yang berintegritas, PRO memastikan setiap area yang kami sentuh mencapai
                standar kebersihan tertinggi.
              </p>
            </div>
          </div>
        </div>

        {/* Visi & Misi */}
        <div className="w-11/12 md:w-5/6 mx-auto pt-12 md:pt-20">
          <VisiMisi />
        </div>

        {/* Keunggulan */}
        <div className="w-11/12 md:w-5/6 mx-auto py-12 md:py-20">
          <Keunggulan />
        </div>
      </div>
    </div>
  );
};

export default ProfilPrusahaan;