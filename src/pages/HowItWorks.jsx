const steps = [
  {
    step: 1,
    title: 'Place QR at your café',
    description: 'You get a unique QR code (and optional table tents or stickers). Customers scan it with their phone—no app download.',
  },
  {
    step: 2,
    title: 'Customer sees your branded page',
    description: 'A web page opens with your café logo at the top. Checkpoints like food quality, service, ambience, and value for money are shown. No star rating clutter on this screen—just clear options.',
  },
  {
    step: 3,
    title: 'They tap, rate, and submit',
    description: 'The customer selects their experience, gives a star rating, and clicks submit. The whole thing takes about 10 seconds.',
  },
  {
    step: 4,
    title: 'We post a proper Google review',
    description: 'Our backend turns their choices into a human-written, policy-compliant review and posts it to Google. You get better visibility and trust without the customer doing the writing.',
  },
]

export default function HowItWorks() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-amber-50/50 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold text-gray-900">How it works</h1>
          <p className="mt-4 text-lg text-gray-600">
            From QR scan to live Google review in four simple steps.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map(({ step, title, description }) => (
              <div key={step} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-500 text-white font-display font-bold flex items-center justify-center">
                  {step}
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold text-gray-900">{title}</h2>
                  <p className="mt-2 text-gray-600 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-12 text-gray-600 text-sm">
            The review screen is dynamic: each café has its own logo and branding. Other sections (e.g. feedback options or checkpoints) can be configured as needed.
          </p>
        </div>
      </section>
    </>
  )
}
