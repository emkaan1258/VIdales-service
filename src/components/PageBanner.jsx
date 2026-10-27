import { Link } from 'react-router-dom'

export default function PageBanner({ title, crumb }) {
  return (
    <section className="bg-[#000000f0] py-14 text-white md:py-20">
      <div className="container-site text-center">
        <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
        <ol className="mt-4 flex items-center justify-center gap-2 text-sm">
          <li><Link to="/" className="hover:text-brand-accent">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-brand-accent">{crumb || title}</li>
        </ol>
      </div>
    </section>
  )
}
