import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Home, Target, Award, Heart, Shield, Zap, Globe } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "We prioritize your safety with verified professionals and secure transactions.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction is our top priority. We go above and beyond to exceed expectations.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously improve our platform with cutting-edge technology and user feedback.",
    },
    {
      icon: Globe,
      title: "Community",
      description: "Building stronger communities by connecting neighbors with trusted local professionals.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former VP at Urban Company with 10+ years in home services industry.",
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Ex-Google engineer passionate about building scalable platforms.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Operations expert with experience scaling service marketplaces.",
    },
    {
      name: "David Kim",
      role: "Head of Product",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Product leader focused on creating exceptional user experiences.",
    },
  ]

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "ServiceHub was born from the vision to make home services accessible to everyone.",
    },
    {
      year: "2021",
      title: "First 1,000 Customers",
      description: "Reached our first milestone with 1,000 happy customers across 5 cities.",
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Raised $10M Series A to expand our platform and reach more communities.",
    },
    {
      year: "2023",
      title: "50,000 Customers",
      description: "Celebrated serving 50,000+ customers with 1,000+ verified professionals.",
    },
    {
      year: "2024",
      title: "National Expansion",
      description: "Expanded to 50+ cities nationwide, becoming a trusted household name.",
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
            <Link to="/how-it-works" className="text-slate-600 hover:text-slate-900 font-medium">
              How it Works
            </Link>
            <Link to="/pricing" className="text-slate-600 hover:text-slate-900 font-medium">
              Pricing
            </Link>
            <Link to="/about" className="text-blue-600 font-medium">
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
          <Badge className="bg-blue-100 text-blue-800 mb-4">Our Story</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">About ServiceHub</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're on a mission to make professional home services accessible, reliable, and affordable for everyone.
            Founded in 2020, we've grown from a small startup to a trusted platform serving thousands of customers
            nationwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Target className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
              </div>
              <p className="text-lg text-slate-600">
                To connect homeowners with trusted, verified professionals who deliver exceptional service experiences.
                We believe everyone deserves access to reliable home services without the hassle of endless searching
                and uncertainty.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
              </div>
              <p className="text-lg text-slate-600">
                To become the world's most trusted home services platform, where quality, convenience, and customer
                satisfaction are never compromised. We envision a future where booking home services is as easy as
                ordering food online.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-blue-100">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">1000+</div>
                  <div className="text-blue-100">Professionals</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-blue-100">Cities</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">4.8★</div>
                  <div className="text-blue-100">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Our Values</h2>
            <p className="text-xl text-slate-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Our Journey</h2>
          <p className="text-xl text-slate-600">Key milestones in our growth story</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">{milestone.title}</h3>
                  <p className="text-slate-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Meet Our Team</h2>
            <p className="text-xl text-slate-600">The passionate people behind ServiceHub</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                    <p className="text-blue-600 font-medium">{member.role}</p>
                  </div>
                  <p className="text-sm text-slate-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-16 text-center text-white">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Join Our Growing Community</h2>
            <p className="text-xl text-blue-100">
              Whether you're looking for home services or want to become a service provider, we'd love to have you join
              the ServiceHub family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Browse Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
