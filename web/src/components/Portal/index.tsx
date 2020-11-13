import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

export type PortalProps = {
  children: React.ReactNode
  selector: string
}

export default function Portal({ children, selector }: PortalProps) {
  const ref = useRef<Element>()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector(selector) as Element
    setMounted(true)
  }, [selector])

  return mounted ? createPortal(children, ref.current as Element) : null
}
