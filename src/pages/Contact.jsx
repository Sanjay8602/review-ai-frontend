import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-amber-50/50 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold text-gray-900">Contact us</h1>
          <p className="mt-4 text-lg text-gray-600">
            Questions about pricing, integration, or a demo for your café? We’re here to help.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="rounded-2xl bg-brand-50 border border-brand-200 p-8 text-center">
              <p className="font-display font-semibold text-brand-700">Thanks for reaching out.</p>
              <p className="mt-2 text-gray-600 text-sm">
                We’ll get back to you shortly. For urgent requests, you can also email us directly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  placeholder="you@cafe.com"
                />
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-gray-700">Business / Café name</label>
                <input
                  id="business"
                  type="text"
                  name="business"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  placeholder="Your café or restaurant"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  placeholder="Tell us what you need—demo, pricing, integration..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-brand-500 text-white font-medium hover:bg-brand-600 transition-colors"
              >
                Send message
              </button>
            </form>
          )}
          <div className="mt-10 pt-10 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              You can also email us at <a href="mailto:hello@reviewmycafe.com" className="text-brand-600 font-medium hover:underline">hello@reviewmycafe.com</a> for a direct response.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
