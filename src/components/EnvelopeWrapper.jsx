'use client'

import { useState, useCallback } from 'react'
import Envelope from './Envelope'

export default function EnvelopeWrapper({ children }) {
  const [showSite, setShowSite] = useState(false)

  const handleOpen = useCallback(() => {
    setShowSite(true)
  }, [])

  return (
    <>
      {!showSite && <Envelope onOpen={handleOpen} />}
      {showSite && children}
    </>
  )
}
