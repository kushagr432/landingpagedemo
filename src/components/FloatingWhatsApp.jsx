import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'
import { WHATSAPP_LINK } from '../lib/constants'

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false)
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (show && !dismissed) {
      const timer = setTimeout(() => setTooltipVisible(true), 500)
      return () => clearTimeout(timer)
    }
  }, [show, dismissed])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {tooltipVisible && !dismissed && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white text-gray-900 rounded-2xl rounded-br-sm px-4 py-3 shadow-2xl max-w-[220px] text-sm"
              >
                <button
                  onClick={() => {
                    setTooltipVisible(false)
                    setDismissed(true)
                  }}
                  className="absolute -top-2 -right-2 w-5 h-5 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <FaTimes size={10} />
                </button>
                <p className="font-semibold text-gray-900 mb-0.5">👋 Join the Workshop!</p>
                <p className="text-gray-600 text-xs leading-snug">
                  Tap to register on WhatsApp — it's free &amp; takes 10 seconds.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button */}
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Register on WhatsApp"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-16 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-2xl glow-green transition-colors"
            onClick={() => setTooltipVisible(false)}
          >
            <FaWhatsapp size={32} className="text-white" />
          </motion.a>

          {/* Ripple rings */}
          <div className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none">
            <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
