import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Languages, Trophy } from 'lucide-react';

const facts = [
  { icon: MapPin, label: 'Hsinchu, Taiwan' },
  { icon: GraduationCap, label: 'NTHU · CSEE' },
  { icon: Languages, label: '5 Languages' },
  { icon: Trophy, label: 'Competition Winner' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0F0F1A]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="text-[#7C3AED] font-mono text-sm">01.</span>
            <h2 className="text-3xl font-bold text-[#F0F0F5]">About Me</h2>
            <div className="flex-1 h-px bg-[#2E2E4E] ml-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#A0A0B5] text-base leading-8">
                I'm a Computer Science and Electrical Engineering student at{' '}
                <span className="text-[#F0F0F5] font-medium">
                  National Tsing Hua University (NTHU)
                </span>
                , Taiwan. I build things that are fast, intelligent, and actually playable — from
                low-level C systems and custom game engines to AI-powered chat apps and real-time
                multiplayer games. I'm a{' '}
                <span className="text-[#A855F7] font-medium">Teaching Assistant</span> for
                Introduction to Programming I, where I help{' '}
                <span className="text-[#F0F0F5] font-medium">250+ students</span> go from zero to
                writing real code.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {facts.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#1A1A2E] border border-[#2E2E4E]
                    hover:border-[#7C3AED]/40 transition-colors duration-200"
                >
                  <div className="p-2 rounded-lg bg-[#7C3AED]/10">
                    <Icon size={18} className="text-[#7C3AED]" />
                  </div>
                  <span className="text-sm font-medium text-[#F0F0F5]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
