import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useLang } from '../i18n/LanguageContext';
import { IconDiscord, IconChevronDown } from './Icons';

const runesLeft = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ'];
const runesRight = ['ᚷ', 'ᚹ', 'ᚺ', 'ᚾ', 'ᛁ', 'ᛃ'];

export default function Hero() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const runeY = useTransform(scrollY, [0, 600], [0, -100]);
  const { t } = useLang();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[130px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-600/5 rounded-full blur-[180px] animate-float-slow" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Rune decorations - left */}
      <motion.div
        className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 flex flex-col gap-8 text-purple-500/30 hidden md:flex"
        style={{ y: runeY }}
      >
        {runesLeft.map((rune, i) => (
          <span key={i} className="rune-text text-xl select-none" style={{ animationDelay: `${i * 0.7}s` }}>
            {rune}
          </span>
        ))}
      </motion.div>

      {/* Rune decorations - right */}
      <motion.div
        className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-8 text-cyan-500/30 hidden md:flex"
        style={{ y: runeY }}
      >
        {runesRight.map((rune, i) => (
          <span key={i} className="rune-text text-xl select-none" style={{ animationDelay: `${i * 0.7 + 0.3}s` }}>
            {rune}
          </span>
        ))}
      </motion.div>

      {/* Main content */}
      <motion.div className="relative z-10 text-center px-4" style={{ y: heroY, opacity: heroOpacity }}>
        {/* Decorative top line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-purple-500/40" />
          <svg className="w-4 h-4 text-purple-400/40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
          <div className="w-12 h-px bg-purple-500/20" />
          <svg className="w-3 h-3 text-purple-400/30 rotate-45" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" /></svg>
          <div className="w-12 h-px bg-purple-500/20" />
          <svg className="w-4 h-4 text-purple-400/40" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-purple-500/40" />
        </motion.div>

        {/* Main name */}
        <motion.h1
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-4"
        >
          <span
            className="block font-[Cinzel_Decorative] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.15em] gradient-text"
            style={{ textShadow: '0 0 60px rgba(139,92,246,0.3), 0 0 120px rgba(139,92,246,0.15)' }}
          >
            WECH
          </span>
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-purple-500/60" />
          <svg className="w-3 h-3 text-purple-400/50 rotate-45" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" /></svg>
          <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-cyan-500/60" />
        </motion.div>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 font-[Inter] mb-5 h-10"
        >
          <TypeAnimation
            key={`${t('hero.role1')}-${t('hero.role2')}`}
            sequence={[
              t('hero.role1'), 2500,
              t('hero.role2'), 2500,
              t('hero.role3'), 2500,
              t('hero.role4'), 2500,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="shimmer-text font-medium"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="text-gray-500 text-sm md:text-base font-[Inter] max-w-lg mx-auto mb-12 leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://discord.gg/PNkzmXMMcw"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-3.5 bg-purple-600/15 border border-purple-500/30 rounded-xl text-purple-300 font-medium hover:bg-purple-600/25 hover:border-purple-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/20 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative z-10 flex items-center gap-2.5">
              <IconDiscord className="w-5 h-5" />
              {t('hero.cta.discord')}
            </span>
          </a>
          <a
            href="#about"
            className="group px-8 py-3.5 border border-gray-700/50 rounded-xl text-gray-400 font-medium hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-500 flex items-center gap-2"
          >
            {t('hero.cta.explore')}
            <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <IconChevronDown className="w-4 h-4" />
            </motion.span>
          </a>
        </motion.div>

        {/* Bottom rune decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.3 }}
          className="text-purple-400/20 text-base mt-16 tracking-[0.8em] select-none hidden sm:block"
        >
          ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ ᚷ ᚹ ᚺ ᚾ ᛁ ᛃ
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-indicator"
      >
        <div className="w-6 h-10 border-2 border-purple-500/25 rounded-full flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 bg-purple-400/60 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
