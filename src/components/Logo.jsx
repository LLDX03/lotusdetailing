// Faithful recreation of the Lotus brand mark: the word LOTUS with the "O"
// replaced by a cog/gear (teeth ring + solid centre), "WASH · DETAILING" beneath.

function Gear({ s }) {
  const teeth = 12
  const c = s / 2
  const rTeeth = s * 0.40
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none" aria-hidden="true" style={{ display: 'block' }}>
      {Array.from({ length: teeth }).map((_, i) => {
        const deg = (i * 360) / teeth
        const a = (deg - 90) * Math.PI / 180
        const x = c + rTeeth * Math.cos(a)
        const y = c + rTeeth * Math.sin(a)
        return (
          <rect key={i} x={x - s * 0.05} y={y - s * 0.065} width={s * 0.10} height={s * 0.15} rx={s * 0.02}
            fill="currentColor" transform={`rotate(${deg} ${x} ${y})`} />
        )
      })}
      <circle cx={c} cy={c} r={s * 0.295} fill="none" stroke="currentColor" strokeWidth={s * 0.125} />
      <circle cx={c} cy={c} r={s * 0.12} fill="currentColor" />
    </svg>
  )
}

export default function Logo({ size = 26, sub = true }) {
  return (
    <div className="flex flex-col items-start leading-none select-none" role="img" aria-label="Lotus Detailing">
      <div className="flex items-center text-white"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: size, letterSpacing: '0.005em' }}>
        <span>L</span>
        <span className="text-white" style={{ margin: `0 ${size * 0.015}px` }}><Gear s={size * 0.94} /></span>
        <span>TUS</span>
      </div>
      {sub && (
        <div className="mono uppercase text-teal"
          style={{ fontSize: Math.max(size * 0.28, 7), letterSpacing: '0.32em', marginTop: size * 0.12 }}>
          Wash · Detailing
        </div>
      )}
    </div>
  )
}
