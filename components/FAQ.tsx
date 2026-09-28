import BlurText from '@/components/BlurText';

const questions = [
  ['What services do you offer?', 'We offer landscaping and mulch, hardscaping, carpentry, fencing, irrigation, lawn maintenance, and snow and ice management. Tell us what your property needs and we can discuss the right service.'],
  ['Which areas do you serve?', 'We serve Greater Boston, Massachusetts. Call (781) 330-2608 with your address to confirm availability in your area.'],
  ['How do I request a quote?', 'Call us or complete the contact form above. The form prepares an email with your project details for you to review and send. Photos and a short description of your space are helpful.'],
  ['Can you help with ongoing maintenance?', 'Yes. Lawn maintenance is one of our services. Contact us to discuss the care your property needs and the available scheduling options.'],
  ['How much will my project cost?', 'Pricing depends on the scope, materials and site conditions. Share your ideas with us so we can discuss your project and prepare a quote.'],
  ['When can my project start?', 'Timing depends on the project, season and current availability. Contact us with your preferred timeframe to discuss scheduling.'],
];

export default function FAQ() {
  return <section id="faq" className="faq-section" aria-labelledby="faq-title"><div className="wrap faq-layout">
    <div className="faq-intro"><p className="eyebrow"><span /> A LITTLE MORE CLARITY</p><h2 id="faq-title"><BlurText text="Good questions." /><BlurText text="Clear answers." startDelay={110} className="muted-title-line" /></h2><p>Planning something for your outdoors? Start here, or talk to our team.</p><a className="text-link" href="tel:+17813302608">Call (781) 330-2608</a></div>
    <div className="faq-list">{questions.map(([question, answer]) => <details key={question} name="faq"><summary>{question}<span className="faq-toggle" aria-hidden="true" /></summary><p>{answer}</p></details>)}</div>
  </div></section>;
}
