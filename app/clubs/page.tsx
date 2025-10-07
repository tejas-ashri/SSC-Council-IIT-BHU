import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, HandHeart, Users, Stethoscope } from "lucide-react"
import Image from "next/image"
import Footer from "@/components/footer"

export default function ClubsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-50 via-blue-50 to-orange-50 py-20 md:py-32 reveal">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-100">Our Clubs</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl md:text-6xl">
              Four Pillars of
              <span className="text-orange-600"> Social Service</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our specialized clubs, each dedicated to different aspects of social service and community
              development. Together, they form a comprehensive approach to addressing society's challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section className="py-20 md:py-32 reveal reveal-stagger">
        <div className="container px-4 md:px-6">
          <div className="space-y-20">
            {/* Kashi Utkarsh Club */}
            <div id="kashi-utkarsh" className="mx-auto max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mr-4">
                      <Building className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-navy-900">Kashi Utkarsh Club</h2>
                      <p className="text-orange-600 font-semibold">Urban Development & Infrastructure</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Focused on the holistic development of Varanasi (Kashi), our club works on urban planning,
                    infrastructure improvement, and sustainable development initiatives. We collaborate with local
                    authorities and communities to address urban challenges and promote smart city solutions.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Urban planning and development projects</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Infrastructure improvement initiatives</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Sustainable development programs</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Community engagement and awareness</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Kashi Utkarsh Club Activities"
                    width={500}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Sahyog Club */}
            <div id="sahyog" className="mx-auto max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div className="lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mr-4">
                      <HandHeart className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-navy-900">Sahyog Club</h2>
                      <p className="text-orange-600 font-semibold">Community Support & Assistance</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Dedicated to providing direct support and assistance to underprivileged communities, Sahyog Club
                    focuses on immediate relief and long-term empowerment. We work closely with marginalized groups to
                    provide essential services and create opportunities for self-reliance.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Direct community assistance programs</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Educational support for underprivileged children</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Skill development and training programs</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Emergency relief and disaster response</span>
                    </div>
                  </div>
                </div>
                <div className="lg:order-1 relative">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Sahyog Club Activities"
                    width={500}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Social Projects Club */}
            <div id="social-projects" className="mx-auto max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mr-4">
                      <Users className="h-8 w-8 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-navy-900">Social Projects Club</h2>
                      <p className="text-orange-600 font-semibold">Innovation & Sustainable Development</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Implementing innovative social projects for sustainable community development, this club focuses on
                    research-based solutions and technology-driven initiatives. We design and execute projects that
                    address complex social issues with creative and scalable approaches.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Research-based social innovation projects</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Technology solutions for social problems</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Sustainable development initiatives</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Community-driven project implementation</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Social Projects Club Activities"
                    width={500}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Health and Hygiene Club */}
            <div id="health-hygiene" className="mx-auto max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div className="lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mr-4">
                      <Stethoscope className="h-8 w-8 text-red-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-navy-900">Health & Hygiene Club</h2>
                      <p className="text-orange-600 font-semibold">Healthcare & Wellness</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Promoting health awareness and hygiene practices in local communities, our Health & Hygiene Club
                    organizes medical camps, health education programs, and preventive healthcare initiatives. We work
                    with healthcare professionals to bring quality medical services to underserved areas.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Free medical camps and health check-ups</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Health awareness and education programs</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Hygiene and sanitation initiatives</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">Mental health support and counseling</span>
                    </div>
                  </div>
                </div>
                <div className="lg:order-1 relative">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Health & Hygiene Club Activities"
                    width={500}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-navy-600 to-navy-800 text-white py-20 md:py-32 reveal">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Join a Club Today</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Find your passion and make a meaningful impact by joining one of our specialized clubs. Each club offers
              unique opportunities to serve the community and develop your skills.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
              <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
                <CardContent className="p-4 text-center">
                  <Building className="h-8 w-8 mx-auto mb-2 text-blue-400" />
                  <p className="font-semibold">Kashi Utkarsh</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
                <CardContent className="p-4 text-center">
                  <HandHeart className="h-8 w-8 mx-auto mb-2 text-green-400" />
                  <p className="font-semibold">Sahyog</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 mx-auto mb-2 text-purple-400" />
                  <p className="font-semibold">Social Projects</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
                <CardContent className="p-4 text-center">
                  <Stethoscope className="h-8 w-8 mx-auto mb-2 text-red-400" />
                  <p className="font-semibold">Health & Hygiene</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
