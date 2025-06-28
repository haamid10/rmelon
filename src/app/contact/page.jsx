"use client"
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Mail, Phone, MapPin, Clock, MessageCircle, Users, HelpCircle, Menu, X } from "lucide-react"
import { useState } from "react"

export default function contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-green-100 text-green-700 hover:bg-green-100">
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Get in touch with us
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Have questions about our programs? Want to become a mentor? Looking to partner with us? We'd love to hear
              from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">General Inquiries</h3>
              <p className="text-gray-600 text-sm">Questions about our programs and community</p>
            </Card>

            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Become a Mentor</h3>
              <p className="text-gray-600 text-sm">Share your expertise with young learners</p>
            </Card>

            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Partnership</h3>
              <p className="text-gray-600 text-sm">Collaborate with us to expand our impact</p>
            </Card>

            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Media & Press</h3>
              <p className="text-gray-600 text-sm">Press inquiries and media requests</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. All our programs are completely
                free!
              </p>

              {/* Google Form Embed */}
              {/* <div className="bg-gray-50 rounded-lg p-4 md:p-6">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf_EXAMPLE_FORM_ID/viewform?embedded=true"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg w-full"
                  title="Contact Form"
                >
                  Loading…
                </iframe>
              </div> */}

              {/* Fallback for when iframe doesn't load */}
              {/* <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-800 text-sm">
                  <strong>Can't see the form?</strong> You can also fill it out directly at:{" "}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf_EXAMPLE_FORM_ID/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-600"
                  >
                    Google Forms Link
                  </a>
                </p>
              </div> */}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Other ways to reach us</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 text-sm md:text-base">watermeloncommunity@gmail.com</p>
                    <p className="text-gray-600 text-sm md:text-base">watermeloncommunity@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600 text-sm md:text-base">+252 (63)3979006</p>
                    <p className="text-gray-500 text-sm">sat-wed, 9AM-6PM EST</p>
                  </div>
                </div>
{/* 
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600 text-sm md:text-base">123 Innovation Street</p>
                    <p className="text-gray-600 text-sm md:text-base">Tech District, CA 94105</p>
                  </div>
                </div> */}

                {/* <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-600 text-sm md:text-base">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 text-sm md:text-base">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600 text-sm md:text-base">Sunday: Closed</p>
                  </div>
                </div> */}
              </div>

              {/* Social Media */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="font-semibold text-gray-900 mb-4">Follow us on social media</h3>
                <div className="flex flex-wrap gap-3">
                  
                  <Link href="https://www.instagram.com/watermelon_suggar0_0/"> 
                  <Button  variant="outline" size="sm" className="border-gray-300">
                    Instagram
                  </Button></Link>
                  
                </div>
              </div>

              {/* FAQ Link */}
              
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">We'll get back to you quickly</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call
            us directly.
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-500 mb-2">24 hours</div>
              <div className="text-gray-600 text-sm md:text-base">General inquiries response time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-500 mb-2">48 hours</div>
              <div className="text-gray-600 text-sm md:text-base">Partnership discussions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-500 mb-2">1 hour</div>
              <div className="text-gray-600 text-sm md:text-base">Urgent support requests</div>
            </div>
          </div>
        </div>
      </section>

     
      
    </div>
  )
}
