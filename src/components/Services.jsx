import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Car, Bike, Sparkles, Star } from 'lucide-react'
import { WA_LINK } from '../lib/config'

const carExterior = [
  {
    name: 'Express Wash',
    badge: null,
    subtitle: null,
    regular: 28,
    large: 35,
    largeLabel: 'XL +$10',
    features: ['Exterior Wash', 'Vacuum', 'Face of Rim & Tyres'],
  },
  {
    name: 'Premium Wash',
    badge: 'Best Seller',
    subtitle: '2pH',
    regular: 55,
    large: 60,
    largeLabel: 'XL +$10',
    features: ['Maniac Line Treatment', 'Full Rim Detailing', 'Interior Wipedown', 'Sealant', 'Vacuum'],
  },
  {
    name: 'Signature Wash',
    badge: 'VDA Certified',
    subtitle: '3pH',
    regular: 135,
    large: 150,
    largeLabel: 'XL +$10',
    features: ['Full Labocosmetica Treatment', 'Full Rim Detailing', 'Interior Conditioning & Disinfection', 'Interior Wipedown', 'Sealant', 'Vacuum'],
  },
]

const carInterior = [
  {
    name: 'Daily Refresh',
    badge: 'Best Seller',
    subtitle: 'Weekly Upkeep',
    regular: 48,
    large: 58,
    largeLabel: 'XL +$20',
    features: ['Anti-Bac Interior Treatment', 'Aircon Disinfectant', 'Leather & Plastic Conditioning'],
  },
  {
    name: 'Signature Restoration',
    badge: null,
    subtitle: 'I Love My Car More Than Anything',
    regular: 120,
    large: 150,
    largeLabel: 'XL +$20',
    features: ['Anti-Bac Interior Treatment', 'Aircon Disinfectant', 'Interior Steam & Scrub', 'Labocosmetica Interior Treatment', 'Leather & Plastic Conditioning'],
  },
]

const paintProtection = [
  {
    name: 'Crystal Shield Pro',
    badge: null,
    subtitle: 'Up to 24 months protection',
    regular: 588,
    large: 688,
    largeLabel: 'XL +TBA',
    features: ['Nano Silicon Technology Coating'],
  },
  {
    name: 'Reflections of Lotus',
    badge: 'Best Seller',
    subtitle: 'Up to 48 months protection',
    regular: 800,
    large: 950,
    largeLabel: 'XL +TBA',
    features: ['Nano Ceramic Coating'],
  },
  {
    name: 'Signature Detail',
    badge: null,
    subtitle: 'Up to 60 months protection',
    regular: 1300,
    large: 1500,
    largeLabel: 'XL +TBA',
    features: ['Lotus Exclusive Ceramic Coating'],
  },
]

const addons = {
  'Exterior': [
    { name: 'Hydrocoat', price: '$15' },
    { name: 'Plastic Restoration', price: '$30' },
    { name: 'Rim Deep Cleaning', price: '$10' },
    { name: 'SiO2 Sealant', price: '$25' },
  ],
  'Interior': [
    { name: 'Aircon Refresh', price: '$15' },
    { name: 'Anti-Bac Interior Treatment', price: '$15' },
    { name: 'Engine Bay Detailing', price: '$50' },
    { name: 'Labocosmetica Interior Treatment', price: '$30' },
    { name: 'Leather Conditioning', price: '$80' },
    { name: 'Pest Fumigation', price: '$48' },
    { name: 'Plastic Conditioning', price: '$30' },
    { name: 'Wet Extraction', price: '>$50' },
  ],
  'Paint Correction': [
    { name: 'Claybar', price: '>$30' },
    { name: 'Exhaust Polishing', price: '>$40' },
    { name: 'Headlight Restoration', price: '>$120' },
    { name: 'Paint Correction', price: '>$150' },
    { name: 'Wheel Coating', price: '>$120' },
  ],
}

const tabs = ['Car & Van', 'Bike']

const bikeWash = [
  {
    name: 'Express Wash',
    badge: null,
    subtitle: 'Quick Wash & Shine',
    prices: { '2B': 25, '2A': 30, 'Open': 35 },
    features: [],
  },
  {
    name: 'Premium Wash',
    badge: 'Best Seller',
    subtitle: null,
    prices: { '2B': 35, '2A': 40, 'Open': 50 },
    features: ['Maniac Line Treatment', 'Plastic Restoration'],
  },
  {
    name: 'Signature Wash',
    badge: null,
    subtitle: null,
    prices: { '2B': 100, '2A': 115, 'Open': 130 },
    features: ['Full Labocosmetica Treatment', '1-Step Polishing'],
  },
]

