import BentoCard from './BentoCard';
import { Link } from 'react-router-dom';

const ALBUM_COVER = 'https://media.base44.com/images/public/6a0ae0fbe68a76367d0f391e/2896020d9_generated_ebf6bde1.png';

export default function TelemetryCard() {
  return (
    <Link to="/telemetry">
      <BentoCard className="col-span-1 p-0 overflow-hidden" delay={0.45}>
        <div className="relative h-full min-h-[200px]">
          <img
            src={ALBUM_COVER}
            alt="Now Playing album cover"
            className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-card/40" />
          <div className="relative p-6 flex flex-col h-full justify-between">
            <span className="inline-block px-3 py-1 rounded-full border border-border text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground w-fit">
              Audio Telemetry
            </span>
            <div className="mt-auto pt-4 flex items-end gap-3">
              <img
                src={ALBUM_COVER}
                alt="Album cover"
                className="w-12 h-12 rounded-lg object-cover shadow-lg"
              />
              <div>
                <p className="text-[10px] font-mono tracking-wider text-primary uppercase">Now Playing</p>
                <p className="text-sm font-medium text-foreground mt-0.5">隔著螢幕想念你</p>
                <p className="text-xs text-muted-foreground">Patrick Brasca</p>
              </div>
            </div>
          </div>
        </div>
      </BentoCard>
    </Link>
  );
}