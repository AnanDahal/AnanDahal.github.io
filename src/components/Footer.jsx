import GitHubIcon from './GitHubIcon';

export default function Footer() {
  return (
    <footer className="border-t border-[#2E2E4E] bg-[#0F0F1A]">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <p className="text-sm text-[#A0A0B5]">
          © 2025 <span className="text-[#F0F0F5] font-medium">Anan Lumphu</span> · Built with React
        </p>
        <a
          href="https://github.com/AnanDahal"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#A0A0B5] hover:text-[#A855F7] transition-colors"
        >
          <GitHubIcon size={20} />
        </a>
      </div>
    </footer>
  );
}
