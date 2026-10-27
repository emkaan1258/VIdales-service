import { useState } from 'react'
import PageBanner from '../components/PageBanner.jsx'
import { contact } from '../data/site.js'

const empty = { firstName: '', lastName: '', email: '', phone: '', website: '', subject: '', message: '' }
const required = ['firstName', 'lastName', 'email', 'phone', 'subject', 'message']
const labels = { firstName: 'First Name', lastName: 'Last Name', email: 'Email Address', phone: 'Telephone', website: 'Website', subject: 'Subject', message: 'Comments / Questions' }

function validate(v) {
  const e = {}
  required.forEach((k) => { if (!v[k].trim()) e[k] = `${labels[k]} is required.` })
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (v.phone && v.phone.replace(/\D/g, '').length < 7) e.phone = 'Enter a valid telephone number.'
  if (v.website && !/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/i.test(v.website.trim())) e.website = 'Enter a valid website address.'
  return e
}

const field = 'w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20'

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)

  const onChange = (e) => setValues((p) => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) { setDone(false); return }
    // No backend is configured, so nothing is transmitted by this site.
    // Fall back to the visitor's own email client with the message pre-filled.
    const body = [
      `Name: ${values.firstName} ${values.lastName}`, `Email: ${values.email}`, `Telephone: ${values.phone}`,
      values.website && `Website: ${values.website}`, '', values.message,
    ].filter((l) => l !== false && l !== '').join('\n')
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`
    setDone(true)
  }

  const input = (name, type = 'text', extra = {}) => (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-brand-dark">
        {labels[name]}{required.includes(name) && <span className="text-red-600"> *</span>}
      </label>
      <input id={name} name={name} type={type} value={values[name]} onChange={onChange} required={required.includes(name)}
        aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-err` : undefined} className={field} {...extra} />
      {errors[name] && <p id={`${name}-err`} className="mt-1 text-sm text-red-600">{errors[name]}</p>}
    </div>
  )

  return (
    <>
      <PageBanner title="Contact us" crumb="Contact Us" />
      <section className="py-14 md:py-20">
        <div className="container-site max-w-3xl">
          <h4 className="text-2xl font-bold text-brand-dark">Your Details</h4>
          <p className="mb-8 mt-1 text-ink-muted">Let us know how to get back to you.</p>
          <form onSubmit={onSubmit} noValidate className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              {input('firstName', 'text', { autoComplete: 'given-name' })}
              {input('lastName', 'text', { autoComplete: 'family-name' })}
              {input('email', 'email', { autoComplete: 'email' })}
              {input('phone', 'tel', { autoComplete: 'tel' })}
            </div>
            {input('website', 'url', { autoComplete: 'url', placeholder: 'https://' })}
            {input('subject')}
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-brand-dark">{labels.message}<span className="text-red-600"> *</span></label>
              <textarea id="message" name="message" rows={6} value={values.message} onChange={onChange} required
                aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} className={field} />
              {errors.message && <p id="message-err" className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>
            <div className="flex justify-center">
            <button type="submit" className="btn-primary  bg-[#063232]">Send Message</button>
            </div>
            {done && (
              <p role="status" className="rounded-md border border-brand/30 bg-brand-soft p-4 text-sm text-brand-dark">
                Your email app should now open with this message pre-filled. It has not been sent until you send it from
                there. This website has no form backend connected; you can also write to{' '}
                <a className="font-semibold underline" href={`mailto:${contact.email}`}>{contact.email}</a> or call{' '}
                <a className="font-semibold underline" href={contact.phoneHref}>{contact.phone}</a>.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  )
}
