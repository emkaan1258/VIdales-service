import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { img } from '../data/assets.js'
import { hero, serviceCards, about, whoWeWorkWith, process, different, testimonials } from '../data/home.js'

function Hero() {
  return (
    
<section className="relative overflow-hidden bg-[#F4F8EC]">
  <div className="container-site relative grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-24">

    {/* Left 6 columns — rotating background image */}
    <div className="relative isolate overflow-hidden lg:col-span-1">
      <img
        src={img.heroShape}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 -z-10 h-auto w-[65%] max-w-[320px] origin-center animate-spin [animation-duration:5s] sm:w-[50%] lg:w-[65%]"
      />

      <span className="eyebrow text-[#e3572b]">
        {hero.eyebrow}
      </span>

      <h1 className="text-4xl font-bold leading-tight text-brand-dark sm:text-5xl lg:text-6xl">
        {hero.titleLine1}{" "}
        <span className="text-brand">{hero.titleLine2}</span>
      </h1>

      <p className="mt-6 max-w-xl leading-8 text-ink-muted">
        {hero.text}
      </p>

      <Link to="/contact-us" className="btn-primary mt-8 bg-[#063232]">
        {hero.cta}
      </Link>
    </div>

    {/* Right 6 columns — image stays normal */}
    <div className="relative mx-auto w-full max-w-xl">
      <img
        src={img.heroCircle}
        alt=""
        aria-hidden="true"
        className="absolute -left-6 -top-6 w-24 sm:w-32"
      />
      <img
        src={img.heroBanner}
        alt="VIDALES SERVICE LLC"
        className="relative w-full rounded-2xl object-cover"
      />
    </div>

  </div>
</section>

  )
}

function ServiceCards() {
  return (
    <section className=" pb-6">
      <div className="container-site mt-10 mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {serviceCards.map((c) => (
          <article key={c.title} className="group  rounded-lg bg-[#F6F6F6] p-7 shadow-lg transition-colors duration-300 hover:bg-brand">
            <img src={img.hoverIcon} alt="" aria-hidden="true" className="absolute right-0 top-0 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative mb-5 h-14 w-14">
              <img src={img[c.icon]} alt="" className="absolute inset-0 h-full w-full object-contain transition-opacity group-hover:opacity-0" />
              <img src={img[c.iconColor]} alt="" className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <h4 className="mb-3 text-xl font-bold text-brand-dark transition-colors group-hover:text-white">
              <Link to={c.to} className="after:absolute after:inset-0">{c.title}</Link>
            </h4>
            <p className="text-sm leading-7 text-ink-muted transition-colors group-hover:text-white/90">{c.text}</p>
          </article>
        ))}
      </div>
      <hr />
      <div className="container-site mt-10 text-center">
        <h6 className="text-lg font-semibold text-brand-dark">
          <strong>We’ve satisfied customers</strong> with our experienced professionals.{' '}
          <Link to="/contact-us" className="inline-flex items-center gap-1 text-brand-accent hover:underline">Let’s Get Started <ArrowRight size={16} /></Link>
        </h6>
      </div>
    </section>
  )
}

