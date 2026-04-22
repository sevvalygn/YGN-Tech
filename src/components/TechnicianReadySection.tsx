const features = [
  {
    title: 'Profesyonel Sertifikalı',
    text: 'Cihaz hizmet için endüstri standardını belirleyen her teknisyenin cep telefonu ve tablet hizmet uzmanlığı, sertifikasyon programımız ile sağlanmaktadır.',
  },
  {
    title: 'Titizlikle Doğrulandı',
    text: 'Birden fazla görüşme, arka plan denetimleri ve sertifika gereksinimleri, cihazlarınızı onarmada en iyi olduğumuzu garanti eder.',
  },
  {
    title: 'Tamamen Hazırlanmış',
    text: 'Her hizmetin seçtiğiniz bir yerde gerçekleştiğinden ve 6 ay garantimizle korunduğundan emin olabilirsiniz.',
  },
]

const PHONE_NUMBER = '+90 545 484 83 28'
const PHONE_LINK = 'tel:+905454848328'

export default function TechnicianReadySection() {
  return (
    <section className="technician-ready">
      <h2 className="technician-ready__title">
        Teknisyenlerimiz Cihazınızı <span className="technician-ready__title-accent">Onarmaya Hazır!</span>
      </h2>
      <p className="technician-ready__intro">
        iPhone&apos;lardan iPad&apos;lere, en yeni ve en iyi cihazlara kadar, yerel ofisimiz cep telefonunuzu veya tabletinizi
        evinizde, ofisinizde veya mahalledeki bir noktada 30-45 dakika içinde onarabilir.
      </p>

      <a href={PHONE_LINK} className="technician-ready__phone">
        <svg className="technician-ready__phone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span className="technician-ready__phone-number">{PHONE_NUMBER}</span>
      </a>

      <div className="technician-ready__features">
        {features.map((item) => (
          <div key={item.title} className="technician-ready__feature">
            <h3 className="technician-ready__feature-title">{item.title}</h3>
            <p className="technician-ready__feature-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

