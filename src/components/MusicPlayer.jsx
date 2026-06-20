'use client'

import { useState, useEffect, useCallback } from 'react'
import { getAudio } from '@/lib/audio'

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = getAudio()
    const update = () => setPlaying(!audio.paused)
    audio.addEventListener('play', update)
    audio.addEventListener('pause', update)
    return () => {
      audio.removeEventListener('play', update)
      audio.removeEventListener('pause', update)
    }
  }, [])

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        getAudio().pause()
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [])

  const toggle = useCallback(() => {
    const audio = getAudio()
    if (audio.paused) {
      audio.play()
    } else {
      audio.pause()
    }
  }, [])

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-amber-700 text-cream shadow-lg shadow-amber-900/30 flex items-center justify-center hover:bg-amber-800 transition-colors"
      aria-label={playing ? 'Pause music' : 'Play music'}
    >
      {playing ? (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16" rx="1" />
          <rect x="14" y="4" width="4" height="16" rx="1" />
        </svg>
      ) : (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </button>
  )
}
