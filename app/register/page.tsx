"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [emailError, setEmailError] = useState("")
  const [touched, setTouched] = useState(false)

  const isValidGmailEmail = (email: string): boolean => {
    return /^[a-zA-Z0-9._-]+@gmail\.com$/.test(email)
  }

  const handleEmailChange = (e: any) => {
    const value = e.target.value
    setEmail(value)

    if (!value) {
      setEmailError("")
      return
    }

    if (!value.includes("@")) {
      setEmailError("Email harus mengandung @")
      return
    }

    if (!value.endsWith("@gmail.com")) {
      if (value.includes("@")) {
        setEmailError("Gunakan email Gmail (@gmail.com)")
      } else {
        setEmailError("")
      }
      return
    }

    const localPart = value.split("@")[0]
    if (!localPart || localPart.length === 0) {
      setEmailError("Email tidak valid")
      return
    }

    if (!/^[a-zA-Z0-9._-]+$/.test(localPart)) {
      setEmailError("Email hanya boleh mengandung huruf, angka, titik, garis bawah, dan garis sambung")
      return
    }

    if (isValidGmailEmail(value)) {
      setEmailError("")
    }
  }

  const handleEmailBlur = () => {
    setTouched(true)
  }

  const handleRegister = (e: any) => {
    e.preventDefault()

    // Validation
    if (!email || !password) {
      setError("Email dan password tidak boleh kosong!")
      return
    }

    if (!isValidGmailEmail(email)) {
      setError("Gunakan email Gmail yang valid (contoh: nama@gmail.com)")
      setTouched(true)
      return
    }

    if (password.length < 6) {
      setError("Password minimal 6 karakter!")
      return
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const exists = users.find((u: any) => u.email === email)

    if (exists) {
      setError("Email sudah terdaftar!")
      return
    }

    const newUser = { email, password }
    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))

    router.push("/login")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-md p-8 rounded-lg w-full max-w-sm border border-gray-300"
      >
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">Buat Akun</h1>
        <p className="text-center text-gray-500 text-sm mb-6">Gunakan Google Email untuk mendaftar</p>

        {error && (
          <div className="bg-red-50 border border-red-300 text-red-700 text-sm p-3 rounded-md mb-4">{error}</div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            placeholder="contoh@gmail.com"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            className={`w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 transition ${
              touched && emailError
                ? "border-red-500 focus:ring-red-500"
                : touched && !emailError && email && isValidGmailEmail(email)
                  ? "border-green-500 focus:ring-green-500"
                  : "border-gray-300 focus:ring-blue-500"
            }`}
            required
          />
          {touched && emailError && (
            <p className="text-red-600 text-xs mt-2 flex items-center gap-1">
              <span>⚠️</span> {emailError}
            </p>
          )}
          {touched && !emailError && email && isValidGmailEmail(email) && (
            <p className="text-green-600 text-xs mt-2 flex items-center gap-1">
              <span>✓</span> Email Gmail valid
            </p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            type="password"
            placeholder="Minimal 6 karakter"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-medium"
        >
          Daftar
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Sudah punya akun?{" "}
          <a href="/login" className="text-blue-600 hover:underline font-medium">
            Login
          </a>
        </p>
      </form>
    </div>
  )
}
