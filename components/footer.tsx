"use client"

import Link from "next/link"
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-black">GreenLiteSpace</h3>
            <p className="text-black text-sm mb-4">
              Membangun tempat literasi yang terintegrasi dengan berbagai fasilitas modern.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-black hover:opacity-70 transition">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-black hover:opacity-70 transition">
                <Phone size={20} />
              </a>
              <a href="#" className="text-black hover:opacity-70 transition">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-black">Navigasi</h4>
            <ul className="space-y-2 text-sm text-black">
              <li><Link href="#" className="hover:opacity-70 transition">Tentang Kami</Link></li>
              <li><Link href="#" className="hover:opacity-70 transition">Produk</Link></li>
              <li><Link href="#" className="hover:opacity-70 transition">Berita</Link></li>
              <li><Link href="#" className="hover:opacity-70 transition">Fasilitas</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-black">Produk</h4>
            <ul className="space-y-2 text-sm text-black">
              <li><Link href="#" className="hover:opacity-70 transition">Jasa</Link></li>
              <li><Link href="#" className="hover:opacity-70 transition">Bangunan kami</Link></li>
              <li><Link href="#" className="hover:opacity-70 transition">Produk Terbaru</Link></li>
              <li><Link href="#" className="hover:opacity-70 transition">Promo</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-black">Hubungi Kami</h4>
            <div className="space-y-3 text-sm text-black">
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+62 878 2690 7056</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>GreenLiteSpace@Gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-black">
          <p>&copy; 2025 GreenLiteSpace. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:opacity-70 transition">Privacy Policy</Link>
            <Link href="#" className="hover:opacity-70 transition">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=6287826907056&text=Halo.. Saya tertarik dengan GreenLiteSpace"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-40"
      >
        <MessageCircle size={24} />
      </a>
    </footer>
  )
}
