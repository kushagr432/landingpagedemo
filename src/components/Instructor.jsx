import { motion } from 'framer-motion'
import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import { HiStar, HiUserGroup, HiAcademicCap, HiFilm } from 'react-icons/hi'
import { WHATSAPP_LINK } from '../lib/constants'

const stats = [
  { icon: HiUserGroup, value: '5,000+', label: 'Students Trained' },
  { icon: HiAcademicCap,  value: '8 Years',  label: 'Teaching Experience' },
  { icon: HiFilm,         value: '200+',     label: 'Workshops Conducted' },
  { icon: HiStar,         value: '4.9 / 5',  label: 'Average Rating' },
]

export default function Instructor() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-purple-950/30 to-gray-950" />
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-pink-400 font-semibold uppercase tracking-widest text-sm">
            Meet Your Instructor
          </span>
          <h2 className="section-heading mt-3">
            Learn From the <span className="gradient-text">Best</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Avatar / image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 blur-xl opacity-40 scale-110" />
              {/* Avatar placeholder */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 flex items-center justify-center">
                  <span className="text-9xl select-none">👩‍🎤</span>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Live Workshop
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-purple-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Your Host & Choreographer
            </p>
            <h3 className="font-display text-4xl font-black text-white mb-1">Priya Sharma</h3>
            <p className="text-pink-400 font-medium mb-5">
              Professional Dancer · Choreographer · Coach
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Priya is a nationally recognized dance coach who has trained over{' '}
              <strong className="text-white">5,000 students</strong> across India — from absolute beginners
              to stage performers. She has choreographed for leading Bollywood productions and her
              unique teaching method breaks down complex moves into simple, fun sequences that anyone can
              follow.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              "I believe every person has a dancer inside them. My job is simply to help them find it."
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 mb-8">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors" aria-label="Instagram">
                <FaInstagram size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors" aria-label="YouTube">
                <FaYoutube size={22} />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors" aria-label="WhatsApp">
                <FaWhatsapp size={22} />
              </a>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <div key={i} className="card-glow p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                    <Icon className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-lg leading-none">{value}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
