import EnvelopeWrapper from '@/components/EnvelopeWrapper'
import Hero from '@/components/Hero';
import Details from '@/components/Details';
import RSVPForm from '@/components/RSVPForm';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  return (
    <EnvelopeWrapper>
      <main>
        <Hero />
        <Details />
        <section id="rsvp" className="py-20 bg-stone-100">
           <h2 className="text-center text-3xl font-cursive mb-8">RSVP</h2>
           <RSVPForm />
        </section>
        <Gallery />
        <Footer />
        <MusicPlayer />
      </main>
    </EnvelopeWrapper>
  );
}