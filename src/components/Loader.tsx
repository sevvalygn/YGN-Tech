"use client"

import { useEffect, useState } from 'react'

export default function Loader() {
  const [hidden, setHidden] = useState(false)
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2000)
    const remove = setTimeout(() => setMounted(false), 2800)
    return () => {
      clearTimeout(timer)
      clearTimeout(remove)
    }
  }, [])

  if (!mounted) return null

  return (
    <div className={`lux-loader-overlay ${hidden ? 'is-hidden' : ''}`} aria-hidden>
      <div className="lux-loader">
        <div className="lux-loader__mark" aria-hidden>
          <span className="lux-loader__ring lux-loader__ring--ping" />
          <span className="lux-loader__ring lux-loader__ring--inner" />
          <span className="lux-loader__letter">Y</span>
        </div>

        <p className="lux-loader__label">YGN Tech</p>

        <div className="lux-loader__bar" aria-hidden>
          <span className="lux-loader__bar-fill" />
        </div>
      </div>
    </div>
  )
}

