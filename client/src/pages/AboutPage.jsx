"use client"

import React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import {
  Home,
  Target,
  Award,
  Heart,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  CheckCircle,
  Users,
  Star,
  Briefcase,
  MapPin,
} from "lucide-react"

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0)

  const values = [
    {
      icon: Shield,
      title: "Trust & Safety",
      description:
        "We prioritize your safety with verified professionals and secure transactions. Every service provider undergoes thorough background checks and must maintain high ratings to remain on our platform.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Your satisfaction is our top priority. We go above and beyond to exceed expectations with personalized service, responsive support, and a satisfaction guarantee on every booking.",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We continuously improve our platform with cutting-edge technology and user feedback. Our dedicated product team works tirelessly to create features that make your experience seamless and delightful.",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Globe,
      title: "Community",
      description:
        "Building stronger communities by connecting neighbors with trusted local professionals. We believe in supporting local businesses and creating economic opportunities in every neighborhood we serve.",
      color: "from-green-500 to-emerald-600",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former VP at Urban Company with 10+ years in home services industry.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Ex-Google engineer passionate about building scalable platforms.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Operations expert with experience scaling service marketplaces.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "David Kim",
      role: "Head of Product",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Product leader focused on creating exceptional user experiences.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ]

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "ServiceHub was born from the vision to make home services accessible to everyone.",
      icon: Briefcase,
      color: "bg-blue-500",
    },
    {
      year: "2021",
      title: "First 1,000 Customers",
      description: "Reached our first milestone with 1,000 happy customers across 5 cities.",
      icon: Users,
      color: "bg-green-500",
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Raised $10M Series A to expand our platform and reach more communities.",
      icon: Zap,
      color: "bg-purple-500",
    },
    {
      year: "2023",
      title: "50,000 Customers",
      description: "Celebrated serving 50,000+ customers with 1,000+ verified professionals.",
      icon: Star,
      color: "bg-amber-500",
    },
    {
      year: "2024",
      title: "National Expansion",
      description: "Expanded to 50+ cities nationwide, becoming a trusted household name.",
      icon: MapPin,
      color: "bg-red-500",
    },
  ]

  const stats = [
    { value: "50K+", label: "Happy Customers", icon: Users },
    { value: "1000+", label: "Service Providers", icon: Briefcase },
    { value: "50+", label: "Cities Served", icon: MapPin },
    { value: "4.8★", label: "Average Rating", icon: Star },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-[90%] mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-xl">
              <Home className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              ServiceHub
            </span>
          </Link>

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
            <Link to="/about" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
              About
            </Link>
            <Link
              to="/contact"
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
              🏠 Our Story
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              About
              <span className="block text-yellow-300">ServiceHub</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make professional home services accessible, reliable, and affordable for everyone.
              Founded in 2020, we've grown from a small startup to a trusted platform serving thousands of customers
              nationwide.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-white/20 transition-all duration-300"
                >
                  <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-yellow-300 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-[90%] mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed">
                To connect homeowners with trusted, verified professionals who deliver exceptional service experiences.
                We believe everyone deserves access to reliable home services without the hassle of endless searching and
                uncertainty.
              </p>
              <div className="flex items-center space-x-3 text-blue-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Verified professionals you can trust</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Transparent pricing with no hidden fees</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">100% satisfaction guarantee on all services</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed">
                To become the world's most trusted home services platform, where quality, convenience, and customer
                satisfaction are never compromised. We envision a future where booking home services is as easy as
                ordering food online.
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                Learn More About Our Vision
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20 transform rotate-6"></div>
            <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-10 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="space-y-8">
                <h3 className="text-3xl font-bold">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="space-y-2 group">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <stat.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-blue-100 font-medium">{stat.label}</span>
                      </div>
                      <div className="text-4xl font-bold text-yellow-300 group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-semibold">Customer Satisfaction</div>
                    <div className="text-xl font-bold">98%</div>
                  </div>
                  <div className="w-full h-3 bg-white/20 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-yellow-300 rounded-full" style={{ width: "98%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/50 py-20">
        <div className="max-w-[90%] mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These principles guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Value Navigation */}
            <div className="lg:col-span-1">
              <div className="space-y-4 sticky top-28">
                {values.map((value, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveValue(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center space-x-3 ${activeValue === index
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                        : "bg-white hover:bg-slate-100 text-slate-700 shadow"
                      }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${activeValue === index ? "bg-white/20" : "bg-blue-100"
                        }`}
                    >
                      <value.icon className={`w-5 h-5 ${activeValue === index ? "text-white" : "text-blue-600"}`} />
                    </div>
                    <span className="font-medium">{value.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Value Content */}
            <div className="lg:col-span-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-10 transform rotate-3"></div>
                <Card className="border-0 shadow-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2">
                      {/* Value Description */}
                      <div className="p-10 space-y-6">
                        <div
                          className={`bg-gradient-to-br ${values[activeValue].color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg`}
                        >
                          {React.createElement(values[activeValue].icon, { className: "w-8 h-8 text-white" })}
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900">{values[activeValue].title}</h3>
                        <p className="text-lg text-slate-600 leading-relaxed">{values[activeValue].description}</p>

                        <div className="pt-6">
                          <Button
                            className={`bg-gradient-to-r ${values[activeValue].color} text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105`}
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>


                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-[90%] mx-auto px-6 py-20">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Our Journey</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From humble beginnings to industry leadership - key milestones in our growth story
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[28px] top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-8 group">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-14 h-14 ${milestone.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <milestone.icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl shadow-xl p-8 group-hover:shadow-2xl transition-all duration-300 transform group-hover:translate-x-2">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-slate-900">{milestone.title}</h3>
                      <Badge className="bg-blue-100 text-blue-800 px-3 py-1 text-sm font-medium">
                        {milestone.year}
                      </Badge>
                    </div>
                    <p className="text-lg text-slate-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/50 py-20">
        <div className="max-w-[90%] mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Meet Our Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The passionate people behind ServiceHub working to transform home services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-24"></div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-medium">{member.role}</p>
                    </div>
                    <p className="text-slate-600">{member.bio}</p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 pt-2">
                      <a
                        href={member.social.linkedin}
                        className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
                      >
                        <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a
                        href={member.social.twitter}
                        className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
                      >
                        <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              Join Our Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[90%] mx-auto px-6 py-20">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20"></div>
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 lg:p-20 text-center text-white shadow-2xl">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold">Join Our Growing Community</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Whether you're looking for home services or want to become a service provider, we'd love to have you join
                the ServiceHub family. Experience the future of home services today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
                <Link to="/signup" className="flex-1">
                  <Button
                    size="lg"
                    className="w-full bg-white text-blue-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  >
                    Get Started Today
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/services" className="flex-1">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105"
                  >
                    Browse Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Teaser */}
      <section className="max-w-[90%] mx-auto px-6 py-20">
        <div className="text-center space-y-6 mb-16">
          <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">
            ⭐ What People Are Saying
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Trusted by Thousands</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear what our customers have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-1 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-slate-600 italic">
                  "ServiceHub has completely transformed how I maintain my home. The professionals are always on time,
                  courteous, and do exceptional work. I couldn't be happier with the service!"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Happy Customer {i}</div>
                    <div className="text-sm text-slate-500">Verified User</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition-all duration-200"
          >
            Read More Testimonials
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  )
}
