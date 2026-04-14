import Navbar from '@/components/layout/Navbar';
import LandingPage from '@/components/sections/LandingPage';
import LayananUnggulan from '@/components/sections/LayananUnggulan';
import Legalitas from '@/components/sections/Legalitas/Legalitas';
import ProfilPrusahaan from '@/components/sections/ProfilPerusahaan';

const LandingTemplate = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <ProfilPrusahaan />
      <LayananUnggulan />
      <Legalitas />
    </>
  );
};

export default LandingTemplate;