import { motion } from 'framer-motion';
import { Briefcase, Calendar, Users, Code2, BookOpen } from 'lucide-react';

const highlights = [
  {
    icon: Users,
    text: 'Led labs, office hours, mentoring, exam prep, and proctoring for ~250 students using Python',
  },
  {
    icon: BookOpen,
    text: 'Taught students with low proficiency through hands-on debugging and clear explanations; drove consistent office-hour attendance',
  },
  {
    icon: Code2,
    text: 'Developed a reusable Python Pygame template and improved course workflows, enhancing engagement and instructional efficiency',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#1A1A2E]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="text-[#7C3AED] font-mono text-sm">04.</span>
            <h2 className="text-3xl font-bold text-[#F0F0F5]">Experience</h2>
            <div className="flex-1 h-px bg-[#2E2E4E] ml-4" />
          </div>

          <div className="relative pl-6 border-l-2 border-[#7C3AED]/30">
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#7C3AED] border-2 border-[#1A1A2E]" />

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#0F0F1A] rounded-xl border border-[#2E2E4E] p-6 hover:border-[#7C3AED]/40 transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={16} className="text-[#7C3AED]" />
                    <h3 className="text-lg font-bold text-[#F0F0F5]">Teaching Assistant</h3>
                  </div>
                  <p className="text-[#A855F7] font-medium text-sm">
                    Introduction to Programming I · National Tsing Hua University
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-[#A0A0B5] shrink-0">
                  <Calendar size={13} />
                  <span>Sept 2025 – Present</span>
                </div>
              </div>

              <ul className="space-y-3">
                {highlights.map(({ icon: Icon, text }, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="p-1.5 rounded-md bg-[#7C3AED]/10 shrink-0 mt-0.5">
                      <Icon size={13} className="text-[#7C3AED]" />
                    </div>
                    <p className="text-sm text-[#A0A0B5] leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
