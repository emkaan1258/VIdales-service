import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { nav, contact } from '../data/site.js'
import { img } from '../data/assets.js'

// The reference shows four social icons whose hrefs are "#". Network names are not
// exposed in the page text, so the common four are used here (verify against the site).
const socials = [
  { label: 'Facebook', Icon: Facebook },
  { label: 'Twitter', Icon: Twitter },
  { label: 'Instagram', Icon: Instagram },
  { label: 'LinkedIn', Icon: Linkedin },
]

const linkCls = ({ isActive }) =>
  `block py-2 text-[15px] font-medium transition-colors hover:text-brand-accent ${isActive ? 'text-brand-accent' : 'text-brand-dark'}`

function DesktopDropdown({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <li className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
        onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false) }}>
      <button type="button" aria-haspopup="true" aria-expanded={open} onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 py-2 text-[15px] font-medium text-brand-dark transition-colors hover:text-brand-accent">
        {item.label} <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <ul className={`absolute left-0 top-full z-50 min-w-[220px] rounded-md border-t-2 border-brand-accent bg-white py-2 shadow-xl transition-all duration-200 ${open ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'}`}>
        {item.children.map((c) => (
          <li key={c.to}>
            <NavLink to={c.to} onClick={() => setOpen(false)}
              className={({ isActive }) => `block px-5 py-2 text-sm transition-colors hover:bg-brand-soft hover:text-brand-accent ${isActive ? 'text-brand-accent' : 'text-brand-dark'}`}>
              {c.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [svcOpen, setSvcOpen] = useState(false)
  const [stuck, setStuck] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setMobileOpen(false); setSvcOpen(false) }, [pathname])
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className="hidden bg-[#063232] text-white lg:block  justify-end">
        <div className="container-site flex items-end justify-between py-2 text-sm">
          {/* <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-brand-accent"><Mail size={14} />{contact.email}</a> */}
          <div className="flex items-center gap-6">
            <a href={contact.phoneHref} className="flex items-center gap-2 hover:text-brand-accent"><Phone size={14} />{contact.phone}</a>
            <span className="flex items-center gap-2"><MapPin size={14} />{contact.address}</span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className={`bg-[#F4F8EC] transition-shadow ${stuck ? 'fixed inset-x-0 top-0 shadow-md' : 'relative'}`}>
        <div className="container-site flex items-center justify-between py-3">
         
<Link to="/" className="group inline-flex flex-col leading-none">
  <span className="text-xl font-extrabold  text-[#063232] transition-colors group-hover:text-[#e3572b] sm:text-1xl">
    VIDALES SERVICE
  </span>
  <span className="mt-1.5 text-xs font-semibold tracking-[0.38em] text-[#e3572b] sm:text-sm">
    L L C
  </span>
  <span className="mt-2 h-1 w-12 rounded-full bg-[#063232] transition-all group-hover:w-20" />
</Link>


          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) =>
                item.children ? <DesktopDropdown key={item.label} item={item} /> : (
                  <li key={item.label}><NavLink to={item.to} end={item.to === '/'} className={linkCls}>{item.label}</NavLink></li>
                ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact-us" className="btn-primary bg-[#063232] hidden !py-2.5 sm:inline-flex">Get Started</Link>
            <button type="button" className="p-2 text-brand-dark lg:hidden" aria-label="Open menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
      {stuck && <div className="h-[72px] sm:h-[80px]" aria-hidden="true" />}

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-[60] lg:hidden ${mobileOpen ? '' : 'pointer-events-none'}`} aria-hidden={!mobileOpen}>
        <div className={`absolute inset-0 bg-black/50 transition-opacity ${mobileOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setMobileOpen(false)} />
        <aside className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col overflow-y-auto bg-white p-6 shadow-xl transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="mb-6 flex items-center justify-between">
           <Link to="/" className="group inline-flex flex-col leading-none">
  <span className="text-xl font-extrabold  text-[#063232] transition-colors group-hover:text-[#e3572b] sm:text-xl">
    VIDALES SERVICE
  </span>
  <span className="mt-1.5 text-xs font-semibold tracking-[0.38em] text-[#e3572b] sm:text-sm">
    L L C
  </span>
  <span className="mt-2 h-1 w-12 rounded-full bg-[#063232] transition-all group-hover:w-20" />
</Link>

            <button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)} className="p-2"><X size={26} /></button>
          </div>
          <ul className="divide-y divide-gray-100">
            {nav.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <button type="button" aria-expanded={svcOpen} onClick={() => setSvcOpen((o) => !o)}
                    className="flex w-full items-center justify-between py-3 text-left font-medium text-brand-dark">
                    {item.label} <ChevronDown size={18} className={`transition-transform ${svcOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {svcOpen && (
                    <ul className="mb-2 ml-3 border-l-2 border-brand-accent pl-4">
                      {item.children.map((c) => <li key={c.to}><NavLink to={c.to} className={linkCls}>{c.label}</NavLink></li>)}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.label}><NavLink to={item.to} end={item.to === '/'} className={({ isActive }) => `block py-3 font-medium ${isActive ? 'text-brand-accent' : 'text-brand-dark'}`}>{item.label}</NavLink></li>
              ))}
          </ul>
          <Link to="/contact-us" className="btn-primary mt-6">Get Started</Link>
          <h5 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wider text-brand-dark">Follow Us</h5>
          <ul className="flex gap-3">
            {socials.map(({ label, Icon }) => (
              <li key={label}><a href="#" aria-label={label} onClick={(e) => e.preventDefault()} className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white hover:bg-brand-accent hover:text-brand-dark"><Icon size={16} /></a></li>
            ))}
          </ul>
          <div className="mt-8 space-y-2 text-sm text-ink-muted">
            <a href={`mailto:${contact.email}`} className="block">{contact.email}</a>
            <a href={contact.phoneHref} className="block">{contact.phone}</a>
            <p>{contact.address}</p>
          </div>
        </aside>
      </div>
    </header>
  )
}
