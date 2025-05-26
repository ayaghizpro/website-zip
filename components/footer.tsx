import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/logo.png" alt="Aya Ghiz Logo" width={32} height={32} className="rounded-full" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">
                Aya Ghiz
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Marketing Specialist & Content Creator helping businesses boost their online presence and drive growth
              through strategic digital marketing.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <span className="text-sm">📧</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center hover:bg-teal-700 transition-colors"
              >
                <span className="text-sm">📱</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center hover:bg-indigo-700 transition-colors"
              >
                <span className="text-sm">💼</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Digital Marketing</span>
              </li>
              <li>
                <span className="text-gray-400">Content Creation</span>
              </li>
              <li>
                <span className="text-gray-400">Social Media</span>
              </li>
              <li>
                <span className="text-gray-400">SEO Optimization</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Aya Ghiz. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
