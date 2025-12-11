"use client"

import { useState } from "react"
import { Search } from "lucide-react"

const clusters = [
  "Semua Cluster",
  "Groove At Fortune",
  "Fortune Folks Residential",
  "Pinang Graha 2",
  "Pinang Graha",
  "Vazza Living",
  "Hyra",
  "Dammarai Gardenia",
  "Verina",
  "Melia Grove",
  "Cornelia",
  "Fortune Garden",
  "Fortune Height",
  "Fortune Villas",
  "Fortune Spring",
  "Viola Residence",
  "Padma Residence",
  "Melia Garden",
  "Neo Spring",
  "Fortune Terrace",
]

export default function PropertySearch() {
  const [priceMin, setPriceMin] = useState(0)
  const [priceMax, setPriceMax] = useState(5000000000)
  const [bedrooms, setBedrooms] = useState("1")
  const [bathrooms, setBathrooms] = useState("1")
  const [landSize, setLandSize] = useState("30 - 60")
  const [cluster, setCluster] = useState("Semua Cluster")

  return (
    <section className="bg-gradient-to-b from-primary to-secondary py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-white/20">
          <button className="text-white font-semibold pb-4 border-b-2 border-white">
            Cari berdasarkan kebutuhan Kamu
          </button>
          <button className="text-white/60 font-semibold pb-4 hover:text-white transition">Simulasi KPR</button>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Kisaran harga</label>
                <input
                  type="range"
                  min="0"
                  max="10000000000"
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  className="w-full h-2 bg-primary rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex gap-4 mt-4">
                  <div className="flex-1">
                    <label className="text-xs text-gray-600">Min</label>
                    <input
                      type="text"
                      value="0"
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                      disabled
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs text-gray-600">Maks</label>
                    <input
                      type="text"
                      value={`Rp ${(priceMax / 1000000000).toFixed(1)}B`}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                      disabled
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Filter</label>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 text-sm"
                  >
                    <option>Jumlah kamar tidur</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                  </select>
                  <select
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 text-sm"
                  >
                    <option>Jumlah kamar mandi</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                  <select
                    value={landSize}
                    onChange={(e) => setLandSize(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 text-sm col-span-2"
                  >
                    <option>Luas tanah</option>
                    <option>30 - 60</option>
                    <option>61 - 90</option>
                    <option>91 - 120</option>
                    <option>121 - 150</option>
                  </select>
                </div>
              </div>

              <button className="w-full text-primary font-semibold flex items-center justify-center gap-2 hover:opacity-80 transition">
                <Search size={18} />
                Cari rumah impian Anda
              </button>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Cluster</label>
                <select
                  value={cluster}
                  onChange={(e) => setCluster(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                >
                  {clusters.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Simulasi KPR</label>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Input Plafond Rp."
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  />
                  <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
                    <option>Pilih Tenor</option>
                    <option>5 Tahun</option>
                    <option>10 Tahun</option>
                    <option>15 Tahun</option>
                    <option>20 Tahun</option>
                    <option>25 Tahun</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Input Bunga (%)"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  />
                  <button className="w-full bg-dark-blue text-white font-semibold py-2 rounded hover:opacity-90 transition">
                    Hitung angsuran &gt;
                  </button>
                  <button className="w-full bg-dark-blue text-white font-semibold py-2 rounded hover:opacity-90 transition">
                    Hitung angsuran perbulan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
