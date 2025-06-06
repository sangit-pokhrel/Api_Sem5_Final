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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Branding */}
        <div className="hidden lg:block bg-gradient-to-br from-blue-600 to-blue-800 p-12 rounded-2xl text-white">
          <div className="space-y-8">
            <div className="space-y-6">
              <Link to="/" className="flex items-center space-x-3">
                <Home className="h-10 w-10 text-white" />
                <span className="text-3xl font-bold text-white">GharSewa</span>
              </Link>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Welcome back to your
                  <span className="block text-yellow-300">trusted home services</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed max-w-md">
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
              <div className="space-y-4 text-left max-w-sm">
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
        </div>

        {/* Right Side - Login Form */}
        <Card className="bg-gradient-to-br from-slate-50 to-white p-12">
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

              {/* Additional Social Options */}
              <div className="grid grid-cols-4 gap-3">
                <Button
                  variant="outline"
                  className="h-12 border-2 hover:bg-slate-50 transition-all duration-200"
                  onClick={() => handleSocialLogin("Apple")}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C8.396 0 8.025.044 6.79.207 5.56.37 4.703.556 3.939.832c-.789.29-1.459.676-2.126 1.343C1.146 2.842.76 3.512.47 4.301.194 5.065.008 5.922-.155 7.152-.318 8.387-.362 8.758-.362 12.379s.044 3.992.207 5.227c.163 1.23.349 2.087.625 2.851.29.789.676 1.459 1.343 2.126.667.667 1.337 1.053 2.126 1.343.764.276 1.621.462 2.851.625 1.235.163 1.606.207 5.227.207s3.992-.044 5.227-.207c1.23-.163 2.087-.349 2.851-.625.789-.29 1.459-.676 2.126-1.343.667-.667 1.053-1.337 1.343-2.126.276-.764.462-1.621.625-2.851.163-1.235.207-1.606.207-5.227s-.044-3.992-.207-5.227c-.163-1.23-.349-2.087-.625-2.851-.29-.789-.676-1.459-1.343-2.126C19.24 1.146 18.57.76 17.781.47 17.017.194 16.16.008 14.93-.155 13.695-.318 13.324-.362 9.703-.362 6.082-.362 5.711-.318 4.476-.155 3.246.008 2.389.194 1.625.47.836.76.166 1.146-.501 1.813-1.168 2.48-1.554 3.15-1.844 3.939-2.12 4.703-2.306 5.56-2.469 6.79-2.632 8.025-2.632 11.646s.163 3.621.326 4.856c.163 1.23.349 2.087.625 2.851.29.789.676 1.459 1.343 2.126.667.667 1.337 1.053 2.126 1.343.764.276 1.621.462 2.851.625 1.235.163 1.606.207 5.227.207s3.992-.044 5.227-.207c1.23-.163 2.087-.349 2.851-.625.789-.29 1.459-.676 2.126-1.343.667-.667 1.053-1.337 1.343-2.126.276-.764.462-1.621.625-2.851.163-1.235.207-1.606.207-5.227s-.044-3.992-.207-5.227c-.163-1.23-.349-2.087-.625-2.851-.29-.789-.676-1.459-1.343-2.126C19.24 1.146 18.57.76 17.781.47 17.017.194 16.16.008 14.93-.155 13.695-.318 13.324-.362 9.703-.362zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  className="h-12 border-2 hover:bg-slate-50 transition-all duration-200"
                  onClick={() => handleSocialLogin("Twitter")}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  className="h-12 border-2 hover:bg-slate-50 transition-all duration-200"
                  onClick={() => handleSocialLogin("LinkedIn")}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  className="h-12 border-2 hover:bg-slate-50 transition-all duration-200"
                  onClick={() => handleSocialLogin("GitHub")}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
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
        </Card>
      </div>
    </div>
  )
}