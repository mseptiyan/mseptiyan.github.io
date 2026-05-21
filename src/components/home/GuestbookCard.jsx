import BentoCard from './BentoCard';
import { Link } from 'react-router-dom';

export default function GuestbookCard() {
  return (
    <Link to="/guestbook">
      <BentoCard className="col-span-1 p-5" delay={0.4}>
        <span className="inline-block px-3 py-1 rounded-full border border-border text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground w-fit">
          Guestbook
        </span>
        <div className="mt-5">
          <p className="text-xs md:text-sm text-foreground/80 italic leading-relaxed">
            "Great work on the open source contributions. Keep it up!"
          </p>
          <p className="mt-3 text-xs font-mono text-muted-foreground/70 tracking-wider">
            anon • 1yr
          </p>
        </div>
      </BentoCard>
    </Link>
  );
}
