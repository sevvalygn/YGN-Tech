"use client"

import { useState } from 'react'

export default function OnarimFiyatiSorgulama() {
  const [model, setModel] = useState('')
  const [arizaTuru, setArizaTuru] = useState('Ekran')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const text = ['Merhaba, fiyat tahmini istiyorum.', `Model: ${model || '-'}`, `Arıza türü: ${arizaTuru}`].join('\n')
    window.open(`https://wa.me/905454848328?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="page-section onarim-fiyati">
      <div className="onarim-fiyati__bg" aria-hidden />
      <div className="onarim-fiyati__inner">
        <h1 className="onarim-fiyati__title">Onarım Fiyatı Sorgulama</h1>
        <form className="onarim-fiyati__card" onSubmit={handleSubmit}>
          <div className="onarim-fiyati__fields">
            <div className="onarim-fiyati__field onarim-fiyati__field--model">
              <label className="onarim-fiyati__label" htmlFor="fiyat-model">
                Model
              </label>
              <input
                id="fiyat-model"
                type="text"
                className="onarim-fiyati__input"
                placeholder="Model adı giriniz (örn. iPhone)"
                value={model}
                onChange={(e) => setModel(e.currentTarget.value)}
                autoComplete="off"
              />
            </div>
            <div className="onarim-fiyati__field">
              <label className="onarim-fiyati__label" htmlFor="fiyat-ariza">
                Arıza Türü
              </label>
              <select
                id="fiyat-ariza"
                className="onarim-fiyati__input onarim-fiyati__select"
                value={arizaTuru}
                onChange={(e) => setArizaTuru(e.currentTarget.value)}
              >
                <option value="Ekran">Ekran</option>
                <option value="Batarya">Batarya</option>
                <option value="İç kulaklık">İç kulaklık</option>
                <option value="Mikrofon">Mikrofon</option>
                <option value="Şarj soketi">Şarj soketi</option>
              </select>
            </div>
          </div>
          <button type="submit" className="onarim-fiyati__btn">
            <span className="onarim-fiyati__btn-line">FİYAT</span>
            <span className="onarim-fiyati__btn-line">TAHMİNİ AL</span>
          </button>
        </form>
      </div>
    </section>
  )
}

