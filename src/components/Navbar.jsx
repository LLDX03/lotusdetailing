import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import { WA_LINK } from '../lib/config'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md border-b border-line shadow-2xl' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" aria-label="Lotus Detailing — Home"><Logo size={26} /></a>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="mono text-[11px] font-bold text-muted hover:text-teal transition-colors duration-200 uppercase tracking-[0.2em] relative group">
                {l.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-teal transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 btn-gold px-5 py-2.5 rounded-full text-xs">
          <MessageCircle size={14} /> WhatsApp
        </a>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-ink/98 border-t border-line overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                  className="mono text-muted hover:text-teal uppercase tracking-[0.2em] text-sm font-bold transition-colors">
                  {l.label}
                </a>
              ))}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-gold px-6 py-3 rounded-full text-sm text-center mt-2 inline-flex items-center justify-center gap-2">
                <MessageCircle size={15} /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
