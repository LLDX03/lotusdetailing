import { motion } from 'framer-motion'
import { Star, ExternalLink } from 'lucide-react'

// Real Google reviews supplied by the owner. Reviewer names censored to
// first name + initial; trimmed to a faithful excerpt for card length.
const reviews = [
  {
    name: 'Solihin S.',
    date: 'Verified Google Review',
    rating: 5,
    link: 'https://share.google/oIloIZdakVXsJnoHY',
    text: "First time at Lotus Detailing for a premium car wash and it was a great experience. Erwin was very friendly, professional, and took the time to explain every step of the wash process and the products used.\n\nHe worked patiently without rushing and showed real dedication to his work. I really appreciate that he used two wash mitts to prevent dirt from the lower parts of the car scratching the upper areas — attention to detail like this makes a big difference.\n\nThe price is very affordable for the quality of work delivered. Definitely worth it. Do WhatsApp them to book your slot.\n\nHighly recommended. Thanks, Erwin!",
  },
  {
    name: 'Jun Da T.',
    date: 'Verified Google Review',
    rating: 5,
    link: 'https://share.google/EhKuuoyckBYgx3N53',
    text: "Hands down one of the best car wash and detailing workshop I've been to. The level of attention to detail is outstanding, and Adam truly goes above and beyond to make sure every car is treated with care, especially during the rainy season where he took extra steps to properly protect my car. It's rare to find someone who takes this much pride in their work, and it really shows in both the results and the way he explains the process to you. Adam is friendly, knowledgeable, and genuinely passionate about what he does, which gives you complete confidence that your car is in excellent hands. Top-notch service, great results, and an owner who truly cares. Highly recommended!",
  },
  {
    name: 'Kevin S.',
    date: 'Verified Google Review',
    rating: 5,
    link: 'https://share.google/EUpKgVZa9rnooVddw',
    text: "Got recommended to this place by a friend. I spilled some perfume oil in the back of my car and needed someone to take care of it professionally. They came in with 10/10 service and knowledge. After they were done, the interior looked like the car was brand new. Would recommend these guys 100%.",
  },
  {
    name: 'Don L.',
    date: 'Verified Google Review',
    rating: 5,
    link: 'https://share.google/0lnyrbDWjB0g0ZvfI',
    text: "Lotus Detailing is fantastic 👌 They take their time to wash every part of my bike. Even though I'm not a car, they did not treated me any differently — just genuine, careful service. Other detailing places I've been to rush the washing service, some even jet-sprayed my radiator and critical components and caused electrical issues after. Lotus avoided all the critical parts and carefully washed, scrubbed, and jet-spray where it was safe. Best of all, they're open on Sundays. That's perfect for office people like me. Highly recommended! 👍",
  },
  {
    name: 'Gerald T.',
    date: 'Verified Google Review',
    rating: 5,
    link: 'https://share.google/ecyvrwX7HjlnmBTJx',
    text: "Dropped by close to their closing time and instead of turning me away, Erwin and Ben were extremely welcoming! Thought it's just a simple wash but was impressed way further with detailed questions on if and when my car was coated etc, so as to ensure the right shampoo and wash methods were used to protect the car further. Overall, very satisfied with not only the wash, but also the products used and service rendered by both Erwin and Ben! Highly recommended!",
  },
  {
    name: 'Mong Hao',
    date: 'Verified Google Review',
    rating: 5,
    link: 'https://share.google/y0ve6lUKos7muwZaB',
    text: "Came here on a Wednesday night. Boss was kind enough to accept my vehicle even though it's going to go beyond working hours. However boss scold me because he said I don't know how to paste my own vinyl. It reminded me of tough love when I was young.\n\nQuality of wash 5⭐️ · Service 5⭐️ · Boss scolding 5⭐️ · Vinyl pasting 4.5⭐️\n\nOverall recommended.",
  },
]

const GOOGLE_URL = 'https://www.google.com/maps/search/Lotus+Detailing+62+Lorong+19+Geylang+Singapore'
const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=LOTUS%20DETAILING#lrd=0x31da19674890a1d5:0x4959fd9723d28875,1,,,,'

const CHAR_LIMIT = 220

function ReviewText({ text, link, charLimit = CHAR_LIMIT }) {
  const isLong = text.length > charLimit
  const display = isLong
    ? text.slice(0, charLimit).replace(/\s+\S*$/, '') + '…'
    : text
  return (
    <p className="text-paper/80 text-sm leading-relaxed mt-4 mb-3 flex-1">
      &ldquo;{display}&rdquo;
      {isLong && (
        <a href={link || GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer"
          className="ml-1.5 text-teal hover:text-teal-bright text-xs font-semibold whitespace-nowrap transition-colors">
          Read more →
        </a>
      )}
    </p>
  )
}

function Stars({ count = 5, size = 16 }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={size} className="text-amber fill-amber" />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-28 bg-ink-2 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] max-w-[120vw] h-[400px] bg-teal/4 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <div className="eyebrow justify-center mb-5">The Proof</div>
          <h2 className="heading-font text-6xl md:text-7xl text-white">WHAT THEY SAY</h2>
        </motion.div>

        {/* Honest aggregate — the real figure, with a link to read the actual reviews on Google */}
        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="panel rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="text-center md:text-left shrink-0">
            <div className="mono text-7xl md:text-8xl font-bold gold-gradient leading-none">5.0</div>
            <div className="flex justify-center md:justify-start mt-3 mb-2"><Stars /></div>
            <div className="mono text-muted text-xs tracking-[0.15em] uppercase">89 reviews on Google</div>
          </div>

          <div className="hidden md:block w-px self-stretch bg-line" />

          <div className="text-center md:text-left">
            <p className="text-paper/85 text-lg leading-relaxed mb-6">
              A perfect 5.0 across <span className="text-white font-semibold">89 verified Google reviews</span> —
              from first-time customers to regulars who bring every car and bike back.
              Read what they actually said, straight from the source.
            </p>
            <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm">
              Read Reviews on Google <ExternalLink size={15} />
            </a>
          </div>
        </motion.div>

        {/* Verbatim quotes render here only once real review text is supplied */}
        {reviews.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {reviews.map((r, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="panel rounded-2xl p-6 card-glow flex flex-col">
                <Stars count={r.rating} size={14} />
                <ReviewText text={r.text} link={r.link} charLimit={r.charLimit} />
                <div className="flex items-center gap-3 pt-4 border-t border-line mt-auto">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal to-teal-bright flex items-center justify-center text-[#04201f] text-xs font-bold shrink-0">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{r.name}</div>
                    <div className="mono text-muted-2 text-[10px] tracking-wide">{r.date}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
