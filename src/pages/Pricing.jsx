import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, ChevronDown } from 'lucide-react'
import PageBanner from '../components/PageBanner.jsx'
import { pricing } from '../data/pages.js'

function Faq() {
  const [open, setOpen] = useState(0)
  return (
   
<section className="bg-white py-14 md:py-20">
  <div className="container-site grid grid-cols-1 items-start gap-10 lg:grid-cols-12">

    {/* Left 6 columns — heading */}
    <div className="text-center lg:col-span-6 lg:text-left">
      <span className="eyebrow">{pricing.faqEyebrow}</span>
      <h2 className="section-title">{pricing.faqTitle}</h2>
    </div>

    {/* Right 6 columns — FAQs */}
    <div className="space-y-4 lg:col-span-6">
      {pricing.faqs.map((f, i) => {
        const isOpen = open === i

        return (
          <div key={f.q} className="rounded-lg bg-white shadow-sm">
            <h6>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-brand-dark"
              >
                {f.q}
                <ChevronDown
                  size={20}
                  className={`shrink-0 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h6>

            {isOpen && (
              <div
                id={`faq-${i}`}
                className="px-6 pb-5 leading-7 text-ink-muted"
              >
                {f.a}
              </div>
            )}
          </div>
        )
      })}
    </div>

  </div>
</section>

  )
}

export default function Pricing() {
  return (
    <>
      <PageBanner title="Our Pricing" crumb="Pricing" />
      <section className="py-14 md:py-20">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-2xl text-center flex">
            <span className="eyebrow">{pricing.eyebrow}</span>
            <h2 className="section-title">{pricing.title}</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {pricing.plans.map((p) => (
              <article key={p.name} className={`relative flex flex-col rounded-xl border p-8 shadow-md ${p.popular ? 'border-[#063232] ring-2 ring-[#063232]' : 'border-gray-200'}`}>
                {p.popular && <span className="absolute -top-3 right-6 rounded-full bg-brand-accent px-4 py-1 text-xs font-bold uppercase text-brand-dark">Most Popular</span>}
                <h2 className="text-4xl font-bold text-brand">{p.price}<span className="text-base font-medium text-ink-muted">{p.unit}</span></h2>
                <h4 className="mt-2 text-xl font-bold text-brand-dark">{p.name}</h4>
                <p className="mt-3 text-sm leading-7 text-ink-muted">{p.best}</p>
                <h4 className="mb-3 mt-6 font-bold text-brand-dark">What’s Included?</h4>
                <ul className="mb-8 flex-1 space-y-3">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-3 text-sm leading-6 text-ink-muted"><Check size={16} className="mt-1 shrink-0 text-brand-accent" /><span>{it}</span></li>
                  ))}
                </ul>
                <Link to="/contact-us" className="btn-primary bg-[#063232]">Get Started</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Faq />
    </>
  )
}
