'use client';

import { useEffect, useState, useSyncExternalStore, type RefObject } from 'react';

let armed = false;
let listening = false;
let scrollbarPointer = false;
const listeners = new Set<() => void>();

function armReveal() {
  if (armed) return;
  armed = true;
  listeners.forEach(listener => listener());
  window.removeEventListener('wheel', onWheel);
  window.removeEventListener('touchmove', onTouchMove);
  window.removeEventListener('keydown', onKeyDown);
  window.removeEventListener('pointerdown', onPointerDown);
  window.removeEventListener('pointerup', onPointerUp);
  window.removeEventListener('scroll', onScroll);
}

function onWheel(event: WheelEvent) { if (event.deltaY > 0) armReveal(); }
function onTouchMove() { armReveal(); }
function onPointerDown(event: PointerEvent) { scrollbarPointer = event.clientX >= window.innerWidth - 18; }
function onPointerUp() { scrollbarPointer = false; }
function onScroll() { if (scrollbarPointer) armReveal(); }
function onKeyDown(event: KeyboardEvent) {
  if (['ArrowDown', 'PageDown', ' ', 'End'].includes(event.key)) armReveal();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (!listening && typeof window !== 'undefined') {
    listening = true;
    window.addEventListener('wheel', onWheel, { passive:true });
    window.addEventListener('touchmove', onTouchMove, { passive:true });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('pointerdown', onPointerDown, { passive:true });
    window.addEventListener('pointerup', onPointerUp, { passive:true });
    window.addEventListener('scroll', onScroll, { passive:true });
  }
  return () => listeners.delete(listener);
}

function getSnapshot() { return armed; }
function getServerSnapshot() { return false; }

export function useScrollReveal<T extends Element>(ref: RefObject<T | null>, threshold = 0.15, rootMargin = '0px 0px -8% 0px') {
  const hasScrolled = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!hasScrolled) return;
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(node);
      }
    }, { threshold, rootMargin });
    observer.observe(node);
    return () => observer.disconnect();
  }, [hasScrolled, ref, rootMargin, threshold]);

  return { hasScrolled, isVisible };
}
