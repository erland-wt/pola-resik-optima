import LandingHero from '@/components/sections/LandingHero';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <main className="relative min-h-screen bg-cover bg-center bg-[url('/images/bg-PRO-3.jpg')]">
      <div className="absolute z-0 inset-0 bg-black/20" />
      {/* Image Overlay */}
      <Image src="/images/bg-PRO-3.png" alt="Overlay" fill className='z-20 pointer-events-none object-cover' />
      <div className="relative z-10">
        <LandingHero />
      </div>
    </main>
  );
};

export default LandingPage;