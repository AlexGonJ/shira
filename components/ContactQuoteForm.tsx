'use client';
import { useState } from 'react';
import BlurText from '@/components/BlurText';

export default function ContactQuoteForm() {
  const [ready, setReady] = useState(false);
  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = 'Name: ' + data.get('name') + '\nEmail: ' + data.get('email') + '\nPhone: ' + data.get('phone') + '\nService: ' + data.get('service') + '\n\n' + data.get('details');
    window.location.href = 'mailto:shiralandscaping@gmail.com?subject=' + encodeURIComponent('Free quote — ' + data.get('service')) + '&body=' + encodeURIComponent(body);
    setReady(true);
  }
  return <section id="contact" className="contact-section wrap"><div className="contact-copy"><p className="eyebrow"><span /> LET’S MAKE ROOM FOR MORE</p><h2><BlurText text="Your next chapter" /><BlurText text="starts outside." startDelay={110} className="muted-title-line" /></h2><p>A greener lawn, a new patio, a place to slow down.<br />Tell us what you have in mind.</p><a href="tel:+17813302608" className="contact-phone">(781) 330-2608</a><a className="contact-email" href="mailto:shiralandscaping@gmail.com">shiralandscaping@gmail.com</a><span className="contact-location">Proudly serving Greater Boston, MA</span></div>
    <form onSubmit={submit} className="quote-form"><h3>Let’s talk about your project.</h3><div className="form-row"><label>Your name<input required name="name" autoComplete="name" placeholder="Full name" /></label><label>Email address<input required name="email" type="email" autoComplete="email" placeholder="you@email.com" /></label></div><div className="form-row"><label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="(781) 000-0000" /></label><label>What can we help with?<select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{['Landscaping & mulch','Hardscaping','Carpentry','Fencing','Irrigation','Lawn maintenance','Snow & ice management'].map(s => <option key={s}>{s}</option>)}</select></label></div><label>A little about your project<textarea name="details" rows={3} required placeholder="Tell us about your space and what you’d like to change…" /></label><button type="submit" className="button">Prepare my quote request</button><p className="form-note" role="status">{ready ? 'Your email draft is ready. Send it in your email app to complete your request, or call us directly.' : 'Opens your email app with your project details. You send when ready.'}</p></form>
  </section>;
}
