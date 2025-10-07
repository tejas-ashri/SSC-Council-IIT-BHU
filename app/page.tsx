import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, ArrowRight, HandHeart, GraduationCap, Building, Calendar, Award, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-50 via-blue-50 to-orange-50 py-20 md:py-32 reveal">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-100">
                  🎓 Celebrating IIT BHU Centenary - 100 Years of Excellence
                </Badge>
                <h1 className="mb-6 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl md:text-6xl">
                  Social Service
                  <span className="text-orange-600"> Council</span>
                </h1>
                <h2 className="mb-4 text-2xl font-semibold text-navy-700">IIT (BHU) Varanasi</h2>
                <p className="mb-8 text-lg text-gray-600 max-w-2xl leading-relaxed">
                  Welcome to the Social Service Council of IIT (BHU) Varanasi - where academic excellence meets social
                  responsibility. We are a vibrant community of students, faculty, and volunteers dedicated to creating
                  meaningful change in society through innovative service initiatives and community engagement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-navy-600 hover:bg-navy-700 text-lg px-8 py-6">
                    <Link href="/about">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="bg-white text-orange-600 border-orange-300 hover:bg-orange-50 text-lg px-8 py-6"
                  >
                    <Link href="/contact">Join Our Mission</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-xl bg-white p-4 shadow-2xl ring-1 ring-gray-900/10">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Social Service Council Activities"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-orange-600 text-white p-3 rounded-full shadow-lg">
                  <Heart className="h-6 w-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-navy-600 text-white p-3 rounded-full shadow-lg">
                  <Users className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 md:py-32 reveal reveal-stagger">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              "We believe that the inherent humane qualities and the spirit of volunteerism already existent in every
              individual needs to be nurtured and further developed, thereby blooming out with the full potential to
              benefit the society as a whole."
            </p>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-100 mb-4">
                  <Target className="h-8 w-8 text-navy-600" />
                </div>
                <CardTitle className="text-xl text-navy-900">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To create a society where every individual contributes to positive social change through dedicated
                  service and innovative solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mb-4">
                  <HandHeart className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-navy-900">Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Compassion, integrity, innovation, and collaboration guide our approach to addressing social
                  challenges and community needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-navy-900">Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Measurable positive change in communities through sustainable programs, education initiatives, and
                  health awareness campaigns.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="bg-gray-50 py-20 md:py-32 reveal reveal-stagger">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl mb-6">What We Do</h2>
            <p className="text-lg text-gray-600">
              Discover the diverse ways we serve our community through dedicated clubs, events, and initiatives.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/clubs" className="group">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 mb-4 group-hover:bg-blue-200 transition-colors">
                    <Building className="h-7 w-7 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg text-navy-900">Our Clubs</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Four specialized clubs working on different aspects of social service and community development.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/jagriti" className="group">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 mb-4 group-hover:bg-orange-200 transition-colors">
                    <Award className="h-7 w-7 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg text-navy-900">Jagriti Festival</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Our annual flagship festival promoting social awareness through cultural programs and workshops.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/events" className="group">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 mb-4 group-hover:bg-green-200 transition-colors">
                    <Calendar className="h-7 w-7 text-green-600" />
                  </div>
                  <CardTitle className="text-lg text-navy-900">Events & Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Regular workshops, health camps, and community outreach programs throughout the year.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link href="/about" className="group">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 mb-4 group-hover:bg-purple-200 transition-colors">
                    <GraduationCap className="h-7 w-7 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg text-navy-900">About Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Learn more about our history, team, achievements, and the impact we've made over the years.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-navy-600 to-navy-800 text-white py-20 md:py-32 reveal">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Make a Difference?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our community of changemakers and be part of initiatives that create lasting positive impact in
              society. Whether you're a student, faculty member, or community volunteer, there's a place for you in our
              mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-6 transition-transform transition-shadow duration-200 hover:-translate-y-1 active:translate-y-0 hover:shadow-[0_0_20px_rgba(255,255,255,0.35)]">
                <Link href="/contact">
                  Get Involved
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-[#004687] hover:bg-white hover:text-[#004687] text-lg px-8 py-6 transition-transform transition-shadow duration-200 hover:-translate-y-1 active:translate-y-0 hover:shadow-[0_0_20px_rgba(255,255,255,0.35)]"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
