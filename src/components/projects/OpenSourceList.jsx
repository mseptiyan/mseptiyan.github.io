import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

const repos = [
    {
    name: 'mseptiyan/Indonesian-SER',
    description: 'An Indonesian speech emotion recognition system built with Python and TensorFlow for intelligent AI-driven voice analysis.',
    lang: 'Python',
    stars: '18K',
    role: 'Creator',
  },
  {
    name: 'mseptiyan/SuaraNusa',
    description: 'Record your voice and explore unique melodies from across Nusantara!',
    lang: 'Python',
    stars: '5',
    role: 'Contributor',
  },
  {
    name: 'mseptiyan/GoMart',
    description: 'A machine learning system to identify purchasing patterns and generate product recommendation insights.',
    lang: 'JavaScript, Python',
    stars: '13',
    role: 'Contributor',
  },
  {
    name: 'Figma/Sangkut-APP',
    description: 'A logistics and goods transportation platform with integrated vehicle rental and delivery management services.',
    lang: 'Figma',
    stars: '9.2K',
    role: 'Creator',
  },
];

export default function OpenSourceList() {
  return (
    <section className="py-16 px-6 md:px-12 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl text-foreground">Open Source</h2>
        <p className="mt-2 text-sm text-muted-foreground">Impact</p>
        <div className="mt-8 space-y-3">
          {repos.map((repo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:bg-secondary/50 transition-colors group cursor-pointer"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                  {repo.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-1">{repo.description}</p>
                <div className="mt-2 flex items-center gap-3 text-[10px] font-mono text-muted-foreground/70 tracking-wider">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {repo.lang}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {repo.stars}
                  </span>
                  <span className="text-primary/80">{repo.role}</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary shrink-0 mt-1 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}