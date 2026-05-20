import HeroSection from '../components/home/HeroSection';
import LatestReleaseCard from '../components/home/LatestReleaseCard';
import NpmPackageCard from '../components/home/NpmPackageCard';
import OpenSourceCard from '../components/home/OpenSourceCard';
import FeaturedProjectCard from '../components/home/FeaturedProjectCard';
import SpeakingCard from '../components/home/SpeakingCard';
import GardenCard from '../components/home/GardenCard';
import GuestbookCard from '../components/home/GuestbookCard';
import TelemetryCard from '../components/home/TelemetryCard';

export default function Home() {
  return (
    <div className="min-h-screen px-6 md:px-12 pt-20 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-start">
          {/* Left column - Hero */}
          <div className="md:sticky md:top-20 md:min-h-[calc(100vh-10rem)] flex flex-col justify-center">
            <HeroSection />
          </div>

          {/* Right column - Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <LatestReleaseCard />
            <NpmPackageCard />
            <OpenSourceCard />
            <FeaturedProjectCard />
            <SpeakingCard />
            <GardenCard />
            <GuestbookCard />
            <TelemetryCard />
          </div>
        </div>
      </div>
    </div>
  );
}