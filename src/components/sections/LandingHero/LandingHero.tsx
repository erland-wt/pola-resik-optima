"use client";

import { Button } from "@/components/ui/Button";
import style from "@/components/sections/LandingHero/LandingHero.module.css";

const WHATSAPP_NUMBER = "6281281700875";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth" });
};

const openWhatsApp = () => {
  const message = encodeURIComponent(
    "Halo, saya ingin konsultasi mengenai layanan kebersihan Pola Resik Optima."
  );
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  window.open(url, "_blank");
};

const LandingHero = () => {
  return (
    <section
      className="
        flex flex-col items-center justify-center 
        min-h-[80vh] md:min-h-screen 
        pt-10 pb-16 lg:pt-20 md:pb-30 
        w-11/12 sm:w-5/6 mx-auto 
        text-center antialiased overflow-hidden
      "
    >
      <div className={style.heroTextWrapper + " w-full max-w-5xl mx-auto"}>
        <h1
          className={
            style.heroTextAnimate +
            " " +
            style.heroDelay1 +
            " uppercase font-bold " +
            "text-[18px] xs:text-[20px] sm:text-[28px] md:text-[40px] " +
            "leading-snug md:leading-tight " +
            "tracking-wide md:tracking-wider text-white"
          }
        >
          Menghadirkan{" "}
          <span className="text-[#B6F500]">
            <i>Kemurnian</i>
          </span>{" "}
          dan
          <span className="text-[#B6F500]">
            <i> Kenyamanan</i>
          </span>{" "}
          di Setiap Sudut Ruang Anda
        </h1>

        <h3
          className={
            style.heroTextAnimate +
            " " +
            style.heroDelay2 +
            " mt-4 md:mt-6 " +
            "text-[11px] xs:text-[12px] sm:text-[13px] md:text-sm  " +
            "w-full sm:w-4/5 md:w-3/4 mx-auto text-white"
          }
        >
          <i>
            Pola Resik Optima (PRO) adalah mitra terpercaya dalam penyediaan jasa
            kebersihan terpadu dan pengelolaan tenaga kerja profesional. Kami
            berkomitmen menciptakan lingkungan yang <strong>bersih</strong>,{" "}
            <strong>sehat</strong>, dan <strong>produktif</strong>.
          </i>
        </h3>

        <div
          className={
            style.heroTextAnimate +
            " " +
            style.heroDelay3 +
            " mt-6 md:mt-10 tracking-wider " +
            "flex flex-col md:flex-row items-stretch xs:items-center " +
            "justify-center md:justify-around gap-3 sm:gap-4 " +
            "w-full md:max-w-4xl mx-auto"
          }
        >
          <Button
            label="Lihat Layanan Kami"
            className="btn-cta btn-cta-loop xs:w-auto"
            onClick={() => scrollToSection("Layanan")}
          />
          <Button
            label="Konsultasi Sekarang"
            className="btn-outline xs:w-auto"
            onClick={openWhatsApp}
          />
        </div>
      </div>
    </section>
  );
};

export default LandingHero;