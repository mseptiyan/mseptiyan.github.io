import { motion } from 'framer-motion';

import profilePhoto from '@/assets/pp/profile1.jpg';

const PROFILE_PHOTO = profilePhoto;

const links = [
  {
    label: 'Google Skills',
    href: 'https://www.skills.google/public_profiles/edfecd60-23af-4a95-9f6a-b5e731168ae2',
    icon: 'https://api.iconify.design/skill-icons:gcp-light.svg',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-septiyanto/',
    icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/mseptiyan',
    icon: 'https://github.githubassets.com/favicons/favicon.png',
  },
  {
    label: 'Dicoding',
    href: 'https://www.dicoding.com/users/0013_mseptiyan/academies',
    icon: 'https://dicoding-web-img.sgp1.cdn.digitaloceanspaces.com/original/commons/new-ui-logo.png',
  },
  {
    label: 'Coursera',
    href: 'https://www.coursera.org/user/14fd050202d04b5dfd6789ae75b63f7b',
    icon: 'https://cdn.brandfetch.io/idTHfL51P-/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1667591275632',
  },
];

export default function AboutHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-24 pb-16 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Profile Photo */}
          <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 aspect-square">
            <img
              src={PROFILE_PHOTO}
              alt="Muhammad Septiyanto"
              className="w-full h-full rounded-full object-cover border-2 border-border"
            />
          </div>

          {/* Content */}
          <div>
            <h1 className="font-display text-3xl md:text-5xl leading-tight">
              Woho! I am{' '}
              <span className="text-primary">
                Muhammad Septiyanto
              </span>
              .
            </h1>

            <p className="mt-3 text-muted-foreground text-lg">
              Most folks call me Septiyan.
            </p>

<div className="mt-6 text-foreground/90 leading-relaxed space-y-5 text-sm md:text-base">
  <p>
    I am a{' '}
    <strong>Machine Learning Engineer</strong>
    {' '}who builds intelligent systems that transform raw business data into
    meaningful and actionable solutions. Most recently, I contributed to applied
    ML projects at{' '}
    <strong>PT Bank DBS Indonesia</strong>
    {' '}spanning predictive analytics, recommendation systems, computer vision,
    and NLP using Python and TensorFlow.
  </p>

  <p>
    As a <strong>Graduate with Distinction</strong> from Dicoding's Machine
    Learning program and a{' '}
    <strong>Best Product Track Capstone winner</strong>, I enjoy building
    AI-driven products end-to-end from model training to the web interfaces
    that bring them to life. When I'm not training models, you can find me
    experimenting with UI/UX design, or exploring the latest in deep learning
    and modern web technologies.
  </p>
</div>

            {/* Links */}
            <div className="mt-6 flex flex-wrap gap-3">
              {links.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/40 text-sm text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all"
                >
                  <img
                    src={link.icon}
                    alt={link.label}
                    className="w-4 h-4 rounded-sm"
                  />

                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}