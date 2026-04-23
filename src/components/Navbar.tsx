"use client"

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItem = { path: string; label: string }

const navItems: NavItem[] = [
  { path: '/', label: 'Anasayfa' },
  { path: '/hakkimizda', label: 'Hakkımızda' },
  { path: '/hizmetler', label: 'Hizmetler' },
  { path: '/onarim-fiyati-sorgulama', label: 'Onarım Fiyatı Sorgulama' },
  { path: '/cihaz-sorgulama', label: 'Cihaz Sorgulama' },
  { path: '/iletisim', label: 'İletişim' },
]

function MenuIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden focusable="false">
        <path
          fill="currentColor"
          d="M18.3 5.7a1 1 0 0 1 0 1.4L13.4 12l4.9 4.9a1 1 0 1 1-1.4 1.4L12 13.4l-4.9 4.9a1 1 0 1 1-1.4-1.4l4.9-4.9-4.9-4.9a1 1 0 0 1 1.4-1.4l4.9 4.9 4.9-4.9a1 1 0 0 1 1.4 0Z"
        />
      </svg>
    )
  }

  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden focusable="false">
      <path fill="currentColor" d="M4 7a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2H4Zm0 6a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2H4Zm0 6a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2H4Z" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname() || '/'

  const activeKey = useMemo(() => {
    const match = navItems.find((i) => i.path === pathname)
    return match?.path ?? pathname
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <nav className={`lux-navbar ${scrolled ? 'lux-glass lux-navbar--scrolled' : ''}`}>
      <div className="lux-container">
        <div className="lux-navbar__inner">
          <Link href="/" className="lux-brand">
            <span className="lux-brand__mark" aria-hidden>
              <span className="lux-brand__mark-letter">Y</span>
            </span>
            <span>
              <span className="lux-brand__title">YGN Tech</span>
              <span className="lux-brand__subtitle">Teknik Servis</span>
            </span>
          </Link>

          <div className="lux-nav-desktop" aria-label="Ana menü">
            {navItems.map(({ path, label }) => (
              <Link key={path} href={path} className="lux-nav-link" aria-current={activeKey === path ? 'page' : undefined}>
                {label}
              </Link>
            ))}
          </div>

          <div className="lux-nav-cta">
            <Link href="/iletisim" className="lux-btn-gold-filled">
              İletişim
            </Link>
          </div>

          <button
            type="button"
            className="lux-nav-mobile-toggle"
            aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        {menuOpen && (
          <div className="lux-mobile-panel" aria-label="Mobil menü">
            {navItems.map(({ path, label }) => (
              <Link key={path} href={path} className="lux-nav-link" aria-current={activeKey === path ? 'page' : undefined}>
                {label}
              </Link>
            ))}
            <Link href="/iletisim" className="lux-btn-gold-filled">
              İletişim
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

