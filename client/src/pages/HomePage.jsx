import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Wrench, Paintbrush, Zap, Car, Home, Shield, Clock, Star, Users, MapPin } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-slate-900">ServiceHub</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-slate-600 hover:text-slate-900 font-medium">
              Services
            </Link>
            <Link to="/how-it-works" className="text-slate-600 hover:text-slate-900 font-medium">
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
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">🏠 Trusted Home Services</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Book trusted home services
                <span className="text-blue-600"> in minutes</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                From cleaning and repairs to beauty and wellness - get professional services at your doorstep. Verified
                professionals, transparent pricing, guaranteed satisfaction.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <div className="flex-1">
                <Input placeholder="Enter your location" className="h-12 text-lg" />
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-12 px-8">
                <MapPin className="w-4 h-4 mr-2" />
                Find Services
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">50K+</div>
                <div className="text-sm text-slate-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">1000+</div>
                <div className="text-sm text-slate-600">Service Providers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">4.8★</div>
                <div className="text-sm text-slate-600">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Home Cleaning</h3>
                    <p className="text-blue-100">Professional • Verified</p>
                  </div>
                  <div className="bg-white/20 rounded-full p-3">
                    <Home className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Deep Cleaning</span>
                    <span className="font-semibold">$89</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Regular Cleaning</span>
                    <span className="font-semibold">$49</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Move-in Cleaning</span>
                    <span className="font-semibold">$129</span>
                  </div>
                </div>

                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">Book Now</Button>

                <div className="flex items-center space-x-2 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>100% Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Popular Services</h2>
          <p className="text-xl text-slate-600">
            Everything you need for your home, delivered by trusted professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Home, title: "Home Cleaning", desc: "Deep & regular cleaning", color: "bg-blue-500" },
            {
              icon: Wrench,
              title: "Repairs & Maintenance",
              desc: "Plumbing, electrical & more",
              color: "bg-green-500",
            },
            { icon: Paintbrush, title: "Painting", desc: "Interior & exterior painting", color: "bg-purple-500" },
            { icon: Zap, title: "Electrical", desc: "Installation & repairs", color: "bg-yellow-500" },
            { icon: Car, title: "Car Services", desc: "Washing & maintenance", color: "bg-red-500" },
            { icon: Users, title: "Beauty & Wellness", desc: "Salon services at home", color: "bg-pink-500" },
            { icon: Shield, title: "Security", desc: "CCTV & alarm systems", color: "bg-indigo-500" },
            { icon: Clock, title: "Emergency Services", desc: "24/7 urgent repairs", color: "bg-orange-500" },
          ].map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center space-y-4">
                <div
                  className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm">{service.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Why Choose ServiceHub?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Verified Professionals",
                desc: "All service providers are background-checked and verified for your safety and peace of mind.",
              },
              {
                icon: Star,
                title: "Quality Guaranteed",
                desc: "We ensure high-quality service delivery with our satisfaction guarantee and rating system.",
              },
              {
                icon: Clock,
                title: "On-Time Service",
                desc: "Punctual service delivery with real-time tracking and instant notifications.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-16 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to get started?</h2>
            <p className="text-xl text-blue-100">
              Join thousands of satisfied customers who trust ServiceHub for their home service needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link to="/signup" className="flex-1">
                <Button size="lg" className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/services" className="flex-1">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Browse Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Home className="h-6 w-6" />
                <span className="text-xl font-bold">ServiceHub</span>
              </div>
              <p className="text-slate-400">Your trusted partner for all home service needs.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-slate-400">
                <div>Home Cleaning</div>
                <div>Repairs</div>
                <div>Painting</div>
                <div>Electrical</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-slate-400">
                <div>About Us</div>
                <div>Careers</div>
                <div>Contact</div>
                <div>Blog</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-slate-400">
                <div>Help Center</div>
                <div>Safety</div>
                <div>Terms</div>
                <div>Privacy</div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ServiceHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
