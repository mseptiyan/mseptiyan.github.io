import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const entries = [
  { message: "Incredible portfolio! The attention to detail is remarkable.", author: 'dev', time: '1yr' },
  { message: "Great work on the open source contributions. Keep it up!", author: 'anon', time: '1yr' },
  { message: "Your speaking events are inspiring. Hope to see you at more conferences!", author: 'fan', time: '6mo' },
  { message: "The AI projects here are seriously impressive. Love the clean implementation.", author: 'theo', time: '2mo' },
  { message: "Stumbled across this site and couldn't stop scrolling. The UI is clean and the projects are legit.", author: 'hekal', time: '3wk' },
];

export default function Guestbook() {
  return (
    <div className="min-h-screen pt-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-display text-3xl md:text-4xl text-foreground">Guestbook</h1>
          <p className="mt-3 text-muted-foreground">
            Leave a message. Say hello. Share your thoughts.
          </p>
        </motion.div>

        <div className="mt-12 space-y-4">
          {entries.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="p-5 rounded-xl border border-border bg-card"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                  <MessageSquare className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-foreground/90 italic leading-relaxed">"{entry.message}"</p>
                  <p className="mt-2 text-[10px] font-mono text-muted-foreground/60 tracking-wider">
                    {entry.author} • {entry.time}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}