'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const KEY = 'ng-theme'

export default function Nav() {
  const pathname = usePathname()
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY)
      const t = saved === 'dark' || saved === 'light'
        ? saved
        : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      setTheme(t)
    } catch {}
  }, [])

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem(KEY, next) } catch {}
  }

  function isActive(href) {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-logo">Nabin Ghimire</Link>
        <nav className="nav-links" aria-label="Primary">
          <Link href="/#work" className="nav-link">Work</Link>
          <Link
            href="/about"
            className="nav-link"
            aria-current={isActive('/about') ? 'page' : undefined}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="nav-link"
            aria-current={isActive('/contact') ? 'page' : undefined}
          >
            Contact
          </Link>
          <button
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}
