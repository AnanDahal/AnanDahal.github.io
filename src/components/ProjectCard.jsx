import { motion } from 'framer-motion';
import { ExternalLink, Star, Play } from 'lucide-react';
import GitHubIcon from './GitHubIcon';

export default function ProjectCard({ project }) {
  const { title, featured, tags, highlights, github, live, demo } = project;

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
      className={`relative flex flex-col rounded-xl border bg-[#1A1A2E] p-6 h-full
        transition-all duration-300 group
        ${featured
          ? 'border-[#7C3AED]/50 shadow-lg shadow-[#7C3AED]/10 hover:border-[#7C3AED] hover:shadow-[#7C3AED]/25'
          : 'border-[#2E2E4E] hover:border-[#7C3AED]/40 hover:shadow-lg hover:shadow-[#7C3AED]/10'
        }`}
    >
      {featured && (
        <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-mono text-[#7C3AED] bg-[#7C3AED]/10 px-2 py-1 rounded-full border border-[#7C3AED]/30">
          <Star size={10} className="fill-[#7C3AED]" />
          Featured
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-lg font-bold text-[#F0F0F5] mb-3 pr-16 leading-snug">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2 py-0.5 rounded bg-[#7C3AED]/10 text-[#A855F7] border border-[#7C3AED]/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <ul className="flex-1 space-y-2 mb-5">
        {highlights.map((h, i) => (
          <li key={i} className="flex gap-2 text-sm text-[#A0A0B5] leading-relaxed">
            <span className="text-[#7C3AED] mt-1 shrink-0">▸</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[#2E2E4E]">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-[#A0A0B5] hover:text-[#A855F7] transition-colors"
        >
          <GitHubIcon size={15} />
          Code
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-[#A0A0B5] hover:text-[#A855F7] transition-colors"
          >
            <Play size={15} />
            Demo
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-[#A0A0B5] hover:text-[#A855F7] transition-colors"
          >
            <ExternalLink size={15} />
            Live
          </a>
        )}
      </div>
    </motion.div>
  );
}
