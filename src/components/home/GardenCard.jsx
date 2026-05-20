import BentoCard from './BentoCard';
import { Link } from 'react-router-dom';

export default function GardenCard() {
  return (
    <Link to="/garden">
      <BentoCard className="col-span-1 p-6" delay={0.35}>
        <span className="inline-block px-3 py-1 rounded-full border border-border text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground w-fit">
          Digital Garden
        </span>
        <div className="mt-6">
          <h3 className="font-display text-base text-foreground leading-snug group-hover:text-primary transition-colors">
            Technical Wisdom, Vibe Coding, and Software Engineering: Live from DDC 2026
          </h3>
          <p className="mt-3 text-xs font-mono text-muted-foreground/70 tracking-wider">
            APR 26, 2026
          </p>
        </div>
      </BentoCard>
    </Link>
  );
}