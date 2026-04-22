const steps = [
  {
    num: 1,
    title: 'Bize sorununuzu söyleyin',
    label: 'Ürününüz',
    text: 'Düzgün çalışmasını sağlamak için cihaz sorununu detaylandırmamıza yardımcı olun.',
    icon: '📱',
  },
  {
    num: 2,
    title: 'Hizmet tahmini alın',
    text: 'Hizmet ve fiyat teklifi onayı verin.',
    icon: '📋',
  },
  {
    num: 3,
    title: 'Kurye Cihazınızı Getirir',
    text: 'Cihazınızı kargoyla ücretsiz gönderin.',
    icon: '📦',
  },
]

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <h2 className="how-it-works__title">
        Nasıl <span className="how-it-works__highlight">Çalışır?</span>
      </h2>
      <p className="how-it-works__subtitle">Kolay ve hızlı hizmete nasıl ulaşırsınız.</p>

      <div className="how-it-works__steps">
        {steps.map((step, index) => (
          <div key={step.num} className="how-it-works__step">
            {index > 0 && (
              <span className="how-it-works__arrow" aria-hidden>
                →
              </span>
            )}
            <div className="how-it-works__step-inner">
              <span className="how-it-works__step-label">{step.num}. Aşama</span>
              <h3 className="how-it-works__step-title">{step.title}</h3>
              {step.label && <span className="how-it-works__product-label">{step.label}</span>}
              <div className={`how-it-works__icon how-it-works__icon--${step.num}`}>{step.icon}</div>
              <p className="how-it-works__step-text">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

