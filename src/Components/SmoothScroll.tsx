import { useRef, useEffect, PropsWithChildren } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScroll: React.FC<PropsWithChildren> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      smooth: true,
      smoothTouch: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      wheelMultiplier: 1.15,
      touchMultiplier: 1.25,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
