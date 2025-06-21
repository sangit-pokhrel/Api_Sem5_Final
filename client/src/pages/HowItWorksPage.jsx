"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import {
  Home,
  Search,
  Calendar,
  CheckCircle,
  Star,
  Shield,
  Clock,
  CreditCard,
  Phone,
  ArrowRight,
  Play,
  Users,
  Award,
  Zap,
} from "lucide-react"

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(1)

  const steps = [
    {
      step: 1,
      title: "Search & Select",
      description: "Browse our wide range of services and select what you need",
      icon: Search,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500",
      details: [
        "Browse 50+ service categories",
        "Compare prices and ratings",
        "Read customer reviews",
        "Filter by location and availability",
      ],
      highlight: "Find the perfect service in seconds",
    },
    {
      step: 2,
      title: "Book & Schedule",
      description: "Choose your preferred date, time, and service provider",
      icon: Calendar,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500",
      details: [
        "Select convenient time slots",
        "Choose verified professionals",
        "Add special instructions",
        "Instant booking confirmation",
      ],
      highlight: "Book instantly with flexible scheduling",
    },
    {
      step: 3,
      title: "Service Delivery",
      description: "Sit back and relax while our professionals handle the work",
      icon: CheckCircle,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500",
      details: [
        "Real-time service tracking",
        "Direct communication with provider",
        "Quality assurance checks",
        "Professional service delivery",
      ],
      highlight: "Track your service in real-time",
    },
    {
      step: 4,
      title: "Rate & Review",
      description: "Share your experience and help others make informed decisions",
      icon: Star,
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500",
      details: [
        "Rate your service experience",
        "Leave detailed reviews",
        "Upload photos if needed",
        "Help improve our community",
      ],
      highlight: "Help build our trusted community",
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "Verified Professionals",
      description: "All service providers are background-checked and verified for your safety and peace of mind.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Clock,
      title: "On-Time Guarantee",
      description: "We guarantee punctual service delivery with real-time tracking and instant notifications.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Multiple payment options with secure, encrypted transactions for your financial safety.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you with any questions or concerns.",
      color: "from-orange-500 to-orange-600",
    },
  ]

  const benefits = [
    {
      icon: Users,
      title: "50K+ Happy Customers",
      description: "Join thousands of satisfied customers",
    },
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "100% satisfaction or money back",
    },
    {
      icon: Zap,
      title: "Instant Booking",
      description: "Book services in under 60 seconds",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-[90%] mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-xl">
              <Home className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              ServiceHub
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/services"
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              to="/how-it-works"
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              How it Works
            </Link>

            <Link to="/about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200">
              About
            </Link>

            <Link
              to="/contactus"
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button
                variant="ghost"
                className="text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200"
              >
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-ping delay-700"></div>
        </div>

        <div className="relative max-w-[90%] mx-auto px-6 py-20 text-center text-white">
          <div className="space-y-8">
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium">
              ⚡ Simple & Reliable
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              How ServiceHub
              <span className="block text-yellow-300">Works</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Getting professional home services has never been easier. Follow these simple steps to book trusted
              professionals for all your home service needs.
            </p>

            {/* Quick Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-white/20 transition-all duration-300"
                >
                  <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-blue-100 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Navigation */}
      <section className="max-w-[90%] mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Simple 4-Step Process</h2>
          <p className="text-xl text-slate-600">From search to satisfaction in just a few clicks</p>
        </div>

        {/* Step Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {steps.map((step) => (
            <Button
              key={step.step}
              variant={activeStep === step.step ? "default" : "outline"}
              className={`transition-all duration-300 ${activeStep === step.step
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"
                }`}
              onClick={() => setActiveStep(step.step)}
            >
              <step.icon className="w-4 h-4 mr-2" />
              Step {step.step}: {step.title}
            </Button>
          ))}
        </div>
      </section>

      {/* Steps Section */}
      <section className="max-w-[90%] mx-auto px-6 pb-20">
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-8">
                <div className="flex items-center space-x-6">
                  <div
                    className={`bg-gradient-to-br ${step.color} w-20 h-20 rounded-3xl flex items-center justify-center shadow-lg`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-3 text-blue-600 border-blue-200">
                      Step {step.step} of 4
                    </Badge>
                    <h2 className="text-4xl font-bold text-slate-900 mb-2">{step.title}</h2>
                    <p className="text-blue-600 font-semibold text-lg">{step.highlight}</p>
                  </div>
                </div>

                <p className="text-xl text-slate-600 leading-relaxed">{step.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {step.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <Button
                    className={`bg-gradient-to-r ${step.color} text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105`}
                  >
                    {step.step === 1 && "Start Browsing"}
                    {step.step === 2 && "Book a Service"}
                    {step.step === 3 && "Track Progress"}
                    {step.step === 4 && "Leave Review"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Visual */}
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl blur-xl opacity-50 transform rotate-6"></div>
                  <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-12 shadow-2xl">
                    <div className="flex items-center justify-center h-80">
                      <div
                        className={`bg-gradient-to-br ${step.color} w-40 h-40 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300`}
                      >
                        <step.icon className="w-20 h-20 text-white" />
                      </div>
                    </div>

                    {/* Step Indicator */}
                    <div className="absolute top-6 right-6">
                      <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                        <span className="text-slate-900 font-bold text-lg">{step.step}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/50 py-20">
        <div className="max-w-[90%] mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Why Choose ServiceHub?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We're committed to providing you with the best home service experience possible
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-8 space-y-6">
                  <div
                    className={`bg-gradient-to-br ${feature.color} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-[90%] mx-auto px-6 py-20">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20"></div>
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 lg:p-20 text-white shadow-2xl">
            <div className="text-center space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">Trusted by Thousands</h2>
                <p className="text-xl text-blue-100">Join our growing community of satisfied customers</p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="text-5xl font-bold mb-3 text-yellow-300 group-hover:scale-110 transition-transform duration-300">
                    50K+
                  </div>
                  <div className="text-blue-100 font-medium">Happy Customers</div>
                </div>
                <div className="text-center group">
                  <div className="text-5xl font-bold mb-3 text-yellow-300 group-hover:scale-110 transition-transform duration-300">
                    1000+
                  </div>
                  <div className="text-blue-100 font-medium">Service Providers</div>
                </div>
                <div className="text-center group">
                  <div className="text-5xl font-bold mb-3 text-yellow-300 group-hover:scale-110 transition-transform duration-300">
                    100K+
                  </div>
                  <div className="text-blue-100 font-medium">Services Completed</div>
                </div>
                <div className="text-center group">
                  <div className="text-5xl font-bold mb-3 text-yellow-300 group-hover:scale-110 transition-transform duration-300">
                    4.8★
                  </div>
                  <div className="text-blue-100 font-medium">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[90%] mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Ready to get started?</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Join thousands of satisfied customers and experience the convenience of professional home services today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
            <Link to="/signup" className="flex-1">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                Sign Up Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/services" className="flex-1">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-slate-300 hover:border-blue-500 hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105"
              >
                Browse Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
