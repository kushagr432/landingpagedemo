import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_LINK } from '../lib/constants'

const lessons = [
  {
    icon: '🕺',
    title: 'Your First Real Moves',
    desc: 'No awkward shuffling. In 20 minutes you\'ll have clean, confident steps that actually look good — even if you\'ve never danced before.',
  },
  {
    icon: '🎵',
    title: 'Feel the Beat Instantly',
    desc: 'Stop counting "1-2-3-4" in your head. Learn a dead-simple technique to lock onto any Bollywood beat naturally.',
  },
  {
    icon: '💫',
    title: 'Sangeet-Ready Choreography',
    desc: 'A full 60-second sequence you can perform at weddings, parties, or Instagram reels — polished enough to get compliments.',
  },
  {
    icon: '🧠',
    title: 'Body Language Unlocked',
    desc: 'Dance reshapes how you carry yourself. Walk out of this workshop standing taller, moving with more ease and confidence.',
  },
  {
    icon: '✨',
    title: 'Your Unique Dance Style',
    desc: 'Stop copying others. Priya\'s method helps you find movements that feel natural to YOUR body — not a cookie-cutter routine.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function WhatYoullLearn() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 bg-gray-950">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-semibold uppercase tracking-widest text-sm">
            What You Get in 60 Minutes
          </span>
          <h2 className="section-heading mt-3 mb-4">
            Skills That Take Most People{' '}
            <span className="gradient-text">Months to Learn</span>
          </h2>
          <p className="section-subheading max-w-xl mx-auto">
            Priya's method is specifically designed for busy people who want real results fast — 
            not a semester of dance class.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {lessons.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="card-glow p-6 group cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bonus card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-1 relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-purple-900/60 via-pink-900/40 to-orange-900/30 border border-purple-500/30 group"
          >
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-orange-500/20 rounded-full blur-2xl group-hover:bg-orange-500/40 transition-all duration-500" />
            <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">Surprise Bonus</p>
            <div className="text-4xl mb-3">🎁</div>
            <h3 className="font-display font-bold text-lg text-white mb-1">
              Practice Playlist + Quick-Start Guide
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every attendee gets a curated Spotify playlist and a one-page cheat sheet of all moves — 
              so you can keep practicing long after the workshop ends.
            </p>
          </motion.div>
        </motion.div>

        {/* Mid-section CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-400 text-sm mb-4">
            All of this — completely free. For one workshop only.
          </p>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-sm"
          >
            <FaWhatsapp size={20} />
            Reserve Your Spot Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
