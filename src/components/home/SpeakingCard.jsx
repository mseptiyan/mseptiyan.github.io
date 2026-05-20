import BentoCard from './BentoCard';
import { Link } from 'react-router-dom';
import { Mic } from 'lucide-react';

export default function SpeakingCard() {
  return (
    <Link to="/about">
      <BentoCard className="col-span-2 sm:col-span-2 p-5 md:p-8" delay={0.3}>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground w-fit">
          <Mic className="w-3 h-3" />
          Roadshow  
        </span>
        <div className="mt-auto pt-5">
          <h3 className="font-display text-lg md:text-2xl text-foreground leading-tight group-hover:text-primary transition-colors">
            Business Presentation
          </h3>
          <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
            Professional delivery skills for meetings and project discussions.
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs font-mono text-muted-foreground/70 tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>SOFT SKILL</span>
          </div>
        </div>
      </BentoCard>
    </Link>
  );
}
