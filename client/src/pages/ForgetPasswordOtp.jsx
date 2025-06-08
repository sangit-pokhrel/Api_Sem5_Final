"use client"

import { useState } from "react"
import axios from "axios"
import { toast, Toaster } from "react-hot-toast"
import { Shield, ArrowLeft, Loader2, RefreshCw } from "lucide-react"

export function ForgotPasswordOTP({ email, onVerify, onBack, onResend, isLoading }) {
  const [otp, setOtp] = useState("")
  const [error, setError] = useState("")
  const [timeLeft, setTimeLeft] = useState(300)
  const [canResend, setCanResend] = useState(false)

  // ⏲️ Timer effect
  useState(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCanResend(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, "0")}`
  }

  const maskEmail = (email) => {
    const [user, domain] = email.split("@")
    return `${user[0]}***${user.slice(-1)}@${domain}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!/^[A-Za-z0-9]{6}$/.test(otp)) {
      setError("Enter a valid 6-character alphanumeric OTP.")
      return
    }

    setError("")

    try {
      const response = await axios.post("http://localhost:3000/api/forgot/verify-otp", {
        contact: email,
        otp: otp,
      })

      toast.success("✅ OTP verified!")
      onVerify(otp)
    } catch (err) {
      toast.error(err.response?.data?.error || "OTP verification failed")
    }
  }

  const handleResend = () => {
    setTimeLeft(300)
    setCanResend(false)
    onResend()
    toast.success("OTP resent!")
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <Toaster position="top-right" />
      <div className="text-center mb-8">
        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="text-green-600" size={32} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Verify Your Email</h2>
        <p className="text-gray-600 mb-2">We sent a 6-character code to:</p>
        <p className="text-blue-600 font-medium">{maskEmail(email)}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2 text-center">
            Enter Verification Code
          </label>
          <input
            id="otp"
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder=""
            className={`w-full text-center text-xl tracking-widest font-semibold py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              error ? "border-red-500" : "border-gray-300"
            }`}
            disabled={isLoading}
          />
          {error && <p className="text-sm text-red-600 text-center mt-2">{error}</p>}
        </div>

        {/* Timer and Resend */}
        <div className="text-center">
          {timeLeft > 0 ? (
            <p className="text-sm text-gray-600">
              Code expires in <span className="font-semibold text-blue-600">{formatTime(timeLeft)}</span>
            </p>
          ) : (
            <p className="text-sm text-red-600">Code has expired</p>
          )}

          <div className="mt-3">
            {canResend ? (
              <button
                type="button"
                onClick={handleResend}
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700"
                disabled={isLoading}
              >
                <RefreshCw size={16} className="mr-1" />
                Resend Code
              </button>
            ) : (
              <span className="text-sm text-gray-400">Resend available in {formatTime(timeLeft)}</span>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || otp.length !== 6}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin mr-2" size={20} />
              Verifying...
            </>
          ) : (
            "Verify Code"
          )}
        </button>
      </form>

      <div className="mt-8 text-center">
        <button
          onClick={onBack}
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
          disabled={isLoading}
        >
          <ArrowLeft size={16} className="mr-1" />
          Back to Email
        </button>
      </div>
    </div>
  )
}
