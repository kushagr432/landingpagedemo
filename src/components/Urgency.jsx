import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { HiLightningBolt, HiClock, HiExclamation } from 'react-icons/hi'
import { WHATSAPP_LINK, WORKSHOP_DATE, WORKSHOP_TIME, TOTAL_SEATS } from '../lib/constants'

const SEATS_TAKEN = 24

function useCountdown(targetDate) {
  const calculateTimeLeft = () => {
    const diff = new Date(targetDate) - new Date()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return timeLeft
}

const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg">
      <span className="font-display font-black text-xl xs:text-2xl sm:text-3xl md:text-4xl text-white tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
    </div>
    <span className="text-gray-400 text-[10px] sm:text-xs font-medium mt-1.5 uppercase tracking-wider sm:tracking-widest">
      {label}
    </span>
  </div>
)

export default function Urgency() {
  const workshopDate = new Date('2025-04-12T18:00:00+05:30')
  const { days, hours, minutes, seconds } = useCountdown(workshopDate)
  const seatsLeft = TOTAL_SEATS - SEATS_TAKEN
  const fillPercent = Math.round((SEATS_TAKEN / TOTAL_SEATS) * 100)

  return (
    <section className="relative py-24 overflow-hidden">
      {/* High-contrast background to stand out from the rest of the page */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0010] via-[#2d0020] to-[#1a0533]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">

        {/* Warning badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/50 text-red-300 font-bold rounded-full px-5 py-2 mb-8 text-sm"
        >
          <HiLightningBolt className="animate-pulse" size={16} />
          ⚠️ This Batch is Almost Full
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading mb-3"
        >
          Only{' '}
          <span className="text-red-400 underline decoration-dotted decoration-red-500/50">
            {seatsLeft} Spots
          </span>{' '}
          Remaining
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-300 text-lg mb-3 max-w-lg mx-auto leading-relaxed"
        >
          We keep every batch small — just {TOTAL_SEATS} students — so Priya can 
          correct your form, answer your questions, and make sure you actually learn.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-red-300 text-sm font-semibold flex items-center justify-center gap-1.5 mb-10"
        >
          <HiExclamation size={16} className="shrink-0" />
          Once these seats are gone, you'll have to wait for the next batch (no guarantee of when).
        </motion.p>

        {/* Countdown timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm font-medium mb-6">
            <HiClock size={16} />
            Workshop starts in:
          </div>
          <div className="flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-4">
            <TimeUnit value={days}    label="Days" />
            <span className="font-display text-2xl sm:text-4xl text-white/40 font-black mb-5 shrink-0">:</span>
            <TimeUnit value={hours}   label="Hours" />
            <span className="font-display text-2xl sm:text-4xl text-white/40 font-black mb-5 shrink-0">:</span>
            <TimeUnit value={minutes} label="Minutes" />
            <span className="font-display text-2xl sm:text-4xl text-white/40 font-black mb-5 shrink-0">:</span>
            <TimeUnit value={seconds} label="Seconds" />
          </div>
        </motion.div>

        {/* Seat progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10 max-w-sm mx-auto"
        >
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">{SEATS_TAKEN} seats claimed</span>
            <span className="text-red-400 font-bold">{seatsLeft} left!</span>
          </div>
          <div className="h-3.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${fillPercent}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.5, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1.5">{fillPercent}% of seats filled</p>
        </motion.div>

        {/* Quick info recap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {[
            { label: 'Date', value: WORKSHOP_DATE },
            { label: 'Time', value: WORKSHOP_TIME },
            { label: 'Price', value: '100% FREE' },
          ].map(({ label, value }, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-center">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">{label}</p>
              <p className="font-semibold text-white text-sm">{value}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
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
            Claim My Spot Before It's Gone
          </motion.a>
          <p className="mt-4 text-xs text-gray-500">
            Takes 10 seconds. No forms. No payment. Just tap and send.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
