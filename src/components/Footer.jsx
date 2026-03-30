import { FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa'
import { WHATSAPP_LINK } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 border-t border-white/5 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="text-3xl">💃</span>
              <span className="font-display font-black text-xl gradient-text">DanceWithPriya</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              Empowering thousands to move, feel, and live with more confidence through the joy of dance.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            {[
              { label: 'About', href: '#' },
              { label: 'Workshop', href: '#' },
              { label: 'Testimonials', href: '#' },
              { label: 'Contact', href: WHATSAPP_LINK },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-5">
            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-pink-400 transition-colors">
              <FaInstagram size={22} />
            </a>
            <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-red-400 transition-colors">
              <FaYoutube size={22} />
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="text-gray-500 hover:text-green-400 transition-colors">
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} DanceWithPriya. All rights reserved.</p>
          <p>Made with ❤️ for every aspiring dancer out there.</p>
        </div>
      </div>
    </footer>
  )
}
