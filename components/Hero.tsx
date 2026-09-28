import Image from 'next/image';
import Navbar from '@/components/Navbar';
import GlassCard from '@/components/GlassCard';
import { businessRating } from '@/lib/business-rating';

export default function Hero() {
  return <section className="hero wrap" aria-labelledby="hero-title">
    <Image src="/hero-boston-v2.png" alt="Landscaped Greater Boston garden with hydrangeas, bluestone paths and a cedar pergola" fill preload sizes="100vw" className="hero-photo" />
    <div className="hero-shade" />
    <Navbar />
    <div className="hero-content">
      <h1 id="hero-title">Your outdoor space.<br /><em>Beautifully built.</em></h1>
      <p className="hero-description">Landscaping, construction and care.<br />Made for the way you live outside.</p>
      <div className="hero-actions"><a href="#contact" className="button hero-primary">Get a free quote</a><a href="#services" className="text-link light">Explore our services</a></div>
    </div>
    <GlassCard className="hero-rating" href={businessRating.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`${businessRating.rating.toFixed(1)} out of 5, based on ${businessRating.count} Google reviews. View reviews on Shira’s website.`}>
      <span className="hero-rating-heading"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg> Google reviews</span>
      <span className="hero-rating-value">{businessRating.rating.toFixed(1)}<span>/ 5</span></span>
      <span className="hero-rating-stars" aria-hidden="true">★★★★★</span>
      <span className="hero-rating-count">{businessRating.count} customer reviews</span>
    </GlassCard>
    <div className="hero-index" aria-hidden="true"><span className="hero-index-label"><b>01</b><span>LANDSCAPE · BUILD · MAINTAIN</span></span><span className="hero-index-track"><span /></span></div>
  </section>;
}
