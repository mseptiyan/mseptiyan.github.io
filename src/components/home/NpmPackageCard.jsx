import BentoCard from './BentoCard';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

export default function NpmPackageCard() {
  return (
    <Link to="/projects">
      <BentoCard
        className="col-span-1 p-5"
        delay={0.15}
      >
        <span className="inline-block px-3 py-1 rounded-full border border-border text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground w-fit">
          Project
        </span>

        <div className="mt-4">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3">
            <span className="text-primary font-mono text-sm font-bold">
              GoMart
            </span>
          </div>

          <h3 className="font-display text-base text-foreground leading-tight group-hover:text-primary transition-colors">
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3" />
            Intelligent Retail Analytics
          </span>
        </div>
      </BentoCard>
    </Link>
  );
}
