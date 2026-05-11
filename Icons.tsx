import { motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';
import { IconCalendar, IconFolder, IconUsers, IconZap } from './Icons';

export default function About() {
  const { t } = useLang();

  const stats = [
    { label: t('about.stat.experience'), value: '5+', icon: <IconCalendar className="w-6 h-6" /> },
    { label: t('about.stat.projects'), value: '50+', icon: <IconFolder className="w-6 h-6" /> },
    { label: t('about.stat.clients'), value: '30+', icon: <IconUsers className="w-6 h-6" /> },
    { label: t('about.stat.tech'), value: '15+', icon: <IconZap className="w-6 h-6" /> },
  ];

  return (
    <section id="about" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[180px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-purple-400/40 text-sm tracking-[0.5em] uppercase font-[Cinzel] block mb-4">
            — {t('about.section')} —
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-[Cinzel_Decorative] gradient-text mb-4">
            {t('about.title')}
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-purple-500/50" />
            <span className="text-purple-500/30 rune-text text-sm">ᛟ</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Avatar Side */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <div className="relative group">
              <div className="absolute -inset-3 rounded-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700">
                <div
                  className="w-full h-full rounded-2xl animate-spin-slow"
                  style={{
                    background: 'conic-gradient(from 0deg, #8b5cf6, #06b6d4, #ec4899, #8b5cf6)',
                    filter: 'blur(15px)',
                  }}
                />
              </div>
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-purple-500/20">
                <img src="/images/avatar.png" alt="Wech" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-purple-300 font-[Cinzel] text-lg font-semibold">Wech</p>
                  <p className="text-gray-400 text-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <svg className="w-3.5 h-3.5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    {t('about.location')}
                  </p>
                </div>
              </div>
              <motion.span
                className="absolute -top-6 -right-6 text-3xl rune-text text-purple-500/20 select-none"
                animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                ᛞ
              </motion.span>
              <motion.span
                className="absolute -bottom-6 -left-6 text-3xl rune-text text-cyan-500/20 select-none"
                animate={{ y: [5, -5, 5], rotate: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                ᛟ
              </motion.span>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold font-[Cinzel] text-gray-100 mb-6">
              {t('about.heading')} <span className="text-purple-400">{t('about.heading.highlight')}</span>
            </h3>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {['VS Code', 'HTML/CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Figma'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium text-purple-300/80 bg-purple-500/8 border border-purple-500/15 rounded-lg hover:border-purple-500/30 hover:bg-purple-500/15 transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center card-glow group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <span className="text-purple-400/60 mb-3 flex justify-center group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </span>
              <div className="text-3xl md:text-4xl font-bold font-[Cinzel] gradient-text mb-2">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
