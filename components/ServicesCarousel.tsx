import Image from 'next/image';
import BlurText from '@/components/BlurText';
import ScrollReveal from '@/components/ScrollReveal';
const services = [
  {title:'Landscaping & mulch', description:'Bring new life to your garden.', image:'planting', className:'service-landscape', position:'center 65%', sizes:'(max-width: 760px) calc(100vw - 64px), (max-width: 1100px) 50vw, 56vw'},
  {title:'Hardscaping', description:'Patios, walkways & retaining walls.', image:'hardscaping', className:'service-hardscape', sizes:'(max-width: 540px) calc(100vw - 64px), (max-width: 760px) calc(50vw - 38px), (max-width: 1100px) 40vw, 38vw'},
  {title:'Carpentry', description:'More room for outdoor living.', image:'carpentry', className:'service-carpentry', sizes:'(max-width: 540px) calc(100vw - 64px), (max-width: 760px) calc(50vw - 38px), (max-width: 1100px) 25vw, 24vw'},
  {title:'Lawn maintenance', description:'A yard you’ll love coming home to.', image:'lawn', className:'service-lawn', sizes:'(max-width: 540px) calc(100vw - 64px), (max-width: 760px) calc(50vw - 38px), (max-width: 1100px) 18vw, 17vw'},
  {title:'Fencing', description:'Privacy, beautifully built.', image:'fencing', className:'service-fence', sizes:'(max-width: 540px) calc(100vw - 64px), (max-width: 760px) calc(50vw - 38px), (max-width: 1100px) 34vw, 31vw'},
  {title:'Irrigation', description:'Care that goes beneath the surface.', image:'irrigation', className:'service-irrigation', sizes:'(max-width: 540px) calc(100vw - 64px), (max-width: 760px) calc(50vw - 38px), (max-width: 1100px) 34vw, 31vw'},
  {title:'Snow & ice management', description:'Ready for New England winters.', image:'snow', className:'service-snow', sizes:'(max-width: 540px) calc(100vw - 64px), (max-width: 760px) calc(50vw - 38px), (max-width: 1100px) 34vw, 31vw'},
];
export default function ServicesCarousel() {
  return <section id="services" className="section wrap">
    <div className="section-heading"><div><p className="eyebrow"><span /> MADE FOR YOUR OUTDOORS</p><h2><BlurText text="One team." /><BlurText text="Every outdoor possibility." startDelay={120} className="muted-title-line" /></h2></div><p>From a fresh start to the finishing details, we design, build and care for the spaces around your home.</p></div>
    <div className="services-grid">{services.map((service, index) => <a key={service.title} href="#contact" className={'service-card ' + service.className}>
      <ScrollReveal className="image-reveal"><Image src={'/landscapes/' + service.image + '.webp'} alt={service.title} fill quality={70} sizes={service.sizes} style={{objectPosition:service.position}} /></ScrollReveal>
      <div className="card-shade" /><span className="card-number">0{index+1}</span>
      <div className="service-copy"><h3>{service.title}</h3><p>{service.description}</p></div>
    </a>)}</div>
    <div className="services-caption"><span>Thoughtful details. Lasting impressions.</span><a href="#contact" className="text-link">Find the right service for your home</a></div>
  </section>;
}
