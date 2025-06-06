"use client"

import { useState } from "react"
import { Sidebar } from "./admin/sidebar"
import { Header } from "./admin/header"
import { StatsCard } from "./admin/stats-card"
import { SimpleChart } from "./admin/chart"
import { RecentOrders } from "./admin/recent-orders"
import { UserManagement } from "./admin/user-management"
import { Reviews } from "./admin/reviews"
import { Complaints } from "./admin/complaints"
import { Analytics } from "./admin/analytics"
import { Payments } from "./admin/payments"
import { Orders } from "./admin/orders"
import { Settings } from "./admin/settings"
import { Users, ShoppingCart, DollarSign, TrendingUp } from "lucide-react"

const statsData = [
  {
    title: "Total Users",
    value: "12,345",
    change: "+12%",
    changeType: "positive",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    title: "Total Orders",
    value: "8,432",
    change: "+8%",
    changeType: "positive",
    icon: ShoppingCart,
    color: "bg-green-500",
  },
  {
    title: "Revenue",
    value: "$45,678",
    change: "+15%",
    changeType: "positive",
    icon: DollarSign,
    color: "bg-purple-500",
  },
  {
    title: "Growth Rate",
    value: "23.5%",
    change: "-2%",
    changeType: "negative",
    icon: TrendingUp,
    color: "bg-orange-500",
  },
]

const chartData = [
  { label: "Jan", value: 4000 },
  { label: "Feb", value: 3000 },
  { label: "Mar", value: 5000 },
  { label: "Apr", value: 4500 },
  { label: "May", value: 6000 },
  { label: "Jun", value: 5500 },
]

const trafficData = [
  { label: "Desktop", value: 65 },
  { label: "Mobile", value: 30 },
  { label: "Tablet", value: 5 },
]

export default function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [activeSection, setActiveSection] = useState("Dashboard")

  const renderContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return (
          <div className="container mx-auto px-6 py-8">
            {/* Page Title */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your business today.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {statsData.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <SimpleChart data={chartData} title="Monthly Revenue" />
              <SimpleChart data={trafficData} title="Traffic Sources" />
            </div>

            {/* Activity Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <RecentOrders />
              </div>

              <div className="space-y-6">
                {/* Quick Stats */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Active Users</span>
                      <span className="text-sm font-medium text-gray-900">1,234</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Pending Orders</span>
                      <span className="text-sm font-medium text-gray-900">56</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Total Products</span>
                      <span className="text-sm font-medium text-gray-900">789</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Low Stock Items</span>
                      <span className="text-sm font-medium text-red-600">12</span>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm text-gray-900">New user registered</p>
                        <p className="text-xs text-gray-500">2 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm text-gray-900">Order #12345 completed</p>
                        <p className="text-xs text-gray-500">5 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm text-gray-900">Product stock updated</p>
                        <p className="text-xs text-gray-500">10 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm text-gray-900">Payment received</p>
                        <p className="text-xs text-gray-500">15 minutes ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case "User Management":
        return (
          <div className="container mx-auto px-6 py-8">
            <UserManagement />
          </div>
        )
      case "Reviews":
        return (
          <div className="container mx-auto px-6 py-8">
            <Reviews />
          </div>
        )
      case "Complaints":
        return (
          <div className="container mx-auto px-6 py-8">
            <Complaints />
          </div>
        )
      case "Analytics":
        return (
          <div className="container mx-auto px-6 py-8">
            <Analytics />
          </div>
        )
      case "Payments":
        return (
          <div className="container mx-auto px-6 py-8">
            <Payments />
          </div>
        )
      case "Orders":
        return (
          <div className="container mx-auto px-6 py-8">
            <Orders />
          </div>
        )
      case "Settings":
        return (
          <div className="container mx-auto px-6 py-8">
            <Settings />
          </div>
        )
      default:
        return (
          <div className="container mx-auto px-6 py-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">Page Not Found</h2>
              <p className="text-gray-600 mt-2">The requested page could not be found.</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        isCollapsed={sidebarCollapsed}
        setIsCollapsed={setSidebarCollapsed}
        activeItem={activeSection}
        setActiveItem={setActiveSection}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">{renderContent()}</main>
      </div>
    </div>
  )
}
