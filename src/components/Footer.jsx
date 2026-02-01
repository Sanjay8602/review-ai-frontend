import { Link } from 'react-router-dom'

const footerLinks = {
  Product: [
    { to: '/how-it-works', label: 'How it Works' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/try-demo', label: 'Try Demo' },
  ],
  Company: [
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg text-white">
              <span className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white text-xs">RMC</span>
              Review My Cafe
            </Link>
            <p className="mt-3 text-sm text-gray-400 max-w-xs">
              Get Google reviews in 10 seconds. Built for cafés and restaurants.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider">{title}</h3>
              <ul className="mt-4 space-y-2">
                {links.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className="text-sm hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© {currentYear} Review My Cafe. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
