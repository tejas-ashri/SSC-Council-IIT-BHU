import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HandHeart, Star, ArrowRight, Award, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-50 via-blue-50 to-orange-50 py-20 md:py-32 reveal">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-100">About Us</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl md:text-6xl">
              About Social Service
              <span className="text-orange-600"> Council</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The Social Service Council of IIT (BHU) Varanasi embraces clubs dedicated to bringing about positive
              changes in our society's social aspects. We are committed to developing and disseminating professional
              knowledge, critical analysis, and drafting innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 reveal reveal-stagger">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl mb-6">Our Philosophy</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We believe that the inherent humane qualities and the spirit of volunteerism already existent in every
                  individual needs to be nurtured and further developed, thereby blooming out with the full potential to
                  benefit the society as a whole.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Our approach combines academic rigor with practical social work, ensuring that our initiatives are
                  both theoretically sound and practically effective in addressing real-world challenges.
                </p>
                <Button asChild className="bg-navy-600 hover:bg-navy-700">
                  <Link href="/contact">
                    Join Our Mission
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="relative">
                <div className="relative rounded-xl bg-white p-4 shadow-2xl ring-1 ring-gray-900/10">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="SSC Team"
                    width={500}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-100 mb-4">
                    <Target className="h-8 w-8 text-navy-600" />
                  </div>
                  <CardTitle className="text-xl text-navy-900">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    To create a society where every individual contributes to positive social change through dedicated
                    service, innovation, and collaborative efforts that address the root causes of social challenges.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mb-4">
                    <HandHeart className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-navy-900">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    To develop professional knowledge, foster critical analysis, and implement innovative solutions that
                    contribute to responsive social welfare and sustainable community development.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-navy-900">Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Compassion, integrity, innovation, collaboration, and excellence guide our approach to creating
                    meaningful impact in communities while fostering personal growth and leadership.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="bg-navy-900 text-white py-20 md:py-32 reveal">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Our Impact</h2>
            <p className="text-lg text-gray-300">
              Numbers that reflect our commitment to creating positive change in society.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-gray-300">Students Engaged</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-gray-300">Community Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">10,000+</div>
              <div className="text-gray-300">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">15+</div>
              <div className="text-gray-300">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 reveal reveal-stagger">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl mb-6">What People Say</h2>
            <p className="text-lg text-gray-600">
              Hear from our community members and participants about their experiences with SSC.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The Social Service Council has been instrumental in developing my leadership skills while
                  contributing to meaningful social causes. It's been a transformative experience."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Student"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-navy-900">Priya Sharma</p>
                    <p className="text-sm text-gray-500">B.Tech Student, IIT BHU</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The health camps organized by SSC have been a blessing for our community. The students are dedicated
                  and genuinely care about making a difference."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Community Member"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-navy-900">Rajesh Kumar</p>
                    <p className="text-sm text-gray-500">Community Leader</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Jagriti festival is an amazing platform that brings together diverse perspectives on social issues.
                  It's educational and inspiring at the same time."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Faculty"
                    width={40}
                    height={40}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold text-navy-900">Dr. Anita Verma</p>
                    <p className="text-sm text-gray-500">Faculty, IIT BHU</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
