"use client"

import { useState } from 'react'

const CONTACT_EMAIL = 'enescanyagan@gmail.com'

type FormData = {
  adSoyad: string
  email: string
  cep: string
  konu: string
  soru: string
}

export default function ContactFormBlock() {
  const [formData, setFormData] = useState<FormData>({
    adSoyad: '',
    email: '',
    cep: '',
    konu: '',
    soru: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const subject = formData.konu ? encodeURIComponent(`[İletişim] ${formData.konu}`) : encodeURIComponent('İletişim formu - YGN Tech')
    const body = [
      `Ad Soyad: ${formData.adSoyad}`,
      `E-Posta: ${formData.email}`,
      `Cep: ${formData.cep}`,
      formData.konu ? `Konu: ${formData.konu}` : '',
      '',
      'Sorunuz:',
      formData.soru,
    ]
      .filter(Boolean)
      .join('\n')
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(body)}`
    setFormData({ adSoyad: '', email: '', cep: '', konu: '', soru: '' })
  }

  return (
    <div className="contact-form-block">
      <h2 className="contact-form-block__title">Bir Soru Sorun?</h2>
      <p className="contact-form-block__subtitle">Aklınızda bazı sorular var ise bunların cevabını almak için bize yazabilirsiniz.</p>
      <div className="contact-form-block__arrow" aria-hidden />

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form__row">
          <input
            type="text"
            name="adSoyad"
            className="contact-form__input"
            placeholder="Ad Soyad"
            value={formData.adSoyad}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="contact-form__input"
            placeholder="E-Posta"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="tel"
          name="cep"
          className="contact-form__input contact-form__input--full"
          placeholder="Cep Numarası"
          value={formData.cep}
          onChange={handleChange}
        />
        <input
          type="text"
          name="konu"
          className="contact-form__input contact-form__input--full"
          placeholder="Kısaca konu nedir?"
          value={formData.konu}
          onChange={handleChange}
        />
        <textarea
          name="soru"
          className="contact-form__textarea"
          placeholder="Sorunuz"
          rows={5}
          value={formData.soru}
          onChange={handleChange}
          required
        />
        <button type="submit" className="contact-form__submit">
          FORMU GÖNDER
        </button>
      </form>
    </div>
  )
}

