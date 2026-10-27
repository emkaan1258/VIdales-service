import PageBanner from '../components/PageBanner.jsx'
import { industries } from '../data/pages.js'
import { img } from '../data/assets.js'

export default function Industries() {
  return (
    <>
      <PageBanner title="Industries" />
      <section className="py-14 md:py-20">
        <div className="container-site">
          <div className=" mb-12  text-start">
            <h2 className="section-title mb-4">{industries.title}</h2>
            <p className="leading-8 text-ink-muted">{industries.text}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {industries.columns.map((col, i) => (
              <ul key={i} className="space-y-4">
                {col.map((name) => (
                  <li key={name} className="flex items-center gap-3 rounded-lg border-[3px] border-red-500   px-3 py-1 font-semibold text-brand-dark">
                    <img src={img.check} alt="" className="h-5 w-5" />{name}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
