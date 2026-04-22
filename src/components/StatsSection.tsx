const stats = [
  { value: '10', label: 'Yılın tecrübesi' },
  { value: '10.000+', label: 'Onarılan Cihaz', highlight: true, tooltip: 'Hizmet mi istiyorsunuz?' },
  { value: '50+', label: 'Kalifiye Teknisyenler' },
  { value: '100%', label: 'Memnun müşteriler' },
]

export default function StatsSection() {
  return (
    <section className="stats-section">
      <h2 className="stats-section__title">
        10 Yıllık <span className="stats-section__title-accent">Tecrübe</span>
      </h2>
      <p className="stats-section__subtitle">Zaferlerimizden ve başarılarımızdan gurur duyuyoruz</p>

      <div className="stats-section__list">
        {stats.map((item) => (
          <div key={item.label} className="stats-section__item">
            {item.tooltip && <span className="stats-section__tooltip">{item.tooltip}</span>}
            <div className={`stats-section__circle ${item.highlight ? 'stats-section__circle--highlight' : ''}`}>
              <span className="stats-section__value">{item.value}</span>
              <span className="stats-section__label">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

