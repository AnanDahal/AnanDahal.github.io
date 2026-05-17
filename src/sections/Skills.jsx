import { motion } from 'framer-motion';
import SkillTag from '../components/SkillTag';
import { skills } from '../data/skills';

const categoryIcons = {
  languages: '{ }',
  frameworks: '⬡',
  concepts: '⚙',
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#1A1A2E]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="text-[#7C3AED] font-mono text-sm">02.</span>
            <h2 className="text-3xl font-bold text-[#F0F0F5]">Skills</h2>
            <div className="flex-1 h-px bg-[#2E2E4E] ml-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([key, { label, items }], i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-xl bg-[#0F0F1A] border border-[#2E2E4E] hover:border-[#7C3AED]/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl font-mono text-[#7C3AED]">{categoryIcons[key]}</span>
                  <h3 className="text-base font-semibold text-[#F0F0F5]">{label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <SkillTag key={item} label={item} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
