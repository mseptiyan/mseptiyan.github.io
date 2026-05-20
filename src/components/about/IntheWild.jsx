import { motion } from 'framer-motion';
import { Play, ExternalLink, Eye } from 'lucide-react';

import igImg from '@/assets/tn/ig1.jpg';
import aiPresImg from '@/assets/tn/ig2.png';
import careerImg from '@/assets/tn/ig3.jpg';

const videos = [
    {
    title: 'Publishing Research in National Accredited Journals #JurnalNasional',
    channel: 'iwima.official',
    views: '4.221',
    time: '5 months ago',
    image: careerImg,
    link: 'https://www.instagram.com/p/DSbdjnokre2/?img_index=1',
  },
  {
    title: 'Presenting AI Research #MahasiswaBerprestasi',
    channel: 'iwima.official',
    views: '3.913',
    time: '5 months ago',
    image: igImg,
    link: 'https://www.instagram.com/p/DSbdjnokre2/?img_index=2',
  },
  {
    title: 'Advancing Indonesian Speech Emotion AI Research',
    channel: 'JIKO Journal',
    views: '1,463',
    time: '5 months ago',
    image: aiPresImg,
    link: 'https://ejournal.unkhair.ac.id/index.php/jiko/article/view/10820',
  },

];

export default function InTheWild() {
  return (
    <section className="py-16 px-6 md:px-12 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl text-foreground">
          In The Wild
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Selected media mentions and features.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {videos.map((video, i) => (
            <motion.a
              key={i}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-border bg-card overflow-hidden group transition-all duration-300 cursor-pointer block hover:border-white/10 hover:bg-secondary/40"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                  </div>
                </div>

                <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono">
                  <Eye className="w-3 h-3" />
                  {video.views}
                </div>

                <div className="absolute bottom-2 right-2 p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>

              <div className="p-4">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
                  {video.time}
                </p>

                <h3 className="mt-2 text-sm font-medium text-foreground leading-snug line-clamp-2">
                  {video.title}
                </h3>

                <p className="mt-3 text-xs text-muted-foreground">
                  {video.channel}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}