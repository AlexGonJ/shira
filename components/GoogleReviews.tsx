'use client';

import { useEffect, useState } from 'react';

// Supply verified provider data when the Google integration is configured.
export interface GoogleReview {
  id: string;
  author: string;
  text: string;
  rating: number;
  date: string;
  url: string;
}

interface Props {
  reviews?: GoogleReview[];
  rating?: number;
  count?: number;
  profileUrl?: string;
}

const previewCards = [
  'Google Business Profile',
  'Verified customer review',
  'A project story, in their words',
  'More outdoor moments ahead',
];

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <span className="testimonial-stars" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(Math.max(0, Math.min(5, Math.round(rating))))}
    </span>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <article className="testimonial-card testimonial-card-review">
      <div className="testimonial-person">
        <span className="testimonial-avatar" aria-hidden="true">
          {review.author.charAt(0)}
        </span>
        <div>
          <strong>{review.author}</strong>
          <span>{review.date}</span>
        </div>
        <a href={review.url} target="_blank" rel="noopener noreferrer" aria-label={`Read ${review.author}'s review on Google`}>
          ↗
        </a>
      </div>
      <Stars rating={review.rating} />
      <blockquote>“{review.text}”</blockquote>
    </article>
  );
}

function PreviewCard({ label }: { label: string }) {
  return (
    <article className="testimonial-card testimonial-card-preview">
      <span className="testimonial-grid" aria-hidden="true" />
      <span className="testimonial-card-label">GOOGLE REVIEWS · PREVIEW</span>
      <strong>{label}</strong>
      <p>Real feedback will appear here once the Google Business Profile is connected.</p>
      <span className="testimonial-card-footer">SHIRA LANDSCAPING &amp; BUILD</span>
    </article>
  );
}

export default function GoogleReviews({ reviews = [], rating, count, profileUrl }: Props) {
  const [paused, setPaused] = useState(false);
  const populated = reviews.length > 0;
  const cards = populated
    ? reviews.flatMap((review) => [
        <ReviewCard key={`review-${review.id}`} review={review} />,
        <PreviewCard key={`detail-${review.id}`} label="A space made for living." />,
      ])
    : previewCards.map((label) => <PreviewCard key={label} label={label} />);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPaused(media.matches);
    updateMotionPreference();
    media.addEventListener('change', updateMotionPreference);
    return () => media.removeEventListener('change', updateMotionPreference);
  }, []);

  return (
    <section id="testimonials" className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="wrap">
        <p className="eyebrow"><span /> WORD OF MOUTH. CLOSE TO HOME.</p>
        <h2 id="testimonials-title">Stories from the spaces<br /><span>we’ve helped shape.</span></h2>
        <p className="testimonials-intro">A thoughtful project feels different when it’s finished. Soon, you’ll be able to hear that directly from the people who live with the results.</p>
      </div>

      <div
        className={`testimonials-marquee ${paused ? 'is-paused' : ''}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
        }}
      >
        <div className="testimonials-track">
          <div className="testimonials-set">{cards}</div>
          <div className="testimonials-set" aria-hidden="true">{cards}</div>
        </div>
      </div>

      <div className="wrap testimonials-meta">
        <div className="testimonials-google">
          <span className="google-mark" aria-hidden="true">G</span>
          <span>Google reviews</span>
          {rating !== undefined && <><Stars rating={rating} /><strong>{rating.toFixed(1)}</strong><span>{count ?? reviews.length} reviews</span></>}
        </div>
        {profileUrl ? (
          <a href={profileUrl} target="_blank" rel="noopener noreferrer" className="text-link">Read every review on Google</a>
        ) : (
          <span className="testimonials-status">Awaiting Google Business Profile connection</span>
        )}
      </div>
    </section>
  );
}
