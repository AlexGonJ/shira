'use client';

import Image from 'next/image';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

export type PillNavItem = { label: string; href: string; ariaLabel?: string };

type Props = {
  logo: string;
  logoAlt: string;
  items: PillNavItem[];
  phoneHref: string;
  phoneLabel: string;
};

export default function PillNav({ logo, logoAlt, items, phoneHref, phoneLabel }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const timelines = useRef<Array<gsap.core.Timeline | null>>([]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const activeTimelines = timelines.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const layout = () => circleRefs.current.forEach((circle, index) => {
      if (!circle?.parentElement) return;
      const pill = circle.parentElement;
      const { width, height } = pill.getBoundingClientRect();
      const radius = ((width * width) / 4 + height * height) / (2 * height);
      const diameter = Math.ceil(radius * 2) + 2;
      const delta = Math.ceil(radius - Math.sqrt(Math.max(0, radius * radius - (width * width) / 4))) + 1;
      circle.style.width = `${diameter}px`;
      circle.style.height = `${diameter}px`;
      circle.style.bottom = `-${delta}px`;
      gsap.set(circle, { xPercent: -50, scale: 0, transformOrigin: `50% ${diameter - delta}px` });
      const labels = pill.querySelectorAll<HTMLElement>('[data-pill-label]');
      gsap.set(labels[0], { y: 0, opacity: 1 });
      gsap.set(labels[1], { y: height + 12, opacity: 0 });
      activeTimelines[index]?.kill();
      activeTimelines[index] = gsap.timeline({ paused: true })
        .to(circle, { scale: 1.18, duration: .42, ease: 'power3.out' }, 0)
        .to(labels[0], { y: -(height + 8), opacity: 0, duration: .35, ease: 'power3.out' }, 0)
        .to(labels[1], { y: 0, opacity: 1, duration: .35, ease: 'power3.out' }, 0);
    });

    layout();
    window.addEventListener('resize', layout);
    document.fonts?.ready.then(layout).catch(() => undefined);
    if (!reducedMotion) gsap.fromTo(root, { y: -14, opacity: 0 }, { y: 0, opacity: 1, duration: .65, ease: 'power3.out' });
    return () => { window.removeEventListener('resize', layout); activeTimelines.forEach(timeline => timeline?.kill()); };
  }, [items]);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(menu, { autoAlpha: open ? 1 : 0, y: 0 });
      return;
    }
    gsap.to(menu, { autoAlpha: open ? 1 : 0, y: open ? 0 : 10, duration: open ? .3 : .2, ease: 'power3.out' });
  }, [open]);

  const animate = (index: number, enter: boolean) => {
    const timeline = timelines.current[index];
    if (!timeline || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timeline.tweenTo(enter ? timeline.duration() : 0, { duration: enter ? .3 : .2, ease: 'power3.out', overwrite: true });
  };

  return <div className="pill-nav" ref={rootRef}>
    <a className="pill-nav-logo" href="#" aria-label="Shira Landscaping home"><Image src={logo} alt={logoAlt} width={190} height={75} priority /></a>
    <nav className="pill-nav-links" aria-label="Main navigation">
      {items.map((item, index) => <a className="pill-nav-link" key={item.href} href={item.href} aria-label={item.ariaLabel} onMouseEnter={() => animate(index, true)} onMouseLeave={() => animate(index, false)}>
        <span className="pill-hover-circle" ref={element => { circleRefs.current[index] = element; }} aria-hidden="true" />
        <span className="pill-label-stack"><span data-pill-label>{item.label}</span><span data-pill-label aria-hidden="true">{item.label}</span></span>
      </a>)}
    </nav>
    <a href={phoneHref} className="pill-nav-phone" aria-label={`Call Shira at ${phoneLabel}`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m7 3 3 5-3 3c2 3 3 4 6 6l3-3 5 3c-1 4-3 5-6 3C8 17 4 13 3 7c0-2 1-4 4-4Z" /></svg><span><small>Call Us</small><strong>{phoneLabel}</strong></span></a>
    <button className="pill-nav-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="pill-mobile-menu" onClick={() => setOpen(value => !value)}><span /><span /></button>
    <div id="pill-mobile-menu" className="pill-mobile-menu" ref={menuRef} aria-hidden={!open}>
      {items.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
      <a href="#contact" onClick={() => setOpen(false)}>Get a free quote</a>
    </div>
  </div>;
}
