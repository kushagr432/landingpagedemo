import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_LINK } from '../lib/constants'

const benefits = [
  {
    emoji: '🔥',
    title: 'Burn Calories Without the Gym',
    desc: "A 60-minute dance session burns 300–500 calories. You'll be having so much fun you won't even notice you're working out.",
    color: 'from-orange-500/20 to-red-500/10',
    border: 'border-orange-500/30',
    glow: 'group-hover:shadow-orange-500/20',
  },
  {
    emoji: '💪',
    title: 'Walk Taller, Feel Unstoppable',
    desc: "Dance rewires how you carry your body. After just one session, people notice a difference — in your posture, your presence, your energy.",
    color: 'from-purple-500/20 to-pink-500/10',
    border: 'border-purple-500/30',
    glow: 'group-hover:shadow-purple-500/20',
  },
  {
    emoji: '🎊',
    title: 'Never Sit Out a Sangeet Again',
    desc: "Imagine being the one everyone watches at the next wedding. No more awkward standing at the edge. You show up, you move, you own it.",
    color: 'from-pink-500/20 to-rose-500/10',
    border: 'border-pink-500/30',
    glow: 'group-hover:shadow-pink-500/20',
  },
  {
    emoji: '🧘',
    title: 'Melt Away Stress in Minutes',
    desc: "Dance floods your brain with endorphins. Priya's students consistently report feeling lighter, happier, and less anxious after every session.",
    color: 'from-blue-500/20 to-cyan-500/10',
    border: 'border-blue-500/30',
    glow: 'group-hover:shadow-blue-500/20',
  },
  {
    emoji: '📱',
    title: 'Create Reels That Get Noticed',
    desc: "The choreography you'll learn is designed to look stunning on camera. Perfect for Instagram, Reels, or just surprising your friends.",
    color: 'from-violet-500/20 to-indigo-500/10',
    border: 'border-violet-500/30',
    glow: 'group-hover:shadow-violet-500/20',
  },
  {
    emoji: '🤝',
    title: 'Join a Community That Gets It',
    desc: "You're not alone. Our WhatsApp group is full of beginners just like you — practicing together, cheering each other on, staying motivated.",
    color: 'from-green-500/20 to-emerald-500/10',
    border: 'border-green-500/30',
    glow: 'group-hover:shadow-green-500/20',
  },
]

export default function Benefits() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-indigo-950/20 to-gray-950" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-400 font-semibold uppercase tracking-widest text-sm">
            Why This Changes Everything
          </span>
          <h2 className="section-heading mt-3 mb-4">
            It's Not Just Dance.{' '}
            <span className="gradient-text">It's a Life Upgrade.</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Dance isn't a hobby for "talented people." It's a skill anyone can build — and when you do, 
            it touches every part of your life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`relative group rounded-2xl p-6 bg-gradient-to-br ${b.color} border ${b.border}
                          hover:shadow-xl ${b.glow} transition-all duration-300 cursor-default`}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {b.emoji}
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">{b.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Post-benefits CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-300 text-lg font-medium mb-2">
            Every single one of these starts with one decision.
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Register today and experience the difference yourself.
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
