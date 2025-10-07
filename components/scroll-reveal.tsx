"use client"

import { useEffect } from "react"

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const target = entry.target as HTMLElement
          if (entry.isIntersecting) {
            target.classList.add("revealed")
            // Once revealed, unobserve to avoid re-animating repeatedly
            observer.unobserve(target)
          }
        }
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    )

    const observeAll = () => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))
      elements.forEach((el) => observer.observe(el))
    }

    // Initial pass (after mount)
    observeAll()

    // Watch for dynamically added .reveal nodes
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return
          if (node.classList?.contains("reveal")) {
            observer.observe(node)
          }
          // Also check descendants
          node.querySelectorAll?.(".reveal").forEach((desc) => observer.observe(desc as HTMLElement))
        })
      }
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      mo.disconnect()
      observer.disconnect()
    }
  }, [])

  return null
}


