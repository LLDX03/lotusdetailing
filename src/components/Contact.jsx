import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { WA_LINK } from '../lib/config'

const hours = [
  { day: 'Monday', time: 'Closed', closed: true },
  { day: 'Tue – Thu', time: '2PM – 12AM', closed: false },
  { day: 'Sunday', time: '2PM – 12AM', closed: false },
  { day: 'Fri & Sat', time: '2PM – 2AM', closed: false, late: true },
]

const info = [
  { icon: Phone, label: 'WhatsApp', value: '+65 8867 5245', href: WA_LINK },
  { icon: Mail, label: 'Email', value: 'lotus.dtling@gmail.com', href: 'mailto:lotus.dtling@gmail.com' },
  { icon: MapPin, label: 'Address', value: '62 Lorong 19 Geylang, Singapore 388508', href: 'https://maps.google.com/?q=62+Lorong+19+Geylang+Singapore' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-ink relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] max-w-[120vw] h-[500px] bg-teal/4 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <div className="eyebrow justify-center mb-5">Find Us</div>
          <h2 className="heading-font text-6xl md:text-7xl text-white mb-4">BOOK TONIGHT</h2>
          <p className="text-muted max-w-xl mx-auto">
            WhatsApp to book or ask anything. We're at 62 Lorong 19 Geylang — open late, 7 days (except Monday).
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">

            {info.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4 p-5 panel rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-teal" />
                </div>
                <div>
                  <div className="mono text-muted text-[10px] uppercase tracking-[0.2em] mb-1">{label}</div>
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    className="text-white font-medium hover:text-teal transition-colors text-sm">
                    {value}
                  </a>
                </div>
              </div>
            ))}

            <div className="p-5 panel rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-teal" />
                </div>
                <div className="mono text-muted text-[10px] uppercase tracking-[0.2em]">Operating Hours</div>
              </div>
              <div className="space-y-2.5">
                {hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between">
                    <span className="text-sm text-muted">{h.day}</span>
                    <span className={`mono text-sm font-bold flex items-center gap-2 ${
                      h.closed ? 'text-muted-2' : h.late ? 'text-amber' : 'text-white'
                    }`}>
                      {h.time}
                      {h.late && <span className="text-[9px] bg-amber/15 text-amber px-1.5 py-0.5 rounded-full tracking-wide uppercase">Late</span>}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mono text-teal text-[11px] tracking-wide mt-4 pt-4 border-t border-line">
                Running late? Just WhatsApp or call ahead and we'll stay.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-col gap-5">

            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg px-8 py-6 rounded-2xl transition-all duration-300 hover:shadow-[0_14px_44px_rgba(37,211,102,0.35)] hover:-translate-y-1">
              <MessageCircle size={24} />
              WhatsApp Us Now
            </a>

            <div className="bg-gradient-to-br from-teal/12 to-teal/4 border border-teal/20 rounded-2xl p-6">
              <h3 className="heading-font text-2xl text-white mb-3 tracking-wide">PROMOTIONS</h3>
              <p className="text-muted text-sm leading-relaxed">
                We run specials for occasions like Father's Day, National Day and more.
                Follow <a href="https://www.instagram.com/lotus.dtl/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">@lotus.dtl</a> to
                catch the latest deals.
              </p>
            </div>

            <div className="panel rounded-2xl overflow-hidden flex-1 min-h-[240px] flex flex-col">
              <iframe
                title="Lotus Detailing location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d103.8716!3d1.3121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19674890a1d5%3A0x4959fd9723d28875!2sLOTUS%20DETAILING!5e0!3m2!1sen!2ssg!4v1750000000000!5m2!1sen!2ssg"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '200px', flex: 1 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://www.google.com/maps/place/LOTUS+DETAILING/data=!4m2!3m1!1s0x0:0x4959fd9723d28875?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 border-t border-line text-teal hover:text-teal-bright transition-colors text-xs mono tracking-[0.15em] uppercase"
              >
                <MapPin size={12} /> Open in Google Maps →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
