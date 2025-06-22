import { Badge } from "@/components/ui/badge"
import { Heart, Facebook, Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white py-12 border-t border-white/10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-600">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">Social Service Council</span>
            </div>
            <p className="text-gray-400 text-sm">
              IIT (BHU) Varanasi - Dedicated to creating positive social impact through student-led initiatives and
              community service.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/jagriti" className="hover:text-white transition-colors">
                  Jagriti Festival
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Our Clubs</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/clubs#kashi-utkarsh" className="hover:text-white transition-colors">
                  Kashi Utkarsh Club
                </Link>
              </li>
              <li>
                <Link href="/clubs#sahyog" className="hover:text-white transition-colors">
                  Sahyog Club
                </Link>
              </li>
              <li>
                <Link href="/clubs#social-projects" className="hover:text-white transition-colors">
                  Social Projects Club
                </Link>
              </li>
              <li>
                <Link href="/clubs#health-hygiene" className="hover:text-white transition-colors">
                  Health & Hygiene Club
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/about#gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/about#reports" className="hover:text-white transition-colors">
                  Annual Reports
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Social Service Council, IIT (BHU) Varanasi. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Celebrating</span>
            <Badge className="bg-orange-600 text-white">100 Years of IIT BHU</Badge>
          </div>
        </div>
      </div>
    </footer>
  )
}
