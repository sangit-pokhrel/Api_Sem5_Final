"use client"

import { useState } from "react"
import { Search, Filter, Download, Eye, MoreHorizontal, CreditCard, Wallet, RefreshCw } from "lucide-react"

// Sample payment data
const payments = [
  {
    id: "PAY-12345",
    customer: "John Smith",
    service: "Plumbing Repair",
    amount: "$299.99",
    status: "Completed",
    date: "2024-01-15",
    method: "Credit Card",
    cardLast4: "4242",
  },
  {
    id: "PAY-12346",
    customer: "Sarah Johnson",
    service: "House Cleaning",
    amount: "$149.99",
    status: "Pending",
    date: "2024-01-15",
    method: "PayPal",
    email: "sarah.j@example.com",
  },
  {
    id: "PAY-12347",
    customer: "Mike Wilson",
    service: "Electrical Work",
    amount: "$450.00",
    status: "Completed",
    date: "2024-01-14",
    method: "Credit Card",
    cardLast4: "1234",
  },
  {
    id: "PAY-12348",
    customer: "Emily Davis",
    service: "Lawn Mowing",
    amount: "$89.99",
    status: "Failed",
    date: "2024-01-14",
    method: "Credit Card",
    cardLast4: "5678",
  },
  {
    id: "PAY-12349",
    customer: "David Brown",
    service: "Carpet Cleaning",
    amount: "$199.99",
    status: "Refunded",
    date: "2024-01-13",
    method: "Bank Transfer",
    accountLast4: "9876",
  },
]

export default function Payments() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [showActions, setShowActions] = useState(null)

  const filteredPayments = payments.filter(
    (payment) =>
      (payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.service.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "All" || payment.status === statusFilter),
  )

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Failed":
        return "bg-red-100 text-red-800"
      case "Refunded":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPaymentMethodIcon = (method) => {
    switch (method) {
      case "Credit Card":
        return <CreditCard size={16} />
      case "PayPal":
        return <Wallet size={16} />
      case "Bank Transfer":
        return <RefreshCw size={16} />
      default:
        return <CreditCard size={16} />
    }
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-600">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">$12,345.67</p>
            <div className="flex items-center mt-2">
              <span className="text-sm text-green-500">+15.2%</span>
              <span className="text-sm text-gray-500 ml-1">vs last month</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-600">Pending Payments</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">$2,456.78</p>
            <div className="flex items-center mt-2">
              <span className="text-sm text-yellow-500">12 transactions</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-600">Refunded Amount</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">$345.67</p>
            <div className="flex items-center mt-2">
              <span className="text-sm text-red-500">-2.5%</span>
              <span className="text-sm text-gray-500 ml-1">vs last month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-xl font-semibold text-gray-900">Payment Transactions</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search payments..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-3">
                <div className="relative">
                  <select
                    className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="All">All Status</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                    <option value="Failed">Failed</option>
                    <option value="Refunded">Refunded</option>
                  </select>
                  <Filter
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={16}
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Download size={16} />
                  <span>Export</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.service}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getPaymentMethodIcon(payment.method)}
                      <span className="ml-2 text-sm text-gray-500">{payment.method}</span>
                      {payment.cardLast4 && (
                        <span className="ml-1 text-xs text-gray-400">•••• {payment.cardLast4}</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        payment.status,
                      )}`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="relative">
                      <button
                        onClick={() => setShowActions(showActions === payment.id ? null : payment.id)}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <MoreHorizontal size={16} />
                      </button>
                      {showActions === payment.id && (
                        <div className="absolute right-0 mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                          <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <Eye size={14} className="mr-2" />
                            View Details
                          </button>
                          {payment.status === "Pending" && (
                            <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              <RefreshCw size={14} className="mr-2" />
                              Process
                            </button>
                          )}
                          {payment.status === "Completed" && (
                            <button className="w-full flex items-center px-3 py-2 text-sm text-red-600 hover:bg-gray-100">
                              <RefreshCw size={14} className="mr-2" />
                              Refund
                            </button>
                          )}
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
            Showing <span className="font-medium">{filteredPayments.length}</span> of{" "}
            <span className="font-medium">{payments.length}</span> payments
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
