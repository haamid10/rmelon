"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Users,
  GraduationCap,
  Lightbulb,
  BookOpen,
  Star,
  Play,
  CheckCircle,
  Globe,
  Target,
  Award,
  Rocket,
  Zap,
  TrendingUp,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
     

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge variant="secondary" className="mb-4 bg-green-100 text-green-700 hover:bg-green-100">
                Empowering youth
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Watermelon Community  Empowering youth
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              watermelon is a vibrant community of young changemakers dedicated to upskilling, volunteering, 
              and making a difference. We believe in the power of knowledge, collaboration, 
              and compassion to uplift individuals and communities alike.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8">
                  Start Learning
                </Button>
                <Button variant="outline" size="lg" className="border-gray-300">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Button>
              </div> */}
              {/* <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-2 sm:space-y-0 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>100% Free Programs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Expert Mentorship</span>
                </div>
              </div> */}
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/pic.jpg?height=600&width=500"
                  alt="Young people learning together"
                  width={500}
                  height={600}
                  className="object-cover w-full h-auto"
                />
              </div>
              {/* Floating cards */}
              <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 bg-white rounded-lg shadow-lg p-3 md:p-4 border">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm md:text-base">50+</div>
                    <div className="text-xs md:text-sm text-gray-500">Active Members</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-white rounded-lg shadow-lg p-3 md:p-4 border">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
                  </div>
                  {/* <div>
                    <div className="font-semibold text-gray-900 text-sm md:text-base">15k+</div>
                    <div className="text-xs md:text-sm text-gray-500">Skills Learned</div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}

      
     {/* hfhs */}
      {/* <section id="programs" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free programs that transform futures</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive learning tracks designed for the future of work
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-orange-500 text-white border-0 overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Tech Skills</h3>
                <p className="text-orange-100 mb-6 text-sm md:text-base">
                  Learn programming, web development, AI, and emerging technologies from industry experts
                </p>
                <Button variant="secondary" size="sm" className="bg-white text-orange-500 hover:bg-gray-100">
                  Explore Courses
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 text-white border-0 overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Entrepreneurship</h3>
                <p className="text-gray-300 mb-6 text-sm md:text-base">
                  Build business skills, learn startup fundamentals, and turn ideas into reality
                </p>
                <Button variant="secondary" size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                  Start Journey
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-yellow-400 text-gray-900 border-0 overflow-hidden hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 bg-gray-900/20 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Life Skills</h3>
                <p className="text-gray-700 mb-6 text-sm md:text-base">
                  Develop leadership, communication, financial literacy, and career readiness
                </p>
                <Button size="sm" className="bg-gray-900 text-white hover:bg-gray-800">
                  Join Program
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Impact Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real impact, real success stories</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 md:mb-20">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Bringing Joy to Young Families on Eid</h3>
              <p className="text-base md:text-lg text-gray-600 mb-8">
              Our comprehensive programs have helped children and their families celebrate Eid with dignity, happiness, and a sense of belonging. 
              </p>
              <div className="grid grid-cols-2 gap-6 md:gap-8">
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-green-500 mb-2">92%</div>
                  <div className="text-gray-600 text-sm md:text-base">Program completion rate</div>
                </div>
                {/* <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-green-500 mb-2">78%</div>
                  <div className="text-gray-600 text-sm md:text-base">Career advancement</div>
                </div> */}
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="/pic2.jpeg?height=400&width=500"
                alt="families"
                width={500}
                height={400}
                className="rounded-2xl object-cover w-full h-auto shadow-lg"
              />
            </div>
          </div>

          {/* <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="lg:order-2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">connecting youth society</h3>
              <p className="text-base md:text-lg text-gray-600 mb-8">
                Beyond technical skills, we focus on developing well-rounded individuals who can lead, innovate, and
                make positive impacts in their communities.
              </p>
              <div className="grid grid-cols-2 gap-6 md:gap-8">
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-green-500 mb-2">85%</div>
                  <div className="text-gray-600 text-sm md:text-base">Leadership development</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-green-500 mb-2">96%</div>
                  <div className="text-gray-600 text-sm md:text-base">Community satisfaction</div>
                </div>
              </div>
            </div>
            <div className="lg:order-1 relative">
              <Image
                src="/pic.jpg?height=400&width=500"
                alt="Youth leadership workshop"
                width={500}
                height={400}
                className="rounded-2xl object-cover w-full h-auto shadow-lg"
              />
            </div>
          </div> */}
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-12 md:py-20 bg-green-500">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join our thriving community</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-white">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm md:text-base">Connect with like-minded youth</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm md:text-base">Access to exclusive workshops and events</span>
                </div>
                {/* <div className="flex items-center space-x-3 text-white">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm md:text-base">Mentorship from industry professionals</span>
                </div> */}
                
              </div>
              <Button size="lg" className="bg-white text-green-500 hover:bg-gray-100 w-full sm:w-auto">
                Join our Community
              </Button>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="/pic.jpg?height=400&width=500"
                alt="Community members collaborating"
                width={500}
                height={400}
                className="rounded-2xl object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Showcase */}
      {/* <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore our program tracks</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto">
            Choose from multiple learning paths designed to help you build the skills you need for the future.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Web Development Track"
                width={300}
                height={200}
                className="rounded-lg object-cover mx-auto mb-4 w-full h-48"
              />
              <h3 className="font-semibold text-gray-900 mb-2">Web Development</h3>
              <p className="text-gray-600 text-sm">Full-stack development with modern frameworks</p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Data Science Track"
                width={300}
                height={200}
                className="rounded-lg object-cover mx-auto mb-4 w-full h-48"
              />
              <h3 className="font-semibold text-gray-900 mb-2">Data Science</h3>
              <p className="text-gray-600 text-sm">Analytics, machine learning, and AI fundamentals</p>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Digital Marketing Track"
                width={300}
                height={200}
                className="rounded-lg object-cover mx-auto mb-4 w-full h-48"
              />
              <h3 className="font-semibold text-gray-900 mb-2">Digital Marketing</h3>
              <p className="text-gray-600 text-sm">Social media, content creation, and brand building</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Statistics */}
      {/* <section className="py-12 md:py-20 bg-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our community by the numbers</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mt-8 md:mt-16 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">8,500+</div>
              <p className="text-lg md:text-xl text-gray-700">Young people upskilled across all programs</p>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">150+</div>
              <p className="text-lg md:text-xl text-gray-700">Expert mentors and industry professionals</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Ways to Get Involved */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ways to get involved</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

            <Card className="text-center p-6 md:p-8 border-2 hover:border-yellow-500 transition-colors">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Become a Mentor</h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Share your expertise and guide the next generation
              </p>
              
            </Card>

            <Card className="text-center p-6 md:p-8 border-2 hover:border-orange-500 transition-colors">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Spread the Word</h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Help us reach more young people who could benefit
              </p>
            </Card>

            <Card className="text-center p-6 md:p-8 border-2 hover:border-blue-500 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Partner with Us</h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Collaborate to create more opportunities for youth development
              </p>
            </Card>

            <Card className="text-center p-6 md:p-8 border-2 hover:border-purple-500 transition-colors">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Host an Event</h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Organize workshops, hackathons, or community meetups
              </p>
            </Card>

            <Card className="text-center p-6 md:p-8 border-2 hover:border-green-500 transition-colors">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Alumni Network</h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Join our growing network of successful program graduates
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      {/* <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transforming lives through free education
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-8">
                Every young person deserves access to quality education and skill development opportunities, regardless
                of their financial background. That's why all our programs are completely free.
              </p>
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white w-full sm:w-auto">
                Join Our Mission
              </Button>
            </div>
            <div className="relative order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Success story"
                width={500}
                height={400}
                className="rounded-2xl object-cover w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What our community says</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                "YouthRise completely changed my career trajectory. The free coding bootcamp helped me land my dream job
                in tech!"
              </p>
              <div className="flex items-center">
                <Avatar className="mr-4">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-gray-900">Alex Martinez</div>
                  <div className="text-sm text-gray-500">Software Developer</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                "The entrepreneurship program gave me the confidence and skills to start my own business. Now I'm
                helping other young entrepreneurs!"
              </p>
              <div className="flex items-center">
                <Avatar className="mr-4">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>SP</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Patel</div>
                  <div className="text-sm text-gray-500">Startup Founder</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                "Being a mentor at YouthRise has been incredibly rewarding. Seeing young people grow and succeed is
                amazing."
              </p>
              <div className="flex items-center">
                <Avatar className="mr-4">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-gray-900">Michael Johnson</div>
                  <div className="text-sm text-gray-500">Senior Mentor</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      {/* <section className="py-12 md:py-20 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to unlock your potential?</h2>
          <p className="text-lg md:text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of young people who are already building their futures with our free programs and supportive
            community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100 px-8">
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500 px-8"
            >
              Explore Programs
            </Button>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      
    </div>
  )
}
