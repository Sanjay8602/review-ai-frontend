import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/how-it-works', label: 'How it Works' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl text-brand-600">
            <span className="w-9 h-9 rounded-lg bg-brand-500 flex items-center justify-center text-white text-sm">RMC</span>
            Review My Cafe
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === to ? 'text-brand-600' : 'text-gray-600 hover:text-brand-600'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/try-demo"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors"
            >
              Try it
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-2">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    location.pathname === to ? 'bg-brand-50 text-brand-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/try-demo"
                className="mx-4 mt-2 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-brand-500 text-white text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                Try it
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
