'use client'

import { useEffect, useState } from 'react'

export default function ScrollHint() {
  const [visible, setVisible] = useState(false)

  // Fade in after mount
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100) // slight delay for smooth fade
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-amber-600 text-sm transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
      aria-label="Scroll down for more"
    >
      {/* Bounce arrow */}
      <svg className="w-5 h-5 animate-bounce" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 16l-6-6h12z" />
      </svg>
      <span>Scroll down</span>
    </div>
  )
}
