import Hero from '@/components/Hero';
import ServicesCarousel from '@/components/ServicesCarousel';
import ProjectStories from '@/components/ProjectStories';
import FAQ from '@/components/FAQ';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactQuoteForm from '@/components/ContactQuoteForm';
import Footer from '@/components/Footer';
import BotanicalDivider from '@/components/BotanicalDivider';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="site-shell"><main id="main"><Hero /><BotanicalDivider /><ServicesCarousel /><WhyChooseUs /><ProjectStories /><Testimonials /><ContactQuoteForm /><FAQ /></main>
    <Footer /></div>
  </>;
}
