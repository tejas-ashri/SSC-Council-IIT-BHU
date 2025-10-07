"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Phone, ExternalLink, Users, Calendar, Award } from "lucide-react"
import Footer from "@/components/footer"

export default function ContactPage() {
  const handleGoogleFormRedirect = () => {
    // Replace this URL with your actual Google Form URL
    window.open("https://forms.google.com/", "_blank")
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-50 via-blue-50 to-orange-50 py-20 md:py-32 reveal">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-orange-100 text-orange-800 hover:bg-orange-100">Get Involved</Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl md:text-6xl">
              Join Our
              <span className="text-orange-600"> Mission</span>
            </h1>
            <p className="mb-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to make a difference? Connect with us and become part of a community dedicated to creating positive
              social impact. Whether you're a student, faculty member, or community volunteer, there's a place for you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 md:py-32 reveal reveal-stagger">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-100">
                          <MapPin className="h-6 w-6 text-navy-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-navy-900 mb-2">Address</h3>
                          <p className="text-gray-600">
                            Social Service Council
                            <br />
                            Indian Institute of Technology (BHU)
                            <br />
                            Varanasi, Uttar Pradesh 221005
                            <br />
                            India
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                          <Mail className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-navy-900 mb-2">Email</h3>
                          <p className="text-gray-600">ssc@iitbhu.ac.in</p>
                          <p className="text-gray-600">info.ssc@iitbhu.ac.in</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                          <Phone className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-navy-900 mb-2">Phone</h3>
                          <p className="text-gray-600">+91-542-2307000</p>
                          <p className="text-gray-600">+91-542-2368428</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Office Hours */}
                <Card className="border-0 shadow-lg mt-6">
                  <CardHeader>
                    <CardTitle className="text-xl text-navy-900">Office Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monday - Friday</span>
                        <span className="font-semibold">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saturday</span>
                        <span className="font-semibold">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sunday</span>
                        <span className="font-semibold">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Join Us Form */}
              <div>
                <Card className="border-0 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-navy-600 to-navy-700 text-white rounded-t-lg">
                    <CardTitle className="text-2xl">Join Our Community</CardTitle>
                    <p className="text-navy-100">
                      Fill out our registration form to get started with Social Service Council
                    </p>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-xl font-semibold text-navy-900 mb-4">Ready to Make a Difference?</h3>
                        <p className="text-gray-600 mb-6">
                          Click the button below to access our comprehensive registration form. We'll collect your
                          information, interests, and availability to match you with the perfect volunteer opportunity.
                        </p>
                      </div>

                      <div className="grid gap-4 md:grid-cols-3">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <Users className="h-8 w-8 text-navy-600 mx-auto mb-2" />
                          <p className="font-semibold text-sm">Join a Club</p>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <Calendar className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                          <p className="font-semibold text-sm">Attend Events</p>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                          <p className="font-semibold text-sm">Make Impact</p>
                        </div>
                      </div>

                      <Button
                        onClick={handleGoogleFormRedirect}
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 text-lg"
                        size="lg"
                      >
                        Open Registration Form
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </Button>

                      <div className="text-center text-sm text-gray-500">
                        <p>The form will open in a new tab. Please have your IIT BHU details ready.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Contact Options */}
                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-semibold text-navy-900">Quick Contact</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Button
                      variant="outline"
                      className="border-navy-300 text-navy-600 hover:bg-navy-50"
                      onClick={() => window.open("mailto:ssc@iitbhu.ac.in")}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </Button>
                    <Button
                      variant="outline"
                      className="border-orange-300 text-orange-600 hover:bg-orange-50"
                      onClick={() => window.open("tel:+915422307000")}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20 md:py-32 reveal reveal-stagger">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Common questions about joining and participating in Social Service Council activities.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-navy-900 mb-3">Who can join SSC?</h3>
                  <p className="text-gray-600">
                    All IIT BHU students, faculty, staff, and community members are welcome to join our initiatives and
                    contribute to social service activities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-navy-900 mb-3">How much time commitment is required?</h3>
                  <p className="text-gray-600">
                    Time commitment varies by activity. You can participate in one-time events or commit to regular club
                    activities based on your availability.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-navy-900 mb-3">Do I need prior experience?</h3>
                  <p className="text-gray-600">
                    No prior experience is required. We provide training and guidance for all our activities. Your
                    enthusiasm to help is what matters most.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-navy-900 mb-3">Are there any fees involved?</h3>
                  <p className="text-gray-600">
                    Participation in SSC activities is completely free. We may occasionally organize fundraising events
                    for community projects.
                  </p>
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
