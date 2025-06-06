import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import {
  Wrench,
  Paintbrush,
  Zap,
  Car,
  Home,
  Shield,
  Clock,
  Star,
  Users,
  MapPin,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

export default function HomePage() {
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
      <section className="max-w-[90%] mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 hover:from-blue-200 hover:to-blue-300 px-4 py-2 text-sm font-medium border-0 shadow-sm">
                🏠 Trusted Home Services
              </Badge>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
                Book trusted home services
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  in minutes
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                From cleaning and repairs to beauty and wellness - get professional services at your doorstep. Verified
                professionals, transparent pricing, guaranteed satisfaction.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
              <div className="flex-1">
                <Input
                  placeholder="Enter your location"
                  className="h-14 text-lg border-2 border-slate-200 focus:border-blue-500 rounded-xl shadow-sm"
                />
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 h-14 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Find Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="flex items-center space-x-12 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  50K+
                </div>
                <div className="text-sm text-slate-600 font-medium">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  1000+
                </div>
                <div className="text-sm text-slate-600 font-medium">Service Providers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  4.8★
                </div>
                <div className="text-sm text-slate-600 font-medium">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl blur-xl opacity-20 transform rotate-6"></div>
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">Home Cleaning</h3>
                    <p className="text-blue-100 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Professional • Verified
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Home className="w-7 h-7" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <span className="font-medium">Deep Cleaning</span>
                    <span className="font-bold text-lg">$89</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <span className="font-medium">Regular Cleaning</span>
                    <span className="font-bold text-lg">$49</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <span className="font-medium">Move-in Cleaning</span>
                    <span className="font-bold text-lg">$129</span>
                  </div>
                </div>

                <Button className="w-full bg-white text-blue-600 hover:bg-gray-50 font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                  Book Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <div className="flex items-center space-x-3 text-sm bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">100% Satisfaction Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-[90%] mx-auto px-6 py-20">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Popular Services</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need for your home, delivered by trusted professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Home, title: "Home Cleaning", desc: "Deep & regular cleaning", color: "from-blue-500 to-blue-600" },
            {
              icon: Wrench,
              title: "Repairs & Maintenance",
              desc: "Plumbing, electrical & more",
              color: "from-green-500 to-green-600",
            },
            {
              icon: Paintbrush,
              title: "Painting",
              desc: "Interior & exterior painting",
              color: "from-purple-500 to-purple-600",
            },
            { icon: Zap, title: "Electrical", desc: "Installation & repairs", color: "from-yellow-500 to-yellow-600" },
            { icon: Car, title: "Car Services", desc: "Washing & maintenance", color: "from-red-500 to-red-600" },
            {
              icon: Users,
              title: "Beauty & Wellness",
              desc: "Salon services at home",
              color: "from-pink-500 to-pink-600",
            },
            { icon: Shield, title: "Security", desc: "CCTV & alarm systems", color: "from-indigo-500 to-indigo-600" },
            {
              icon: Clock,
              title: "Emergency Services",
              desc: "24/7 urgent repairs",
              color: "from-orange-500 to-orange-600",
            },
          ].map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 cursor-pointer border-0 shadow-lg hover:scale-105"
            >
              <CardContent className="p-8 text-center space-y-6">
                <div
                  className={`bg-gradient-to-br ${service.color} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-3 text-lg">{service.title}</h3>
                  <p className="text-slate-600">{service.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/50 py-20">
        <div className="max-w-[90%] mx-auto px-6">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Why Choose ServiceHub?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We're committed to providing you with the best home service experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
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
              <div key={index} className="text-center space-y-6 group">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
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
              <h2 className="text-4xl lg:text-5xl font-bold">Ready to get started?</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Join thousands of satisfied customers who trust ServiceHub for their home service needs.
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

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-[90%] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-xl">
                  <Home className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">ServiceHub</span>
              </div>
              <p className="text-slate-400 leading-relaxed">Your trusted partner for all home service needs.</p>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Services</h4>
              <div className="space-y-3 text-slate-400">
                <div className="hover:text-white transition-colors cursor-pointer">Home Cleaning</div>
                <div className="hover:text-white transition-colors cursor-pointer">Repairs</div>
                <div className="hover:text-white transition-colors cursor-pointer">Painting</div>
                <div className="hover:text-white transition-colors cursor-pointer">Electrical</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <div className="space-y-3 text-slate-400">
                <div className="hover:text-white transition-colors cursor-pointer">About Us</div>
                <div className="hover:text-white transition-colors cursor-pointer">Careers</div>
                <div className="hover:text-white transition-colors cursor-pointer">Contact</div>
                <div className="hover:text-white transition-colors cursor-pointer">Blog</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-lg">Support</h4>
              <div className="space-y-3 text-slate-400">
                <div className="hover:text-white transition-colors cursor-pointer">Help Center</div>
                <div className="hover:text-white transition-colors cursor-pointer">Safety</div>
                <div className="hover:text-white transition-colors cursor-pointer">Terms</div>
                <div className="hover:text-white transition-colors cursor-pointer">Privacy</div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ServiceHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
