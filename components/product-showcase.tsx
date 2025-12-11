"use client"

import Image from "next/image"
import Link from "next/link"

const libraries = [
  {
    id: 1,
    name: "Bintaro",
    subtitle: "Bintarolite",
    image: "/bintaro-library-modern-architecture.jpg",
  },
  {
    id: 2,
    name: "Pamulang",
    subtitle: "Pamulanglit",
    image: "/pamulang-library-sustainable-design.jpg",
  },
  {
    id: 3,
    name: "Ciputat",
    subtitle: "Ciputatlit",
    image: "/ciputat-library-premium-building.jpg",
  },
]

export default function ProductShowcase() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Perpustakaan Terbaru
          </h2>

          <p className="text-gray-600 mb-8">
            Perpustakaan terbaru dari GreenLiteSpace. Semakin lengkap dengan lingkungan hijau dan fasilitas lengkap.
          </p>

          {/* Kartu perpustakaan */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {libraries.map((library) => (
              <div
                key={library.id}
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >
                <div className="relative h-48 w-full">
                  {/* next/image requires domains configured if remote; local images OK */}
                  <Image
                    src={library.image || "/placeholder.svg"}
                    alt={library.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{library.name}</h3>
                  <p className="text-sm text-gray-600">{library.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Link yang tampil sebagai teks HITAM (tanpa background putih) */}
          <div className="mt-2">
            <Link
              href="/jelajahi2"
              className="text-black font-semibold hover:underline transition"
            >
              Lihat semua perpustakaan &gt;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
