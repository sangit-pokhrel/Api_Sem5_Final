import { useState } from "react"
import axios from "axios"
import { Mail, ArrowLeft, Loader2 } from "lucide-react"
import { toast } from "react-hot-toast"

export default function ForgotPasswordEmail({ onSubmit, isLoading: loadingFromParent }) {
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = {}

    if (!email) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) return

    try {
      setIsLoading(true)

      const res = await axios.post("http://localhost:3000/api/forgot/email", {
        email,
        role: "User", // Adjust role as needed
      })

      const { userId, otpSent } = res.data

      if (otpSent) {
        sessionStorage.setItem("userId", userId)
        sessionStorage.setItem("email", email)
        toast.success("📨 OTP sent to your email")
        onSubmit(email)
      } else {
        toast.error("Failed to send OTP.")
      }
    } catch (err) {
      toast.error(err?.response?.data?.error || "❌ Failed to send OTP")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="text-blue-600" size={32} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password?</h2>
        <p className="text-gray-600">
          No worries! Enter your email address and we'll send you a verification code to reset your password.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 pl-12 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${errors.email ? "border-red-500" : "border-gray-300"
                }`}
              placeholder="Enter your email address"
              disabled={isLoading || loadingFromParent}
            />
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
        </div>

        <button
          type="submit"
          disabled={isLoading || loadingFromParent}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin mr-2" size={20} />
              Sending Code...
            </>
          ) : (
            "Send Verification Code"
          )}
        </button>
      </form>

      {/* Back to Login */}
      <div className="mt-8 text-center">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to Login
        </button>
      </div>

      {/* Help Text */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600 text-center">
          <strong>Need help?</strong> Contact our support team at{" "}
          <a href="mailto:support@homeserve.com" className="text-blue-600 hover:text-blue-700">
            support@homeserve.com
          </a>
        </p>
      </div>
    </div>
  )
}
