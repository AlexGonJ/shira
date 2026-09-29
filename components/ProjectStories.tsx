'use client';

import Image from 'next/image';
import { useState } from 'react';
import { projectStories, youtubeId } from '@/lib/project-stories';
import BlurText from '@/components/BlurText';
import ScrollReveal from '@/components/ScrollReveal';

export default function ProjectStories() {
  const [playing, setPlaying] = useState<string | null>(null);
  return <section id="our-work" className="stories-section" aria-labelledby="stories-title">
    <div className="wrap">
      <div className="section-heading"><div><p className="eyebrow"><span /> OUR WORK, UP CLOSE</p><h2 id="stories-title"><BlurText text="Stories from the spaces" /><BlurText text="we’ve helped shape." startDelay={130} className="muted-title-line" /></h2></div><p>A closer look at the work, the details and the outdoor spaces we care for.</p></div>
      <div className="stories-grid">{projectStories.map(story => {
        const id = youtubeId(story.youtubeUrl);
        const active = id && playing === story.id;
        return <article className={`story-card${story.videoSlot ? ' story-featured' : ''}`} key={story.id}>
          <div className="story-media">
            {active ? <iframe src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`} title={story.title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : <>
              <ScrollReveal className="image-reveal"><Image src={story.image} alt={story.alt} fill quality={70} unoptimized={story.image.startsWith('https://i.ytimg.com/')} sizes={`(max-width: 760px) calc(100vw - 64px), ${story.videoSlot ? '48vw' : '34vw'}`} /></ScrollReveal>
              {id ? <button className="story-play" onClick={() => setPlaying(story.id)} aria-label={`Play video: ${story.title}`}><span aria-hidden="true">▶</span> Watch film</button> : story.videoSlot ? <span className="story-coming">Project films · Coming soon</span> : null}
            </>}
          </div>
          <div className="story-caption"><span>{story.category}</span><h3>{story.title}</h3>{active && <button className="text-link" onClick={() => setPlaying(null)}>Close video</button>}</div>
        </article>;
      })}</div>
      <a className="text-link stories-channel" href="https://www.youtube.com/@ShiraLandscaping" target="_blank" rel="noopener noreferrer"><span className="youtube-logo" aria-hidden="true"><svg viewBox="0 0 28 20"><path d="M27.4 3.1A3.5 3.5 0 0 0 25 .6C22.8 0 18.3 0 14 0S5.2 0 3 .6A3.5 3.5 0 0 0 .6 3.1 36 36 0 0 0 0 10a36 36 0 0 0 .6 6.9A3.5 3.5 0 0 0 3 19.4c2.2.6 6.7.6 11 .6s8.8 0 11-.6a3.5 3.5 0 0 0 2.4-2.5A36 36 0 0 0 28 10a36 36 0 0 0-.6-6.9Z"/><path className="youtube-play" d="m11 14.5 7-4.5-7-4.5Z"/></svg></span><span>More from Shira on YouTube</span></a>
    </div>
  </section>;
}
