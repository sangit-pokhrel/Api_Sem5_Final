"use client"

import { useState } from "react"
import { Search, Filter, MoreHorizontal, MessageSquare, CheckCircle, AlertTriangle } from "lucide-react"

// Sample complaints data
const complaints = [
  {
    id: 1,
    user: "John Smith",
    service: "Plumbing Repair",
    provider: "Mike's Plumbing",
    issue: "Service not completed as described",
    status: "Open",
    priority: "High",
    date: "2024-01-15",
    description: "The plumber left without fixing the leak completely. Now it's worse than before.",
  },
  {
    id: 2,
    user: "Sarah Johnson",
    service: "House Cleaning",
    provider: "CleanPro Services",
    issue: "Damaged property during service",
    status: "In Progress",
    priority: "Medium",
    date: "2024-01-12",
    description: "The cleaner broke a vase while cleaning. Need compensation for the damage.",
  },
  {
    id: 3,
    user: "David Brown",
    service: "Electrical Work",
    provider: "PowerFix Electric",
    issue: "Overcharged for service",
    status: "Resolved",
    priority: "Low",
    date: "2024-01-10",
    description: "I was charged more than the quoted price without explanation.",
  },
  {
    id: 4,
    user: "Emily Davis",
    service: "Lawn Mowing",
    provider: "Green Thumb Landscaping",
    issue: "Service provider didn't show up",
    status: "Open",
    priority: "High",
    date: "2024-01-08",
    description: "Scheduled service but no one showed up. No call, no explanation.",
  },
  {
    id: 5,
    user: "Michael Wilson",
    service: "Carpet Cleaning",
    provider: "Fresh Carpets Inc",
    issue: "Poor quality service",
    status: "Resolved",
    priority: "Medium",
    date: "2024-01-05",
    description: "Carpets still have stains after cleaning. Not satisfied with the results.",
  },
]

export function Complaints() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [priorityFilter, setPriorityFilter] = useState("All")
  const [showActions, setShowActions] = useState(null)
  const [expandedComplaint, setExpandedComplaint] = useState(null)

  const filteredComplaints = complaints.filter(
    (complaint) =>
      (complaint.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        complaint.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        complaint.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
        complaint.issue.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "All" || complaint.status === statusFilter) &&
      (priorityFilter === "All" || complaint.priority === priorityFilter),
  )

  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-red-100 text-red-800"
      case "In Progress":
        return "bg-yellow-100 text-yellow-800"
      case "Resolved":
        return "bg-green-100 text-green-800"
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
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-xl font-semibold text-gray-900">Customer Complaints</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search complaints..."
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
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
                <Filter
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={16}
                />
              </div>
              <div className="relative">
                <select
                  className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  value={priorityFilter}
                  onChange={(e) => setPriorityFilter(e.target.value)}
                >
                  <option value="All">All Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
                <Filter
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={16}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Service
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Priority
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredComplaints.map((complaint) => (
              <>
                <tr key={complaint.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{complaint.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{complaint.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {complaint.service}
                    <div className="text-xs text-gray-400">{complaint.provider}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    <button
                      className="hover:text-blue-600 focus:outline-none"
                      onClick={() => setExpandedComplaint(expandedComplaint === complaint.id ? null : complaint.id)}
                    >
                      {complaint.issue}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                        complaint.status,
                      )}`}
                    >
                      {complaint.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(
                        complaint.priority,
                      )}`}
                    >
                      {complaint.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{complaint.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="relative">
                      <button
                        onClick={() => setShowActions(showActions === complaint.id ? null : complaint.id)}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <MoreHorizontal size={16} />
                      </button>
                      {showActions === complaint.id && (
                        <div className="absolute right-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                          <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <MessageSquare size={14} className="mr-2" />
                            Respond
                          </button>
                          <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <CheckCircle size={14} className="mr-2" />
                            Mark as Resolved
                          </button>
                          <button className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            <AlertTriangle size={14} className="mr-2" />
                            Escalate
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
                {expandedComplaint === complaint.id && (
                  <tr>
                    <td colSpan="8" className="px-6 py-4 bg-gray-50">
                      <div className="text-sm text-gray-700">
                        <strong>Description:</strong> {complaint.description}
                      </div>
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
        <div className="text-sm text-gray-500">
          Showing <span className="font-medium">{filteredComplaints.length}</span> of{" "}
          <span className="font-medium">{complaints.length}</span> complaints
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
  )
}
