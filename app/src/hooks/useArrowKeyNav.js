import { useCallback, useEffect, useState } from "react"

const HORIZONTAL_NEXT = ["ArrowRight"]
const HORIZONTAL_PREV = ["ArrowLeft"]
const VERTICAL_NEXT = ["ArrowDown"]
const VERTICAL_PREV = ["ArrowUp"]

/**
 * Navegación con flechas entre links/botones de un contenedor, como
 * complemento a Tab (no reemplaza el orden de tabulación ni cambia roles ARIA).
 *
 * Devuelve un callback ref (no un objeto ref) a propósito: contenedores que
 * aparecen de forma condicional o asíncrona (portals, diálogos animados como
 * el Sheet) pueden montar su nodo DOM real en un commit posterior al que
 * activa `open`. Un ref callback se dispara exactamente cuando React adjunta
 * el nodo, sin importar cuándo ocurra eso — un `useRef` + `useEffect` sólo
 * revisa `.current` en los momentos programados de ese efecto y puede perder
 * la carrera.
 */
export function useArrowKeyNav({ orientation = "horizontal", selector = "a, button" } = {}) {
  const [node, setNode] = useState(null)
  const ref = useCallback((el) => setNode(el), [])

  useEffect(() => {
    if (!node) return

    const nextKeys = orientation === "vertical" ? VERTICAL_NEXT : orientation === "both" ? [...HORIZONTAL_NEXT, ...VERTICAL_NEXT] : HORIZONTAL_NEXT
    const prevKeys = orientation === "vertical" ? VERTICAL_PREV : orientation === "both" ? [...HORIZONTAL_PREV, ...VERTICAL_PREV] : HORIZONTAL_PREV

    function handleKeyDown(event) {
      if (![...nextKeys, ...prevKeys, "Home", "End"].includes(event.key)) return

      const items = Array.from(node.querySelectorAll(selector))
      const currentIndex = items.indexOf(document.activeElement)
      if (currentIndex === -1) return

      let nextIndex = currentIndex
      if (nextKeys.includes(event.key)) nextIndex = (currentIndex + 1) % items.length
      else if (prevKeys.includes(event.key)) nextIndex = (currentIndex - 1 + items.length) % items.length
      else if (event.key === "Home") nextIndex = 0
      else if (event.key === "End") nextIndex = items.length - 1

      if (nextIndex === currentIndex) return
      event.preventDefault()
      items[nextIndex]?.focus()
    }

    node.addEventListener("keydown", handleKeyDown)
    return () => node.removeEventListener("keydown", handleKeyDown)
  }, [node, orientation, selector])

  return ref
}
