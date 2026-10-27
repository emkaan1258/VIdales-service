import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import BackToTop from './BackToTop.jsx'

const TITLES = {
  '/': 'Homepage', '/bookkeeping': 'Bookkeeping', '/payroll-services': 'Payroll Services',
  '/tax-preparation': 'Tax Preparation', '/accounting-services': 'Accounting Services',
  '/cfo-services': 'CFO Services', '/industries': 'Industries', '/pricing': 'Pricing',
  '/about-us': 'Why Choose Us', '/contact-us': 'Contact Us', '/website-disclaimer': 'Website Disclaimer',
  '/term-condition': 'Term Condition', '/privacy-policy': 'Privacy Policy', '/return-policy': 'Return Policy',
}

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
    document.title = `${TITLES[pathname] || 'Page not found'} - Vidales Service`
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[100] focus:bg-white focus:p-2">
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
