import type { Metadata } from 'next'

import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'

import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'
import Loader from '../components/Loader'
import StickyCTA from '../components/StickyCTA'

export const metadata: Metadata = {
  title: 'YGN Tech',
  description: 'YGN Tech teknik servis ve onarım hizmetleri',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <Loader />
        <Navbar />
        <HeroBanner />
        <main className="main">
          <div className="main__inner">{children}</div>
        </main>
        <StickyCTA />
      </body>
    </html>
  )
}

