import { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver(options = {}) {
  const { threshold = 0.15, triggerOnce = true } = options
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, triggerOnce])

  return [ref, isVisible]
}
