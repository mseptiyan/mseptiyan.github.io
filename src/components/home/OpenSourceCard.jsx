import BentoCard from './BentoCard';
import { Link } from 'react-router-dom';
import { Star, GitFork } from 'lucide-react';

export default function OpenSourceCard() {
  return (
    <Link to="/projects">
      <BentoCard className="col-span-1 p-6" delay={0.2}>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground w-fit">
          <GitFork className="w-3 h-3" />
          Open Source
        </span>
        <div className="mt-6">
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
            <span className="text-emerald-400 text-lg">👻</span>
          </div>
          <h3 className="font-display text-lg text-foreground leading-tight group-hover:text-primary transition-colors">
            SuaraNusa - Query by Humming (QbH)
          </h3>
        </div>
        <div className="mt-4 flex items-center gap-3 text-muted-foreground text-xs font-mono">
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3" />
            8.5K
          </span>
          <span>• Contributor</span>
        </div>
      </BentoCard>
    </Link>
  );
}