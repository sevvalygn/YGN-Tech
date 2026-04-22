import BottomRepairSection from '../components/BottomRepairSection'
import UzmanlikSection from '../components/UzmanlikSection'
import HowItWorks from '../components/HowItWorks'
import AdvantagesSection from '../components/AdvantagesSection'
import FaqSection from '../components/FaqSection'
import TechnicianReadySection from '../components/TechnicianReadySection'
import StatsSection from '../components/StatsSection'

import Anasayfa from '../views/Anasayfa'

export default function HomePage() {
  return (
    <>
      <Anasayfa />

      <section className="hero-banner hero-banner--bottom">
        <div className="hero-banner__overlay" />
        <img className="hero-banner__image" src="/anasayfa-banner.png" alt="Teknik servis - tamir ve onarım hizmetleri" />
      </section>

      <div className="hero-tagline">
        <h2 className="hero-tagline__title">Marka Cihazların Hizmet Merkezi</h2>
        <p className="hero-tagline__text">Cihazınızı onarmak için doğru yerdesiniz. Hızlı ve kolay hizmet.</p>
      </div>

      <UzmanlikSection />
      <BottomRepairSection />
      <HowItWorks />
      <AdvantagesSection />
      <FaqSection />
      <TechnicianReadySection />
      <StatsSection />
    </>
  )
}

