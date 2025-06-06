import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Home, Wrench, Paintbrush, Zap, Car, Users, Search, Filter, Star, MapPin } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Deep Home Cleaning",
      category: "Cleaning",
      price: "Starting at $89",
      rating: 4.8,
      reviews: 1250,
      image: "/placeholder.svg?height=200&width=300",
      description: "Professional deep cleaning service for your entire home",
      features: ["Kitchen deep clean", "Bathroom sanitization", "Floor mopping", "Dusting"],
      icon: Home,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Plumbing Repairs",
      category: "Repairs",
      price: "Starting at $75",
      rating: 4.9,
      reviews: 890,
      image: "/placeholder.svg?height=200&width=300",
      description: "Expert plumbing solutions for all your home needs",
      features: ["Leak repairs", "Pipe installation", "Drain cleaning", "Emergency service"],
      icon: Wrench,
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Interior Painting",
      category: "Painting",
      price: "Starting at $200",
      rating: 4.7,
      reviews: 650,
      image: "/placeholder.svg?height=200&width=300",
      description: "Transform your space with professional painting services",
      features: ["Color consultation", "Wall preparation", "Premium paints", "Clean-up included"],
      icon: Paintbrush,
      color: "bg-purple-500",
    },
    {
      id: 4,
      title: "Electrical Services",
      category: "Electrical",
      price: "Starting at $95",
      rating: 4.8,
      reviews: 720,
      image: "/placeholder.svg?height=200&width=300",
      description: "Safe and reliable electrical work by certified electricians",
      features: ["Wiring installation", "Switch repairs", "Safety inspection", "24/7 emergency"],
      icon: Zap,
      color: "bg-yellow-500",
    },
    {
      id: 5,
      title: "Car Wash & Detailing",
      category: "Automotive",
      price: "Starting at $45",
      rating: 4.6,
      reviews: 980,
      image: "/placeholder.svg?height=200&width=300",
      description: "Premium car care services at your doorstep",
      features: ["Exterior wash", "Interior cleaning", "Wax application", "Tire shine"],
      icon: Car,
      color: "bg-red-500",
    },
    {
      id: 6,
      title: "Beauty & Wellness",
      category: "Personal Care",
      price: "Starting at $60",
      rating: 4.9,
      reviews: 1100,
      image: "/placeholder.svg?height=200&width=300",
      description: "Professional beauty services in the comfort of your home",
      features: ["Hair styling", "Facial treatments", "Manicure/Pedicure", "Massage therapy"],
      icon: Users,
      color: "bg-pink-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-slate-900">ServiceHub</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-blue-600 font-medium">
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
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Professional Home Services</h1>
          <p className="text-xl mb-8 text-blue-100">Browse our comprehensive range of trusted home services</p>

          <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input placeholder="Search for services..." className="pl-10 h-12 text-gray-900" />
            </div>
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input placeholder="Enter your location" className="pl-10 h-12 text-gray-900" />
            </div>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 h-12 px-8">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            All Categories
          </Button>
          <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">
            Cleaning
          </Badge>
          <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">
            Repairs
          </Badge>
          <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">
            Painting
          </Badge>
          <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">
            Electrical
          </Badge>
          <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">
            Automotive
          </Badge>
          <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">
            Personal Care
          </Badge>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div
                  className={`absolute top-4 left-4 ${service.color} w-12 h-12 rounded-xl flex items-center justify-center`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <Badge className="absolute top-4 right-4 bg-white text-slate-900">{service.category}</Badge>
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{service.rating}</span>
                  </div>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 2).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {service.features.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{service.features.length - 2} more
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-blue-600">{service.price}</div>
                    <div className="text-sm text-slate-500">{service.reviews} reviews</div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-xl text-slate-300 mb-8">Contact us and we'll help you find the perfect service provider</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Contact Support
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Request Custom Service
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
