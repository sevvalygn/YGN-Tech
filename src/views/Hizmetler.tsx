"use client"

import { useState } from 'react'
import ContactFormBlock from '../components/ContactFormBlock'

const DEVICE_SERVICES: Record<string, string[]> = {
  telefon: ['Çatlak ekran', 'Kırık şarj portu', 'Mikrofon çalışmıyor', 'Hatalı ana sayfa düğmesi'],
  tablet: ['Çatlak ekran', 'Kırık şarj portu', 'Mikrofon çalışmıyor', 'Hatalı ana sayfa düğmesi'],
  bilgisayar: ['Cihazınızı teşhis etme', 'Ekran tamiri', 'Klavye değiştirme', 'Donanım ve yazılım kurulumu'],
  diger: ['HDMI port değişimi', 'Sabit disk onarımı', 'Ekran hasarı', 'Batarya sorunu'],
}

const DEVICE_IMAGES: Record<string, string> = {
  telefon: 'akilli-telefon-onarim.png',
  tablet: 'tablet-onarim.png',
  bilgisayar: 'bilgisayar-onarim.png',
  diger: 'diger-onarim.png',
}

const DEVICE_ALTS: Record<string, string> = {
  telefon: 'Akıllı telefon onarımı',
  tablet: 'Tablet onarımı',
  bilgisayar: 'Bilgisayar ve laptop onarımı',
  diger: 'Akıllı saat onarımı',
}

export default function Hizmetler() {
  const [selectedCategory, setSelectedCategory] = useState<'telefon' | 'tablet' | 'bilgisayar' | 'diger'>('telefon')

  return (
    <section className="page-section page-section--hizmetler">
      <h1 className="page-section__title">Hizmetler</h1>

      <div className="device-categories">
        <button
          type="button"
          className={`device-categories__card device-categories__card--active ${
            selectedCategory === 'telefon' ? 'device-categories__card--selected' : ''
          }`}
          onClick={() => setSelectedCategory('telefon')}
        >
          <span className="device-categories__icon" aria-hidden>
            📱
          </span>
          <h3 className="device-categories__title">Akıllı Telefon</h3>
          <p className="device-categories__sub">iPhone&apos;lar, Akıllı Telefonlar</p>
        </button>
        <button
          type="button"
          className={`device-categories__card ${selectedCategory === 'tablet' ? 'device-categories__card--selected' : ''}`}
          onClick={() => setSelectedCategory('tablet')}
        >
          <span className="device-categories__icon" aria-hidden>
            📲
          </span>
          <h3 className="device-categories__title">Tablet</h3>
          <p className="device-categories__sub">iPad, diğer</p>
        </button>
        <button
          type="button"
          className={`device-categories__card ${
            selectedCategory === 'bilgisayar' ? 'device-categories__card--selected' : ''
          }`}
          onClick={() => setSelectedCategory('bilgisayar')}
        >
          <span className="device-categories__icon" aria-hidden>
            💻
          </span>
          <h3 className="device-categories__title">Bilgisayar</h3>
          <p className="device-categories__sub">Mac, Masaüstü, Laptop</p>
        </button>
        <button
          type="button"
          className={`device-categories__card ${selectedCategory === 'diger' ? 'device-categories__card--selected' : ''}`}
          onClick={() => setSelectedCategory('diger')}
        >
          <span className="device-categories__icon" aria-hidden>
            ⌚
          </span>
          <h3 className="device-categories__title">Diğer</h3>
          <p className="device-categories__sub">Akıllı Saat ve Projeksiyon</p>
        </button>
      </div>

      <div className={`device-detail device-detail--${selectedCategory}`}>
        <div className="device-detail__inner">
          <div className="device-detail__list">
            <ul className="device-detail__services">
              {(DEVICE_SERVICES[selectedCategory] || []).map((label) => (
                <li key={label} className="device-detail__service">
                  <span className="device-detail__service-icon" aria-hidden />
                  <span className="device-detail__service-label">{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="device-detail__image-wrap">
            <img src={`/${DEVICE_IMAGES[selectedCategory]}`} alt={DEVICE_ALTS[selectedCategory]} />
            <a href="tel:+905454848328" className="device-detail__cta">
              TIKLA ARA
            </a>
          </div>
        </div>
      </div>

      <ContactFormBlock />
    </section>
  )
}

