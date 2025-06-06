"use client"

import { useState } from "react"
import { Calendar, ChevronDown, Download } from "lucide-react"

export function Analytics() {
  const [timeRange, setTimeRange] = useState("This Month")
  const [showTimeDropdown, setShowTimeDropdown] = useState(false)

  // Sample data for charts
  const serviceData = [
    { name: "Plumbing", value: 35 },
    { name: "Cleaning", value: 25 },
    { name: "Electrical", value: 20 },
    { name: "Landscaping", value: 15 },
    { name: "Other", value: 5 },
  ]

  const revenueData = [
    { month: "Jan", value: 12000 },
    { month: "Feb", value: 15000 },
    { month: "Mar", value: 18000 },
    { month: "Apr", value: 16000 },
    { month: "May", value: 21000 },
    { month: "Jun", value: 19000 },
    { month: "Jul", value: 22000 },
    { month: "Aug", value: 25000 },
    { month: "Sep", value: 23000 },
    { month: "Oct", value: 26000 },
    { month: "Nov", value: 24000 },
    { month: "Dec", value: 28000 },
  ]

  const customerData = [
    { month: "Jan", new: 120, returning: 80 },
    { month: "Feb", new: 150, returning: 90 },
    { month: "Mar", new: 180, returning: 100 },
    { month: "Apr", new: 160, returning: 110 },
    { month: "May", new: 210, returning: 120 },
    { month: "Jun", new: 190, returning: 130 },
    { month: "Jul", new: 220, returning: 140 },
    { month: "Aug", new: 250, returning: 150 },
    { month: "Sep", new: 230, returning: 160 },
    { month: "Oct", new: 260, returning: 170 },
    { month: "Nov", new: 240, returning: 180 },
    { month: "Dec", new: 280, returning: 190 },
  ]

  const maxRevenueValue = Math.max(...revenueData.map((item) => item.value))
  const maxCustomerValue = Math.max(...customerData.map((item) => Math.max(item.new, item.returning)))

  return (
    <div className="space-y-6">
      {/* Header with time range selector */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              onClick={() => setShowTimeDropdown(!showTimeDropdown)}
            >
              <Calendar size={16} />
              <span>{timeRange}</span>
              <ChevronDown size={16} />
            </button>
            {showTimeDropdown && (
              <div className="absolute right-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                <button
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setTimeRange("Today")
                    setShowTimeDropdown(false)
                  }}
                >
                  Today
                </button>
                <button
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setTimeRange("This Week")
                    setShowTimeDropdown(false)
                  }}
                >
                  This Week
                </button>
                <button
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setTimeRange("This Month")
                    setShowTimeDropdown(false)
                  }}
                >
                  This Month
                </button>
                <button
                  className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setTimeRange("This Year")
                    setShowTimeDropdown(false)
                  }}
                >
                  This Year
                </button>
              </div>
            )}
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-600">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">$245,890</p>
            <div className="flex items-center mt-2">
              <span className="text-sm text-green-500">+12.5%</span>
              <span className="text-sm text-gray-500 ml-1">vs last period</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-600">Total Services</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">1,234</p>
            <div className="flex items-center mt-2">
              <span className="text-sm text-green-500">+8.2%</span>
              <span className="text-sm text-gray-500 ml-1">vs last period</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-600">Active Providers</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">156</p>
            <div className="flex items-center mt-2">
              <span className="text-sm text-green-500">+5.3%</span>
              <span className="text-sm text-gray-500 ml-1">vs last period</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-600">Customer Satisfaction</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">4.8/5</p>
            <div className="flex items-center mt-2">
              <span className="text-sm text-green-500">+0.3</span>
              <span className="text-sm text-gray-500 ml-1">vs last period</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
          <div className="h-64">
            <div className="flex h-full items-end space-x-2">
              {revenueData.map((item, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div
                    className="w-full bg-blue-500 rounded-t"
                    style={{ height: `${(item.value / maxRevenueValue) * 100}%` }}
                  ></div>
                  <div className="text-xs text-gray-500 mt-1">{item.month}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Chart */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Growth</h3>
          <div className="h-64">
            <div className="flex h-full items-end space-x-2">
              {customerData.map((item, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className="w-full flex flex-col">
                    <div
                      className="w-full bg-green-500 rounded-t"
                      style={{ height: `${(item.new / maxCustomerValue) * 100}%` }}
                    ></div>
                    <div
                      className="w-full bg-blue-500"
                      style={{ height: `${(item.returning / maxCustomerValue) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{item.month}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center mt-4 space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-xs text-gray-500">New Customers</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-xs text-gray-500">Returning Customers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service Distribution */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Distribution</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center justify-center">
            <div className="w-48 h-48 rounded-full border-8 border-gray-100 flex items-center justify-center relative">
              {serviceData.map((item, index) => {
                const rotation = index * (360 / serviceData.length)
                return (
                  <div
                    key={index}
                    className="absolute w-full h-full"
                    style={{
                      clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((rotation + 360 / serviceData.length) * (Math.PI / 180))}% ${
                        50 - 50 * Math.sin((rotation + 360 / serviceData.length) * (Math.PI / 180))
                      }%)`,
                      transform: `rotate(${rotation}deg)`,
                      backgroundColor: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-red-500"][
                        index
                      ],
                    }}
                  ></div>
                )
              })}
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-gray-900">100%</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            {serviceData.map((item, index) => (
              <div key={index} className="flex items-center mb-3">
                <div
                  className={`w-4 h-4 rounded-full mr-2 ${
                    ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-red-500"][index]
                  }`}
                ></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                    <span className="text-sm text-gray-500">{item.value}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                    <div
                      className={`h-1.5 rounded-full ${
                        ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-red-500"][index]
                      }`}
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
