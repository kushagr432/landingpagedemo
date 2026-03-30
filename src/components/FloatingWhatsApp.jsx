import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'
import { WHATSAPP_LINK } from '../lib/constants'

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false)
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (show && !dismissed) {
      const timer = setTimeout(() => setTooltipVisible(true), 600)
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
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          /* pb-safe handles iOS home bar; right-6 keeps it off the edge on mobile */
          className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3 pb-[env(safe-area-inset-bottom)]"
        >
          {/* Tooltip bubble */}
          <AnimatePresence>
            {tooltipVisible && !dismissed && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white text-gray-900 rounded-2xl rounded-br-sm px-4 py-3 shadow-2xl max-w-[210px] text-sm"
              >
                <button
                  onClick={() => { setTooltipVisible(false); setDismissed(true) }}
                  className="absolute -top-2 -right-2 w-5 h-5 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Dismiss"
                >
                  <FaTimes size={9} />
                </button>
                <p className="font-bold text-gray-900 mb-0.5 text-sm">🔥 Only 6 seats left!</p>
                <p className="text-gray-600 text-xs leading-snug">
                  Register for free on WhatsApp — takes less than 10 seconds.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB */}
          <div className="relative">
            {/* Ripple ring — behind the button */}
            <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping pointer-events-none" />

            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Register on WhatsApp"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.93 }}
              onClick={() => setTooltipVisible(false)}
              className="relative flex w-16 h-16 bg-green-500 hover:bg-green-400 rounded-full items-center justify-center shadow-2xl glow-green transition-colors"
            >
              <FaWhatsapp size={32} className="text-white" />
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
