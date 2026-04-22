const PHONE = '905454848328'
const EMAIL = 'enescanyagan@gmail.com'
const ADRES_LINES = ['Mareşal Fevzi Çakmak 5. Sk. No:11,', 'Şirinevler, 34188 Bahçelievler/İstanbul']

const ADRES_GOOGLE = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(ADRES_LINES.join(' '))
const ADRES_EMBED = 'https://www.google.com/maps?q=' + encodeURIComponent(ADRES_LINES.join(' ')) + '&output=embed'

export default function Iletisim() {
  return (
    <section className="page-section page-section--iletisim iletisim">
      <h1 className="iletisim__title">
        <span className="iletisim__title-main">Bize </span>
        <span className="iletisim__title-accent">Ulaşın</span>
      </h1>

      <div className="iletisim__links">
        <a href={`tel:+${PHONE}`} className="iletisim__link">
          📞 0 545 484 83 28
        </a>
        <a href={`mailto:${EMAIL}`} className="iletisim__link">
          ✉️ E-posta
        </a>
        <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noopener noreferrer" className="iletisim__link">
          WhatsApp
        </a>
      </div>

      <div className="iletisim__map-wrap">
        <h2 className="iletisim__map-title">Konum</h2>
        <div className="iletisim__map-frame">
          <iframe
            src={ADRES_EMBED}
            title="YGN Tech konum haritası"
            className="iletisim__map-iframe"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a href={ADRES_GOOGLE} target="_blank" rel="noopener noreferrer" className="iletisim__map-link">
          Adresi Google Haritalar&apos;da aç →
        </a>
      </div>
    </section>
  )
}

