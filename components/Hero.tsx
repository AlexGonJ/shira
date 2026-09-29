import Image from 'next/image';
import Navbar from '@/components/Navbar';
import HeroGoogleRating from '@/components/HeroGoogleRating';

export default function Hero() {
  return <section className="hero wrap" aria-labelledby="hero-title">
    <Image src="/hero-boston-v2.png" alt="Landscaped Greater Boston garden with hydrangeas, bluestone paths and a cedar pergola" fill fetchPriority="high" loading="eager" quality={70} sizes="(max-width: 760px) calc(100vw - 24px), (max-width: 1100px) calc(100vw - 48px), (max-width: 1536px) calc(100vw - 96px), 1440px" className="hero-photo" />
    <div className="hero-shade" />
    <Navbar />
    <div className="hero-content">
      <h1 id="hero-title">Your outdoor space.<br /><em>Beautifully built.</em></h1>
      <p className="hero-description">Landscaping, construction and care.<br />Made for the way you live outside.</p>
      <div className="hero-actions"><a href="#contact" className="button hero-primary">Get a free quote</a><a href="#services" className="text-link light">Explore our services</a></div>
    </div>
    <HeroGoogleRating />
    <div className="hero-index" aria-hidden="true"><span className="hero-index-label"><b>01</b><span>LANDSCAPE · BUILD · MAINTAIN</span></span><span className="hero-index-track"><span /></span></div>
  </section>;
}
