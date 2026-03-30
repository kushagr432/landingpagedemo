import { motion } from 'framer-motion'

const benefits = [
  {
    emoji: '🔥',
    title: 'Burn Calories',
    desc: "A single dance session burns up to 400 calories — more fun than any gym workout you've tried.",
    color: 'from-orange-500/20 to-red-500/10',
    border: 'border-orange-500/30',
    glow: 'group-hover:shadow-orange-500/20',
  },
  {
    emoji: '💪',
    title: 'Build Confidence',
    desc: 'Moving your body to music rewires your self-image. Walk taller, speak stronger, feel unstoppable.',
    color: 'from-purple-500/20 to-pink-500/10',
    border: 'border-purple-500/30',
    glow: 'group-hover:shadow-purple-500/20',
  },
  {
    emoji: '🧘',
    title: 'Stress Relief',
    desc: 'Dance is proven to reduce cortisol and boost endorphins. Leave every session feeling lighter.',
    color: 'from-blue-500/20 to-cyan-500/10',
    border: 'border-blue-500/30',
    glow: 'group-hover:shadow-blue-500/20',
  },
  {
    emoji: '🎉',
    title: 'Be the Life of the Party',
    desc: 'Never sit out a wedding sangeet or party again. Have moves that turn heads on any dance floor.',
    color: 'from-pink-500/20 to-rose-500/10',
    border: 'border-pink-500/30',
    glow: 'group-hover:shadow-pink-500/20',
  },
  {
    emoji: '📱',
    title: 'Reel-Ready Moves',
    desc: "Learn choreography that's perfect for Instagram reels — shareable, expressive, and trend-worthy.",
    color: 'from-violet-500/20 to-indigo-500/10',
    border: 'border-violet-500/30',
    glow: 'group-hover:shadow-violet-500/20',
  },
  {
    emoji: '🤝',
    title: 'Community & Friends',
    desc: 'Join a vibrant WhatsApp group of fellow dancers. Practice together, share progress, stay motivated.',
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
            Why Dance?
          </span>
          <h2 className="section-heading mt-3 mb-4">
            Transform Your Life,{' '}
            <span className="gradient-text">One Move at a Time</span>
          </h2>
          <p className="section-subheading max-w-xl mx-auto">
            Dance isn't just movement — it's a lifestyle upgrade. Here's what you gain when you say yes
            to this workshop.
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
              className={`relative group rounded-2xl p-6 bg-gradient-to-br ${b.color} border ${b.border}
                          hover:shadow-xl ${b.glow} transition-all duration-300 cursor-default`}
            >
              {/* Top emoji */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {b.emoji}
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-2">{b.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
