export default function Footer() {
  return (
    <footer className="py-16 px-4 bg-stone-900 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="font-serif text-3xl md:text-4xl text-cream/90 mb-4">
          Terima Kasih
        </p>

        <p className="text-stone-400 font-sans text-sm leading-relaxed mb-8 max-w-md mx-auto">
          Dengan penuh rasa syukur, kami sekeluarga menjemput
          tuan/puan ke majlis perkahwinan kami. Semoga kehadiran
          tuan/puan dapat memeriahkan lagi hari bahagia kami.
        </p>

        <div className="w-12 h-0.5 bg-amber-600/50 mx-auto mb-8" />

        <p className="font-serif text-2xl text-amber-400/80">
          Hariez & Anushka
        </p>

        <p className="text-stone-600 text-xs font-sans mt-8">
          &copy; {new Date().getFullYear()} — made by zieqs.
        </p>
      </div>
    </footer>
  )
}
