import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { HiCalendar, HiClock, HiVideoCamera, HiCheckCircle } from 'react-icons/hi'
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

const trustPoints = [
  'No experience needed',
  'Online from home',
  'Certificate on completion',
]

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
        {/* Live badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 text-sm font-semibold rounded-full px-5 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          100% FREE · Live Bollywood Dance Workshop
        </motion.div>

        {/* Outcome-driven headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.15}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-6 text-shadow"
        >
          From Zero to{' '}
          <span className="gradient-text">Confident</span>
          <br />
          Dancer in 60 Minutes
        </motion.h1>

        {/* Emotional sub-headline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="text-xl sm:text-2xl text-gray-200 mb-4 max-w-2xl mx-auto leading-relaxed"
        >
          Imagine walking into your next wedding, sangeet, or party and{' '}
          <span className="text-pink-300 font-semibold">owning the dance floor</span> — no awkward side-shuffles, no sitting out. 
          Just pure joy and confidence.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.38}
          className="text-base text-purple-300 mb-8 font-medium"
        >
          Join 5,000+ beginners who transformed their confidence with just one workshop.
        </motion.p>

        {/* Info badges */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.46}
          className="flex flex-wrap justify-center gap-3 mb-10"
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
          custom={0.54}
          className="flex flex-col items-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xl py-5 px-10 glow-green"
          >
            <FaWhatsapp size={26} />
            Reserve Your Spot on WhatsApp
          </motion.a>

          {/* Trust row */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 mt-1">
            {trustPoints.map((p) => (
              <span key={p} className="flex items-center gap-1.5 text-sm text-gray-400">
                <HiCheckCircle className="text-green-400 shrink-0" size={15} />
                {p}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.65}
          className="mt-6 text-sm text-gray-400"
        >
          🔥 Only <strong className="text-orange-400">30 seats</strong> per batch — 23 already taken. Don't miss out!
        </motion.p>

        {/* Social proof avatars */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.72}
          className="mt-8 flex flex-col items-center gap-2"
        >
          <div className="flex -space-x-3">
            {['👩', '👨‍🎓', '👩‍🦱', '🧑', '👩‍💼'].map((a, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border-2 border-purple-900 bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-base"
              >
                {a}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500">
            <span className="text-yellow-400">★★★★★</span>&nbsp; Loved by 5,000+ students across India
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
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
