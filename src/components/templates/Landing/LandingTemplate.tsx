import Navbar from '@/components/layout/Navbar';
import ClientsPage from '@/components/sections/ClientsPage';
import Footer from '@/components/sections/Footer';
import LandingPage from '@/components/sections/LandingPage';
import LayananUnggulan from '@/components/sections/LayananUnggulan';
import Legalitas from '@/components/sections/Legalitas';
import ProfilPrusahaan from '@/components/sections/ProfilPerusahaan';

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