function Intro() {
  return (
    <section className="py-14 text-center md:py-20 bg-[#063232]">
      <div className="container-site max-w-4xl flex">
        <div className="">  <h2 className="section-title text-white text-start">You can focus your efforts on running your business</h2></div>
      <div className="">
        <h2 className="section-title text-white text-start">Trusted by <br /> Startups and Small businesses <span className="text-white">Worldwide</span></h2></div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="bg-brand-soft py-14 md:py-20">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2">
        <img src={img.about} alt="who we" className="w-full rounded-2xl object-cover" />
        <div>
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="section-title mb-5">{about.title}</h2>
          {about.paragraphs.map((p, i) => <p key={i} className="mb-4 leading-8 text-ink-muted">{p}</p>)}
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[about.listA, about.listB].map((list, i) => (
              <ul key={i} className="space-y-3">
                {list.map((li) => <li key={li} className="flex items-center gap-3 font-medium text-brand-dark"><img src={img.check} alt="" className="h-5 w-5" />{li}</li>)}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WhoWeWorkWith() {
  return (
    <section className="py-14 md:py-20 bg-[#063232]">
      <div className="container-site">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="section-title text-white mb-4">{whoWeWorkWith.title}</h2>
          <p className="leading-8 text-white">{whoWeWorkWith.text}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {whoWeWorkWith.items.map((it) => (
            <article key={it.title} className="rounded-lg border border-gray-100 bg-white p-8 shadow-md">
              <img src={img[it.icon]} alt="" className="mb-5 h-16 w-16 object-contain" />
              <h4 className="mb-3 text-xl font-bold text-brand-dark">{it.title}</h4>
              <p className="text-sm leading-7 text-ink-muted">{it.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="bg-white py-14 text-black md:py-20">
      <div className="container-site">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 mb-10">
  <div className="mb-0 text-start md:col-span-6">
    <span className="eyebrow">{process.eyebrow}</span>
    <h2 className="mb-4 text-3xl font-bold md:text-4xl">
      {process.title}
    </h2>
  </div>

  <div className="text-start md:col-span-6">
    <p className="leading-8 text-black/80">{process.text}</p>
  </div>
</div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((s) => (
            <article key={s.n} className="rounded-lg border border-white/15 p-7">
              <h4 className="mb-3 text-xl font-bold"><span className="text-brand-accent">{s.n}</span> {s.title}</h4>
              <p className="text-sm leading-7 text-black/80">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Different() {
  return (
    <section className="bg-[#063232fa] py-14 md:py-20">
  <div className="container-site">
    <h2 className="section-title mb-10 text-center text-white">
      {different.title}
    </h2>

    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
     

      {/* Content - 6 columns */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-6">
        {different.items.map((it) => (
          <article key={it.title}>
            <img
              src={img.check}
              alt=""
              className="mb-4 h-8 w-8"
            />

            <h4 className="mb-2 text-lg font-bold text-white">
              {it.title}
            </h4>

            <p className="text-sm leading-7 text-ink-muted">
              {it.text}
            </p>
          </article>
        ))}
      </div>
       {/* Image - 6 columns */}
      <div className="lg:col-span-6">
        <img
          src="https://securebooksinc.com/assets/images/home-about.jpg"
          alt="About our services"
          className="h-full max-h-[600px] min-h-[350px] w-full rounded-lg object-cover"
        />
      </div>
    </div>
  </div>
</section>
  )
}

function Testimonials() {
  const items = testimonials.items
  const [i, setI] = useState(0)
  const go = (d) => setI((p) => (p + d + items.length) % items.length)
  // two cards visible from md up, one on mobile
  const visible = [items[i], items[(i + 1) % items.length]]
  return (
    <section className="bg-brand-soft py-14 md:py-20">
      <div className="container-site">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <span className="eyebrow">{testimonials.eyebrow}</span>
            <h2 className="section-title">{testimonials.title}</h2>
          </div>
          <div className="flex gap-2">
            <button type="button" aria-label="Previous testimonial" onClick={() => go(-1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-brand text-brand hover:bg-brand hover:text-white"><ChevronLeft size={20} /></button>
            <button type="button" aria-label="Next testimonial" onClick={() => go(1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-brand text-brand hover:bg-brand hover:text-white"><ChevronRight size={20} /></button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2" aria-live="polite">
          {visible.map((t, k) => (
            <figure key={t.name} className={`rounded-lg bg-white p-8 shadow-md ${k === 1 ? 'hidden md:block' : ''}`}>
              <Quote size={28} className="mb-4 text-brand-accent" />
              <blockquote className="mb-6 leading-8 text-ink-muted">“{t.quote}”</blockquote>
              <figcaption><h5 className="font-bold text-brand-dark">{t.name}</h5><p className="text-sm text-ink-muted">{t.role}</p></figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Testimonials">
          {items.map((t, k) => (
            <button key={t.name} type="button" role="tab" aria-selected={k === i} aria-label={`Show testimonial ${k + 1}`} onClick={() => setI(k)}
              className={`h-2.5 rounded-full transition-all ${k === i ? 'w-6 bg-brand' : 'w-2.5 bg-brand/30'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero /><ServiceCards /><Intro /><About /><WhoWeWorkWith /><Process /><Different /><Testimonials />
    </>
  )
}
