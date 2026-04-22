"use client"

import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export default function Anasayfa() {
  const [showCihaz, setShowCihaz] = useState(false)
  const [showArayalim, setShowArayalim] = useState(false)
  const [showFiyat, setShowFiyat] = useState(false)

  return (
    <section className="page-section anasayfa">
      <h1 className="page-section__title anasayfa__welcome">Hoş Geldiniz</h1>
      <p className="anasayfa__intro">
        YGN Tech’e hoş geldiniz. Aşağıdaki seçeneklerden size uygun olanı seçerek işleminize başlayabilirsiniz.
      </p>

      <div className="anasayfa__buttons">
        <button type="button" className="anasayfa__btn" onClick={() => setShowCihaz(true)}>
          <span className="anasayfa__btn-icon" aria-hidden>
            📋
          </span>
          <span>Servis Kaydı Aç</span>
        </button>
        <button type="button" className="anasayfa__btn" onClick={() => setShowArayalim(true)}>
          <span className="anasayfa__btn-icon" aria-hidden>
            📞
          </span>
          <span>Biz Sizi Arayalım mı?</span>
        </button>
        <button type="button" className="anasayfa__btn" onClick={() => setShowFiyat(true)}>
          <span className="anasayfa__btn-icon" aria-hidden>
            💰
          </span>
          <span>Fiyat Sorgulama</span>
        </button>
      </div>

      <Modal show={showCihaz} onHide={() => setShowCihaz(false)} centered className="anasayfa-modal">
        <Modal.Header closeButton>
          <Modal.Title>Cihaz Gönderimi İçin Başvuru</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3">
              <Form.Label>Ad Soyad</Form.Label>
              <Form.Control type="text" placeholder="Adınız ve soyadınız." />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>E-Posta Adresi</Form.Label>
              <Form.Control type="email" placeholder="E-Posta adresiniz." />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Telefon</Form.Label>
              <Form.Control type="tel" placeholder="Başına 0 koymayınız." />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Arıza</Form.Label>
              <Form.Control as="textarea" rows={2} placeholder="Kısaca arıza nedir?" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ürün Cinsi</Form.Label>
              <Form.Select>
                <option>Lütfen Seçiniz</option>
                <option>Dizüstü Bilgisayar</option>
                <option>Masaüstü PC</option>
                <option>Mac</option>
                <option>Tablet</option>
                <option>Telefon</option>
                <option>Projeksiyon</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ürün Modeli</Form.Label>
              <Form.Control type="text" placeholder="Model numaranız." />
            </Form.Group>
            <Button type="submit" className="anasayfa-modal__submit w-100" onClick={(e) => e.stopPropagation()}>
              TALEBİ GÖNDER →
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showArayalim} onHide={() => setShowArayalim(false)} centered className="anasayfa-modal">
        <Modal.Header closeButton>
          <Modal.Title>Formu Doldurun Biz Sizi Arayalım</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="anasayfa-modal__subtitle">Formu doldurun ve uzman ekibimiz randevu saatinde sizi arasın.</p>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3">
              <Form.Label>Ad Soyad</Form.Label>
              <Form.Control type="text" placeholder="Adınız ve soyadınız." />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cep Telefonu</Form.Label>
              <Form.Control type="tel" placeholder="Başına 0 koymayınız." />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Model</Form.Label>
              <Form.Control type="text" placeholder="Model kodu nedir?" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Konu</Form.Label>
              <Form.Control type="text" placeholder="Kısaca ne konu?" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ürün Cinsi</Form.Label>
              <Form.Select>
                <option>Lütfen Seçiniz</option>
                <option>Dizüstü Bilgisayar</option>
                <option>Masaüstü PC</option>
                <option>Mac</option>
                <option>Tablet</option>
                <option>Telefon</option>
                <option>Projeksiyon</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Randevu Saati</Form.Label>
              <Form.Select>
                <option>09:00 - 09:30</option>
                <option>09:30 - 10:00</option>
                <option>10:00 - 10:30</option>
                <option>10:30 - 11:00</option>
                <option>11:00 - 11:30</option>
                <option>11:30 - 12:00</option>
                <option>12:00 - 12:30</option>
                <option>12:30 - 13:00</option>
                <option>13:00 - 13:30</option>
                <option>13:30 - 14:00</option>
                <option>14:00 - 14:30</option>
                <option>14:30 - 15:00</option>
                <option>15:00 - 15:30</option>
                <option>15:30 - 16:00</option>
                <option>16:00 - 16:30</option>
                <option>16:30 - 17:00</option>
              </Form.Select>
            </Form.Group>
            <Button type="submit" className="anasayfa-modal__submit w-100" onClick={(e) => e.stopPropagation()}>
              RANDEVU OLUŞTUR →
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showFiyat} onHide={() => setShowFiyat(false)} centered className="anasayfa-modal">
        <Modal.Header closeButton>
          <Modal.Title>Tahmini Fiyat Teklif Sorgulama</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="anasayfa-modal__subtitle">Tahmini fiyat teklifinizi hemen alın.</p>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3">
              <Form.Label>Model</Form.Label>
              <Form.Control type="text" placeholder="Model adı giriniz" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Arıza Türü</Form.Label>
              <Form.Select>
                <option>Ekran</option>
                <option>Batarya</option>
                <option>Klavye</option>
                <option>Ana Kart</option>
                <option>Yazılım</option>
                <option>Diğer</option>
              </Form.Select>
            </Form.Group>
            <Button type="submit" className="anasayfa-modal__submit w-100" onClick={(e) => e.stopPropagation()}>
              FİYAT TAHMİNİ AL
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </section>
  )
}

