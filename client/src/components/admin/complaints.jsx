"use client"

import { useState } from "react"
import { PlusCircle } from "lucide-react"

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
  const [expandedComplaint, setExpandedComplaint] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [editComplaintId, setEditComplaintId] = useState(null)
  const [deleteComplaintId, setDeleteComplaintId] = useState(null)

  const getComplaintData = (id) => complaints.find((c) => c.id === id) || {}
  const editingData = getComplaintData(editComplaintId)

  const filtered = complaints.filter(
    (c) =>
      (c.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.issue.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "All" || c.status === statusFilter) &&
      (priorityFilter === "All" || c.priority === priorityFilter),
  )

  const closeAllModals = () => {
    setShowModal(false)
    setEditComplaintId(null)
    setDeleteComplaintId(null)
  }

  return (
    <div className="p-6 space-y-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-800">Complaints</h2>
        <div className="flex gap-3 flex-wrap">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-2 border rounded-md w-64"
          />
          <select
            className="px-3 py-2 border rounded-md"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
          </select>
          <select
            className="px-3 py-2 border rounded-md"
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option value="All">All Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button
            className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={() => setShowModal(true)}
          >
            <PlusCircle size={16} /> Add Complaint
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((c) => (
          <div
            key={c.id}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{c.user}</h3>
                <p className="text-sm text-gray-500">{c.service}</p>
              </div>
              <div className="text-sm text-gray-500">{c.date}</div>
            </div>
            <div className="text-sm text-gray-700 mb-2">
              <strong>Issue:</strong> {c.issue}
            </div>
            {expandedComplaint === c.id && (
              <p className="text-sm text-gray-600 mb-2">{c.description}</p>
            )}
            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-2">
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(c.status)}`}>{c.status}</span>
                <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(c.priority)}`}>{c.priority}</span>
              </div>
              <div className="flex gap-2 text-sm text-blue-600">
                <button onClick={() => setExpandedComplaint(expandedComplaint === c.id ? null : c.id)}>
                  {expandedComplaint === c.id ? "Hide" : "View"}
                </button>
                <button onClick={() => setEditComplaintId(c.id)}>Edit</button>
                <button onClick={() => setDeleteComplaintId(c.id)} className="text-red-600">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {(showModal || editComplaintId !== null || deleteComplaintId !== null) && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">
                {editComplaintId !== null ? "Edit Complaint" : deleteComplaintId !== null ? "Confirm Deletion" : "Add Complaint"}
              </h3>
              <button onClick={closeAllModals} className="text-gray-500 hover:text-red-500 text-xl">×</button>
            </div>
            {deleteComplaintId !== null ? (
              <div className="space-y-4">
                <p>Are you sure you want to delete this complaint?</p>
                <div className="flex justify-end gap-3">
                  <button
                    onClick={closeAllModals}
                    className="px-4 py-2 rounded border border-gray-300"
                  >
                    Cancel
                  </button>
                  <button className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700">
                    Delete
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" defaultValue={editingData.user} placeholder="User" className="border px-4 py-2 rounded" />
                  <input type="text" defaultValue={editingData.service} placeholder="Service" className="border px-4 py-2 rounded" />
                  <input type="text" defaultValue={editingData.provider} placeholder="Provider" className="border px-4 py-2 rounded" />
                  <input type="text" defaultValue={editingData.issue} placeholder="Issue" className="border px-4 py-2 rounded" />
                </div>
                <textarea defaultValue={editingData.description} placeholder="Description" className="w-full border px-4 py-2 rounded h-24"></textarea>
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={closeAllModals}
                    className="px-4 py-2 rounded border border-gray-300"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                    {editComplaintId !== null ? "Update" : "Submit"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function getStatusColor(status) {
  return {
    Open: "bg-red-100 text-red-800",
    "In Progress": "bg-yellow-100 text-yellow-800",
    Resolved: "bg-green-100 text-green-800",
  }[status] || "bg-gray-100 text-gray-800"
}

function getPriorityColor(priority) {
  return {
    High: "bg-red-100 text-red-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Low: "bg-blue-100 text-blue-800",
  }[priority] || "bg-gray-100 text-gray-800"
}
