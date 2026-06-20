import './globals.css'

export const metadata = {
  title: 'Hariez & Sofea',
  description: 'Kami Akan Menikah — Hariez & Sofea',
  openGraph: {
    title: 'Hariez & Sofea',
    description: 'Kami Akan Menikah',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ms" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Lato:wght@300;400;700&family=Parisienne&family=Alex+Brush&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans text-stone-800 antialiased bg-stone-300">
        <div className="min-h-screen max-w-[430px] mx-auto relative shadow-xl bg-cream">
          {children}
        </div>
      </body>
    </html>
  )
}
