"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const setRipplePosition = (element: HTMLElement, clientX: number, clientY: number) => {
    const rect = element.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top
    element.style.setProperty('--x', `${x}px`)
    element.style.setProperty('--y', `${y}px`)
  }

  const handleMouseMove: React.MouseEventHandler<HTMLElement> = (event) => {
    setRipplePosition(event.currentTarget as HTMLElement, event.clientX, event.clientY)
  }

  const handleTouchStart: React.TouchEventHandler<HTMLElement> = (event) => {
    const touch = event.touches[0]
    if (!touch) return
    setRipplePosition(event.currentTarget as HTMLElement, touch.clientX, touch.clientY)
  }

  const handleClick: React.MouseEventHandler<HTMLElement> = (event) => {
    const element = event.currentTarget as HTMLElement
    element.classList.remove('ripple-active')
    // force reflow to restart animation
    void element.offsetWidth
    element.classList.add('ripple-active')
    window.setTimeout(() => element.classList.remove('ripple-active'), 520)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-600 overflow-hidden">
            <Image
              src="/placeholder-logo.svg"
              alt="SSC IIT BHU Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-navy-900">Social Service Council</span>
            <span className="text-xs text-orange-600 font-medium">IIT (BHU) Varanasi</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="nav-link ripple-base" onMouseMove={handleMouseMove} onTouchStart={handleTouchStart} onClick={handleClick}>
            Home
          </Link>
          <Link href="/about" className="nav-link ripple-base" onMouseMove={handleMouseMove} onTouchStart={handleTouchStart} onClick={handleClick}>
            About
          </Link>
          <Link href="/clubs" className="nav-link ripple-base" onMouseMove={handleMouseMove} onTouchStart={handleTouchStart} onClick={handleClick}>
            Clubs
          </Link>
          <Link href="/jagriti" className="nav-link ripple-base" onMouseMove={handleMouseMove} onTouchStart={handleTouchStart} onClick={handleClick}>
            Jagriti
          </Link>
          <Link href="/events" className="nav-link ripple-base" onMouseMove={handleMouseMove} onTouchStart={handleTouchStart} onClick={handleClick}>
            Events
          </Link>
          <Link href="/contact" className="nav-link ripple-base" onMouseMove={handleMouseMove} onTouchStart={handleTouchStart} onClick={handleClick}>
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button asChild className="hidden md:inline-flex btn-animated ripple-base bg-orange-600 hover:bg-orange-700 text-white">
            <Link href="/contact" onMouseMove={handleMouseMove} onTouchStart={handleTouchStart} onClick={handleClick}>Join Us</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block nav-link ripple-base"
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onClick={(e) => { handleClick(e); setIsMenuOpen(false) }}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block nav-link ripple-base"
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onClick={(e) => { handleClick(e); setIsMenuOpen(false) }}
            >
              About
            </Link>
            <Link
              href="/clubs"
              className="block nav-link ripple-base"
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onClick={(e) => { handleClick(e); setIsMenuOpen(false) }}
            >
              Clubs
            </Link>
            <Link
              href="/jagriti"
              className="block nav-link ripple-base"
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onClick={(e) => { handleClick(e); setIsMenuOpen(false) }}
            >
              Jagriti
            </Link>
            <Link
              href="/events"
              className="block nav-link ripple-base"
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onClick={(e) => { handleClick(e); setIsMenuOpen(false) }}
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="block nav-link ripple-base"
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onClick={(e) => { handleClick(e); setIsMenuOpen(false) }}
            >
              Contact
            </Link>
            <Button asChild className="w-full btn-animated ripple-base bg-orange-600 hover:bg-orange-700 text-white">
              <Link href="/contact" onMouseMove={handleMouseMove} onTouchStart={handleTouchStart} onClick={(e) => { handleClick(e); setIsMenuOpen(false) }}>
                Join Us
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
