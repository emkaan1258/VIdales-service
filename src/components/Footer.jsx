import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { contact, services, quickLinks, legalLinks, footerBlurb } from '../data/site.js'
import { img } from '../data/assets.js'

const h = 'mb-5 text-lg font-semibold text-white'
const a = 'text-white/80 transition-colors hover:text-brand-accent'

export default function Footer() {
  return (
   
<footer className="relative isolate mt-auto overflow-hidden bg-[#063232] text-white">
  {/* Background image — footer ke andar limited */}
  <img
    src={img.footerShape}
    alt=""
    aria-hidden="true"
    className="pointer-events-none absolute left-0 top-0 z-[-1] h-auto w-[70%] max-w-[700px] object-contain object-left-top sm:w-[55%] lg:w-[40%]"
  />
      <div className="container-site  grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
        
        <div className=''>
        
         <Link to="/" className="group inline-flex flex-col leading-none">
  <span className="text-xl font-extrabold   text-[#f7f8f8] transition-colors group-hover:text-[#e3572b] sm:text-3xl">
    VIDALES SERVICE
  </span>
  <span className="mt-1.5 sm:text-3xl font-semibold tracking-[0.38em] text-[#e3572b] ">
    L L C
  </span>
  <span className="mt-2 h-1 w-12 rounded-full bg-[#063232] transition-all group-hover:w-20" />
</Link>

          <p className="mb-5 text-sm leading-7 text-white/80">{footerBlurb}</p>
          <img src={img.weAccept} alt="We accept" className="mb-6 h-auto max-w-[240px]" />
         
        </div>

        <div>
          <h4 className={h}>Our Services</h4>
          <ul className="space-y-3 text-sm">
            {services.map((s) => <li key={s.to}><Link to={s.to} className={a}>{s.footerLabel}</Link></li>)}
          </ul>
        </div>

        <div>
          <h4 className={h}>Quick Link</h4>
          <ul className="space-y-3 text-sm">
            {quickLinks.map((s) => <li key={s.to}><Link to={s.to} className={a}>{s.label}</Link></li>)}
          </ul>
        </div>

        <div>
          <h4 className={h}>Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-brand-accent" /><span className="text-white/80">{contact.address}</span></li>
            {/* <li className="flex gap-3"><Mail size={18} className="mt-0.5 shrink-0 text-brand-accent" /><a href={`mailto:${contact.email}`} className={a}>{contact.email}</a></li> */}
            <li className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-brand-accent" /><a href={contact.phoneHref} className={a}>{contact.phone}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-5 text-sm md:flex-row">
          <p className="text-white/80">© All copyright 2026 by VIDALES SERVICE LLC</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalLinks.map((l) => <li key={l.to}><Link to={l.to} className={a}>{l.label}</Link></li>)}
          </ul>
        </div>
      </div>
    </footer>
  )
}
