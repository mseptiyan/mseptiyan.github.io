import { Link } from 'react-router-dom';
import { ArrowRight, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col justify-center h-full pt-20 md:pt-0"
    >
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-foreground">
        Muhammad<br />Septiyanto
      </h1>

      <p className="mt-5 text-base md:text-lg text-white/80 leading-relaxed max-w-md">
        Data Analyst & AI Enthusiast building intelligent systems, automated analytics, and data-driven business solutions.
      </p>

      <div className="mt-6 flex items-center gap-2">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/50 text-xs font-mono tracking-wider text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Pekalongan, Indonesia
        </span>
      </div>

      <Link
        to="/about"
        className="
          mt-6 inline-flex items-center gap-2
          text-white/80
          transition-colors duration-300
          hover:text-orange-400
          group w-fit
        "
      >
        <User
          className="
            w-5 h-5 flex-shrink-0
            transition-colors duration-300
            group-hover:text-orange-400
          "
          strokeWidth={1.5}
        />

        <span className="font-mono text-sm tracking-wider">
          read full bio
        </span>

        <ArrowRight
          className="
            w-5 h-5
            transition-all duration-300
            group-hover:translate-x-1
            group-hover:text-orange-400
          "
        />
      </Link>
    </motion.div>
  );
}