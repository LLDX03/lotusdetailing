import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const sliders = [
  { id: 1, label: 'Exterior Wash' },
  { id: 2, label: 'Signature Detail' },
]

const gridPhotos = [
  'Lotus Detailing shop front at night',
  'Honda Civic Type R under the Lotus sign at night',
  'Black sports bike being detailed',
  'Toyota van during foam wash',
  'Red Nissan Note after detailing',
  'Blue BMW after wash and detail',
  'Paint ceramic coating reflection close-up',
  'White BMW X1 after detailing',
  'Staff performing foam wash',
]

function BeforeAfterSlider({ label }) {
  const [pos, setPos] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef(null)

  const getPos = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPos((x / rect.width) * 100)
  }, [])

  const onMouseDown = (e) => { setDragging(true); getPos(e.clientX) }
  const onMouseMove = (e) => { if (dragging) getPos(e.clientX) }
  const onMouseUp   = () => setDragging(false)
  const onTouchStart = (e) => { setDragging(true); getPos(e.touches[0].clientX) }
  const onTouchMove  = (e) => { if (dragging) getPos(e.touches[0].clientX) }
  const onTouchEnd   = () => setDragging(false)

  return (
    <div className="rounded-2xl overflow-hidden border border-line">
      <div
        ref={containerRef}
        className="relative select-none cursor-col-resize aspect-video bg-panel"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="absolute inset-0 w-full h-full bg-white" />

        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <div className="absolute inset-0 bg-white" style={{ width: `${10000 / pos}%`, maxWidth: 'none' }} />
        </div>

        <div className="absolute top-0 bottom-0 w-0.5 bg-teal shadow-[0_0_18px_rgba(12,197,194,0.7)]" style={{ left: `${pos}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-gradient-to-br from-teal to-teal-bright flex items-center justify-center shadow-[0_0_24px_rgba(12,197,194,0.6)] z-10">
            <ChevronLeft size={14} className="text-[#04201f] -mr-0.5" />
            <ChevronRight size={14} className="text-[#04201f] -ml-0.5" />
          </div>
        </div>

        <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white mono text-[10px] px-3 py-1 rounded-full uppercase tracking-[0.18em]">In Progress</div>
        <div className="absolute top-3 right-3 bg-teal text-[#04201f] mono text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-[0.18em]">Finished</div>
      </div>
      <div className="bg-panel px-5 py-3 mono text-xs text-paper/80 uppercase tracking-[0.2em] border-t border-line">{label}</div>
    </div>
  )
}

export default function Gallery() {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <section id="gallery" className="py-28 bg-ink-2 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="eyebrow justify-center mb-5">The Results</div>
          <h2 className="heading-font text-6xl md:text-7xl text-white mb-4">BEFORE &amp; AFTER</h2>
          <p className="text-muted max-w-xl mx-auto">
            Drag the slider to see the transformation. The gloss does the talking.
          </p>
        </motion.div>

        <div className="mb-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <BeforeAfterSlider {...sliders[activeSlide]} />
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {sliders.map((item, i) => (
            <button key={item.id} onClick={() => setActiveSlide(i)}
              className={`mono px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.18em] font-bold transition-all ${
                activeSlide === i ? 'bg-teal text-[#04201f]' : 'border border-line text-muted hover:border-teal/50 hover:text-white'
              }`}>
              {item.label}
            </button>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-font text-3xl text-white text-center mb-6"
        >
          OUR WORK
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gridPhotos.map((alt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl group border border-line aspect-video bg-white"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-teal/30 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
