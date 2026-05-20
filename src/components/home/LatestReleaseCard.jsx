import BentoCard from './BentoCard';
import { Link } from 'react-router-dom';

export default function LatestReleaseCard() {
  return (
    <BentoCard className="col-span-2 row-span-1 p-6 md:p-8" delay={0.1}>
      <Link to="/projects" className="block h-full">
        <div className="flex flex-col h-full justify-between">
          <span className="inline-block px-3 py-1 rounded-full border border-border text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground w-fit">
            Latest Release
          </span>
          <div className="mt-auto pt-8">
            <h3 className="font-display text-2xl md:text-3xl text-primary leading-tight">
              Speech Emotion Recognition
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              An Indonesian speech emotion recognition system built with Python and TensorFlow for intelligent AI-driven voice analysis.
            </p>
          </div>
        </div>
      </Link>
    </BentoCard>
  );
}