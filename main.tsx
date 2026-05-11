import { motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';
import { IconCode, IconPalette, IconTerminal } from './Icons';

const getBarColor = (color: string) => {
  switch (color) {
    case 'purple': return 'from-purple-600 via-purple-500 to-violet-400';
    case 'cyan': return 'from-cyan-600 via-cyan-500 to-teal-400';
    case 'pink': return 'from-pink-600 via-pink-500 to-rose-400';
    default: return 'from-purple-600 to-violet-400';
  }
};

const getGlowColor = (color: string) => {
  switch (color) {
    case 'purple': return 'rgba(139, 92, 246, 0.4)';
    case 'cyan': return 'rgba(6, 182, 212, 0.4)';
    case 'pink': return 'rgba(236, 72, 153, 0.4)';
    default: return 'rgba(139, 92, 246, 0.4)';
  }
};

const getBorderColor = (color: string) => {
  switch (color) {
    case 'purple': return 'border-purple-500/20 hover:border-purple-500/40';
    case 'cyan': return 'border-cyan-500/20 hover:border-cyan-500/40';
    case 'pink': return 'border-pink-500/20 hover:border-pink-500/40';
    default: return 'border-purple-500/20';
  }
};

// SVG icon components for tech stack
const TechIcon = ({ name }: { name: string }) => {
  const iconMap: Record<string, React.ReactNode> = {
    'HTML5': <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>,
    'CSS3': <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    'JavaScript': <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    'React': <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>,
    'TypeScript': <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8"/><path d="M8 8h8"/></svg>,
    'Tailwind': <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.36 10.82 14.5 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.64 7.18 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.36 16.82 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.64 13.18 9.5 12 7 12z"/></svg>,
    'Node.js': <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v12"/><path d="M8 8l4-2 4 2"/></svg>,
    'Figma': <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="2"/><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/></svg>,
    'Git': <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 012 2v7"/><line x1="6" y1="9" x2="6" y2="21"/></svg>,
    'VS Code': <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>,
  };
  return iconMap[name] || <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/></svg>;
};

export default function Skills() {
  const { t } = useLang();

  const skillCategories = [
    {
      title: t('skills.cat.frontend'),
      icon: <IconCode className="w-7 h-7 text-purple-400" />,
      color: 'purple',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3 / Tailwind', level: 92 },
        { name: 'JavaScript', level: 88 },
        { name: 'React', level: 82 },
        { name: 'TypeScript', level: 75 },
      ],
    },
    {
      title: t('skills.cat.design'),
      icon: <IconPalette className="w-7 h-7 text-cyan-400" />,
      color: 'cyan',
      skills: [
        { name: 'UI/UX Design', level: 90 },
        { name: 'Figma', level: 85 },
        { name: 'Responsive Design', level: 93 },
        { name: 'Motion Design', level: 78 },
        { name: 'Branding', level: 72 },
      ],
    },
    {
      title: t('skills.cat.tools'),
      icon: <IconTerminal className="w-7 h-7 text-pink-400" />,
      color: 'pink',
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Git / GitHub', level: 80 },
        { name: 'Node.js', level: 70 },
        { name: 'SEO', level: 75 },
        { name: t('skills.problem'), level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/3 rounded-full blur-[200px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-cyan-400/40 text-sm tracking-[0.5em] uppercase font-[Cinzel] block mb-4">
            — {t('skills.section')} —
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-[Cinzel_Decorative] gradient-text mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            {t('skills.subtitle')}
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-500/50" />
            <span className="text-cyan-500/30 rune-text text-sm">ᚲ</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-cyan-500/50" />
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              className={`glass rounded-2xl p-6 md:p-8 card-glow border ${getBorderColor(category.color)} transition-all duration-500`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: catIdx * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-8">
                {category.icon}
                <h3 className="text-xl font-bold font-[Cinzel] text-gray-200">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: catIdx * 0.15 + skillIdx * 0.08 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-xs text-gray-500 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden relative">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${getBarColor(category.color)} relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: catIdx * 0.15 + skillIdx * 0.08, ease: 'easeOut' }}
                        style={{ boxShadow: `0 0 12px ${getGlowColor(category.color)}` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer-text" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Row */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind', 'Node.js', 'Figma', 'Git', 'VS Code'].map((tech, i) => (
            <motion.div
              key={tech}
              className="flex items-center gap-2 px-4 py-2 glass rounded-xl text-sm text-gray-400 hover:text-purple-300 hover:border-purple-500/30 transition-all duration-300 cursor-default"
              whileHover={{ y: -4, scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <TechIcon name={tech} />
              <span>{tech}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
