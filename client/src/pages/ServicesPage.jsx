"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import {
  Home,
  Wrench,
  Paintbrush,
  Zap,
  Car,
  Users,
  Search,
  Filter,
  Star,
  MapPin,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
} from "lucide-react"

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")

  const categories = ["All Categories", "Cleaning", "Repairs", "Painting", "Electrical", "Automotive", "Personal Care"]

  const services = [
    {
      id: 1,
      title: "Deep Home Cleaning",
      category: "Cleaning",
      price: "Starting at $89",
      rating: 4.8,
      reviews: 1250,
      image: "/placeholder.svg?height=200&width=300",
      description: "Professional deep cleaning service for your entire home with eco-friendly products",
      features: ["Kitchen deep clean", "Bathroom sanitization", "Floor mopping", "Dusting"],
      icon: Home,
      color: "from-blue-500 to-blue-600",
      popular: true,
    },
    {
      id: 2,
      title: "Plumbing Repairs",
      category: "Repairs",
      price: "Starting at $75",
      rating: 4.9,
      reviews: 890,
      image: "/placeholder.svg?height=200&width=300",
      description: "Expert plumbing solutions for all your home needs with 24/7 emergency service",
      features: ["Leak repairs", "Pipe installation", "Drain cleaning", "Emergency service"],
      icon: Wrench,
      color: "from-green-500 to-green-600",
      popular: false,
    },
    {
      id: 3,
      title: "Interior Painting",
      category: "Painting",
      price: "Starting at $200",
      rating: 4.7,
      reviews: 650,
      image: "/placeholder.svg?height=200&width=300",
      description: "Transform your space with professional painting services and color consultation",
      features: ["Color consultation", "Wall preparation", "Premium paints", "Clean-up included"],
      icon: Paintbrush,
      color: "from-purple-500 to-purple-600",
      popular: false,
    },
    {
      id: 4,
      title: "Electrical Services",
      category: "Electrical",
      price: "Starting at $95",
      rating: 4.8,
      reviews: 720,
      image: "/placeholder.svg?height=200&width=300",
      description: "Safe and reliable electrical work by certified electricians with warranty",
      features: ["Wiring installation", "Switch repairs", "Safety inspection", "24/7 emergency"],
      icon: Zap,
      color: "from-yellow-500 to-yellow-600",
      popular: true,
    },
    {
      id: 5,
      title: "Car Wash & Detailing",
      category: "Automotive",
      price: "Starting at $45",
      rating: 4.6,
      reviews: 980,
      image: "/placeholder.svg?height=200&width=300",
      description: "Premium car care services at your doorstep with professional equipment",
      features: ["Exterior wash", "Interior cleaning", "Wax application", "Tire shine"],
      icon: Car,
      color: "from-red-500 to-red-600",
      popular: false,
    },
    {
      id: 6,
      title: "Beauty & Wellness",
      category: "Personal Care",
      price: "Starting at $60",
      rating: 4.9,
      reviews: 1100,
      image: "/placeholder.svg?height=200&width=300",
      description: "Professional beauty services in the comfort of your home by licensed professionals",
      features: ["Hair styling", "Facial treatments", "Manicure/Pedicure", "Massage therapy"],
      icon: Users,
      color: "from-pink-500 to-pink-600",
      popular: true,
    },
  ]

  const filteredServices = services.filter((service) => {
    const matchesCategory = selectedCategory === "All Categories" || service.category === selectedCategory
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
            <Link to="/services" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
              Services
            </Link>
            <Link
              to="/how-it-works"
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              How it Works
            </Link>
            <Link
              to="/pricing"
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link to="/about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200">
              About
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-white rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-ping delay-700"></div>
        </div>

        <div className="relative max-w-[90%] mx-auto px-6 py-20 text-center text-white">
          <div className="space-y-6 mb-12">
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-medium">
              🏠 Professional Home Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Find trusted professionals
              <span className="block text-yellow-300">for every home need</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Browse our comprehensive range of verified home services with transparent pricing and guaranteed
              satisfaction
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
                  <Input
                    placeholder="Search for services..."
                    className="pl-12 h-14 text-lg border-0 bg-white shadow-lg rounded-xl focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
                  <Input
                    placeholder="Enter your location"
                    className="pl-12 h-14 text-lg border-0 bg-white shadow-lg rounded-xl focus:ring-2 focus:ring-blue-500"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold h-14 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">50K+</div>
              <div className="text-blue-100 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">1000+</div>
              <div className="text-blue-100 text-sm">Service Providers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">4.8★</div>
              <div className="text-blue-100 text-sm">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-[90%] mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Browse Services</h2>
            <p className="text-slate-600">Choose from our wide range of professional home services</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === "All Categories" && <Filter className="w-4 h-4 mr-2" />}
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-slate-600">
            Showing <span className="font-semibold text-slate-900">{filteredServices.length}</span> services
            {selectedCategory !== "All Categories" && (
              <span>
                {" "}
                in <span className="font-semibold text-blue-600">{selectedCategory}</span>
              </span>
            )}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-[90%] mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Card
              key={service.id}
              className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 shadow-lg hover:scale-105 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />

                {/* Popular Badge */}
                {service.popular && (
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 shadow-lg">
                    ⭐ Popular
                  </Badge>
                )}

                {/* Service Icon */}
                <div
                  className={`absolute top-3 right-3 bg-gradient-to-br ${service.color} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>

                {/* Category Badge */}
                <Badge className="absolute bottom-3 left-3 bg-white/90 text-slate-900 border-0 shadow-md">
                  {service.category}
                </Badge>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-lg">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-slate-900">{service.rating}</span>
                  </div>
                </div>
                <CardDescription className="text-slate-600 leading-relaxed">{service.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div className="space-y-3">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-sm text-blue-600 font-medium">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* Pricing and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <div className="text-lg font-bold text-blue-600">{service.price}</div>
                    <div className="text-sm text-slate-500 flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{service.reviews} reviews</span>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                    Book Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-slate-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">No services found</h3>
            <p className="text-slate-600 mb-6">Try adjusting your search or browse all categories</p>
            <Button
              onClick={() => {
                setSelectedCategory("All Categories")
                setSearchTerm("")
              }}
              className="bg-blue-600 hover:bg-blue-700"
            >
              View All Services
            </Button>
          </div>
        )}
      </section>

      {/* Trust Indicators */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/50 py-16">
        <div className="max-w-[90%] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose ServiceHub?</h2>
            <p className="text-xl text-slate-600">Your satisfaction and safety are our top priorities</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Verified Professionals",
                description: "All service providers are background-checked and verified for your safety",
              },
              {
                icon: Clock,
                title: "On-Time Guarantee",
                description: "We guarantee punctual service delivery with real-time tracking",
              },
              {
                icon: Star,
                title: "Quality Assured",
                description: "100% satisfaction guarantee with our quality assurance program",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[90%] mx-auto px-6 py-20">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20"></div>
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 lg:p-20 text-center text-white shadow-2xl">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold">Can't find what you're looking for?</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Contact us and we'll help you find the perfect service provider for your specific needs
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  Contact Support
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105"
                >
                  Request Custom Service
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
