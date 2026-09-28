'use client';

import { useRef, type ReactNode } from 'react';
import { useScrollReveal } from '@/components/useScrollReveal';

export default function ScrollReveal({ children, className = '' }: { children:ReactNode; className?:string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { hasScrolled, isVisible } = useScrollReveal(ref, 0.12);
  const revealState = isVisible ? ' is-visible' : hasScrolled ? ' is-armed' : '';
  return <div ref={ref} className={`scroll-reveal ${className}${revealState}`}>{children}</div>;
}
