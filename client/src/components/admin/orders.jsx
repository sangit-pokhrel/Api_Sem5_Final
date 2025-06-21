"use client"

import { useState } from "react"
import { Search, Filter, MoreHorizontal, Eye, Edit, MapPin, Clock, User } from "lucide-react"

// Sample orders data
const orders = [
  {
    id: "ORD-12345",
    customer: "John Smith",
    service: "Plumbing Repair",
    provider: "Mike's Plumbing",
    status: "Completed",
    date: "2024-01-15",
    time: "10:00 AM - 12:00 PM",
    address: "123 Main St, Anytown, USA",
    amount: "$299.99",
    priority: "High",
  },
  {
    id: "ORD-12346",
    customer: "Sarah Johnson",
    service: "House Cleaning",
    provider: "CleanPro Services",
    status: "Scheduled",
    date: "2024-01-20",
    time: "09:00 AM - 11:00 AM",
    address: "456 Oak Ave, Somewhere, USA",
    amount: "$149.99",
    priority: "Medium",
  },
  {
    id: "ORD-12347",
    customer: "Mike Wilson",
    service: "Electrical Work",
    provider: "PowerFix Electric",
    status: "In Progress",
    date: "2024-01-16",
    time: "02:00 PM - 04:00 PM",
    address: "789 Pine St, Elsewhere, USA",
    amount: "$450.00",
    priority: "High",
  },
  {
    id: "ORD-12348",
    customer: "Emily Davis",
    service: "Lawn Mowing",
    provider: "Green Thumb Landscaping",
    status: "Pending",
    date: "2024-01-18",
    time: "08:00 AM - 10:00 AM",
    address: "321 Elm Dr, Nowhere, USA",
    amount: "$89.99",
    priority: "Low",
  },
  {
    id: "ORD-12349",
    customer: "David Brown",
    service: "Carpet Cleaning",
    provider: "Fresh Carpets Inc",
    status: "Cancelled",
    date: "2024-01-17",
    time: "01:00 PM - 03:00 PM",
    address: "654 Maple Ln, Anywhere, USA",
    amount: "$199.99",
    priority: "Medium",
  },
]

export default function Orders() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [showActions, setShowActions] = useState(null)

  const filteredOrders = orders.filter(
    (order) =>
      (order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.provider.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "All" || order.status === statusFilter),
  )

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Scheduled":
        return "bg-blue-100 text-blue-800"
      case "In Progress":
        return "bg-yellow-100 text-yellow-800"
      case "Pending":
        return "bg-orange-100 text-orange-800"
      case "Cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800"
      case "Medium":
        return "bg-yellow-100 text-yellow-800"
      case "Low":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-600">Total Orders</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">1,234</p>
            <div className="flex items-center mt-2">
              <span className="text-sm text-green-500">+8.2%</span>
              <span className="text-sm text-gray-500 ml-1">vs last month</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-600">Pending Orders</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">45</p>
            <div className="flex items-center mt-2">
              <span className="text-sm text-yellow-500">Needs attention</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-600">Completed Today</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">23</p>
            <div className="flex items-center mt-2">
              <span className="text-sm text-green-500">+15.3%</span>
              <span className="text-sm text-gray-500 ml-1">vs yesterday</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-600">Revenue Today</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">$3,456</p>
            <div className="flex items-center mt-2">
              <span className="text-sm text-green-500">+12.1%</span>
              <span className="text-sm text-gray-500 ml-1">vs yesterday</span>
            </div>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-xl font-semibold text-gray-900">Service Orders</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <select
                  className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="All">All Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
                <Filter
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={16}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Provider
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Schedule
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <User size={16} className="text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">{order.customer}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.service}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.provider}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      <div className="flex items-center">
                        <Clock size={14} className="text-gray-400 mr-1" />
                        {order.date}
                      </div>
                      <div className="text-xs text-gray-500">{order.time}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        order.status,
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(
                        order.priority,
                      )}`}
                    >
                      {order.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="relative">
                      <button
                        onClick={() => setShowActions(showActions === order.id ? null : order.id)}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <MoreHorizontal size={16} />
                      </button>
                      {showActions === order.id && (
                        <div className="absolute right-0 mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                          <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <Eye size={14} className="mr-2" />
                            View Details
                          </button>
                          <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <Edit size={14} className="mr-2" />
                            Edit Order
                          </button>
                          <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <MapPin size={14} className="mr-2" />
                            View Location
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">{filteredOrders.length}</span> of{" "}
            <span className="font-medium">{orders.length}</span> orders
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
