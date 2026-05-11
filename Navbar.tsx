import { motion } from 'framer-motion';
import { useLang } from '../i18n/LanguageContext';
import { IconDiscord, IconMapPin, IconClock, IconArrowRight } from './Icons';

export default function Contact() {
  const { t } = useLang();

  const contactMethods = [
    {
      title: t('contact.discord.card.title'),
      description: t('contact.discord.card.desc'),
      icon: <IconDiscord className="w-7 h-7 text-[#5865F2]" />,
      link: 'https://discord.gg/PNkzmXMMcw',
      linkText: t('contact.discord.card.link'),
      gradient: 'from-[#5865F2]/20 to-purple-600/10',
      borderHover: 'hover:border-[#5865F2]/50',
    },
    {
      title: t('contact.location.title'),
      description: t('contact.location.desc'),
      icon: <IconMapPin className="w-7 h-7 text-cyan-400" />,
      link: null,
      linkText: t('contact.location.label'),
      gradient: 'from-cyan-500/20 to-teal-600/10',
      borderHover: 'hover:border-cyan-500/50',
    },
    {
      title: t('contact.hours.title'),
      description: t('contact.hours.desc'),
      icon: <IconClock className="w-7 h-7 text-pink-400" />,
      link: null,
      linkText: t('contact.hours.label'),
      gradient: 'from-pink-500/20 to-rose-600/10',
      borderHover: 'hover:border-pink-500/50',
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-4 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/3 rounded-full blur-[250px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-purple-400/40 text-sm tracking-[0.5em] uppercase font-[Cinzel] block mb-4">
            — {t('contact.section')} —
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-[Cinzel_Decorative] gradient-text mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">{t('contact.subtitle')}</p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-purple-500/50" />
            <span className="text-purple-500/30 rune-text text-sm">ᛗ</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>
        </motion.div>

        {/* Discord Highlight Card */}
        <motion.a
          href="https://discord.gg/PNkzmXMMcw"
          target="_blank"
          rel="noopener noreferrer"
          className="group block mb-10 relative overflow-hidden"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -5 }}
        >
          <div className="glass rounded-3xl p-8 md:p-12 border border-[#5865F2]/20 hover:border-[#5865F2]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#5865F2]/10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2]/0 via-[#5865F2]/5 to-[#5865F2]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 w-20 h-20 bg-[#5865F2]/15 rounded-2xl flex items-center justify-center border border-[#5865F2]/20 group-hover:scale-110 group-hover:bg-[#5865F2]/25 transition-all duration-500">
                <IconDiscord className="w-10 h-10 text-[#5865F2]" />
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl md:text-3xl font-bold font-[Cinzel] text-white mb-3">
                  {t('contact.discord.title')}
                </h3>
                <p className="text-gray-400 mb-4 max-w-xl">{t('contact.discord.desc')}</p>
                <span className="inline-flex items-center gap-2 text-[#5865F2] font-medium group-hover:gap-4 transition-all duration-300">
                  discord.gg/PNkzmXMMcw
                  <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
              <div className="hidden md:flex flex-col items-center gap-3 text-[#5865F2]/20 select-none">
                <span className="rune-text text-2xl" style={{ animationDelay: '0s' }}>ᚹ</span>
                <span className="rune-text text-2xl" style={{ animationDelay: '1s' }}>ᚺ</span>
                <span className="rune-text text-2xl" style={{ animationDelay: '2s' }}>ᚾ</span>
              </div>
            </div>
          </div>
        </motion.a>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {contactMethods.map((method, i) => (
            <motion.div
              key={method.title}
              className={`glass rounded-2xl p-6 border border-gray-800/50 ${method.borderHover} transition-all duration-500 group cursor-default relative overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
              <div className="relative z-10">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {method.icon}
                </div>
                <h4 className="text-lg font-bold font-[Cinzel] text-gray-200 mb-2">{method.title}</h4>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{method.description}</p>
                {method.link ? (
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors inline-flex items-center gap-1.5"
                  >
                    {method.linkText}
                    <IconArrowRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-gray-500 text-sm font-medium">{method.linkText}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-gray-600 text-sm">{t('contact.bottom')}</p>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-purple-500/20" />
            <span className="text-purple-500/15 text-xs rune-text">ᛟ ᚠ ᛟ</span>
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-purple-500/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
