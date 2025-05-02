// src/types/lenis.d.ts
declare module '@studio-freight/lenis' {
    export default class Lenis {
      constructor(options?: {
        duration?: number;
        easing?: (t: number) => number;
        smooth?: boolean;
        smoothTouch?: boolean;
        direction?: 'vertical' | 'horizontal';
        gestureDirection?: 'vertical' | 'horizontal';
        wheelMultiplier?: number;
        touchMultiplier?: number;
      });
      raf: (time: number) => void;
      destroy: () => void;
    }
  }
  