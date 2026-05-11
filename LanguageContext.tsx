import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/translations';
import { IconDiscord } from './Icons';

const navKeys = [
  { key: 'nav.home', href: '#hero' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.skills', href: '#skills' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.contact', href: '#contact' },
];

const languages: { code: Lang; label: string; flag: string }[] = [
  { code: 'az', label: 'AZ', flag: '🇦🇿' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'tr', label: 'TR', flag: '🇹🇷' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const [langDropdown, setLangDropdown] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navKeys.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection('#' + sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = () => setLangDropdown(false);
    if (langDropdown) {
      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }
  }, [langDropdown]);

  const currentLang = languages.find(l => l.code === lang)!;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#050510]/80 backdrop-blur-2xl border-b border-purple-500/15 shadow-2xl shadow-purple-500/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-3xl font-bold font-[Cinzel_Decorative] gradient-text">W</span>
            <span className="absolute -inset-2 bg-purple-500/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navKeys.map((link) => (
              <motion.a
                key={link.key}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeSection === link.href
                    ? 'text-purple-300'
                    : 'text-gray-400 hover:text-purple-300'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {t(link.key)}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 bg-purple-500/10 border border-purple-500/20 rounded-lg"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setLangDropdown(!langDropdown); }}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-400 bg-gray-800/30 border border-gray-700/40 rounded-lg hover:border-purple-500/30 hover:text-purple-300 transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span>{currentLang.label}</span>
                <svg className={`w-3 h-3 transition-transform ${langDropdown ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <AnimatePresence>
                {langDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 bg-[#0d0d20]/95 backdrop-blur-xl border border-purple-500/20 rounded-xl overflow-hidden shadow-2xl shadow-purple-500/10 min-w-[130px]"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={(e) => { e.stopPropagation(); setLang(l.code); setLangDropdown(false); }}
                        className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-all duration-200 ${
                          lang === l.code
                            ? 'text-purple-300 bg-purple-500/10'
                            : 'text-gray-400 hover:text-purple-300 hover:bg-purple-500/5'
                        }`}
                      >
                        <span className="text-base">{l.flag}</span>
                        <span className="font-medium">{l.label}</span>
                        {lang === l.code && (
                          <svg className="w-3.5 h-3.5 ml-auto text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Discord CTA */}
            <motion.a
              href="https://discord.gg/PNkzmXMMcw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-300 bg-purple-500/10 border border-purple-500/25 rounded-lg hover:bg-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <IconDiscord className="w-4 h-4" />
              Discord
            </motion.a>
          </div>

          {/* Mobile: Lang + Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Language Toggle */}
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setLangDropdown(!langDropdown); }}
                className="flex items-center gap-1 px-2 py-1.5 text-xs font-medium text-gray-400 bg-gray-800/30 border border-gray-700/40 rounded-lg"
              >
                <span>{currentLang.label}</span>
              </button>
              <AnimatePresence>
                {langDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 bg-[#0d0d20]/95 backdrop-blur-xl border border-purple-500/20 rounded-xl overflow-hidden shadow-2xl z-[60]"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={(e) => { e.stopPropagation(); setLang(l.code); setLangDropdown(false); }}
                        className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm ${
                          lang === l.code ? 'text-purple-300 bg-purple-500/10' : 'text-gray-400'
                        }`}
                      >
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            >
              <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-purple-400 rounded-full block" />
              <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-purple-400 rounded-full block" />
              <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-purple-400 rounded-full block" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-20 bg-[#050510]/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center gap-6 py-12">
              {navKeys.map((link, i) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`text-xl font-medium font-[Cinzel] transition-colors ${
                    activeSection === link.href ? 'text-purple-400 text-glow-purple' : 'text-gray-400'
                  }`}
                >
                  {t(link.key)}
                </motion.a>
              ))}
              <motion.a
                href="https://discord.gg/PNkzmXMMcw"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 flex items-center gap-2 px-6 py-3 text-purple-300 bg-purple-500/15 border border-purple-500/30 rounded-xl"
              >
                <IconDiscord className="w-5 h-5" />
                Discord
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
