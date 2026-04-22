"use client"

import { useState } from 'react'

const faqItems = [
  {
    question: 'Hizmetim ne kadar sürer?',
    answer:
      'Süre cihaz ve arızaya göre değişir. Tüm hizmetlerimizde 6 ay garanti sunuyoruz. Detaylar için avantajlarımıza göz atın.',
  },
  {
    question: 'Ürünümü size getirmek için randevu almam gerekir mi?',
    answer: 'Randevu almanız işlemleri hızlandırır. Birinci sınıf parçalar ve hızlı hizmet için avantajlarımızı inceleyebilirsiniz.',
  },
  {
    question: 'Bir teknisyen evimi veya ofisimi ziyaret edebilir mi?',
    answer: "Hizmet detayları için bizimle iletişime geçin. 20.000'den fazla cihaz tecrübemizle yanınızdayız. Avantajlarımıza bakın.",
  },
  {
    question: 'Kullandığınız yedek parçalar orijinal mi?',
    answer: 'Evet, premium kalitede parçalar kullanıyoruz. Tüm avantajlarımız için aşağıya tıklayın.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const scrollToAdvantages = () => {
    const el = document.getElementById('bizim-avantajlarimiz')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="faq-section">
      <h2 className="faq-section__title">
        Bazı <span className="faq-section__title-accent">Sık Sorulan</span> Sorular
      </h2>
      <p className="faq-section__subtitle">Donanım ve yazılım sorunlarınızı çözebiliriz</p>

      <ul className="faq-section__list">
        {faqItems.map((item, index) => (
          <li key={item.question} className="faq-section__item">
            <button
              type="button"
              className="faq-section__question"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <span className="faq-section__icon">{openIndex === index ? '−' : '+'}</span>
              <span className="faq-section__question-text">{item.question}</span>
            </button>
            {openIndex === index && (
              <div
                className="faq-section__answer"
                role="button"
                tabIndex={0}
                onClick={scrollToAdvantages}
                onKeyDown={(e) => e.key === 'Enter' && scrollToAdvantages()}
              >
                <p>{item.answer}</p>
                <span className="faq-section__link">Avantajlarımıza git →</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

