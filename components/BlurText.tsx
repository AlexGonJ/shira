'use client';

import { motion, type Easing, type Transition } from 'motion/react';
import { useMemo, useRef, useSyncExternalStore } from 'react';
import { useScrollReveal } from '@/components/useScrollReveal';

const reducedMotionQuery = '(prefers-reduced-motion: reduce)';
function subscribeToReducedMotion(onChange: () => void) {
  const media = window.matchMedia(reducedMotionQuery);
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
}
function getReducedMotionSnapshot() { return window.matchMedia(reducedMotionQuery).matches; }
function getReducedMotionServerSnapshot() { return false; }

type BlurTextProps = {
  text: string;
  delay?: number;
  startDelay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  easing?: Easing | Easing[];
  stepDuration?: number;
};

function buildKeyframes(from: Record<string, string | number>, steps: Array<Record<string, string | number>>) {
  const keys = new Set([...Object.keys(from), ...steps.flatMap(step => Object.keys(step))]);
  const keyframes: Record<string, Array<string | number>> = {};
  keys.forEach(key => { keyframes[key] = [from[key], ...steps.map(step => step[key])]; });
  return keyframes;
}

export default function BlurText({
  text,
  delay = 130,
  startDelay = 0,
  className = '',
  animateBy = 'words',
  direction = 'bottom',
  threshold = 0.15,
  rootMargin = '0px 0px -8% 0px',
  easing = [0.22, 1, 0.36, 1],
  stepDuration = 0.68,
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const { hasScrolled, isVisible } = useScrollReveal(ref, threshold, rootMargin);
  const reduceMotion = useSyncExternalStore(subscribeToReducedMotion, getReducedMotionSnapshot, getReducedMotionServerSnapshot);
  const elements = useMemo(() => animateBy === 'words' ? text.split(' ') : text.split(''), [animateBy, text]);
  const from = useMemo(() => reduceMotion
    ? ({ filter:'blur(0px)', opacity:0, y:0 })
    : ({ filter:'blur(12px)', opacity:0, y:direction === 'top' ? -24 : 24 }), [direction, reduceMotion]);
  const to = useMemo(() => [
    reduceMotion
      ? { filter:'blur(0px)', opacity:0.7, y:0 }
      : { filter:'blur(4px)', opacity:0.65, y:direction === 'top' ? 3 : -3 },
    { filter:'blur(0px)', opacity:1, y:0 },
  ], [direction, reduceMotion]);

  const keyframes = buildKeyframes(from, to);
  const finalFrame = to[to.length - 1];
  return <span ref={ref} className={`blur-text ${className}`}>
    <span className="blur-text-visual" aria-hidden="true">{elements.map((segment, index) => {
      const transition: Transition = {
        duration:reduceMotion ? 0.9 : stepDuration * 2,
        times:[0, 0.5, 1],
        delay:reduceMotion ? 0 : (startDelay + index * delay) / 1000,
        ease:easing,
      };
      const target = isVisible ? keyframes : hasScrolled ? from : finalFrame;
      const wordTransition = !hasScrolled || !isVisible ? { duration:0 } : transition;
      return <motion.span key={`${segment}-${index}`} initial={finalFrame} animate={target} transition={wordTransition} style={{display:'inline-block', willChange:'transform, filter, opacity'}}>{segment}{animateBy === 'words' && index < elements.length - 1 ? '\u00A0' : ''}</motion.span>;
    })}</span><span className="sr-only">{text}</span>
  </span>;
}
