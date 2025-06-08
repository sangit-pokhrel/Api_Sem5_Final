"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { toast, Toaster } from "react-hot-toast"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Card, CardDescription, CardTitle } from "../components/ui/card"
import { Separator } from "../components/ui/separator"
import { Home, Mail, Lock, Shield, Star, Clock, CheckCircle, ArrowRight, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Prefill email if remembered
  useEffect(() => {
    const remembered = sessionStorage.getItem("remembered")
    const savedEmail = sessionStorage.getItem("rememberedEmail")
    if (remembered === "true" && savedEmail) {
      setFormData((prev) => ({ ...prev, email: savedEmail }))
      setRememberMe(true)
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", {
        email: formData.email,
        password: formData.password,
      })

      const { token, user } = response.data
      const { fullname, email, id, role } = user

      // Save token and user info
      localStorage.setItem("token", token)
      sessionStorage.setItem("loggedIn", "true")
      sessionStorage.setItem("userId", id)
      sessionStorage.setItem("fullName", fullname)
      sessionStorage.setItem("email", email)
      sessionStorage.setItem("role", role)

      // Remember email if checked
      if (rememberMe) {
        sessionStorage.setItem("remembered", "true")
        sessionStorage.setItem("rememberedEmail", email)
      } else {
        sessionStorage.removeItem("remembered")
        sessionStorage.removeItem("rememberedEmail")
      }

      toast.success("🎉 Login successful!")
      window.location.href = "/dashboard"
    } catch (error) {
      const message = error.response?.data?.message || "Login failed"
      toast.error(`❌ ${message}`)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`)
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 flex items-center justify-center p-4">
        <div className="w-full max-w-7xl mx-auto">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
            <div className="grid lg:grid-cols-2 min-h-[700px]">
              {/* Left Graphic Side */}
              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 p-12 flex flex-col justify-center items-center text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full animate-bounce delay-300"></div>
                  <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-ping delay-700"></div>
                </div>
                <div className="relative z-10 text-center space-y-8">
                  <Link to="/" className="flex items-center justify-center space-x-3 mb-8">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                      <Home className="h-10 w-10 text-white" />
                    </div>
                    <span className="text-3xl font-bold">ServiceHub</span>
                  </Link>
                  <Link to="/">
                    <Button
                      variant="outline"
                      className="bg-white text-blue-700 border-white hover:bg-blue-50 hover:text-blue-800 font-semibold px-6 py-2 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 mb-6"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                      Back to Home
                    </Button>
                  </Link>
                  <div className="space-y-4">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                      Welcome back to your
                      <span className="block text-yellow-300">trusted home services</span>
                    </h1>
                    <p className="text-xl text-blue-100 leading-relaxed max-w-md mx-auto">
                      Access your account to book services, track orders, and manage your home service needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Login Form */}
              <div className="bg-gradient-to-br from-slate-50 to-white p-12 flex flex-col justify-center">
                <div className="w-full max-w-md mx-auto space-y-8">
                  <div className="text-center space-y-3">
                    <CardTitle className="text-3xl font-bold text-slate-900">Welcome Back</CardTitle>
                    <CardDescription className="text-slate-600 text-lg">Sign in to your account to continue</CardDescription>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 font-medium">Email address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className="pl-10 h-12 border-2 focus:border-blue-500 transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-slate-700 font-medium">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="Enter your password"
                          className="pl-10 pr-10 h-12 border-2 focus:border-blue-500 transition-colors"
                          required
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-3 h-4 w-4 text-slate-400 hover:text-slate-600"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="remember"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <Label htmlFor="remember" className="text-sm text-slate-600">Remember me</Label>
                      </div>
                      <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        Forgot password?
                      </Link>
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Signing In...</span>
                        </div>
                      ) : (
                        <>
                          Sign In
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>

                  <div className="text-center text-sm text-slate-600">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Sign up for free
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}
