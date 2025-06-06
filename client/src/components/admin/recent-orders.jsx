"use client"

import { MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react"
import { useState } from "react"

const orders = [
  {
    id: "#12345",
    customer: "John Smith",
    product: "Wireless Headphones",
    amount: "$299.99",
    status: "Completed",
    date: "2024-01-15",
  },
  {
    id: "#12346",
    customer: "Sarah Johnson",
    product: "Smartphone Case",
    amount: "$49.99",
    status: "Processing",
    date: "2024-01-15",
  },
  {
    id: "#12347",
    customer: "Mike Wilson",
    product: "Laptop Stand",
    amount: "$89.99",
    status: "Shipped",
    date: "2024-01-14",
  },
  {
    id: "#12348",
    customer: "Emily Davis",
    product: "Bluetooth Speaker",
    amount: "$159.99",
    status: "Pending",
    date: "2024-01-14",
  },
  {
    id: "#12349",
    customer: "David Brown",
    product: "Wireless Mouse",
    amount: "$79.99",
    status: "Completed",
    date: "2024-01-13",
  },
]

export function RecentOrders() {
  const [showActions, setShowActions] = useState(null)

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Processing":
        return "bg-blue-100 text-blue-800"
      case "Shipped":
        return "bg-purple-100 text-purple-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
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
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order, index) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.product}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="relative">
                    <button
                      onClick={() => setShowActions(showActions === index ? null : index)}
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <MoreHorizontal size={16} />
                    </button>
                    {showActions === index && (
                      <div className="absolute right-0 mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                        <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          <Eye size={14} className="mr-2" />
                          View
                        </button>
                        <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          <Edit size={14} className="mr-2" />
                          Edit
                        </button>
                        <button className="w-full flex items-center px-3 py-2 text-sm text-red-600 hover:bg-gray-100">
                          <Trash2 size={14} className="mr-2" />
                          Delete
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
    </div>
  )
}
