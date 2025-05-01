// components/SmoothScroll.tsx
import { useEffect, useRef, PropsWithChildren } from 'react'
import Lenis from '@studio-freight/lenis'

const SmoothScroll: React.FC<PropsWithChildren> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const lenis = new Lenis({
     
     
      duration: 1.6,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      normalizeWheel: true,
      smoothTouch: true ,
      smooth: true ,
      
      wheelMultiplier: 1.15,
      touchMultiplier: 1.25,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      autoResize: true,
    })

    lenisRef.current = lenis

    const raf = (time: number) => {
      lenis.raf(time)
      rafRef.current = requestAnimationFrame(raf)
    }

    rafRef.current = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafRef.current)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}

export default SmoothScroll