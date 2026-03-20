import { useEffect, useRef, useState } from 'react'

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

export function useCountUp({ target, duration = 1800, start = false }) {
  const [value, setValue] = useState(target === 0 ? 0 : 0)
  const rafRef = useRef(null)
  const startTimeRef = useRef(null)

  useEffect(() => {
    if (!start || target === 0) {
      setValue(target)
      return
    }

    startTimeRef.current = null

    const step = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)

      setValue(Math.round(eased * target))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step)
      } else {
        setValue(target)
      }
    }

    rafRef.current = requestAnimationFrame(step)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [start, target, duration])

  return value
}
