'use client'

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  )
}
