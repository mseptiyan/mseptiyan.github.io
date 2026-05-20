import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GCPBadge = () => (
  <img
    src="https://api.iconify.design/skill-icons:gcp-light.svg"
    alt="Google Cloud"
    style={{ width: 36, height: 36, objectFit: 'contain' }}
  />
);

const Dicoding = () => (
  <img
    src="https://cdn.brandfetch.io/ideJF7JZFa/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1772450955441"
    alt="AWS"
    style={{ width: 36, height: 36, objectFit: 'contain' }}
  />
);

const DeepLearningAI = () => (
  <img
    src="https://cdn.brandfetch.io/idcuOol42D/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1668081047590"
    alt="DL"
    style={{
      width: 28,
      height: 28,
      objectFit: 'contain',
    }}
  />
);

const MLBadge = () => (
  <img
    src="https://cdn.brandfetch.io/idPv3iQPET/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1667609689037"
    alt="ML"
    style={{
      width: 28,
      height: 28,
      objectFit: 'cover',
      borderRadius: '999px',
    }}
  />
);

const Google = () => (
  <img
    src="https://cdn.brandfetch.io/id6O2oGzv-/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1755835725776"
    alt="GG"
    style={{
      width: 28,
      height: 28,
      objectFit: 'cover',
      borderRadius: '999px',
    }}
  />
);

const PMIBadge = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="24"
      cy="24"
      r="22"
      stroke="#c9963b"
      strokeWidth="2"
      fill="none"
    />

    <text
      x="24"
      y="20"
      textAnchor="middle"
      fontSize="7"
      fill="#c9963b"
      fontWeight="700"
      fontFamily="monospace"
    >
      PMI
    </text>

    <text
      x="24"
      y="29"
      textAnchor="middle"
      fontSize="5.5"
      fill="#c9963b"
      fontFamily="monospace"
    >
      PROJECT
    </text>

    <text
      x="24"
      y="37"
      textAnchor="middle"
      fontSize="5"
      fill="#c9963b"
      fontFamily="monospace"
    >
      READY
    </text>
  </svg>
);

const BADGES = {
  gcp: GCPBadge,
  dc: Dicoding,
  pmi: PMIBadge,
  dl: DeepLearningAI,
  ml: MLBadge,
  gg : Google,
};

const certs = [
    {
    title: 'Machine Learning Terapan',
    org: 'Dicoding Proficient Certified',
    time: 'Renewed 11 months ago',
    badge: 'dc',
    link: 'https://www.dicoding.com/certificates/1OP82Q6JLPQK',
  },

  {
    title: 'Professional TensorFlow Developer',
    org: 'DeepLearning.AI Certified',
    time: 'Issued 1 year ago',
    badge: 'dl',
    link: 'https://coursera.org/share/6cb69f9409c15d46a21d97b38d23e698',
  },

  {
    title: 'TensorFlow: Data & Deployment Specialization',
    org: 'DeepLearning.AI Certified',
    time: 'Issued 1 year ago',
    badge: 'dl',
    link: 'https://coursera.org/share/af0c847d088d41ce2a87f4ceb8c34fed',
  },

  {
    title: 'Machine Learning Specialization',
    org: 'Stanford University Certified',
    time: 'Issued 1 year ago',
    badge: 'ml',
    link: 'https://coursera.org/share/f1ed1458b01db0bbb6f548c17f07eee8',
  },

  {
    title: 'Gemini & Imagen AI Applications',
    org: 'Google Cloud Skill Badge',
    time: 'Issued 1 year ago',
    badge: 'gcp',
    link: 'https://www.credly.com/badges/a2625b77-e7b8-4545-a3b2-e9edba6c4f90',
  },

  {
    title: 'Prompt Design in Vertex AI',
    org: 'Google Cloud Skill Badge',
    time: 'Issued 1 year ago',
    badge: 'gcp',
    link: 'https://www.credly.com/badges/865411e4-33b9-40d2-9d5c-2e48d1b8b1b4/public_url',
  },

  {
    title: 'Crash Course on Python',
    org: 'Google Certified',
    time: 'Issued 1 year ago',
    badge: 'gg',
    link: 'https://coursera.org/share/c133d9224fd0ee97a131b0fdc08c1de6',
  },

  {
    title: 'Using Python to Interact with the OS',
    org: 'Google Certified',
    time: 'Issued 1 year ago',
    badge: 'gg',
    link: 'https://coursera.org/share/07e700ba9a88dc34862d0fef7c5b9eac',
  },

  {
    title: 'Advanced Computer Vision with TensorFlow',
    org: 'DeepLearning.AI Certified',
    time: 'Issued 1 years ago',
    badge: 'dl',
    link: 'https://coursera.org/share/1d4261732678b2729039ab21aa42fbfe',
  },

];

const hoverStyle = {
  borderColor: 'rgba(234, 179, 8, 0.4)',
  boxShadow:
    '0 0 0 1px rgba(234, 179, 8, 0.25), 0 4px 20px rgba(234, 179, 8, 0.12)',
};

const baseCardStyle = {
  borderColor: 'transparent',
  boxShadow: 'none',
  transition: 'border-color 0s, box-shadow 0s',
};

export default function Credentials() {
  return (
    <section className="py-16 px-6 md:px-12 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl text-foreground">
          Credentials
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Validated expertise in cloud architecture and machine learning.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, i) => {
            const Badge = BADGES[cert.badge];

            return (
              <motion.a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-5 rounded-xl border border-border bg-card group cursor-pointer block"
                style={baseCardStyle}
                onMouseEnter={(e) =>
                  Object.assign(e.currentTarget.style, hoverStyle)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.currentTarget.style, baseCardStyle)
                }
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4 overflow-hidden">
                  <Badge />
                </div>

                <p className="text-[11px] font-mono tracking-widest text-muted-foreground uppercase">
                  {cert.org}
                </p>

                <h3 className="mt-1 text-base font-semibold text-foreground leading-snug">
                  {cert.title}
                </h3>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-muted-foreground/60">
                    {cert.time}
                  </span>

                  <span className="flex items-center gap-1 text-[11px] font-mono text-muted-foreground/40 group-hover:text-primary transition-colors">
                    Show
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}