const bikeProtection = [
  { name: 'Express Gloss', subtitle: 'Up to 6 months protection · Hybrid Coating', prices: { '2B': 100, '2A': 120, 'Open': 140 } },
  { name: 'Crystal Shield Pro', subtitle: 'Up to 24 months protection · Nano Silicon Coating', prices: { '2B': 180, '2A': 200, 'Open': 220 } },
  { name: 'Reflections of Lotus', subtitle: 'Up to 48 months protection · Nano Ceramic Coating', badge: 'Best Seller', prices: { '2B': 250, '2A': 280, 'Open': 320 } },
  { name: 'Signature Detail', subtitle: 'Up to 60 months protection · Lotus Exclusive Ceramic Coating', prices: { '2B': 450, '2A': 500, 'Open': 550 } },
]

function SectionHead({ children }) {
  return (
    <h3 className="heading-font text-2xl md:text-3xl text-white mb-5 flex items-center gap-3.5">
      <span className="w-7 h-px bg-gradient-to-r from-teal to-transparent shrink-0" />
      {children}
    </h3>
  )
}

function Badge({ label }) {
  const isBest = label === 'Best Seller'
  return (
    <span className={`mono text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-[0.15em] inline-flex items-center gap-1 ${
      isBest ? 'bg-amber text-[#241600]' : 'bg-white/10 text-white border border-white/15'
    }`}>
      {isBest && <Star size={9} fill="currentColor" />}{label}
    </span>
  )
}

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const isBest = service.badge === 'Best Seller'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl p-6 card-glow flex flex-col panel ${
        isBest ? 'ring-1 ring-amber/40 border-amber/20' : ''
      }`}
    >
      {service.badge && (
        <div className="absolute -top-3 left-5">
          <Badge label={service.badge} />
        </div>
      )}

      <div className="mb-4">
        <h4 className="heading-font text-2xl text-white tracking-wide">{service.name}</h4>
        {service.subtitle && <div className="mono text-teal text-[11px] mt-1 tracking-wide">{service.subtitle}</div>}
      </div>

      <div className="flex items-end gap-5 mb-5 pb-5 border-b border-line">
        <div>
          <div className="mono text-muted text-[9px] uppercase tracking-[0.2em] mb-1">Regular</div>
          <div className="mono text-3xl font-bold text-white">${service.regular}</div>
        </div>
        <div>
          <div className="mono text-muted text-[9px] uppercase tracking-[0.2em] mb-1">{service.largeLabel}</div>
          <div className="mono text-3xl font-bold gold-gradient">${service.large}</div>
        </div>
      </div>

      <ul className="flex flex-col gap-2.5 flex-1 mb-6">
        {service.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-paper/75">
            <Check size={14} className="text-teal mt-0.5 shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
        className={`${isBest ? 'btn-gold' : 'btn-outline'} px-4 py-3 rounded-xl text-xs text-center block`}>
        Book via WhatsApp
      </a>
    </motion.div>
  )
}

function BikeRow({ s, i }) {
  const isBest = s.badge === 'Best Seller'
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.07 }}
      className={`flex items-center justify-between gap-4 rounded-xl px-5 py-4 panel ${isBest ? 'ring-1 ring-amber/30' : ''}`}>
      <div className="min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="heading-font text-xl text-white tracking-wide">{s.name}</span>
          {s.badge && <Badge label={s.badge} />}
        </div>
        {s.subtitle && <div className="mono text-teal text-[11px] mt-0.5">{s.subtitle}</div>}
        {s.features && s.features.length > 0 && (
          <div className="mono text-teal text-[11px] mt-0.5">{s.features.join(' · ')}</div>
        )}
      </div>
      <div className="text-right shrink-0">
        <div className="mono text-[9px] text-muted uppercase tracking-[0.2em] mb-1">2B / 2A / Open</div>
        <div className="mono text-lg font-bold gold-gradient whitespace-nowrap">
          ${Object.values(s.prices).join(' / $')}
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const [activeTab, setActiveTab] = useState('Car & Van')

  useEffect(() => {
    const bikeHashes = ['#bike-spa-services', '#bike-paint-protection', '#bike-add-ons']
    const carHashes  = ['#exterior-wash', '#interior', '#paint-protection', '#addon-services']
    const handleHash = () => {
      const hash = window.location.hash
      if (bikeHashes.includes(hash)) {
        setActiveTab('Bike')
        setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 80)
      } else if (carHashes.includes(hash)) {
        setActiveTab('Car & Van')
        setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 80)
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  return (
    <section id="services" className="py-28 bg-ink relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] max-w-[120vw] h-[500px] rounded-full bg-teal/4 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }} className="text-center mb-12">
          <div className="eyebrow justify-center mb-5">The Price List</div>
          <h2 className="heading-font text-6xl md:text-7xl text-white mb-4">PICK YOUR SERVICE</h2>
          <p className="text-muted max-w-xl mx-auto mb-8">
            Every package, exactly as priced — cars, vans and bikes kept separate.
          </p>

          {/* Tab switcher */}
          <div className="inline-flex panel rounded-2xl p-1.5 gap-1.5">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-[0.18em] transition-all mono ${
                  activeTab === tab ? 'bg-gradient-to-br from-teal to-teal-bright text-[#04201f] shadow-[0_6px_20px_rgba(12,197,194,0.35)]' : 'text-muted hover:text-white'
                }`}>
                {tab === 'Car & Van' ? <Car size={15} /> : <Bike size={15} />}
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {activeTab === 'Car & Van' ? (
          <div className="space-y-14">
            <div id="exterior-wash" className="scroll-mt-28">
              <SectionHead>Exterior Services</SectionHead>
              <div className="grid md:grid-cols-3 gap-5">
                {carExterior.map((s, i) => <ServiceCard key={s.name} service={s} index={i} />)}
              </div>
            </div>

            <div id="interior" className="scroll-mt-28">
              <SectionHead>Interior Services</SectionHead>
              <div className="grid md:grid-cols-2 gap-5">
                {carInterior.map((s, i) => <ServiceCard key={s.name} service={s} index={i} />)}
              </div>
            </div>

            <div id="paint-protection" className="scroll-mt-28">
              <SectionHead>Paint Protection</SectionHead>
              <div className="grid md:grid-cols-3 gap-5">
                {paintProtection.map((s, i) => <ServiceCard key={s.name} service={s} index={i} />)}
              </div>
            </div>

            <div id="addon-services" className="scroll-mt-28">
              <SectionHead>Add On Services</SectionHead>
              <div className="panel rounded-2xl p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {Object.entries(addons).map(([cat, items]) => (
                    <div key={cat}>
                      <div className="mono text-teal text-[11px] uppercase tracking-[0.2em] font-bold mb-4">{cat}</div>
                      <div className="space-y-2.5">
                        {items.map((a) => (
                          <div key={a.name} className="flex items-center justify-between gap-3 py-1.5 border-b border-line last:border-0">
                            <span className="text-sm text-paper/70">{a.name}</span>
                            <span className="mono text-sm font-bold text-white shrink-0">{a.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="flex items-center justify-center gap-4 panel rounded-2xl p-6">
              <Sparkles size={20} className="text-teal shrink-0" />
              <div>
                <div className="text-white font-semibold text-sm">Proud users of #Labocosmetica</div>
                <div className="mono text-muted text-xs mt-0.5">Laboratorio Italiano Cosmetici Auto · dal 1965</div>
                <div className="text-muted text-xs mt-1">A premium Italian car care brand trusted by professional detailers worldwide — the same products used on supercars and daily drivers alike.</div>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="space-y-12">
            <div id="bike-spa-services" className="scroll-mt-28">
              <SectionHead>Bike Spa Services</SectionHead>
              <p className="text-muted text-sm mb-5 max-w-2xl">
                Every wash includes Chain Degreasing, Chain Lube, SiO2 Sealant &amp; Rim Cleaning.<br />
                Belt-driven motorcycles get <span className="text-amber font-semibold">S$5 off</span>.
              </p>
              <div className="space-y-3">
                {bikeWash.map((s, i) => <BikeRow key={s.name} s={s} i={i} />)}
              </div>
            </div>
            <div id="bike-paint-protection" className="scroll-mt-28">
              <SectionHead>Bike Paint Protection</SectionHead>
              <div className="space-y-3">
                {bikeProtection.map((s, i) => <BikeRow key={s.name} s={s} i={i} />)}
              </div>
            </div>
            <div id="bike-addons" className="panel rounded-2xl p-6 md:p-8 scroll-mt-28 space-y-6">
              <div>
                <div className="mono text-teal text-[11px] uppercase tracking-[0.2em] font-bold mb-4">Bike Spa Add Ons</div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { name: 'Engine & Under-seat Cleaning', price: '$40' },
                    { name: 'Helmet Sanitisation', price: '$5' },
                    { name: 'Plastic Restoration', price: '$30' },
                  ].map((a) => (
                    <div key={a.name} className="flex items-center justify-between gap-2 bg-panel-2 rounded-xl px-3.5 py-3 border border-line">
                      <span className="text-xs text-paper/70">{a.name}</span>
                      <span className="mono text-xs font-bold text-teal shrink-0">{a.price}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-line pt-6">
                <div className="mono text-teal text-[11px] uppercase tracking-[0.2em] font-bold mb-4">Paint Correction Add Ons</div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { name: 'Claybar', price: '>$25' },
                    { name: 'Exhaust Polishing', price: '>$40' },
                    { name: 'Headlight Restoration', price: '>$60' },
                    { name: 'Paint Correction', price: '>$80' },
                    { name: 'Wheel Coating', price: '>$60' },
                  ].map((a) => (
                    <div key={a.name} className="flex items-center justify-between gap-2 bg-panel-2 rounded-xl px-3.5 py-3 border border-line">
                      <span className="text-xs text-paper/70">{a.name}</span>
                      <span className="mono text-xs font-bold text-teal shrink-0">{a.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
