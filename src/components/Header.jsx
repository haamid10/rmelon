'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Rocket, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-100 sticky top-0 bg-white z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-14 h-12 flex items-center justify-center">
            {/* <Rocket className="w-5 h-5 text-white" /> */}
            <Image
                src="/log.png?height=400&width=500"
                alt="families"
                width={90}
                height={90}
                // className="rounded-2xl object-cover w-full h-auto shadow-lg"
              />
          </div>
          <Link href="/" className="text-xl font-bold text-gray-900">Watermelon Community</Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
        <Link href="/" className="block text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/about" className="block text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/contact" className="block text-gray-600 hover:text-gray-900">Contact</Link>
            {/* <Link href='/contact'className="w-full bg-gray-900 text-white">Join Community</Link> */}
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/contact"><Button className="hidden sm:flex bg-gray-900 text-white">Join Community</Button></Link>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link href="/" className="block text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/about" className="block text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/contact" className="block text-gray-600 hover:text-gray-900">Contact</Link>
            <Link href='/contact'> <Button className="w-full bg-gray-900 text-white"> Join Community</Button> </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
