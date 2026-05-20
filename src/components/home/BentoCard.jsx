import { motion } from 'framer-motion';

export default function BentoCard({ children, className = '', delay = 0, href }) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/40 hover:bg-card/80 hover:shadow-[0_0_24px_4px_hsl(38,90%,55%,0.18)] ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}