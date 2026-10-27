import { Check } from 'lucide-react'

// Renders **bold** inline markup.
export function Inline({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') ? <strong key={i} className="font-semibold text-brand-dark">{part.slice(2, -2)}</strong> : part,
  )
}

export default function Blocks({ blocks }) {
  return blocks.map((b, i) => {
    switch (b.t) {
      case 'h3': return <h3 key={i} className="mb-4 mt-10 text-2xl font-bold text-brand-dark text-center">{b.text}</h3>
      case 'h4': return <h4 key={i} className="mb-4 mt-8 text-xl font-bold text-brand-dark first:mt-0 md:text-2xl text-center">{b.text}</h4>
      case 'h6': return <h6 key={i} className="mb-2 mt-6 text-lg font-semibold text-brand text-center">{b.text}</h6>
      case 'p': return <p key={i} className="mb-4 leading-8 text-ink-muted" text-center><Inline text={b.text} /></p>
      case 'hr': return <hr key={i} className="my-8 border-gray-200" />
      case 'ul':
        return (
          <ul key={i} className="mb-6 space-y-3 text-center">
            {b.items.map((it) => (
              <li key={it} className="flex gap-3 leading-7 text-ink-muted"><Check size={18} className="mt-1.5 shrink-0 text-brand-accent" /><span>{it}</span></li>
            ))}
          </ul>
        )
      case 'kv':
        return (
          <ul key={i} className="mb-6 space-y-3">
            {b.items.map(([k, v]) => (
              <li key={k} className="flex gap-3 leading-7 text-ink-muted"><Check size={18} className="mt-1.5 shrink-0 text-brand-accent" /><span><strong className="font-semibold text-brand-dark">{k}</strong> {v}</span></li>
            ))}
          </ul>
        )
      default: return null
    }
  })
}
