import {
    Rocket
  } from "lucide-react";
  import Link from "next/link";
  import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-12">
         
             <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
              <div className="w-36 h-12 flex items-center justify-center">
            {/* <Rocket className="w-5 h-5 text-white" /> */}
            <Image
                src="/log.png?height=400&width=500"
                alt="families"
                width={90}
                height={90}
                className=""
              />
          </div>
                <span className="text-xl font-bold">Watermelon Community</span>
              </div>
              <p className="text-gray-400 mb-6">
              watermelon is a vibrant community of young changemakers dedicated to upskilling, volunteering, and making a difference.
               We believe in the power of knowledge, collaboration, and compassion to uplift individuals and communities alike.
              </p>
            </div> 
           
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Join as Learner
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Become Mentor
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Alumni Network
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Events
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Impact Reports
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">© 2024 YouthRise. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Community Guidelines
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  