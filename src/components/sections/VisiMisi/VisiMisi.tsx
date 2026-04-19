"use client";

import Image from "next/image";

const visiMisi = [
  {
    icon: "/icons/icon-visi.svg",
    title: "Visi",
    description:
      "Menjadi perusahaan penyedia jasa kebersihan yang terpercaya, unggul dalam kualitas, profesional, dan menjadi mitra utama untuk menghadirkan solusi dalam menciptakan lingkungan bersih, sehat, dan nyaman.",
  },
  {
    icon: "/icons/icon-misi.svg",
    title: "Misi",
    points: [
      {
        lead: "Inovasi",
        text: "Menyediakan solusi pembersihan yang efektif, efisien, dan modern.",
      },
      {
        lead: "Konsistensi",
        text: "Memberikan layanan pembersihan berkualitas tinggi secara berkesinambungan.",
      },
      {
        lead: "Sumber Daya Manusia",
        text: "Mengandalkan tenaga kerja yang terlatih, jujur, dan berdedikasi tinggi.",
      },
      {
        lead: "Agilitas",
        text: "Memberikan layanan yang cepat, tepat, dan fleksibel sesuai kebutuhan klien.",
      },
      {
        lead: "Evaluasi",
        text: "Melakukan perbaikan dan supervisi layanan secara terus-menerus.",
      },
      {
        lead: "Integritas",
        text: "Membangun hubungan jangka panjang dengan standar etika bisnis yang tinggi.",
      },
    ],
  },
];

const VisiMisi = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-8">
      <div className="mb-10 sm:mb-12 max-w-2xl">
        <h3 className="uppercase text-xl sm:text-2xl font-semibold text-[#3057B6] tracking-widest mb-2">
          Visi & Misi
        </h3>
        <p className="text-[#5C5C5C] text-xs sm:text-sm md:text-base leading-relaxed">
          Membangun masa depan yang lebih bersih, sehat, dan nyaman melalui
          layanan kebersihan yang inovatif, profesional, dan terpercaya.
        </p>
      </div>

      {visiMisi.map((item) => (
        <div key={item.title} className="mb-6 w-full flex justify-center">
          <div className="bg-white rounded-lg inset-shadow-[0_0_10px_rgba(0,0,0,0.1)] w-full max-w-5xl p-6 sm:p-8 md:p-10 tracking-normal">
            <div className="flex flex-col items-center mb-4">
              <Image
                src={item.icon}
                alt={item.title}
                width={70}
                height={70}
                className="w-14 sm:w-16 h-auto"
              />
              <h3 className="text-lg sm:text-xl font-bold text-[#3057B6] my-2 uppercase">
                {item.title}
              </h3>
            </div>

            {item.points ? (
              <ul className="list-disc list-inside text-[#5C5C5C] text-xs sm:text-sm md:text-base leading-relaxed text-left">
                {item.points.map((point) => (
                  <li key={point.lead}>
                    <strong>{point.lead}:</strong> {point.text}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[#5C5C5C] text-xs sm:text-sm md:text-base leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VisiMisi;