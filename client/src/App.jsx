import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import ServicesPage from "./pages/ServicesPage"
import HowItWorksPage from "./pages/HowItWorksPage"
import AboutPage from "./pages/AboutPage"
import ContactUsPage from "./pages/ContactUsPage"
import "./App.css"
import Dashboard from "./components/dashboard"
import { ForgotPasswordFlow } from "./pages/forgetPassword"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgot-password" element={<ForgotPasswordFlow />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
