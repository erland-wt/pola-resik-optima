import styles from "./Keunggulan.module.css";
import { useInView } from "@/hooks/useInView";
import Image from "next/image";

const Keunggulan = () => {
  const cards = [
    {
      icon: "/icons/icon-integritas.svg",
      title: "Integritas",
      description:
        "Kejujuran staf adalah prioritas utama kami. Anda dapat mempercayakan ruang Anda kepada tim yang telah melalui seleksi ketat.",
    },
    {
      icon: "/icons/icon-kualitas.svg",
      title: "Kualitas",
      description:
        "Kami sangat detail-oriented. Setiap jengkal ruangan dipastikan bersih sempurna melalui supervisi yang ketat.",
    },
    {
      icon: "/icons/icon-profesionalisme.svg",
      title: "Profesionalisme",
      description:
        "Ketepatan waktu, seragam yang rapi, dan keramahan dalam pelayanan adalah standar minimal kami.",
    },
    {
      icon: "/icons/icon-keamanan.svg",
      title: "Keamanan",
      description:
        "Kami hanya menggunakan bahan kimia (chemical) dan peralatan yang aman bagi lingkungan dan kesehatan penghuni.",
    },
  ];

  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2, once: true });

  return (
    <div
      ref={ref}
      className={
        styles.section +
        " text-center w-full px-4 sm:px-6 md:px-8 " +
        (inView ? " " + styles.sectionVisible : "")
      }
    >
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3057B6] uppercase tracking-widest mb-8 md:mb-10">
        Kenapa Memilih Kami?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className={
              styles.card +
              " bg-white rounded-md " + 
              "w-full p-6 sm:p-8 md:p-10 " +
              (inView ? " " + styles.cardVisible + " " + styles["delay" + index] : "")
            }
          >
            <div className="flex flex-col items-center">
              <Image
                src={card.icon}
                alt={card.title}
                width={70}
                height={70}
                className="w-14 sm:w-16 h-auto"
              />
              <h2 className="text-lg sm:text-xl font-bold text-[#3057B6] my-4 uppercase tracking-widest">
                {card.title}
              </h2>
              <p className="text-[#5C5C5C] text-xs sm:text-sm md:text-base text-center leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keunggulan;