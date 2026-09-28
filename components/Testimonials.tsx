'use client';

import { useState } from 'react';
import BlurText from '@/components/BlurText';

const reviews = [
  {
    name: 'Julia Bee',
    initials: 'JB',
    text: 'Daniel and his team did an amazing job. They were professional, reliable and paid great attention to detail. The work exceeded my expectations.',
  },
  {
    name: 'Donna Noonan',
    initials: 'DN',
    text: 'Dan and his crew are very reliable and efficient. I call them for all my home improvement matters. You will not be disappointed!',
  },
  {
    name: 'Karyn McSherry',
    initials: 'KM',
    text: 'Daniel and his whole crew have been great. They are communicative, efficient and very easy to work with. Highly recommend!',
  },
  {
    name: 'Maria Fernanda Ruggiero',
    initials: 'MR',
    text: 'We really liked their service, the fair price and their meticulous work. My son loved the playground they installed. I highly recommend them.',
  },
  {
    name: 'Leonardo Morais Costa',
    initials: 'LC',
    text: 'Great experience from start to finish.',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const visible = [-1, 0, 1].map(offset => reviews[(active + offset + reviews.length) % reviews.length]);
  const move = (direction: number) => setActive(current => (current + direction + reviews.length) % reviews.length);

  return <section id="testimonials" className="testimonials-section" aria-labelledby="testimonials-title">
    <div className="wrap testimonials-wrap">
      <div className="testimonials-head">
        <div>
          <h2 id="testimonials-title"><BlurText text="Why our clients keep" /><BlurText text="coming back." startDelay={130} className="muted-title-line" /></h2>
        </div>
        <div className="testimonial-controls" aria-label="Testimonial navigation">
          <button type="button" onClick={() => move(-1)} aria-label="Previous testimonial">←</button>
          <button type="button" onClick={() => move(1)} aria-label="Next testimonial">→</button>
        </div>
      </div>

      <div className="testimonial-cards" aria-live="polite">
        {visible.map((review, index) => <article className={`testimonial-card${index === 1 ? ' is-featured' : ''}`} key={`${review.name}-${active}-${index}`}>
          <span className="testimonial-quote" aria-hidden="true">“</span>
          <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
          <blockquote>“{review.text}”</blockquote>
          <footer>
            <span className="testimonial-avatar" aria-hidden="true">{review.initials}</span>
            <span><strong>{review.name}</strong><small>Google reviewer</small></span>
          </footer>
        </article>)}
      </div>

      <div className="testimonial-source"><span className="google-g" aria-hidden="true">G</span><strong>5.0</strong><span className="testimonial-source-stars">★★★★★</span><span>5 Google reviews</span></div>
    </div>
  </section>;
}
