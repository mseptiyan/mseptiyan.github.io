import { motion } from 'framer-motion';
import { CalendarDays, MapPin } from 'lucide-react';

const events = [
  {
    date: 'May 26, 2025',
    location: 'Virtual',
    title: 'Machine Learning in Action: Industry Integration and Seamless Conversion',
    description:
      'Integrating machine learning workflows into production-ready applications and industry deployment pipelines.',
  },
  {
    date: 'May 12, 2025',
    location: 'Virtual',
    title: 'Data Processing Essentials: Techniques for Clean and Effective Data',
    description:
      'Applying data preprocessing, transformation, and cleaning techniques for effective machine learning workflows.',
  },
  {
    date: 'Apr 28, 2025',
    location: 'Virtual',
    title: 'Crafting Intelligence: A Deep Dive into NLP and Generative AI',
    description:
      'Exploring generative AI, NLP systems, and large language model implementation for modern AI applications.',
  },
  {
    date: 'Apr 14, 2025',
    location: 'Virtual',
    title: 'Business Presentation: Presenting with Confidence',
    description:
      'Strengthening presentation, communication, and professional delivery skills for meetings and project discussions.',
  },
  {
    date: 'Feb 24, 2025',
    location: 'Virtual',
    title: 'Python Mastery: From Programming Fundamentals to Data Analysis',
    description:
      'Developing Python programming, automation, and data analysis skills for modern technology and AI workflows.',
  },
];

export default function Roadshow() {
  return (
    <section
      id="roadshow"
      className="py-16 px-6 md:px-12 border-t border-border"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3">
          <h2 className="font-display text-2xl md:text-3xl text-foreground">
            Roadshow
          </h2>
        </div>

        <p className="mt-2 text-sm text-muted-foreground">
          Engaging in nationwide workshops covering technology, generative AI,
          data science, and professional development.
        </p>

        <div className="mt-10 space-y-6">
          {events.map((event, i) => {
            const splitTitle = event.title.split(':');
            const yellowPart = splitTitle[0];
            const whitePart = splitTitle.slice(1).join(':');

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-xl border border-border bg-card hover:bg-secondary/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="shrink-0 md:w-40">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground tracking-wider">
                      <CalendarDays className="w-3.5 h-3.5" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground/60 mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-foreground font-medium leading-relaxed">
                      <span className="text-yellow-400">
                        {yellowPart}
                      </span>

                      {whitePart && (
                        <span>
                          :{whitePart}
                        </span>
                      )}
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}