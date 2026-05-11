import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './i18n/LanguageContext';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#050510] flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      <div className="relative text-center">
        {/* Rotating rune circle */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          {['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ'].map((rune, i) => (
            <span
              key={i}
              className="absolute text-purple-500/20 text-lg font-[Cinzel_Decorative]"
              style={{
                top: `${50 - 45 * Math.cos((i * Math.PI * 2) / 8)}%`,
                left: `${50 + 45 * Math.sin((i * Math.PI * 2) / 8)}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {rune}
            </span>
          ))}
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="text-7xl font-bold font-[Cinzel_Decorative] gradient-text">W</span>
        </motion.div>

        {/* Loading bar */}
        <motion.div className="mt-8 w-48 mx-auto">
          <div className="h-[2px] bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.2, ease: 'easeInOut' }}
            />
          </div>
          <motion.p
            className="text-gray-600 text-xs mt-3 tracking-widest font-[Cinzel]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            LOADING...
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + 'px';
        glowRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return <div ref={glowRef} className="cursor-glow hidden md:block" />;
}

function SectionDivider({ rune = '✦' }: { rune?: string }) {
  return (
    <motion.div
      className="flex items-center justify-center gap-4 py-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="w-20 h-px bg-gradient-to-r from-transparent to-purple-500/20" />
      <span className="text-purple-500/15 text-sm rune-text select-none">{rune}</span>
      <div className="w-20 h-px bg-gradient-to-l from-transparent to-purple-500/20" />
    </motion.div>
  );
}

function AppContent() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CursorGlow />
          <ParticleCanvas />
          <Navbar />

          <main className="relative z-10">
            <Hero />
            <SectionDivider rune="ᛊ" />
            <About />
            <SectionDivider rune="ᛋ" />
            <Skills />
            <SectionDivider rune="ᛏ" />
            <Services />
            <SectionDivider rune="ᛒ" />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
