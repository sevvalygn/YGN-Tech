const advantages = [
  {
    num: '01',
    title: 'TÜM Hizmetlerde 6 Ay Garanti',
    text: 'Hizmet tarihinden itibaren tam 6 Ay garanti ile hizmetlerin tam arkasındayız!',
  },
  {
    num: '02',
    title: 'Premium Sınıf Parçalar',
    text: 'Piyasada bulunan en yüksek kaliteyi sağlayan üreticilerden temin edilen cihazlarınızı onarmak için birinci sınıf parçaları kullanıyoruz.',
  },
  {
    num: '03',
    title: "20.000'den Fazla Cihaz Hizmeti Tecrübesi",
    text: 'Teknisyenlerimizin tamamen sertifikalı olduğunu ve sizden önce binlerce cihazı onardığını bilerek rahatlayın!',
  },
  {
    num: '04',
    title: 'Düşük Fiyat Garantisi',
    text: 'Cihazınızın onarılması müşterimizi kırmamalıdır. Düşük fiyat garantimiz, müşterilerimize her zaman en iyi fiyatı sunmamızı sağlar.',
  },
]

export default function AdvantagesSection() {
  return (
    <section className="advantages-section" id="bizim-avantajlarimiz">
      <h2 className="advantages-section__title">Bizim Avantajlarımız</h2>
      <p className="advantages-section__subtitle">Donanım ve Yazılım Sorunlarınızı Çözebiliriz</p>

      <div className="advantages-section__content">
        <div className="advantages-section__card advantages-section__card--1">
          <span className="advantages-section__num">{advantages[0].num}</span>
          <h3 className="advantages-section__card-title">{advantages[0].title}</h3>
          <p className="advantages-section__card-text">{advantages[0].text}</p>
        </div>
        <div className="advantages-section__card advantages-section__card--2">
          <span className="advantages-section__num">{advantages[1].num}</span>
          <h3 className="advantages-section__card-title">{advantages[1].title}</h3>
          <p className="advantages-section__card-text">{advantages[1].text}</p>
        </div>

        <div className="advantages-section__phone">
          <div className="advantages-section__phone-screen">
            <span className="advantages-section__phone-brand">ygntech</span>
          </div>
        </div>

        <div className="advantages-section__card advantages-section__card--3">
          <span className="advantages-section__num">{advantages[2].num}</span>
          <h3 className="advantages-section__card-title">{advantages[2].title}</h3>
          <p className="advantages-section__card-text">{advantages[2].text}</p>
        </div>
        <div className="advantages-section__card advantages-section__card--4">
          <span className="advantages-section__num">{advantages[3].num}</span>
          <h3 className="advantages-section__card-title">{advantages[3].title}</h3>
          <p className="advantages-section__card-text">{advantages[3].text}</p>
        </div>
      </div>
    </section>
  )
}

