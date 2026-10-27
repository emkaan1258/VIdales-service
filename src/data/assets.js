// Every image is referenced by its path on the reference site. Set VITE_ASSET_BASE
// (see .env.example) to serve local copies after `npm run fetch-assets`.
const BASE = import.meta.env.VITE_ASSET_BASE || 'https://securebooksinc.com/assets/images'

export const IMG_PATHS = {
  logo: 'logo.png',
  logoWhite: 'logo-white.png',
  heroShape: 'home-three/hero/shape1.png',
  heroCircle: 'home-three/hero/circle-shape.png',
  heroBanner: 'home-banner.jpg',
  hoverIcon: 'home-three/icon/hover-icon.png',
  check: 'home-three/icon/check.png',
  about: 'home-about.jpg',
  footerShape: 'footer/footer-shape.png',
  weAccept: 'we-accept.png',
  bookkeeping: 'bookkeeping.png',
  bookkeepingColor: 'bookkeeping-color.png',
  payroll: 'payroll.png',
  payrollColor: 'payroll-color.png',
  tax: 'tax.png',
  taxColor: 'tax-color.png',
  accounting: 'accounting.png',
  accountingColor: 'accounting-color.png',
  startup: 'startup-business.png',
  small: 'small-business.png',
  freelancer: 'freelancer-business.png',
  svcBookkeeping: 'bookkeeping-1.jpg',
  svcPayroll: 'payroll-1.jpg',
  svcTax: 'tax-1.jpg',
  svcAccounting: 'account-1.jpg',
  svcCfo: 'cfo-1.jpg',
  iconMission: 'innerpage/icon/icon1.svg',
  iconVision: 'innerpage/icon/icon2.svg',
}

export const ASSET_PATHS = Object.values(IMG_PATHS)
export const img = Object.fromEntries(
  Object.entries(IMG_PATHS).map(([k, v]) => [k, `${BASE}/${v}`]),
)
