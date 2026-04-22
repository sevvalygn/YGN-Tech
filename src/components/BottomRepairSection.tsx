"use client"

import { useState } from 'react'

const categories = [
  { id: 'telefon', label: 'Akıllı Telefon', sub: "iPhone'lar, Akıllı Telefonlar", icon: '📱' },
  { id: 'tablet', label: 'Tablet', sub: 'iPad, diğer', icon: '📱' },
  { id: 'bilgisayar', label: 'Bilgisayar', sub: 'Mac, Masaüstü, Laptop', icon: '💻' },
  { id: 'projeksiyon', label: 'Projeksiyon', sub: 'Projeksiyon cihazları', icon: '📽️' },
  { id: 'diger', label: 'Diğer', sub: 'Akıllı Saat, Oyun Konsolu', icon: '⌚' },
]

const issues = [
  { text: 'ÇATLAK EKRAN', icon: '📱' },
  { text: 'KIRIK ŞARJ PORTU', icon: '🔌' },
  { text: 'MİKROFON ÇALIŞMIYOR', icon: '🎤' },
  { text: 'HATALI ANA SAYFA DÜĞMESİ', icon: '⭕' },
  { text: 'BOZUK KULAK HOPARLÖRÜ', icon: '🔊' },
  { text: 'BOZUK ÖN / ARKA KAMERA', icon: '📷' },
  { text: 'HATALI GÜÇ DÜĞMESİ', icon: '⏻' },
  { text: 'SAĞLIKSIZ PİL', icon: '🔋' },
]

export default function BottomRepairSection() {
  const [activeCategory, setActiveCategory] = useState('telefon')

  return (
    <section className="bottom-repair">
      <div className="bottom-repair__categories">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`bottom-repair__cat ${activeCategory === cat.id ? 'bottom-repair__cat--active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <span className="bottom-repair__cat-icon">{cat.icon}</span>
            <span className="bottom-repair__cat-label">{cat.label}</span>
            <span className="bottom-repair__cat-sub">{cat.sub}</span>
          </button>
        ))}
      </div>

      <div className="bottom-repair__content">
        <ul className="bottom-repair__issues">
          {issues.map((item) => (
            <li key={item.text} className="bottom-repair__issue">
              <span className="bottom-repair__issue-icon">{item.icon}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        <div className="bottom-repair__phones">
          <span className="bottom-repair__phone-svg" aria-hidden>
            <svg viewBox="0 0 80 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="4" width="64" height="152" rx="12" fill="#2d3748" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
              <rect x="12" y="20" width="56" height="112" rx="4" fill="#1a202c" />
              <circle cx="40" cy="148" r="6" fill="#4a5568" />
            </svg>
          </span>
          <span className="bottom-repair__phone-svg bottom-repair__phone-svg--2" aria-hidden>
            <svg viewBox="0 0 80 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="4" width="64" height="152" rx="12" fill="#4a5568" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
              <circle cx="40" cy="32" r="8" fill="#2d3748" />
              <rect x="28" y="44" width="24" height="4" rx="2" fill="#2d3748" />
              <circle cx="40" cy="148" r="6" fill="#2d3748" />
            </svg>
          </span>
        </div>

        <div className="bottom-repair__actions">
          <a href="tel:+905454848328" className="bottom-repair__btn bottom-repair__btn--primary">
            TIKLA ARA →
          </a>
          <button type="button" className="bottom-repair__btn bottom-repair__btn--secondary">
            Bul
          </button>
        </div>
      </div>
    </section>
  )
}

