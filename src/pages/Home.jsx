import { Link } from 'react-router-dom'

const features = [
  {
    title: '10 seconds, not 3 minutes',
    description: 'Customers complete a quick checklist instead of writing a full review. Your backend turns it into a polished Google review.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Higher review conversion',
    description: 'Simple checkpoints (food, service, ambience, value) mean more guests actually leave a review.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Better Google visibility',
    description: 'Human-written, policy-compliant reviews improve local search ranking and trust.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
]

const stats = [
  { value: '10 sec', label: 'Average review time' },
  { value: 'Higher', label: 'Conversion rate' },
  { value: 'Organic', label: 'Human-written reviews' },
]

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-white min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_rgba(234,117,29,0.15),_transparent)]" />
        <div className="relative w-full max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
            Google reviews in{' '}
            <span className="text-brand-600">10 seconds</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto">
            Customers scan a QR code, tap checkpoints, and submit. We turn it into a proper Google review—faster for them, better for your café.
          </p>
          <div className="mt-12">
            <Link
              to="/try-demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gray-900 text-white font-medium text-base hover:bg-gray-800 transition-colors"
            >
              Try it
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="font-display text-3xl font-bold text-brand-600">{value}</p>
                <p className="mt-1 text-gray-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-gray-900 text-center">Why cafés choose us</h2>
          <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
            Less friction for customers, more reviews for you, and content that fits Google’s guidelines.
          </p>
          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {features.map(({ title, description, icon }) => (
              <div
                key={title}
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-200/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center">
                  {icon}
                </div>
                <h3 className="mt-4 font-display font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900">Ready to get more reviews?</h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            See the customer flow yourself. No signup required.
          </p>
          <Link
            to="/try-demo"
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-500 text-white font-medium hover:bg-brand-600 transition-colors"
          >
            Try demo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
