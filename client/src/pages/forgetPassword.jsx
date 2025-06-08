"use client"

import { useState } from "react"
import { ForgotPasswordEmail } from "./ForgetPasswordEmail"
import { ForgotPasswordOTP } from "./ForgetPasswordOtp"
import { ForgotPasswordReset } from "./ForgetPasswordReset"
import { toast, Toaster } from "react-hot-toast"

export function ForgotPasswordFlow() {
  const [currentStep, setCurrentStep] = useState(1)
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailSubmit = async (emailValue) => {
    setIsLoading(true)
    setEmail(emailValue)

    // Simulate API call to send OTP
    setTimeout(() => {
      setIsLoading(false)
      setCurrentStep(2)
    }, 2000)
  }

  const handleOTPVerify = async (otp) => {
    setIsLoading(true)

    // Simulate API call to verify OTP
    setTimeout(() => {
      setIsLoading(false)
      setCurrentStep(3)
    }, 1500)
  }

  const handlePasswordReset = async (newPassword) => {
    setIsLoading(true)

    // Simulate API call to reset password
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to login or show success message
      console.log("Password reset successful")
    }, 2000)
  }

  const handleBackToEmail = () => {
    setCurrentStep(1)
  }

  const handleResendOTP = async () => {
    setIsLoading(true)

    // Simulate API call to resend OTP
    setTimeout(() => {
      setIsLoading(false)
      console.log("OTP resent successfully")
    }, 1000)
  }

  return (
    <>
    
    <Toaster position="top-right" reverseOrder={false} />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {currentStep === 1 && <ForgotPasswordEmail onSubmit={handleEmailSubmit} isLoading={isLoading} />}

        {currentStep === 2 && (
          <ForgotPasswordOTP
            email={email}
            onVerify={handleOTPVerify}
            onBack={handleBackToEmail}
            onResend={handleResendOTP}
            isLoading={isLoading}
          />
        )}

        {currentStep === 3 && (
          <ForgotPasswordReset email={email} onSubmit={handlePasswordReset} isLoading={isLoading} />
        )}
      </div>
    </div>
    </>
  )
}
