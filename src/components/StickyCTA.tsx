"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'

const WHATSAPP_NUMBER = '905454848328'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`lux-sticky-cta ${visible ? 'is-visible' : ''}`} aria-label="Hızlı işlemler">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="lux-sticky-cta__btn lux-sticky-cta__btn--wa"
        aria-label="WhatsApp"
      >
        <span className="lux-sticky-cta__wa-icon" aria-hidden />
        <span className="lux-sticky-cta__tooltip">WhatsApp</span>
      </a>

      <Link href="/iletisim" className="lux-sticky-cta__btn lux-sticky-cta__btn--gold" aria-label="İletişim">
        <span className="lux-sticky-cta__star" aria-hidden>
          ✦
        </span>
        <span className="lux-sticky-cta__tooltip">İletişim</span>
      </Link>
    </div>
  )
}

