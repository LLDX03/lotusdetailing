import { motion } from 'framer-motion'
import { Star, MessageCircle, ChevronDown } from 'lucide-react'
import { WA_LINK } from '../lib/config'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

const specs = ['5.0 ★ on Google', '89 Reviews', 'Open till 2AM', 'Cars + Bikes', 'VDA Certified', 'Geylang, SG']

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-ink">
      {/* ---- After-dark atmosphere ---- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[900px] max-w-[140vw] h-[700px] rounded-full bg-teal/8 blur-[130px]" />
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[1100px] max-w-[160vw] h-[500px] floor-glow" />
        {/* drifting service-bay light beam */}
        <div className="beam absolute -top-1/4 left-1/2 w-[40vw] h-[160%] bg-gradient-to-b from-teal/10 via-teal/0 to-transparent blur-3xl origin-top" />
        {/* faint grid like a garage floor */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `linear-gradient(rgba(12,197,194,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(12,197,194,0.7) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent 75%)',
        }} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-28 pb-20 flex-1 flex flex-col items-center justify-center text-center">
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}
          className="inline-flex items-center gap-2.5 panel rounded-full px-5 py-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber" />
          </span>
          <span className="mono text-amber text-[11px] font-bold tracking-[0.25em] uppercase">
            Open Late · Till 2AM Fri &amp; Sat
          </span>
        </motion.div>

        {/* ---- Signature wordmark with reflection ---- */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={1} className="select-none">
          <h1 className="heading-font leading-[0.82] tracking-tight"
            style={{ fontSize: 'clamp(64px, 16vw, 200px)' }}>
            <span className="block gloss text-glow">LOTUS</span>
          </h1>
          {/* wet-floor reflection */}
          <div aria-hidden="true" className="hero-reflect heading-font leading-[0.82] tracking-tight text-white"
            style={{ fontSize: 'clamp(64px, 16vw, 200px)' }}>
            LOTUS
          </div>
        </motion.div>

        <motion.h2 variants={fadeUp} initial="hidden" animate="show" custom={2}
          className="heading-font text-teal-bright tracking-[0.18em] mt-4 mb-6"
          style={{ fontSize: 'clamp(18px, 4vw, 34px)' }}>
          WASH · DETAIL · PROTECT
        </motion.h2>

        <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
          className="text-muted text-base md:text-lg max-w-xl mx-auto mb-9 leading-relaxed">
          Geylang's late-night car &amp; bike detailing shop. Professional-grade
          Labocosmetica treatments — booked over WhatsApp, finished while the city sleeps.
        </motion.p>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4}
          className="flex flex-col sm:flex-row gap-3.5 justify-center items-center px-4 sm:px-0">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-gold w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm">
            <MessageCircle size={17} /> WhatsApp to Book
          </a>
          <a href="#services" className="btn-outline w-full sm:w-auto px-8 py-4 rounded-full text-sm text-center">
            View Pricing
          </a>
        </motion.div>

        {/* scroll cue — anchored to the bottom of the content area, above the ticker */}
        <motion.a href="#services"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted hover:text-teal transition-colors">
          <span className="mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.span animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={18} />
          </motion.span>
        </motion.a>
      </div>

      {/* ---- Inline spec bar (replaces stat-trio) ---- */}
      <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5}
        className="relative z-10 w-full border-y border-line bg-ink-2/60 backdrop-blur-sm overflow-hidden marquee">
        <div className="marquee-track py-3.5">
          {[...specs, ...specs].map((s, i) => (
            <div key={i} className="flex items-center gap-3 px-7 shrink-0">
              <Star size={11} className="text-teal fill-teal" />
              <span className="mono text-[12px] tracking-[0.18em] uppercase text-paper/80 whitespace-nowrap">{s}</span>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
