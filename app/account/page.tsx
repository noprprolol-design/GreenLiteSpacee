"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: any) => {
    e.preventDefault()

    // Validation
    if (!email || !password) {
      setError("Email dan password tidak boleh kosong!")
      return
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const found = users.find((u: any) => u.email === email && u.password === password)

    if (!found) {
      setError("Email atau password salah!")
      return
    }

    localStorage.setItem("user", JSON.stringify(found))
    router.push("/account")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-50">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg p-8 rounded-2xl w-full max-w-sm border border-cyan-200"
      >
        <h1 className="text-2xl font-bold text-cyan-700 text-center mb-6">Login</h1>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-3"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-5"
          required
        />

        <button type="submit" className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition">
          Login
        </button>

        <p className="text-center text-sm mt-4">
          Belum punya akun?{" "}
          <a href="/register" className="text-cyan-600 hover:underline">
            Daftar
          </a>
        </p>
      </form>
    </div>
  )
}
