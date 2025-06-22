"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-600">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="SSC IIT BHU Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-navy-900">Social Service Council</span>
            <span className="text-xs text-orange-600 font-medium">IIT (BHU) Varanasi</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-navy-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-navy-600 transition-colors">
            About
          </Link>
          <Link href="/clubs" className="text-sm font-medium text-gray-600 hover:text-navy-600 transition-colors">
            Clubs
          </Link>
          <Link href="/jagriti" className="text-sm font-medium text-gray-600 hover:text-navy-600 transition-colors">
            Jagriti
          </Link>
          <Link href="/events" className="text-sm font-medium text-gray-600 hover:text-navy-600 transition-colors">
            Events
          </Link>
          <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-navy-600 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button asChild className="hidden md:inline-flex bg-orange-600 hover:bg-orange-700 text-white">
            <Link href="/contact">Join Us</Link>
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
              className="block text-sm font-medium text-gray-600 hover:text-navy-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium text-gray-600 hover:text-navy-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/clubs"
              className="block text-sm font-medium text-gray-600 hover:text-navy-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Clubs
            </Link>
            <Link
              href="/jagriti"
              className="block text-sm font-medium text-gray-600 hover:text-navy-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Jagriti
            </Link>
            <Link
              href="/events"
              className="block text-sm font-medium text-gray-600 hover:text-navy-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium text-gray-600 hover:text-navy-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Join Us
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
