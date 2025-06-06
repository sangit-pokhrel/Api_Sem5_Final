"use client"

import { useState } from "react"
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

    // Simulate API call
    setTimeout(() => {
      console.log("Login Data:", { ...formData, rememberMe })
      setIsLoading(false)
      // Handle login logic here
    }, 1500)
  }

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`)
    // Handle social login logic here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 flex items-center justify-center p-4">
      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto">
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[700px]">
            {/* Left Side - Animated Graphics */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 p-12 flex flex-col justify-center items-center text-white relative overflow-hidden">
              {/* Background Animation Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full animate-bounce delay-300"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-ping delay-700"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center space-y-8">
                {/* Logo */}
                <Link to="/" className="flex items-center justify-center space-x-3 mb-8">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                    <Home className="h-10 w-10 text-white" />
                  </div>
                  <span className="text-3xl font-bold">ServiceHub</span>
                </Link>

                {/* Back to Home Button */}
                <Link to="/">
                  <Button
                    variant="outline"
                    className="bg-white text-blue-700 border-white hover:bg-blue-50 hover:text-blue-800 font-semibold px-6 py-2 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105 mb-6"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                    Back to Home
                  </Button>
                </Link>

                {/* Main Heading */}
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                    Welcome back to your
                    <span className="block text-yellow-300">trusted home services</span>
                  </h1>
                  <p className="text-xl text-blue-100 leading-relaxed max-w-md mx-auto">
                    Access your account to book services, track orders, and manage your home service needs.
                  </p>
                </div>

                {/* Animated Service Icons */}
                <div className="grid grid-cols-3 gap-6 my-12">
                  <div className="flex flex-col items-center space-y-3 group">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-sm font-medium">Secure</span>
                  </div>
                  <div className="flex flex-col items-center space-y-3 group">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 delay-100">
                      <Star className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-sm font-medium">Trusted</span>
                  </div>
                  <div className="flex flex-col items-center space-y-3 group">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 delay-200">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-sm font-medium">Fast</span>
                  </div>
                </div>

                {/* Feature List */}
                <div className="space-y-4 text-left max-w-sm mx-auto">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-blue-100">Access your booking history</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-blue-100">Track ongoing services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-blue-100">Manage your preferences</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">50K+</div>
                    <div className="text-xs text-blue-200">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">99.9%</div>
                    <div className="text-xs text-blue-200">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">4.8★</div>
                    <div className="text-xs text-blue-200">Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-12 flex flex-col justify-center">
              <div className="w-full max-w-md mx-auto space-y-8">
                {/* Header */}
                <div className="text-center space-y-3">
                  <CardTitle className="text-3xl font-bold text-slate-900">Welcome Back</CardTitle>
                  <CardDescription className="text-slate-600 text-lg">
                    Sign in to your account to continue
                  </CardDescription>
                </div>

                {/* Social Login */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant="outline"
                      className="h-12 border-2 hover:bg-slate-50 transition-all duration-200"
                      onClick={() => handleSocialLogin("Google")}
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="currentColor"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="currentColor"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      Google
                    </Button>
                    <Button
                      variant="outline"
                      className="h-12 border-2 hover:bg-slate-50 transition-all duration-200"
                      onClick={() => handleSocialLogin("Facebook")}
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Facebook
                    </Button>
                  </div>

                 
                 

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="bg-slate-200" />
                    </div>
                    <div className="relative flex justify-center text-sm uppercase">
                      <span className="bg-white px-4 text-slate-500 font-medium">Or continue with email</span>
                    </div>
                  </div>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700 font-medium">
                      Email address
                    </Label>
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

                  {/* Password */}
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-slate-700 font-medium">
                      Password
                    </Label>
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

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      <Label htmlFor="remember" className="text-sm text-slate-600">
                        Remember me
                      </Label>
                    </div>
                    <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      Forgot password?
                    </Link>
                  </div>

                  {/* Submit Button */}
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

                {/* Additional Options */}
                <div className="space-y-4">
                  {/* Help Links */}
                  <div className="flex justify-center space-x-6 text-sm">
                    <Link to="/help" className="text-slate-600 hover:text-blue-600 transition-colors">
                      Need Help?
                    </Link>
                    <Link to="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">
                      Contact Support
                    </Link>
                  </div>

                  {/* Sign Up Link */}
                  <div className="text-center text-sm text-slate-600">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Sign up for free
                    </Link>
                  </div>

                  {/* Security Notice */}
                  <div className="flex items-center justify-center space-x-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-lg">
                    <Shield className="w-4 h-4" />
                    <span>Your data is protected with 256-bit SSL encryption</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
