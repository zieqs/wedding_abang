const images = [
  'https://via.placeholder.com/600x600?text=Bride',
  'https://via.placeholder.com/600x600?text=Groom',
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800 leading-tight">
            The Bride &amp; The Groom
          </h2>
          <div className="w-16 h-0.5 bg-amber-500/50 mx-auto mt-6" />
        </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4">
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
