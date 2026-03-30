import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi'
import { FaQuoteLeft, FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_LINK } from '../lib/constants'

const testimonials = [
  {
    name: 'Riya Sharma',
    role: 'Teacher, Delhi',
    avatar: '👩',
    avatarBg: 'from-rose-500 to-pink-600',
    rating: 5,
    before: 'I literally used to hide behind tables at family functions.',
    quote:
      "I literally used to hide behind tables at family functions whenever the DJ started. After Priya's workshop, I was the first one on the floor at my cousin's sangeet. My family couldn't believe it was the same me. If you're hesitating — please, just join.",
    highlight: 'first one on the floor at my cousin\'s sangeet',
    tag: '🎊 Danced at a sangeet',
  },
  {
    name: 'Ankit Verma',
    role: 'Software Engineer, Pune',
    avatar: '👨‍💻',
    avatarBg: 'from-violet-500 to-indigo-600',
    rating: 5,
    quote:
      "I signed up thinking it would be awkward and I'd regret it within 10 minutes. Two hours later I had a full Bollywood routine that I could actually do. I filmed myself and posted it — got 400 likes. Priya makes it so simple that 'I can't dance' becomes a lie you told yourself.",
    highlight: "posted it — got 400 likes",
    tag: '📱 Went viral on Instagram',
  },
  {
    name: 'Meera Iyer',
    role: 'Homemaker, Chennai',
    avatar: '👩‍🦱',
    avatarBg: 'from-amber-500 to-orange-600',
    rating: 5,
    quote:
      "I'm 38 and I thought my dancing days were over before they started. Priya's workshop changed that completely. The warmth, the patience, the zero-judgment environment — it felt like dancing with a best friend. I cried a little at the end, honestly. Worth every second.",
    highlight: "zero-judgment environment",
    tag: '💃 First dance at 38',
  },
]

const StarRow = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <HiStar key={i} className="text-yellow-400" size={18} />
    ))}
  </div>
)

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-gray-950">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 font-semibold uppercase tracking-widest text-sm">
            Real People. Real Results.
          </span>
          <h2 className="section-heading mt-3 mb-4">
            They Were Exactly{' '}
            <span className="gradient-text">Where You Are Now</span>
          </h2>
          <p className="section-subheading max-w-xl mx-auto">
            Nervous. Self-conscious. Convinced they couldn't dance. Then they showed up — 
            and everything changed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="relative card-glow p-7 flex flex-col gap-4 group cursor-default"
            >
              {/* Result tag */}
              <span className="self-start text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full px-3 py-1">
                {t.tag}
              </span>

              {/* Quote icon */}
              <FaQuoteLeft className="text-purple-500/40 group-hover:text-purple-500/70 transition-colors" size={24} />

              <StarRow count={t.rating} />

              <blockquote className="text-gray-300 leading-relaxed text-sm flex-1">
                {t.quote.split(t.highlight).map((part, j, arr) => (
                  <span key={j}>
                    {part}
                    {j < arr.length - 1 && (
                      <mark className="bg-transparent text-pink-300 font-semibold not-italic">
                        {t.highlight}
                      </mark>
                    )}
                  </span>
                ))}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarBg} flex items-center justify-center text-2xl shrink-0 shadow-lg`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 flex flex-wrap justify-center items-center gap-8 text-center"
        >
          {[
            { value: '5,000+', label: 'Happy Students' },
            { value: '200+',   label: 'Workshops Done' },
            { value: '4.9★',   label: 'Average Rating' },
            { value: '98%',    label: 'Would Recommend' },
          ].map(({ value, label }, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-display text-3xl font-black gradient-text">{value}</span>
              <span className="text-gray-500 text-sm mt-1">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Post-testimonial CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 text-lg font-medium mb-5">
            Your story could be next. One workshop. That's all it takes. 👆
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
