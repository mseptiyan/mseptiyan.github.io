import { motion } from 'framer-motion';

import dbsLogo from '@/assets/logos/dbs.png';
import dicodingLogo from '@/assets/logos/dicoding.jpeg';
import bangkitLogo from '@/assets/logos/bangkit.jpg';
import sintaLogo from '@/assets/logos/sinta.jpeg';
import campusLogo from '@/assets/logos/campus.png';

const experiences = [
  {
    title: 'Speech Emotion Recognition Project',
    company: 'Sinta 3',
    type: 'Deep Learning',
    period: 'Oct 2025 - Des 2025',
    description:
      'Built a Bahasa Indonesia speech emotion recognition system using MFCC feature extraction and BiLSTM architecture for intelligent voice-based AI systems.',
    logo: sintaLogo,
  },
  {
    title: 'Lead Developer',
    company: 'Dicoding',
    type: 'Capstone Project',
    period: 'Apr 2025 - Jun 2025',
    description:
      'Led a team of Front-End, Back-End, and Machine Learning developers architecting recommendation systems. Optimized model evaluation and workflows, successfully delivering the project with a final grade of A.',
    logo: dicodingLogo,
  },
  {
    title: 'Machine Learning Engineer',
    company: 'PT Bank DBS Indonesia',
    type: 'Internship',
    period: 'Feb 2025 - Jul 2025',
    description:
      'Developing applied ML solutions including predictive analytics, recommendation systems, sentiment analysis, and computer vision using Python and TensorFlow.',
    logo: dbsLogo,
  },
  {
    title: 'Machine Learning Cohort',
    company: 'Bangkit Academy',
    type: 'Independent Study',
    period: 'Sep 2024 - Jan 2025',
    description:
      'Focused on TensorFlow, deep learning, supervised and unsupervised learning, and generative AI while contributing to award-winning capstone projects.',
    logo: bangkitLogo,
  },
  {
    title: 'Information Systems Student',
    company: 'Institut Widya Pratama',
    type: 'Bachelor Degree',
    period: 'Sep 2022 - May 2026',
    description:
      'Graduated Cum Laude and recognized for outstanding academic achievement and best project performance during undergraduate studies.',
    logo: campusLogo,
  },
];

export default function Timeline() {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl text-foreground">
          The Journey
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          A chronological overview of my professional and educational milestones.
        </p>

        <div className="mt-14 space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-20 md:pl-24 pb-14 last:pb-0"
            >
              {/* Timeline line — gap below logo (top) and gap before next logo (bottom) */}
              {i < experiences.length - 1 && (
                <div
                  className="absolute w-[2px] bg-white/70"
                  style={{
                    left: 'clamp(36px, 4.5vw, 44px)',
                    top: 'calc(5rem + 12px)',   /* below logo + 12px gap */
                    bottom: '14px',             /* 14px gap before next logo */
                  }}
                />
              )}

              {/* Logo */}
              <div className="absolute left-0 top-0">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3 className="text-foreground font-semibold text-lg md:text-xl">
                  {exp.title}
                </h3>

                <p className="text-xs md:text-sm font-mono text-muted-foreground mt-1 tracking-wider">
                  {exp.company} ● {exp.type} ● {exp.period}
                </p>

                <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}