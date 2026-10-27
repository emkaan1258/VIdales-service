import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="py-24 text-center">
      <div className="container-site">
        <h1 className="mb-4 text-5xl font-bold text-brand-dark">Page not found</h1>
        <p className="mb-8 text-ink-muted">The page you are looking for does not exist.</p>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    </section>
  )
}
