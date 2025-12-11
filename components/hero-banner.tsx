"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Bintaro",
    subtitle: "Perpustakaan Modern dengan Arsitektur Berkelanjutan",
    image: "/bintaro-library-modern-architecture.jpg",
    features: ["Ruang Baca Luas", "Koleksi Lengkap"],
    location: "Lokasi Strategis Bintaro",
  },
  {
    id: 2,
    title: "Pamulang",
    subtitle: "Pusat Pembelajaran dengan Fasilitas Terkini",
    image: "/pamulang-library-sustainable-design.jpg",
    features: ["Teknologi Digital", "Area Nyaman"],
    location: "Pusat Kota Pamulang",
  },
  {
    id: 3,
    title: "Ciputat",
    subtitle: "Perpustakaan Premium dengan Desain Elegan",
    image: "/ciputat-library-premium-building.jpg",
    features: ["Fasilitas Lengkap", "Suasana Tenang"],
    location: "Lokasi Premium Ciputat",
  },
]

export default function HeroBanner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  const slide = slides[current]

  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden bg-gradient-to-r from-primary to-secondary">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover opacity-60" />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
              <p className="text-sm md:text-base mb-4 flex items-center gap-2">
                <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
                {slide.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition ${idx === current ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  )
}
