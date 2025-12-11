"use client"

import { Book, MapPin, Zap, Leaf, ShoppingCart, Dumbbell } from "lucide-react"

const facilities = [
  {
    icon: Book,
    title: "Ruang Baca Nyaman",
    description:
      "Area membaca yang tenang dengan pencahayaan optimal, dirancang untuk meningkatkan fokus dan kenyamanan pengunjung.",
  },
  {
    icon: MapPin,
    title: "Perpustakaan Digital",
    description: "Akses ke ribuan buku digital, jurnal, dan koleksi multimedia yang bisa digunakan melalui perangkat perpustakaan ataupun gadget pribadi.",
  },
  {
    icon: Zap,
    title: "Area Komputer & Internet Cepat",
    description: "Fasilitas komputer lengkap dengan Wi-Fi berkecepatan tinggi untuk riset, pengetikan, belajar online, maupun kegiatan akademik lainnya.",
  },
  {
    icon: Leaf,
    title: "Ruang Diskusi ",
    description: "Tempat bagi komunitas, pelajar, dan pekerja untuk berdiskusi, mengerjakan proyek, atau mengadakan kegiatan belajar kelompok.",
  },
]

export default function FacilitiesSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">SARANA DAN PRASARANA</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((facility, idx) => {
            const Icon = facility.icon
            return (
              <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black-900 mb-2">{facility.title}</h3>
                    <p className="text-black-600 text-sm">{facility.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
