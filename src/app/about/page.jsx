"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Rocket, Users, Target, Heart, Globe, Award, TrendingUp, CheckCircle, Menu, X } from "lucide-react"
import { useState } from "react"

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
     

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            
            <Badge variant="secondary" className="mb-4 bg-green-100  text-green-700 hover:bg-green-100">
              Our Story
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Our mission is to empower our youth and society
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              We believe that access to quality community and skill development should never be limited by financial
              barriers. That's why we've created a completely this young community  where young minds can learn, grow, and
              thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-base md:text-lg text-gray-600 mb-6">
              Watermelon was founded in July 2024 by a passionate young woman named <strong>Lucky</strong>, 
              driven by a deep desire to spark change and empower the next generation. Recognizing a growing disconnect among youth, 
              a lack of societal awareness, and limited access to quality opportunities especially for 
              those from marginalized backgrounds she set out to create a community that bridges these gaps. Watermelon was born from her vision to reconnect, uplift,
              and inspire young people from all walks of life by providing accessible resources, 
              inclusive programs, and a safe space for growth, learning, and leadership.
              </p>
           
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="/pic.jpg?height=500&width=600"
                alt="YouthRise founding story"
                width={600}
                height={500}
                className="rounded-2xl object-cover shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What drives us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="text-center p-6 md:p-8 border-2 border-green-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-sm md:text-base">
                To provide free, high-quality  and empower development opportunities to young people, empowering
                them to build successful careers and make positive impacts in their communities.
              </p>
            </Card>

            <Card className="text-center p-6 md:p-8 border-2 border-orange-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-sm md:text-base">
                A world where every young person has access to the education and opportunities they need to reach their
                full potential, regardless of their background or financial situation.
              </p>
            </Card>

            <Card className="text-center p-6 md:p-8 border-2 border-yellow-100 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Accessibility, excellence, community, innovation, and empowerment. We believe in creating an inclusive
                environment where everyone can learn and grow together.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      {/* <section className="py-12 md:py-20 bg-green-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our impact in numbers</h2>
          <p className="text-lg md:text-xl text-green-100 mb-8 md:mb-12">
            These numbers represent real lives changed and futures transformed
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">8,500+</div>
              <div className="text-green-100 text-sm md:text-base">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">150+</div>
              <div className="text-green-100 text-sm md:text-base">Expert Mentors</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">92%</div>
              <div className="text-green-100 text-sm md:text-base">Completion Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">78%</div>
              <div className="text-green-100 text-sm md:text-base">Career Advancement</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Approach */}
      {/* <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our approach to the society</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We've designed our programs based on proven educational principles and real-world industry needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Community-Driven Learning</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Learn alongside peers, collaborate on projects, and build lasting connections that extend beyond the
                classroom.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Industry-Relevant Skills</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Our curriculum is constantly updated to reflect current industry demands and emerging technology trends.
              </p>
            </div>
            <div className="text-center md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Personalized Mentorship</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Every student is paired with an industry mentor who provides guidance, support, and career advice.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet our leadership team</h2>
            <p className="text-lg md:text-xl text-gray-600">
              Passionate individuals dedicated to empowering the next generation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="text-center p-6 md:p-8 hover:shadow-lg transition-shadow">
              <Avatar className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6">
                <AvatarImage src="/log.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Lucky</h3>
              <p className="text-green-500 font-medium mb-4">Founder & CEO</p>
              <p className="text-gray-600 text-sm md:text-base">
              Dedicated social worker with a strong commitment to raising societal awareness, empowering youth, and supporting underprivileged families
              </p>
            </Card>

            <Card className="text-center p-6 md:p-8 hover:shadow-lg transition-shadow">
              <Avatar className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6">
                <AvatarImage src="/globe.svg" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Tochi</h3>
              <p className="text-green-500 font-medium mb-4">Head of Programs</p>
              <p className="text-gray-600 text-sm md:text-base">
              focused on creating inclusive community environments
              </p>
            </Card>

            <Card className="text-center p-6 md:p-8 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <Avatar className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6">
                <AvatarImage src="/pic.jpg" />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Naema</h3>
              <p className="text-green-500 font-medium mb-4">Community Director</p>
              <p className="text-gray-600 text-sm md:text-base">
               focused on creating inclusive community environments.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our partners & supporters</h2>
            <p className="text-lg md:text-xl text-gray-600">
              Working together with amazing organizations to maximize our impact
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="h-12 md:h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="font-bold text-gray-500 text-sm md:text-base">Bile School</span>
              </div>
            </div>
          
          </div>
        </div>
      </section>

      {/* Why Free */}
      {/* <section className="py-12 md:py-20 bg-yellow-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why everything is free</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              We believe that financial barriers should never prevent someone from accessing quality education. Our
              programs are funded through partnerships, grants, and the generous support of our community.
            </p>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
              <div className="text-center">
                <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-gray-900 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">No Hidden Costs</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Completely free - no tuition, no materials fees, no catch
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-gray-900 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Equal Access</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Everyone deserves the same opportunities to learn and grow
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-gray-900 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Community Funded</h3>
                <p className="text-gray-700 text-sm md:text-base">Supported by partners who believe in our mission</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-12 md:py-20 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to be part of our story?</h2>
          <p className="text-lg md:text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking to learn, mentor, or partner with us, there's a place for you in the YouthRise
            community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8">
              Join Our Community
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500 px-8"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  )
}
