import { motion } from 'framer-motion'
import { Award, Moon, Bike, ThumbsUp } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Labocosmetica',
    desc: 'Italian professional-grade products, trusted by detailers worldwide since 1965.',
  },
  {
    icon: Moon,
    title: 'Open Late',
    desc: 'Till midnight on weekdays, 2AM weekends. We work around your schedule.',
  },
  {
    icon: Bike,
    title: 'Cars & Bikes',
    desc: 'Daily driver, van or motorcycle — there\'s a right package for every ride.',
  },
  {
    icon: ThumbsUp,
    title: 'Done Right',
    desc: 'Not happy with the result? We make it right. No excuses, no hidden fees.',
  },
]

const stats = [
  { value: '89', label: '5-Star Reviews', accent: true },
  { value: '5.0', label: 'Google Rating' },
  { value: "'24", label: 'Est. March 2024' },
]

export default function About() {
  return (
    <section id="about" className="py-28 bg-ink relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] max-w-[120vw] h-[400px] bg-teal/4 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="eyebrow mb-6">Who We Are</div>
            <h2 className="heading-font text-5xl md:text-6xl text-white mb-6 leading-[0.9]">
              GEYLANG'S<br />
              <span className="gold-gradient">AFTER-DARK</span><br />
              DETAILERS.
            </h2>
            <p className="text-muted mb-5 leading-relaxed">
              Based at 62 Lorong 19 Geylang, Lotus was built for car and bike owners who actually
              care what their vehicle looks like. We run professional-grade Labocosmetica products —
              the Italian brand top detailers have trusted since 1965.
            </p>
            <p className="text-muted mb-9 leading-relaxed">
              We're open late, seven days a week (except Mondays), because life doesn't stop at 6PM.
              Bring us your car, your van, or your bike — we'll bring it back to its best.
            </p>

            <div className="flex items-center gap-7 flex-wrap">
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center gap-7">
                  {i > 0 && <div className="w-px h-10 bg-line" />}
                  <div>
                    <div className={`mono text-4xl font-bold ${s.accent ? 'gold-gradient' : 'text-white'}`}>{s.value}</div>
                    <div className="mono text-muted text-[10px] uppercase tracking-[0.18em] mt-1">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div key={v.title}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="panel rounded-2xl p-6 card-glow">
                  <div className="w-11 h-11 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-teal" />
                  </div>
                  <h4 className="heading-font text-xl tracking-wide text-white mb-2">{v.title}</h4>
                  <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
