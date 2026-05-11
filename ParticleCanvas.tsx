import { motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';
import { IconDiscord } from './Icons';

const runeSequence = 'ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ ᚷ ᚹ ᚺ ᚾ ᛁ ᛃ ᛇ ᛈ ᛉ ᛊ ᛋ ᛏ ᛒ ᛖ ᛗ ᛚ ᛜ ᛞ ᛟ';

const navMap: Record<string, string> = {
  'nav.home': 'hero',
  'nav.about': 'about',
  'nav.skills': 'skills',
  'nav.services': 'services',
  'nav.contact': 'contact',
};

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="relative py-12 px-4 border-t border-gray-800/30">
      <div className="absolute inset-0 bg-gradient-to-t from-[#030308] to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Rune decoration */}
        <div className="text-center mb-8 overflow-hidden">
          <motion.p
            className="text-purple-500/10 text-xs tracking-[0.5em] select-none whitespace-nowrap"
            animate={{ x: [0, -200] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {runeSequence} {runeSequence} {runeSequence}
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold font-[Cinzel_Decorative] gradient-text">W</span>
            <span className="text-gray-600 text-sm">|</span>
            <span className="text-gray-500 text-sm font-[Cinzel]">Wech Portfolio</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {Object.keys(navMap).map((key) => (
              <a
                key={key}
                href={`#${navMap[key]}`}
                className="text-gray-600 text-xs hover:text-purple-400 transition-colors duration-300"
              >
                {t(key)}
              </a>
            ))}
          </div>

          {/* Discord */}
          <a
            href="https://discord.gg/PNkzmXMMcw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-[#5865F2] transition-colors duration-300"
          >
            <IconDiscord className="w-4 h-4" />
            <span className="text-xs">Discord</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-10 pt-6 border-t border-gray-800/20">
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} <span className="text-gray-600">Wech</span>. {t('footer.rights')}
          </p>
          <p className="text-gray-800 text-xs mt-2 font-[Cinzel] flex items-center justify-center gap-2">
            <svg className="w-3.5 h-3.5 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
            {t('footer.made')}
          </p>
        </div>
      </div>
    </footer>
  );
}
