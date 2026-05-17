import { motion } from 'framer-motion';
import { Mail, Sparkles } from 'lucide-react';
import GitHubIcon from '../components/GitHubIcon';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#1A1A2E]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#7C3AED] font-mono text-sm">06.</span>
            <h2 className="text-3xl font-bold text-[#F0F0F5]">Contact</h2>
          </div>

          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles size={16} className="text-[#7C3AED]" />
            <p className="text-xl text-[#A0A0B5] font-medium">Let's build something together.</p>
            <Sparkles size={16} className="text-[#7C3AED]" />
          </div>

          <p className="text-[#A0A0B5] mb-10 leading-relaxed">
            I'm always open to discussing new projects, interesting ideas, or opportunities.
            Reach out and I'll get back to you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:ananlumphu205@gmail.com"
              className="flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#7C3AED] text-white
                font-semibold text-base hover:bg-[#A855F7] transition-all duration-200
                shadow-lg shadow-[#7C3AED]/30 hover:shadow-[#A855F7]/40
                hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto justify-center"
            >
              <Mail size={18} />
              Send Email
            </a>
            <a
              href="https://github.com/AnanDahal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-8 py-4 rounded-xl border border-[#7C3AED]
                text-[#A855F7] font-semibold text-base hover:bg-[#7C3AED]/10 transition-all duration-200
                hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto justify-center"
            >
              <GitHubIcon size={18} />
              GitHub
            </a>
          </div>

          <p className="mt-8 text-sm text-[#A0A0B5] font-mono">
            ananlumphu205@gmail.com
          </p>
        </motion.div>
      </div>
    </section>
  );
}
