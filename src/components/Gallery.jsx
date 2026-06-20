const images = [
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600',
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=600',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600',
  'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=600',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600',
  'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600',
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-600/80 tracking-[0.25em] uppercase text-sm mb-3 font-sans">
            Memories
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800 leading-tight">
            Our Memories Captured in Photos
          </h2>
          <div className="w-16 h-0.5 bg-amber-500/50 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((src, i) => (
            <a
              key={i}
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="group aspect-square overflow-hidden rounded-xl bg-stone-200"
            >
              <img
                src={src}
                alt={`Galeri ${i + 1}`}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110 group-hover:opacity-90"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
