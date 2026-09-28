import Image from 'next/image';
import BlurText from '@/components/BlurText';
import ScrollReveal from '@/components/ScrollReveal';
export default function WhyChooseUs() {
  return <section id="about" className="about-section"><div className="wrap about-grid">
    <div className="about-visual"><ScrollReveal className="image-reveal"><Image src="/hero-luxury-landscape.jpg" alt="Outdoor living inspiration with a stone patio, planting and a timber pergola" fill sizes="(max-width: 760px) 100vw, 50vw" /></ScrollReveal><span className="photo-caption">OUTDOOR LIVING INSPIRATION</span><div className="about-stamp">Built around<br /><em>your life.</em><span>SHIRA LANDSCAPING & BUILD</span></div></div>
    <div className="about-copy"><p className="eyebrow"><span /> A LOCAL TEAM. A PERSONAL APPROACH.</p><h2><BlurText text="Good landscapes" /><BlurText text="start with" startDelay={90} /><BlurText text="good people." startDelay={180} className="muted-title-line" /></h2><p>We’re Shira Landscaping & Build. We help Greater Boston homeowners turn outdoor spaces into places to gather, unwind and enjoy every day.</p><p>From landscaping and stonework to decks and fencing, we bring care, craftsmanship and attention to the details that make your property feel like yours.</p><div className="about-values"><span>✓ Licensed & insured</span><span>✓ Dedicated, professional team</span></div><a className="text-link" href="#contact">Let’s talk about your space</a></div>
  </div></section>;
}
