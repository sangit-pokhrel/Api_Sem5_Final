import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Home, Search, Calendar, CheckCircle, Star, Shield, Clock, CreditCard, Phone } from "lucide-react"

export default function HowItWorksPage() {
  const steps = [
    {
      step: 1,
      title: "Search & Select",
      description: "Browse our wide range of services and select what you need",
      icon: Search,
      color: "bg-blue-500",
      details: [
        "Browse 50+ service categories",
        "Compare prices and ratings",
        "Read customer reviews",
        "Filter by location and availability",
      ],
    },
    {
      step: 2,
      title: "Book & Schedule",
      description: "Choose your preferred date, time, and service provider",
      icon: Calendar,
      color: "bg-green-500",
      details: [
        "Select convenient time slots",
        "Choose verified professionals",
        "Add special instructions",
        "Instant booking confirmation",
      ],
    },
    {
      step: 3,
      title: "Service Delivery",
      description: "Sit back and relax while our professionals handle the work",
      icon: CheckCircle,
      color: "bg-purple-500",
      details: [
        "Real-time service tracking",
        "Direct communication with provider",
        "Quality assurance checks",
        "Professional service delivery",
      ],
    },
    {
      step: 4,
      title: "Rate & Review",
      description: "Share your experience and help others make informed decisions",
      icon: Star,
      color: "bg-yellow-500",
      details: [
        "Rate your service experience",
        "Leave detailed reviews",
        "Upload photos if needed",
        "Help improve our community",
      ],
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "Verified Professionals",
      description: "All service providers are background-checked and verified for your safety and peace of mind.",
    },
    {
      icon: Clock,
      title: "On-Time Guarantee",
      description: "We guarantee punctual service delivery with real-time tracking and instant notifications.",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Multiple payment options with secure, encrypted transactions for your financial safety.",
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you with any questions or concerns.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-slate-900">ServiceHub</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-slate-600 hover:text-slate-900 font-medium">
              Services
            </Link>
            <Link to="/how-it-works" className="text-blue-600 font-medium">
              How it Works
            </Link>
            <Link to="/pricing" className="text-slate-600 hover:text-slate-900 font-medium">
              Pricing
            </Link>
            <Link to="/about" className="text-slate-600 hover:text-slate-900 font-medium">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Link to="/login">
              <Button variant="ghost" className="text-slate-600 hover:text-slate-900">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-blue-100 text-blue-800 mb-4">Simple & Reliable</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">How ServiceHub Works</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Getting professional home services has never been easier. Follow these simple steps to book trusted
            professionals for all your home service needs.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">
                      Step {step.step}
                    </Badge>
                    <h2 className="text-3xl font-bold text-slate-900">{step.title}</h2>
                  </div>
                </div>

                <p className="text-xl text-slate-600">{step.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1">
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 h-80 flex items-center justify-center">
                  <div className={`${step.color} w-32 h-32 rounded-3xl flex items-center justify-center`}>
                    <step.icon className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Why Choose ServiceHub?</h2>
            <p className="text-xl text-slate-600">
              We're committed to providing you with the best home service experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-16 text-white">
          <div className="text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Trusted by Thousands</h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-blue-100">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-blue-100">Service Providers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100K+</div>
                <div className="text-blue-100">Services Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">4.8★</div>
                <div className="text-blue-100">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Ready to get started?</h2>
          <p className="text-xl text-slate-600">
            Join thousands of satisfied customers and experience the convenience of professional home services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline">
                Browse Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
