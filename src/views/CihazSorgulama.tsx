"use client"

import { useState } from 'react'

export default function CihazSorgulama() {
  const [takipKodu, setTakipKodu] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <section className="page-section cihaz-sorgulama">
      <div className="cihaz-sorgulama__inner">
        <h1 className="cihaz-sorgulama__title">Cihaz Sorgulama</h1>
        <p className="cihaz-sorgulama__subtitle">Cihazınızın durumunu takip kodunuz ile sorgulayabilirsiniz..</p>
        <form className="cihaz-sorgulama__form" onSubmit={handleSubmit}>
          <label className="cihaz-sorgulama__label" htmlFor="cihaz-takip">
            Takip Kodunuzu, Imei veya Kargo Takip numaranızı giriniz:
          </label>
          <input
            id="cihaz-takip"
            type="text"
            className="cihaz-sorgulama__input"
            placeholder="Takip kodu, IMEI veya kargo numarası"
            value={takipKodu}
            onChange={(e) => setTakipKodu(e.currentTarget.value)}
          />
          <button type="submit" className="cihaz-sorgulama__btn">
            CIHAZ DURUMUNU SORGULA
          </button>
        </form>
      </div>
    </section>
  )
}

