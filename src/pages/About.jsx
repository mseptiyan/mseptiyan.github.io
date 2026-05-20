import AboutHero from '../components/about/AboutHero';
import Timeline from '../components/about/Timeline';
import Credentials from '../components/about/Credentials';
import Roadshow from '../components/about/Roadshow';
import IntheWild from '../components/about/IntheWild'

export default function About() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <Timeline />
      <Credentials />
      <Roadshow />
      <IntheWild />
    </div>
  );
}