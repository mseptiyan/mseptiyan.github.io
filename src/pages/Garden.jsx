import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Technical Wisdom, Vibe Coding, and Software Engineering: Live from DDC 2026',
    date: 'Apr 26, 2026',
    tags: ['Engineering', 'Conference'],
  },
  {
    title: 'Building Multi-Agent Systems with Google ADK',
    date: 'Mar 15, 2026',
    tags: ['AI', 'Google Cloud'],
  },
  {
    title: 'Cloud Architecture Patterns for Southeast Asian Markets',
    date: 'Feb 8, 2026',
    tags: ['Architecture', 'Cloud'],
  },
  {
    title: 'The State of Open Source in Enterprise: 2025 Retrospective',
    date: 'Jan 2, 2026',
    tags: ['Open Source', 'Enterprise'],
  },
];

export default function Garden() {
  return (
    <div className="min-h-screen pt-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-3xl md:text-4xl text-foreground">Digital Garden</h1>
          <p className="mt-3 text-muted-foreground">
            A collection of essays, notes, and explorations on technology and engineering.
          </p>
        </motion.div>

        <div className="mt-12 space-y-4">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="group p-5 rounded-xl border border-border bg-card hover:bg-secondary/50 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground/60 tracking-wider mb-2">
                <Calendar className="w-3 h-3" />
                {post.date}
              </div>
              <h2 className="text-foreground font-medium group-hover:text-primary transition-colors leading-snug">
                {post.title}
              </h2>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-secondary text-[10px] font-mono text-muted-foreground tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}