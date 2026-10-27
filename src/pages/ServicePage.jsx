import PageBanner from '../components/PageBanner.jsx'
import Blocks from '../components/Blocks.jsx'
import { servicePages } from '../data/pages.js'
import { img } from '../data/assets.js'

export default function ServicePage({ path }) {
  const page = servicePages[path]
  return (
    <>
      <PageBanner title={page.title} />
      <section className="py-14 md:py-20">
        <div className="container-site grid gap-10 mb-10">
          <img src={img[page.image]} alt="service image" className="mx-w-full h-auto rounded-2xl  " />
          
        </div>
        <div className="container-site grid gap-10 "><div><Blocks blocks={page.blocks} /></div></div>
      </section>
    </>
  )
}
