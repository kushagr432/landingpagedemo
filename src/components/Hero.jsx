import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { HiCalendar, HiClock, HiVideoCamera } from 'react-icons/hi'
import { WHATSAPP_LINK, WORKSHOP_DATE, WORKSHOP_TIME, WORKSHOP_PLATFORM } from '../lib/constants'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: 'easeOut' },
  }),
}

const InfoBadge = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-white">
    <Icon className="text-purple-300 shrink-0" size={16} />
    <span>{text}</span>
  </div>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-20 left-1/4 w-72 h-72 bg-orange-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center max-w-5xl">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 text-sm font-semibold rounded-full px-5 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          100% FREE · Live Online Workshop
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 text-shadow"
        >
          Free Live{' '}
          <span className="gradient-text">Dance</span>
          <br />
          Workshop
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="text-xl sm:text-2xl text-gray-200 mb-4 max-w-2xl mx-auto leading-relaxed"
        >
          Step onto the floor, unleash your energy, and{' '}
          <span className="text-pink-300 font-semibold">build real confidence</span> — even if you've
          never danced a single step before.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="text-base text-purple-300 mb-10 font-medium"
        >
          Beginners welcome · No prior experience needed · Just bring your energy!
        </motion.p>

        {/* Info badges */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <InfoBadge icon={HiCalendar} text={WORKSHOP_DATE} />
          <InfoBadge icon={HiClock} text={WORKSHOP_TIME} />
          <InfoBadge icon={HiVideoCamera} text={WORKSHOP_PLATFORM} />
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xl py-5 px-10 glow-green"
          >
            <FaWhatsapp size={26} />
            Register on WhatsApp — It's Free!
          </a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.75}
          className="mt-5 text-sm text-gray-400"
        >
          🔥 Only <strong className="text-orange-400">30 seats</strong> available — grab yours before it fills up!
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs"
        >
          <span>Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center pt-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
