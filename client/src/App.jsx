import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import ServicesPage from "./pages/ServicesPage"
import HowItWorksPage from "./pages/HowItWorksPage"
import AboutPage from "./pages/AboutPage"
import ContactUsPage from "./pages/ContactUsPage"
import Dashboard from "./components/dashboard"
import ForgotPasswordFlow from "./pages/forgetPassword"

// Import sub-pages for dashboard
import HomeSection from "./components/admin/HomeDashboard"
import Complaints from "./components/admin/complaints"
import UserManagement from "./components/admin/user-management"
import Reviews from "./components/admin/reviews"
import Analytics from "./components/admin/analytics"
import Orders from "./components/admin/recent-orders"
import Payments from "./components/admin/payments"
import Settings from "./components/admin/settings"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordFlow />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<HomeSection />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="user-management" element={<UserManagement />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="orders" element={<Orders />} />
          <Route path="payments" element={<Payments />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
