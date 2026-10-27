import PageBanner from '../components/PageBanner.jsx'
import { about } from '../data/pages.js'
import { img } from '../data/assets.js'

export default function About() {
  return (
    <>
      <PageBanner title="About Us" />
      
<section className="py-14 md:py-20">
  <div className="container-site grid grid-cols-1 items-start gap-8 lg:grid-cols-12">

    {/* Left 6 columns — 2 cards */}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-1 ">
      {about.cards.map((c) => (
        <article key={c.title} className="rounded-lg bg-white p-8  border-b-[2px] border-r-[2px]">
          <img
            src={img[c.icon]}
            alt=""
            className="mb-5 h-14 w-14"
          />
          <h4 className="mb-3 text-2xl font-bold text-brand-dark">
            {c.title}
          </h4>
          <p className="leading-8 text-ink-muted">{c.text}</p>
        </article>
      ))}
    </div>

    {/* Right 6 columns — text section */}
    <div className="text-start lg:col-span-6  ">
      <span className="eyebrow">{about.eyebrow}</span>
      <h2 className="section-title mb-6">{about.title}</h2>

      {about.paragraphs.map((p, i) => (
        <p key={i} className="mb-4 leading-8 text-ink-muted">
          {p}
        </p>
      ))}
    </div>

  </div>
</section>

      <section className="bg-white py-14 md:py-20">
        <div className="container-site">
          <div className="mb-12 text-center">
            <span className="eyebrow">{about.valueEyebrow}</span>
            <h2 className="section-title">{about.valueTitleA} <strong className="text-brand">{about.valueTitleB}</strong></h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v) => (
              <article key={v.n} className="rounded-lg bg-white p-7 shadow-md">
                <span className="text-4xl font-bold text-brand-accent">{v.n}</span>
                <h4 className="mb-3 mt-3 text-xl font-bold text-brand-dark">{v.title}</h4>
                <p className="text-sm leading-7 text-ink-muted">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
