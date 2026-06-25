import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import shopNight        from '../assets/gallery/shop-night.webp'
import hondaTypeR       from '../assets/gallery/honda-type-r.webp'
import audiFinished     from '../assets/gallery/audi-a5-finished.webp'
import mazdaFinished    from '../assets/gallery/mazda-mx5-finished.webp'
import mercedesFoam     from '../assets/gallery/mercedes-foam.webp'
import swiftFoam        from '../assets/gallery/swift-foam-detail.webp'
import vanFoam          from '../assets/gallery/van-foam.webp'
import bikeDetail       from '../assets/gallery/bike-detail.webp'
import paintReflection  from '../assets/gallery/paint-reflection.webp'
import staffWashing     from '../assets/gallery/staff-washing.webp'
import nissanClean      from '../assets/gallery/nissan-note-clean.webp'
import bmwBlue          from '../assets/gallery/bmw-blue-finished.webp'
import bmwX1            from '../assets/gallery/bmw-x1-finished.webp'

const sliders = [
  { id: 1, label: 'Exterior Wash', before: mercedesFoam,  after: mazdaFinished },
  { id: 2, label: 'Signature Detail', before: swiftFoam, after: audiFinished },
]

const gridPhotos = [
  { src: shopNight,       alt: 'Lotus Detailing shop front at night',              pos: 'center' },
  { src: hondaTypeR,      alt: 'Honda Civic Type R under the Lotus sign at night', pos: 'bottom' },
  { src: bikeDetail,      alt: 'Black sports bike being detailed',                 pos: 'center' },
  { src: vanFoam,         alt: 'Toyota van during foam wash',                      pos: 'center' },
  { src: nissanClean,     alt: 'Red Nissan Note after detailing',                  pos: 'center' },
  { src: bmwBlue,         alt: 'Blue BMW after wash and detail',                   pos: 'center' },
  { src: paintReflection, alt: 'Paint ceramic coating reflection close-up',        pos: 'top'    },
  { src: bmwX1,           alt: 'White BMW X1 after detailing',                     pos: 'center' },
  { src: staffWashing,    alt: 'Staff performing foam wash',                       pos: 'center' },
]

function BeforeAfterSlider({ before, after, label }) {
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
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" draggable={false} />

        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover"
            style={{ width: `${10000 / pos}%`, maxWidth: 'none' }} draggable={false} />
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
          {gridPhotos.map(({ src, alt, pos }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl group border border-line aspect-video"
            >
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ objectPosition: pos }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal/30 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
