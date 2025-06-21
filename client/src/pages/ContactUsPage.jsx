"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import {
  Home,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Users,
  Headphones,
  Globe,
  Star,
  Shield,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    urgency: "normal",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Contact Form Data:", formData)
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our support team",
      contact: "+1 (555) 123-4567",
      availability: "24/7 Available",
      color: "from-green-500 to-green-600",
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      contact: "support@servicehub.com",
      availability: "Response within 2 hours",
      color: "from-blue-500 to-blue-600",
      action: "Send Email",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help from our team",
      contact: "Available on website",
      availability: "Mon-Fri 9AM-6PM",
      color: "from-purple-500 to-purple-600",
      action: "Start Chat",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come to our office location",
      contact: "123 Service St, City, ST 12345",
      availability: "Mon-Fri 9AM-5PM",
      color: "from-orange-500 to-orange-600",
      action: "Get Directions",
    },
  ]

  const supportTypes = [
    {
      icon: Users,
      title: "General Support",
      description: "Questions about our services, booking help, and general inquiries",
      responseTime: "Within 2 hours",
    },
    {
      icon: AlertCircle,
      title: "Technical Issues",
      description: "App problems, website issues, and technical troubleshooting",
      responseTime: "Within 1 hour",
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "Report safety concerns, security issues, or emergency situations",
      responseTime: "Immediate",
    },
    {
      icon: Star,
      title: "Feedback & Reviews",
      description: "Share your experience, suggestions, and service feedback",
      responseTime: "Within 24 hours",
    },
  ]

  const faqs = [
    {
      question: "How quickly can I get a response?",
      answer:
        "We typically respond to inquiries within 2 hours during business hours. For urgent matters, please call our 24/7 hotline.",
    },
    {
      question: "What information should I include in my message?",
      answer:
        "Please include your name, contact information, service type, and a detailed description of your inquiry or issue.",
    },
    {
      question: "Do you offer emergency support?",
      answer:
        "Yes! We provide 24/7 emergency support for urgent home service needs. Call our emergency hotline for immediate assistance.",
    },
    {
      question: "Can I schedule a callback?",
      answer: "You can request a callback in the contact form, and we'll call you at your preferred time.",
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
              💬 We're Here to Help
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Get in Touch
              <span className="block text-yellow-300">with ServiceHub</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Have questions, need support, or want to share feedback? Our dedicated team is ready to assist you 24/7.
              Reach out to us through any of the channels below.
            </p>

            {/* Quick Contact Stats */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
                <p className="text-blue-100 text-sm">Always available when you need us</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Expert Team</h3>
                <p className="text-blue-100 text-sm">Knowledgeable support specialists</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">Quick Response</h3>
                <p className="text-blue-100 text-sm">Average response time under 2 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="max-w-[90%] mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Choose Your Preferred Contact Method</h2>
          <p className="text-xl text-slate-600">We offer multiple ways to get in touch based on your needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <CardContent className="p-8 space-y-6">
                <div
                  className={`bg-gradient-to-br ${method.color} w-20 h-20 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <method.icon className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{method.title}</h3>
                  <p className="text-slate-600 mb-4">{method.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-slate-900">{method.contact}</p>
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      {method.availability}
                    </Badge>
                  </div>
                </div>
                <Button
                  className={`w-full bg-gradient-to-r ${method.color} text-white font-semibold py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105`}
                >
                  {method.action}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form & Support Types */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/50 py-20">
        <div className="max-w-[90%] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Send Us a Message</h2>
                <p className="text-xl text-slate-600">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </div>

              {!isSubmitted ? (
                <Card className="shadow-xl border-0">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name & Email */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-slate-700 font-medium">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            className="h-12 border-2 focus:border-blue-500 transition-colors"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-slate-700 font-medium">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            className="h-12 border-2 focus:border-blue-500 transition-colors"
                            required
                          />
                        </div>
                      </div>

                      {/* Phone & Subject */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-slate-700 font-medium">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 123-4567"
                            className="h-12 border-2 focus:border-blue-500 transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-slate-700 font-medium">
                            Subject *
                          </Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="How can we help?"
                            className="h-12 border-2 focus:border-blue-500 transition-colors"
                            required
                          />
                        </div>
                      </div>

                      {/* Urgency */}
                      <div className="space-y-2">
                        <Label htmlFor="urgency" className="text-slate-700 font-medium">
                          Priority Level
                        </Label>
                        <select
                          id="urgency"
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                          className="w-full h-12 border-2 border-slate-200 rounded-md px-3 focus:border-blue-500 transition-colors"
                        >
                          <option value="low">Low - General inquiry</option>
                          <option value="normal">Normal - Standard support</option>
                          <option value="high">High - Urgent issue</option>
                          <option value="emergency">Emergency - Immediate attention needed</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-slate-700 font-medium">
                          Message *
                        </Label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Please describe your inquiry in detail..."
                          rows={6}
                          className="w-full border-2 border-slate-200 rounded-md px-3 py-2 focus:border-blue-500 transition-colors resize-none"
                          required
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending Message...</span>
                          </div>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              ) : (
                <Card className="shadow-xl border-0 bg-green-50">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                      <p className="text-green-700">
                        Thank you for contacting us. We've received your message and will respond within 2 hours.
                      </p>
                    </div>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-green-300 text-green-700 hover:bg-green-100"
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Support Types */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Support Categories</h2>
                <p className="text-xl text-slate-600">Choose the category that best describes your inquiry</p>
              </div>

              <div className="space-y-6">
                {supportTypes.map((type, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <type.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-900 mb-2">{type.title}</h3>
                          <p className="text-slate-600 mb-3">{type.description}</p>
                          <Badge variant="outline" className="text-blue-600 border-blue-200">
                            Response: {type.responseTime}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-[90%] mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-600">Quick answers to common questions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Office Hours & Location */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/50 py-20">
        <div className="max-w-[90%] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Office Hours */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Clock className="w-8 h-8 text-blue-600" />
                  <span>Office Hours</span>
                </CardTitle>
                <CardDescription>When you can reach us directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="font-medium text-slate-900">Monday - Friday</span>
                  <span className="text-slate-600">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="font-medium text-slate-900">Saturday</span>
                  <span className="text-slate-600">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="font-medium text-slate-900">Sunday</span>
                  <span className="text-slate-600">Emergency Only</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-slate-900">Emergency Line</span>
                  <span className="text-green-600 font-semibold">24/7 Available</span>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <MapPin className="w-8 h-8 text-blue-600" />
                  <span>Our Location</span>
                </CardTitle>
                <CardDescription>Visit us at our headquarters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">ServiceHub Headquarters</h4>
                    <p className="text-slate-600">
                      123 Service Street
                      <br />
                      Business District
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-600">
                    <Globe className="w-4 h-4" />
                    <span>Serving nationwide with local offices</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[90%] mx-auto px-6 py-20">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-20"></div>
          <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 lg:p-20 text-center text-white shadow-2xl">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold">Still Have Questions?</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Our support team is standing by to help you with any questions or concerns. Don't hesitate to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Start Live Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
