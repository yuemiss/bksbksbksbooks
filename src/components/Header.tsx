import { Link } from '@tanstack/react-router'
import { Instagram } from 'lucide-react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-medium tracking-tight">
          BksBksBksBooks
        </Link>

        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/bksbksbksbooks/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
            aria-label="Instagram"
          >
            <Instagram size={22} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </header>
  )
}
