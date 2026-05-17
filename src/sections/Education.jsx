import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Trophy } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#0F0F1A]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="text-[#7C3AED] font-mono text-sm">05.</span>
            <h2 className="text-3xl font-bold text-[#F0F0F5]">Education</h2>
            <div className="flex-1 h-px bg-[#2E2E4E] ml-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl bg-[#1A1A2E] border border-[#2E2E4E] hover:border-[#7C3AED]/40 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-[#7C3AED]/10">
                  <GraduationCap size={20} className="text-[#7C3AED]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F0F0F5]">National Tsing Hua University</h3>
                  <p className="text-xs text-[#A0A0B5]">Hsinchu, Taiwan</p>
                </div>
              </div>
              <p className="text-[#A855F7] font-medium text-sm mb-2">
                B.S. Computer Science and Electrical Engineering
              </p>
              <div className="flex items-center gap-1.5 text-xs text-[#A0A0B5]">
                <Calendar size={12} />
                September 2024 – Present
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="p-6 rounded-xl bg-[#1A1A2E] border border-[#7C3AED]/30 hover:border-[#7C3AED] transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-[#7C3AED]/10">
                  <Trophy size={20} className="text-[#7C3AED]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F0F0F5]">SMU Global Business Plan Competition</h3>
                  <p className="text-xs text-[#A0A0B5]">Notable Achievement</p>
                </div>
              </div>
              <p className="text-sm text-[#A0A0B5] leading-relaxed">
                Co-built <span className="text-[#F0F0F5] font-medium">PulseBridge Technology</span>, an
                AI-powered health monitoring product with real-time vitals, emergency alerts, and AI
                anomaly detection.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
