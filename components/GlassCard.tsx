'use client';

import type { ComponentProps, PointerEvent } from 'react';

/** Small client boundary: updates only the reflection, without rerendering the hero. */
export default function GlassCard({ className = '', children, ...props }: ComponentProps<'a'>) {
  function reflect(event: PointerEvent<HTMLAnchorElement>) {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--reflection-x', `${((event.clientX - rect.left) / rect.width) * 100}%`);
    event.currentTarget.style.setProperty('--reflection-y', `${((event.clientY - rect.top) / rect.height) * 100}%`);
  }

  return <a {...props} className={`glass-card ${className}`} onPointerMove={reflect} onPointerLeave={event => {
    event.currentTarget.style.removeProperty('--reflection-x');
    event.currentTarget.style.removeProperty('--reflection-y');
  }}><span className="glass-reflection" aria-hidden="true" />{children}</a>;
}
