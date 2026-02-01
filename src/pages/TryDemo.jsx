import { useState } from 'react'
import { Link } from 'react-router-dom'

const checkpoints = [
  { id: 'food', label: 'Food quality' },
  { id: 'service', label: 'Service' },
  { id: 'ambience', label: 'Ambience / vibe' },
  { id: 'value', label: 'Value for money' },
]

export default function TryDemo() {
  const [selections, setSelections] = useState({})
  const [rating, setRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  function toggleCheckpoint(id) {
    setSelections((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-4 py-20 bg-gray-50">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mt-6 font-display text-2xl font-bold text-gray-900">Thanks for trying the demo</h2>
          <p className="mt-2 text-gray-600">
            In the real flow, your choices would be turned into a human-written Google review and posted for the café.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 text-brand-600 font-medium hover:underline"
          >
            Back to home
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="min-h-[80vh] bg-gray-50 py-12 lg:py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <div className="rounded-2xl bg-white shadow-lg border border-gray-200 overflow-hidden">
            {/* Café logo area - dynamic per café in production */}
            <div className="bg-gradient-to-br from-brand-100 to-brand-50 p-8 flex items-center justify-center border-b border-gray-200">
              <div className="w-24 h-24 rounded-xl bg-white shadow flex items-center justify-center text-brand-600 font-display font-bold text-xl">
                Café
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm text-gray-500 mb-4">Demo: customer feedback flow</p>
              <p className="text-gray-700 font-medium">How was your experience?</p>
              <p className="text-sm text-gray-500 mt-1">Select the areas that matched your visit. No star rating on this screen—just checkpoints.</p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-3">Checkpoints</p>
                  <div className="space-y-2">
                    {checkpoints.map(({ id, label }) => (
                      <label
                        key={id}
                        className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-brand-300 cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={!!selections[id]}
                          onChange={() => toggleCheckpoint(id)}
                          className="rounded border-gray-300 text-brand-600 focus:ring-brand-500"
                        />
                        <span className="text-gray-700">{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-3">Star rating (for submission)</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="p-1 focus:outline-none"
                      >
                        <svg
                          className={`w-8 h-8 ${rating >= star ? 'text-amber-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-brand-500 text-white font-medium hover:bg-brand-600 transition-colors"
                >
                  Submit (demo)
                </button>
              </form>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            This is a simplified demo. In production, each café has its own logo and optional custom checkpoints.
          </p>
        </div>
      </section>
    </>
  )
}
