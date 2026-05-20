import HeroSection from '../components/home/HeroSection';
import LatestReleaseCard from '../components/home/LatestReleaseCard';
import NpmPackageCard from '../components/home/NpmPackageCard';
import OpenSourceCard from '../components/home/OpenSourceCard';
import SpeakingCard from '../components/home/SpeakingCard';
import GuestbookCard from '../components/home/GuestbookCard';

export default function Home() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-12 pt-20 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-start">
          {/* Left column - Hero */}
          <div className="md:sticky md:top-20 md:min-h-[calc(100vh-10rem)] flex flex-col justify-center">
            <HeroSection />
          </div>

          {/* Right column - Bento Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            <LatestReleaseCard />
            <NpmPackageCard />
            <OpenSourceCard />
            <SpeakingCard />
            <GuestbookCard />
          </div>
        </div>
      </div>
    </div>
  );
}
