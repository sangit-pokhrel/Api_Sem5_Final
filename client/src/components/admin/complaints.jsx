"use client"

import { useState, useEffect } from "react"
import { PlusCircle } from "lucide-react"
import { toast, Toaster } from 'react-hot-toast'
import axios from "axios"

const API_URL = "http://localhost:3000/api/complaints"
    
export function Complaints() {
  const [complaints, setComplaints] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")
  const [priorityFilter, setPriorityFilter] = useState("All")
  const [expandedComplaintId, setExpandedComplaintId] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [editComplaintId, setEditComplaintId] = useState(null)
  const [deleteComplaintId, setDeleteComplaintId] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/complaints");
        console.log(response.data.complaints)
        if (response.status === 200) {
          // Ensure complaints is an array before setting state
          const complaintsData = Array.isArray(response.data.complaints) ? response.data.complaints : [];
          setComplaints(complaintsData);
        } else {
          toast.error("Failed to fetch complaints");
        }
      } catch (error) {
        console.error("Error fetching complaints:", error);
        toast.error("Error fetching complaints");
      }
    };
    fetchData();
  }, [])

  const fetchComplaints = async () => {
    try {
      const response = await axios.get(API_URL);
      if (response.status === 200) {
        const complaintsData = Array.isArray(response.data) ? response.data : [];
        setComplaints(complaintsData);
      } else {
        toast.error("Failed to fetch complaints");
      }
    } catch (error) {
      console.error("Error fetching complaints:", error);
      toast.error("Error fetching complaints");
    }
  };

  const getComplaintData = (id) => {
    return complaints.find((complaint) => complaint._id === id) || {};
  };
  
  const editingData = editComplaintId ? getComplaintData(editComplaintId) : {};

  const filtered = Array.isArray(complaints) ? complaints.filter(
    (c) =>
      ((c.userId?._id?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (c.description || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (c.providerId?._id?.toLowerCase() || '').includes(searchTerm.toLowerCase())) &&
      (statusFilter === "All" || c.status === statusFilter) &&
      (priorityFilter === "All" || c.priority === priorityFilter)
  ) : [];

  const handleAddComplaint = async (e) => {
    e.preventDefault();
    const userId = sessionStorage.getItem("userId");
    const requesterId = sessionStorage.getItem("userId");

    const newComplaint = {
      requesterId: requesterId,
      userId: userId,
      description: e.target.description.value,
      status: e.target.status.value,
      priority: e.target.priority.value
    };

    try {
      const response = await axios.post(API_URL, newComplaint);
      if (response.status === 201) {
        toast.success("Complaint added successfully");
        closeAllModals();
        fetchComplaints();
      } else {
        toast.error("Failed to add complaint");
      }
    } catch (error) {
      console.error("Error adding complaint:", error);
      toast.error("Server error while adding");
    }
  };

  const handleEditComplaint = async (e) => {
    e.preventDefault();
    const updatedComplaint = {
      description: e.target.description.value,
      status: e.target.status.value,
      priority: e.target.priority.value
    };

    try {
      const response = await axios.put(`${API_URL}/${editComplaintId}`, updatedComplaint);
      if (response.status === 200) {
        toast.success("Complaint updated");
        closeAllModals();
        fetchComplaints();
      } else {
        toast.error("Failed to update complaint");
      }
    } catch (error) {
      console.error("Error updating complaint:", error);
      toast.error("Server error during update");
    }
  };

  const handleDeleteComplaint = async () => {
    try {
      const response = await axios.delete(`${API_URL}/${deleteComplaintId}`);
      if (response.status === 200) {
        toast.success("Complaint deleted");
        closeAllModals();
        fetchComplaints();
      } else {
        toast.error("Failed to delete complaint");
      }
    } catch (error) {
      console.error("Error deleting complaint:", error);
      toast.error("Error deleting complaint");
    }
  };

  const closeAllModals = () => {
    setShowModal(false);
    setEditComplaintId(null);
    setDeleteComplaintId(null);
  };

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
   <>
      <Toaster position="top-right" />
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
              key={c._id}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Issue complaint by {truncateText(c.user, 20)}</h3>
                  <p className="text-sm text-gray-500">{truncateText(c.service, 30)}</p>
                </div>
                <div className="text-sm text-gray-500">{c.date}</div>
              </div>
              <div className="text-sm text-gray-700 mb-2">
                <p>{expandedComplaintId === c._id ? c.description : truncateText(c.description, 150)}</p>
                {expandedComplaintId === c._id && (
                  <div className="mt-2">
                    <p><strong>Service Provider:</strong> {c.provider}</p>
                    <p><strong>User ID:</strong> {c.userId?._id}</p>
                    <p><strong>Provider ID:</strong> {c.providerId?._id}</p>
                  </div>
                )}
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-2">
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(c.status)}`}>{c.status}</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(c.priority)}`}>{c.priority}</span>
                </div>
                <div className="flex gap-2 text-sm text-blue-600">
                  <button onClick={() => setExpandedComplaintId(expandedComplaintId === c._id ? null : c._id)}>
                    {expandedComplaintId === c._id ? "Show Less" : "Read More"}
                  </button>
                  <button onClick={() => setEditComplaintId(c._id)}>Edit</button>
                  <button onClick={() => setDeleteComplaintId(c._id)} className="text-red-600">Delete</button>
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
                  <p className="text-gray-700">
                    Do you want to delete the complaint of <strong>{getComplaintData(deleteComplaintId).user}</strong>?
                  </p>
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={closeAllModals}
                      className="px-4 py-2 rounded border border-gray-300"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleDeleteComplaint}
                      className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={editComplaintId !== null ? handleEditComplaint : handleAddComplaint} className="space-y-4">

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      name="user"
                      type="text"
                      defaultValue={editingData.user || ""}
                      placeholder="User"
                      className="border px-4 py-2 rounded"
                    />
                    <input
                      name="service"
                      type="text"
                      defaultValue={editingData.service || ""}
                      placeholder="Service"
                      className="border px-4 py-2 rounded"
                    />
                    <input
                      name="provider"
                      type="text"
                      defaultValue={editingData.provider || ""}
                      placeholder="Provider"
                      className="border px-4 py-2 rounded"
                    />
                    <select
                      name="status"
                      defaultValue={editingData.status || "Open"}
                      className="border px-4 py-2 rounded"
                    >
                      <option value="Open">Open</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                    <select
                      name="priority"
                      defaultValue={editingData.priority || "Medium"}
                      className="border px-4 py-2 rounded"
                    >
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                  <textarea
                    name="description"
                    defaultValue={editingData.description || ""}
                    placeholder="Description"
                    className="w-full border px-4 py-2 rounded h-24"
                  ></textarea>
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
    </>

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
