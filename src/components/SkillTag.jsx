export default function SkillTag({ label }) {
  return (
    <span
      className="inline-block px-3 py-1.5 text-sm font-mono font-medium rounded-md
        bg-[#7C3AED]/15 text-[#A855F7] border border-[#7C3AED]/30
        hover:bg-[#7C3AED]/25 hover:border-[#7C3AED]/60 transition-all duration-200 cursor-default"
    >
      {label}
    </span>
  );
}
