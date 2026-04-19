import dynamic from "next/dynamic";

import Navbar from "@/components/layout/Navbar";
import LandingPage from "@/components/sections/LandingPage";

const ProfilPrusahaan = dynamic(
  () => import("@/components/sections/ProfilPerusahaan"),
  {
    loading: () => <section className="min-h-[30vh] bg-white" />,
  }
);

const LayananUnggulan = dynamic(
  () => import("@/components/sections/LayananUnggulan"),
  {
    loading: () => <section className="min-h-[30vh] bg-white" />,
  }
);

const Legalitas = dynamic(() => import("@/components/sections/Legalitas"), {
  loading: () => <section className="min-h-[30vh] bg-white" />,
});

const ClientsPage = dynamic(() => import("@/components/sections/ClientsPage"), {
  loading: () => <section className="min-h-[24vh] bg-white" />,
});

const Footer = dynamic(() => import("@/components/sections/Footer"), {
  loading: () => <footer className="min-h-[20vh] bg-[#0f172a]" />,
});

const LandingTemplate = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <ProfilPrusahaan />
      <LayananUnggulan />
      <Legalitas />
      <ClientsPage />
      <Footer />
    </>
  );
};

export default LandingTemplate;