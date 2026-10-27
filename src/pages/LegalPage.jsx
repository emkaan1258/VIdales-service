import PageBanner from '../components/PageBanner.jsx'
import Blocks from '../components/Blocks.jsx'
import { legalPages } from '../data/pages.js'

export default function LegalPage({ path }) {
  const page = legalPages[path]
  return (
    <>
      <PageBanner title={page.title} />
      <section className="py-14 md:py-20">
        <div className="container-site max-w-4xl"><Blocks blocks={page.blocks} /></div>
      </section>
    </>
  )
}
