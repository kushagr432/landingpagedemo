import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { HiCheckCircle } from 'react-icons/hi'
import { WHATSAPP_LINK } from '../lib/constants'

const promises = [
  'Free to join — no hidden cost',
  'Beginner-friendly — zero experience needed',
  'Online from home — no commute',
  'Live with Priya — real-time feedback',
]

export default function FinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Vibrant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900/80 to-orange-900/60" />

      {/* Decorative circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-6xl mb-6 animate-float inline-block">💃</div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-5">
            Stop Saying{' '}
            <span className="gradient-text">"Maybe Next Time."</span>
          </h2>

          <p className="text-xl text-gray-200 leading-relaxed mb-3 max-w-xl mx-auto">
            "Next time" has been postponed long enough. 
            The version of you that dances confidently — at weddings, parties, on reels — 
            is <em className="text-pink-300 not-italic font-semibold">one workshop away.</em>
          </p>

          <p className="text-gray-300 text-base mb-8">
            And it won't cost you a single rupee.
          </p>

          {/* Promises checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10 max-w-md mx-auto text-left">
            {promises.map((p) => (
              <div key={p} className="flex items-center gap-2.5 text-sm text-gray-200">
                <HiCheckCircle className="text-green-400 shrink-0" size={18} />
                {p}
              </div>
            ))}
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xl py-5 px-12 glow-green shadow-2xl"
          >
            <FaWhatsapp size={28} />
            Reserve My Free Spot Now
          </motion.a>

          <p className="mt-5 text-sm text-gray-400">
            Tap → Send the WhatsApp message → You're confirmed. Takes 10 seconds. 🎉
          </p>
        </motion.div>
      </div>
    </section>
  )
}
