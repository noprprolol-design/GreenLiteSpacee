"use client"

import { useState } from "react"
import { DollarSign, Home, Percent, Calendar } from "lucide-react"

export default function KprCalculator() {
  const [propertyPrice, setPropertyPrice] = useState(500000000)
  const [downPayment, setDownPayment] = useState(100000000)
  const [interestRate, setInterestRate] = useState(5.5)
  const [loanTerm, setLoanTerm] = useState(20)

  const loanAmount = propertyPrice - downPayment
  const monthlyRate = interestRate / 100 / 12
  const numberOfPayments = loanTerm * 12
  const monthlyPayment =
    (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

  const downPaymentPercent = ((downPayment / propertyPrice) * 100).toFixed(1)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Kalkulator KPR GreenLiteSpace</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hitung cicilan bulanan Anda dengan mudah. Masukkan detail properti dan lihat estimasi pembayaran secara
            real-time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Detail Properti</h3>

            {/* Property Price */}
            <div className="mb-8">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <Home size={18} className="text-primary" />
                Harga Properti
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500">Rp</span>
                <input
                  type="range"
                  min="100000000"
                  max="5000000000"
                  step="50000000"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
              <div className="mt-2 text-2xl font-bold text-primary">Rp {(propertyPrice / 1000000000).toFixed(2)} M</div>
            </div>

            {/* Down Payment */}
            <div className="mb-8">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <DollarSign size={18} className="text-secondary" />
                Uang Muka ({downPaymentPercent}%)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-gray-500">Rp</span>
                <input
                  type="range"
                  min="0"
                  max={propertyPrice * 0.5}
                  step="10000000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-secondary"
                />
              </div>
              <div className="mt-2 text-2xl font-bold text-secondary">Rp {(downPayment / 1000000000).toFixed(2)} M</div>
            </div>

            {/* Interest Rate */}
            <div className="mb-8">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <Percent size={18} className="text-cyan-600" />
                Suku Bunga Tahunan
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="2"
                  max="12"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                />
              </div>
              <div className="mt-2 text-2xl font-bold text-cyan-600">{interestRate.toFixed(2)}%</div>
            </div>

            {/* Loan Term */}
            <div className="mb-8">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <Calendar size={18} className="text-green-600" />
                Jangka Waktu Kredit
              </label>
              <div className="relative">
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                />
              </div>
              <div className="mt-2 text-2xl font-bold text-green-600">{loanTerm} Tahun</div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Monthly Payment Card */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-lg p-8 text-white">
              <p className="text-sm font-semibold opacity-90 mb-2">Cicilan Bulanan</p>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">Rp {(monthlyPayment / 1000000).toFixed(2)} Jt</h3>
              <p className="text-sm opacity-80">Estimasi pembayaran bulanan untuk {loanTerm} tahun</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow p-6">
                <p className="text-xs font-semibold text-gray-600 mb-2">Jumlah Pinjaman</p>
                <p className="text-xl font-bold text-gray-900">Rp {(loanAmount / 1000000000).toFixed(2)} M</p>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <p className="text-xs font-semibold text-gray-600 mb-2">Total Bunga</p>
                <p className="text-xl font-bold text-gray-900">
                  Rp {((monthlyPayment * numberOfPayments - loanAmount) / 1000000000).toFixed(2)} M
                </p>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <p className="text-xs font-semibold text-gray-600 mb-2">Total Pembayaran</p>
                <p className="text-xl font-bold text-gray-900">
                  Rp {((monthlyPayment * numberOfPayments) / 1000000000).toFixed(2)} M
                </p>
              </div>
              <div className="bg-white rounded-xl shadow p-6">
                <p className="text-xs font-semibold text-gray-600 mb-2">Uang Muka</p>
                <p className="text-xl font-bold text-gray-900">Rp {(downPayment / 1000000000).toFixed(2)} M</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-dark-blue text-white font-semibold py-4 rounded-xl hover:opacity-90 transition">
              Hubungi Kami untuk Konsultasi
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
