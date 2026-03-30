import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Ananya Mehta',
    role: 'Software Engineer, Bangalore',
    avatar: '👩',
    rating: 5,
    quote:
      "I was so nervous — I've had two left feet my whole life. But Priya's energy is absolutely infectious. By the end of the workshop I was doing moves I never thought possible. Signed up for her paid course the very next day!",
    highlight: 'two left feet → doing moves I never thought possible',
  },
  {
    name: 'Rohan Kapoor',
    role: 'College Student, Mumbai',
    avatar: '👨‍🎓',
    rating: 5,
    quote:
      "Best 2 hours I've spent this year. The choreography was fun but also genuinely challenging. Priya explains every step in a way that just clicks. I showed my friends a reel and they couldn't believe I'd only learned it that day.",
    highlight: "Best 2 hours I've spent this year",
  },
  {
    name: 'Divya Nair',
    role: 'Homemaker, Chennai',
    avatar: '👩‍🦱',
    rating: 5,
    quote:
      "I joined on a whim and it ended up being one of the most joyful experiences. The way Priya builds your confidence step by step is remarkable. Already recommended this to my entire family. Don't think, just register!",
    highlight: "Don't think, just register!",
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
            Real Stories
          </span>
          <h2 className="section-heading mt-3 mb-4">
            What Our <span className="gradient-text">Students Say</span>
          </h2>
          <p className="section-subheading max-w-xl mx-auto">
            Over 5,000 students have transformed their confidence through our workshops. Here are a few
            of their stories.
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
              className="relative card-glow p-7 flex flex-col gap-5 group"
            >
              {/* Quote icon */}
              <FaQuoteLeft className="text-purple-500/40 group-hover:text-purple-500/70 transition-colors" size={28} />

              <StarRow count={t.rating} />

              <blockquote className="text-gray-300 leading-relaxed text-sm flex-1">
                {t.quote.split(t.highlight).map((part, j, arr) => (
                  <span key={j}>
                    {part}
                    {j < arr.length - 1 && (
                      <mark className="bg-transparent text-purple-300 font-semibold not-italic">
                        {t.highlight}
                      </mark>
                    )}
                  </span>
                ))}
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-2xl shrink-0">
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
          className="mt-12 flex flex-wrap justify-center items-center gap-8 text-center"
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
      </div>
    </section>
  )
}
