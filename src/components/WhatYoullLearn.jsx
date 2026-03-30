import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const lessons = [
  {
    icon: '🕺',
    title: 'Master the Basics',
    desc: 'Learn foundational dance moves that work for any style — hip-hop, Bollywood, or contemporary.',
  },
  {
    icon: '🎵',
    title: 'Feel the Rhythm',
    desc: 'Train your body to lock onto beats naturally so you never feel off-count again.',
  },
  {
    icon: '💫',
    title: 'Stage-Ready Moves',
    desc: 'Pick up performance-quality choreography you can show off at events, parties, or reels.',
  },
  {
    icon: '🧠',
    title: 'Body Coordination',
    desc: 'Improve spatial awareness and muscle memory through guided drills designed for all levels.',
  },
  {
    icon: '✨',
    title: 'Express Yourself',
    desc: 'Unlock your personal style and learn to communicate emotion through movement — no script needed.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
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
      {/* Top divider glow */}
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
            Workshop Curriculum
          </span>
          <h2 className="section-heading mt-3 mb-4">
            What You'll <span className="gradient-text">Learn</span>
          </h2>
          <p className="section-subheading max-w-xl mx-auto">
            In just 2 hours, you'll walk away with skills that took most dancers months to figure out.
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
            <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">Bonus</p>
            <div className="text-4xl mb-3">🎁</div>
            <h3 className="font-display font-bold text-lg text-white mb-1">
              Free Practice Playlist
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every registered attendee gets a curated Spotify playlist perfectly timed for practicing
              what you learn.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
