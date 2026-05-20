import { motion } from 'framer-motion';
import { Star, Eye } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-border/60 transition-all duration-300 cursor-pointer"
    >
      {project.image && (
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      )}
      <div className="p-5">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded-full bg-secondary text-[10px] font-mono text-muted-foreground tracking-wider">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display text-lg text-foreground leading-tight group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {project.description}
        </p>
        {(project.lang || project.stars) && (
          <div className="mt-3 flex items-center gap-3 text-xs font-mono text-muted-foreground/70">
            {project.lang && (
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary/60" />
                {project.lang}
              </span>
            )}
            {project.stars && (
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                {project.stars}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}