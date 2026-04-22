export default function Hakkimizda() {
  return (
    <section className="page-section page-section--about">
      <h1 className="page-section__title">Biz Kimiz</h1>
      <div className="intro-text">
        <p>
          YGN Tech, müşteri memnuniyetini ön planda tutarak güvenilir ve profesyonel teknik destek sunar. Dizüstü bilgisayar,
          masaüstü PC, Mac, cep telefonu ve tablet cihazlarınızda oluşabilecek tüm yazılım ve donanım sorunlarına hızlı ve etkili
          çözümler üretiriz.
        </p>
        <p>
          Deneyimli teknisyen kadromuz; arıza tespiti, bakım, onarım ve performans iyileştirme konularında titizlikle çalışır.
          İster evinizde ister iş yerinizde teknik desteğe ihtiyaç duyun, cihazlarınızı güvenle bize emanet edebilirsiniz.
        </p>
        <p>
          Amacımız yalnızca arızayı gidermek değil, uzun vadeli ve kalıcı çözümler sunarak cihazlarınızın performansını en üst
          seviyeye çıkarmaktır.
        </p>
      </div>

      <div className="services-section">
        <h2 className="page-section__subtitle">Hizmetlerimiz</h2>
        <div className="services-list-cols">
          <ul className="services-col">
            <li>
              <span className="services-col__chevron" aria-hidden>
                &gt;
              </span>
              Microsoft Windows PC Bilgisayar Hizmet
            </li>
            <li>
              <span className="services-col__chevron" aria-hidden>
                &gt;
              </span>
              Apple iMac ve Macbook Bilgisayar Hizmeti
            </li>
            <li>
              <span className="services-col__chevron" aria-hidden>
                &gt;
              </span>
              Veri Kurtarma
            </li>
            <li>
              <span className="services-col__chevron" aria-hidden>
                &gt;
              </span>
              Virüsler, Kötü Amaçlı Yazılım, Reklam Yazılımları ve Fidye Yazılımlarını Kaldırma
            </li>
            <li>
              <span className="services-col__chevron" aria-hidden>
                &gt;
              </span>
              Çatlak ve Kırık Dizüstü Bilgisayar Ekranı Değişimleri
            </li>
          </ul>
          <ul className="services-col">
            <li>
              <span className="services-col__chevron" aria-hidden>
                &gt;
              </span>
              Telefon ve Tablet Ekran Değişimleri
            </li>
            <li>
              <span className="services-col__chevron" aria-hidden>
                &gt;
              </span>
              Ana Kart Hizmetleri
            </li>
            <li>
              <span className="services-col__chevron" aria-hidden>
                &gt;
              </span>
              Yedek Parça Satışları
            </li>
            <li>
              <span className="services-col__chevron" aria-hidden>
                &gt;
              </span>
              Bayilik Sistemleri
            </li>
            <li>
              <span className="services-col__chevron" aria-hidden>
                &gt;
              </span>
              Kasko Hizmetleri
            </li>
          </ul>
        </div>
      </div>

      <div className="page-section__bottom">
        <div className="services-section__text-above-image">
          <p className="services-section__intro">Faaliyet alanımız bu alanları içerir</p>
          <h3 className="services-section__block-title">Mobil Cihazların Hizmeti</h3>
          <p className="services-section__block-text">
            Telefon, Bilgisayar, Tablet v.b. cihazlarınız mı arızalandı? İşlerinize kaldığınız yerden devam edin.
          </p>
        </div>
        <div className="services-section__image-wrap">
          <img src="/uzmanlik-hizmetler.png" alt="Laptop, Mac, veri kurtarma, ağ ve virüs temizleme hizmetleri diyagramı" />
        </div>
      </div>
    </section>
  )
}

