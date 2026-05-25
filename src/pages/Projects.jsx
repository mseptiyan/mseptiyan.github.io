import { motion } from 'framer-motion';
import ProjectCard from '../components/projects/ProjectCard';
import OpenSourceList from '../components/projects/OpenSourceList';
import { ArrowRight } from 'lucide-react';

import NUSA_IMG from '@/assets/ssproject/suaranusa.png';
import GO_IMG from '@/assets/ssproject/gomart.png';
import SER_IMG from '@/assets/ssproject/ser.png';
import SANGKUT_IMG from '@/assets/ssproject/sangkut.png';
import REWANG_IMG from '@/assets/ssproject/rewang.png';


const projects = [
  {
    title: 'Speech Emotion Recognition',
    description: 'An Indonesian speech emotion recognition system built with Python and TensorFlow for intelligent AI-driven voice analysis.',
    tags: ['TensorFlow', 'BiLSTM', 'MFCC', 'Deep Learning'],
    image: SER_IMG,
    lang: 'Python',
    stars: '315',
    url: 'https://github.com/mseptiyan/Indonesian-SER',
  },
  {
    title: 'GoMart',
    description: "A machine learning system to identify purchasing patterns and generate product recommendation insights.",
    tags: ['React', 'Node.js', 'Pandas', 'NumPy', 'Apriori', 'ML'],
    image: GO_IMG,
    lang: 'JavaScript, Python',
    stars: '100',
    url: 'https://github.com/GoMartProject',
  },
  {
    title: 'SuaraNusa',
    description: 'Record your voice and explore unique melodies from across Nusantara!',
    tags: ['TensorFlow', 'NestJS', 'MySQL', 'Deep Learning'],
    image: NUSA_IMG,
    lang: 'Python',
    stars: '209',
    url: 'https://github.com/SuaraNusa',
  },
  {
    title: 'Sang Pengangkut APP',
    description: "A logistics and goods transportation platform with integrated vehicle rental and delivery management services.",
    tags: ['React', 'Node.js', 'Logistics', 'UI/UX Design', 'REST API'],
    image: SANGKUT_IMG,
    lang: 'JavaScript',
    stars: '8',
    url: null, // tambahkan URL Figma atau GitHub-mu di sini
  },
  {
    title: 'Rewangi APP',
    description: 'A household service marketplace for booking cooking, cleaning, and daily assistance services.',
    tags: ['React', 'Node.js', 'UI/UX Design', 'Service App', 'REST API'],
    image: REWANG_IMG,
    lang: 'JavaScript',  // fix typo: JavaScipt → JavaScript
    stars: '5',
    url: null, // tambahkan URL-mu di sini
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-24">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-12 pb-12"
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl text-foreground">Selected Works</h1>
          <p className="mt-3 text-muted-foreground max-w-xl">
            A curated selection of my highest-impact client projects, cloud architectures, and open-source contributions.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </div>
      </motion.section>

      <OpenSourceList />

      <section className="py-16 px-6 md:px-12 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-xl text-foreground">Looking for the archives?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            I've moved all my early tutorials, clones, and hackathon projects into a filterable database to keep this space focused on enterprise work.
          </p>
          <a
            href="https://github.com/mseptiyan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-foreground hover:bg-secondary transition-colors"
          >
            View The Vault
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
