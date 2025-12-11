"use client"

import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left - Video */}
          <div className="relative">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-200">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/YyBfMY3_dKg?si=Scewhn2nSjEH0UIa"
                title="GreenLiteSpace Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Selangkah Kemana Saja</h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              GreenLiteSpace Salah Satu tempat Himbauan Literasi Pembaca, memanfaatkan lahan kosong yang sebelumnya tak terpakai dan menjadikannya perpustakaan yang nyaman, lengkap, dan inspiratif. 
              Setiap sudutnya dirancang untuk mendorong kreativitas, membaca, dan pertumbuhan komunitas yang lebih kuat. 

              {/* Teks Bisa Diklik */}
              <Link href="/jelajahi" className="text-dark-blue font-semibold underline ml-1 hover:opacity-80">
                Jelajahi kami lebih lanjut..
              </Link>
            </p>

            <button className="bg-dark-blue text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition">
              Tentang Kami &gt;
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
