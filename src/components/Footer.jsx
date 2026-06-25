import { Phone, Mail, MapPin } from 'lucide-react'
import Logo from './Logo'
import { WA_LINK, INSTAGRAM, FACEBOOK, CAROUSELL } from '../lib/config'

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  )
}

function FacebookIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  )
}

function CarousellIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="2"/>
      <path d="M15.5 9.5A3.5 3.5 0 1 0 12 15.5h3.5V9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-line pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-2">
            <div className="mb-4"><Logo size={22} /></div>
            <p className="text-muted text-sm leading-relaxed max-w-xs mb-6">
              Geylang's late-night car &amp; bike wash &amp; detailing shop. Labocosmetica certified.
              5.0 on Google. Open till 2AM on weekends.
            </p>
            <div className="flex gap-3">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl panel flex items-center justify-center text-muted hover:text-teal hover:border-teal/50 transition-all">
                <InstagramIcon size={16} />
              </a>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl panel flex items-center justify-center text-muted hover:text-teal hover:border-teal/50 transition-all">
                <FacebookIcon size={16} />
              </a>
              <a href={CAROUSELL} target="_blank" rel="noopener noreferrer"
                aria-label="Carousell"
                className="w-9 h-9 rounded-xl panel flex items-center justify-center text-muted hover:text-teal hover:border-teal/50 transition-all">
                <CarousellIcon size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mono text-white font-bold text-[11px] uppercase tracking-[0.2em] mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Exterior Services',           href: '#exterior-wash' },
                { label: 'Interior Services',           href: '#interior' },
                { label: 'Paint Protection',            href: '#paint-protection' },
                { label: 'Add On Services',             href: '#addon-services' },
                { label: 'Bike Spa Services',           href: '#bike-spa-services' },
                { label: 'Bike Paint Protection',       href: '#bike-paint-protection' },
                { label: 'Bike Add Ons',                href: '#bike-add-ons' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-muted text-sm hover:text-teal transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mono text-white font-bold text-[11px] uppercase tracking-[0.2em] mb-5">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-sm text-muted">
                <Phone size={14} className="text-teal shrink-0" />
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="hover:text-teal transition-colors">+65 8867 5245</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted">
                <Mail size={14} className="text-teal shrink-0" />
                <a href="mailto:lotus.dtling@gmail.com" className="hover:text-teal transition-colors">lotus.dtling@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted">
                <MapPin size={14} className="text-teal shrink-0 mt-0.5" />
                <span>62 Lorong 19 Geylang<br />Singapore 388508</span>
              </li>
              <li className="mono text-xs text-muted-2 leading-relaxed pl-5">
                Tue–Thu &amp; Sun: 2PM–12AM<br />
                Fri &amp; Sat: 2PM–2AM<br />
                Mon: Closed
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="mono text-muted-2 text-xs">© 2026 Lotus Detailing · Built by Leo</p>
          <p className="mono text-muted-2 text-xs">62 Lorong 19 Geylang, Singapore 388508</p>
        </div>
      </div>
    </footer>
  )
}
