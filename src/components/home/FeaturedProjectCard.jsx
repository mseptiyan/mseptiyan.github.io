import BentoCard from './BentoCard';
import { Link } from 'react-router-dom';

const AI_IMAGE = 'https://media.base44.com/images/public/6a0ae0fbe68a76367d0f391e/1402d0c35_generated_eaecccbd.png';

export default function FeaturedProjectCard() {
  return (
    <Link to="/projects">
      <BentoCard className="col-span-2 row-span-1 overflow-hidden" delay={0.25}>
        <div className="relative h-full min-h-[240px] md:min-h-[280px]">
          <img
            src={AI_IMAGE}
            alt="AI Image Generator - Featured Project"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-full border border-white/20 text-[10px] font-mono tracking-[0.2em] uppercase text-white/70 mb-3">
              Featured Project
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-white leading-tight group-hover:text-primary transition-colors">
              AI Image Generator
            </h3>
            <p className="mt-1.5 text-sm text-white/60">
              Powered by Google Imagen 4 & Vertex AI
            </p>
          </div>
        </div>
      </BentoCard>
    </Link>
  );
}