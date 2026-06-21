'use client'

import { useState, useCallback, useEffect } from 'react'
import Envelope from './Envelope'
import ScrollHint from './ScrollHint'

export default function EnvelopeWrapper({ children }) {
  const [showSite, setShowSite] = useState(false)
  const [showScrollHint, setShowScrollHint] = useState(false)

  const handleOpen = useCallback(() => {
    setShowSite(true);
    setShowScrollHint(true);
  }, [])

  // Hide scroll hint on first scroll
  useEffect(() => {
    if (!showScrollHint) return;
    const onScroll = () => {
      setShowScrollHint(false);
      window.removeEventListener('scroll', onScroll);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [showScrollHint])

  return (
    <>
      {!showSite && <Envelope onOpen={handleOpen} />}
      {showSite && children}
      {showScrollHint && <ScrollHint />}
    </>
  )
}
