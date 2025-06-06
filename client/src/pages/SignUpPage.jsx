"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Card, CardDescription, CardTitle } from "../components/ui/card"
import { Separator } from "../components/ui/separator"
import {
  Home,
  Mail,
  Lock,
  User,
  Phone,
  Shield,
  Star,
  Clock,
  CheckCircle,
  ArrowRight,
  MapPin,
  Globe,
} from "lucide-react"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    phonenumber: "",
    country: "",
    province: "",
  })

  const [termsAccepted, setTermsAccepted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (termsAccepted) {
      console.log("Form Data:", formData)
      // Handle form submission here
    }
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
                    Join thousands of
                    <span className="block text-yellow-300">happy customers</span>
                  </h1>
                  <p className="text-xl text-blue-100 leading-relaxed max-w-md mx-auto">
                    Create your account and get access to trusted home services at your fingertips.
                  </p>
                </div>

                {/* Animated Service Icons */}
                <div className="grid grid-cols-3 gap-6 my-12">
                  <div className="flex flex-col items-center space-y-3 group">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-sm font-medium">Verified</span>
                  </div>
                  <div className="flex flex-col items-center space-y-3 group">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 delay-100">
                      <Star className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-sm font-medium">Quality</span>
                  </div>
                  <div className="flex flex-col items-center space-y-3 group">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 delay-200">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-sm font-medium">On-Time</span>
                  </div>
                </div>

                {/* Feature List */}
                <div className="space-y-4 text-left max-w-sm mx-auto">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-blue-100">Book services in under 60 seconds</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-blue-100">Track your service requests in real-time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-blue-100">Rate and review service providers</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">50K+</div>
                    <div className="text-xs text-blue-200">Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">1000+</div>
                    <div className="text-xs text-blue-200">Providers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-300">4.8★</div>
                    <div className="text-xs text-blue-200">Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <div className="bg-gradient-to-br from-slate-50 to-white p-12 flex flex-col justify-center">
              <div className="w-full max-w-md mx-auto space-y-8">
                {/* Header */}
                <div className="text-center space-y-3">
                  <CardTitle className="text-3xl font-bold text-slate-900">Create Account</CardTitle>
                  <CardDescription className="text-slate-600 text-lg">
                    Get started with your free account today
                  </CardDescription>
                </div>

                {/* Social Login */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-12 border-2 hover:bg-slate-50 transition-all duration-200">
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
                    <Button variant="outline" className="h-12 border-2 hover:bg-slate-50 transition-all duration-200">
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

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="fullname" className="text-slate-700 font-medium">
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="fullname"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleInputChange}
                        placeholder="Sangit Pokhrel"
                        className="pl-10 h-12 border-2 focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>
                  </div>

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
                        placeholder="test1@example.com"
                        className="pl-10 h-12 border-2 focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <Label htmlFor="phonenumber" className="text-slate-700 font-medium">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                      <Input
                        id="phonenumber"
                        name="phonenumber"
                        type="tel"
                        value={formData.phonenumber}
                        onChange={handleInputChange}
                        placeholder="9868618385"
                        className="pl-10 h-12 border-2 focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Country and Province */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="country" className="text-slate-700 font-medium">
                        Country
                      </Label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          placeholder="Nepal"
                          className="pl-10 h-12 border-2 focus:border-blue-500 transition-colors"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="province" className="text-slate-700 font-medium">
                        Province
                      </Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input
                          id="province"
                          name="province"
                          value={formData.province}
                          onChange={handleInputChange}
                          placeholder="Bagmati"
                          className="pl-10 h-12 border-2 focus:border-blue-500 transition-colors"
                          required
                        />
                      </div>
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
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Create a strong password"
                        className="pl-10 h-12 border-2 focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="flex items-start space-x-3 pt-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                    />
                    <Label htmlFor="terms" className="text-sm text-slate-600 leading-relaxed">
                      I agree to the{" "}
                      <Link to="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link to="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  {/* Conditional Submit Button */}
                  {termsAccepted && (
                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 animate-in slide-in-from-bottom-2"
                    >
                      Create Account
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}

                  {/* Terms Warning */}
                  {!termsAccepted && (
                    <div className="text-center p-4 bg-amber-50 border border-amber-200 rounded-lg">
                      <p className="text-sm text-amber-700">
                        Please accept the Terms of Service and Privacy Policy to continue
                      </p>
                    </div>
                  )}
                </form>

                <div className="text-center text-sm text-slate-600">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                    Sign in here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
