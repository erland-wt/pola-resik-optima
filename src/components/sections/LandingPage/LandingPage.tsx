import LandingHero from "@/components/sections/LandingHero";
import Image from "next/image";

const LandingPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Image
        src="/images/bg-PRO-3.jpg"
        alt="Latar belakang layanan kebersihan Pola Resik Optima"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10">
        <LandingHero />
      </div>
    </main>
  );
};

export default LandingPage;