import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Starter',
    price: 'Affordable',
    description: 'For single-location cafés and small restaurants.',
    features: [
      'One location',
      'Your logo on review page',
      'QR code + link',
      'Human-written reviews',
      'Email support',
    ],
    cta: 'Get started',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: 'Popular',
    description: 'For multiple outlets or higher review volume.',
    features: [
      'Multiple locations',
      'Custom branding',
      'Priority review writing',
      'Analytics dashboard',
      'Dedicated support',
    ],
    cta: 'Contact us',
    highlighted: true,
  },
]

export default function Pricing() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-amber-50/50 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold text-gray-900">Simple, affordable pricing</h1>
          <p className="mt-4 text-lg text-gray-600">
            Paid subscription model designed for cafés and restaurants. No hidden fees.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border-2 p-8 ${
                  plan.highlighted
                    ? 'border-brand-500 bg-brand-50/50 shadow-lg'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-brand-500 text-white text-xs font-medium">
                    Popular
                  </span>
                )}
                <h2 className="font-display text-xl font-semibold text-gray-900">{plan.name}</h2>
                <p className="mt-1 text-brand-600 font-medium">{plan.price}</p>
                <p className="mt-3 text-gray-600 text-sm">{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="text-brand-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={plan.cta === 'Contact us' ? '/contact' : '/contact'}
                  className={`mt-8 block w-full text-center py-3 rounded-xl font-medium transition-colors ${
                    plan.highlighted
                      ? 'bg-brand-500 text-white hover:bg-brand-600'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-gray-600 text-sm">
            Exact pricing depends on location count and volume. <Link to="/contact" className="text-brand-600 font-medium hover:underline">Contact us</Link> for a quote.
          </p>
        </div>
      </section>
    </>
  )
}
