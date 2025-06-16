"use client"

import { useState } from "react"
import { Search, MoreHorizontal, Edit, Trash2, UserPlus, Filter, X, Eye, Star } from "lucide-react"
import { Toaster, toast } from "react-hot-toast"
// Sample user data based on your User model
const users = [
  {
    userId: 1,
    fullname: "John Smith",
    username: "johnsmith",
    email: "john.smith@example.com",
    address: "123 Main St, Anytown",
    ctznNo: "1234567890",
    country: "USA",
    province: "California",
    city: "Los Angeles",
    phonenumber: "+1-555-0123",
    role: "Customer",
    profilepic: "/placeholder.svg?height=40&width=40",
    status: "Active",
    rating: 4.5,
    createdAt: "2023-10-15",
    lastLogin: "2024-01-15 10:30:00",
    lastLoginIp: "192.168.1.1",
    lastLoginLocation: "Los Angeles, CA",
    lastLoginDevice: "Chrome Browser",
    totalServiceRequests: 15,
    totalServiceCompleted: 12,
    totalServiceCancelled: 1,
    totalServicePending: 2,
    totalServiceInProgress: 0,
  },
  {
    userId: 2,
    fullname: "Sarah Johnson",
    username: "sarahj",
    email: "sarah.j@example.com",
    address: "456 Oak Ave, Somewhere",
    ctznNo: "0987654321",
    country: "USA",
    province: "New York",
    city: "New York",
    phonenumber: "+1-555-0456",
    role: "Customer",
    profilepic: "/placeholder.svg?height=40&width=40",
    status: "Active",
    rating: 4.8,
    createdAt: "2023-11-05",
    lastLogin: "2024-01-14 15:45:00",
    lastLoginIp: "192.168.1.2",
    lastLoginLocation: "New York, NY",
    lastLoginDevice: "Mobile App",
    totalServiceRequests: 8,
    totalServiceCompleted: 7,
    totalServiceCancelled: 0,
    totalServicePending: 1,
    totalServiceInProgress: 0,
  },
  {
    userId: 3,
    fullname: "Mike Wilson",
    username: "mikew",
    email: "mike.wilson@example.com",
    address: "789 Pine St, Elsewhere",
    ctznNo: "1122334455",
    country: "USA",
    province: "Texas",
    city: "Houston",
    phonenumber: "+1-555-0789",
    role: "Service Provider",
    profilepic: "/placeholder.svg?height=40&width=40",
    status: "Active",
    rating: 4.9,
    createdAt: "2023-09-22",
    lastLogin: "2024-01-15 09:15:00",
    lastLoginIp: "192.168.1.3",
    lastLoginLocation: "Houston, TX",
    lastLoginDevice: "Desktop",
    totalServiceRequests: 45,
    totalServiceCompleted: 42,
    totalServiceCancelled: 1,
    totalServicePending: 0,
    totalServiceInProgress: 2,
    // Service Provider specific fields
    experienceYears: 8,
    shopName: "Mike's Electrical Services",
    shopLocation: "Houston, TX",
    minimumCharge: 75,
    serviceCompleted: 42,
    csatscore: 4.9,
    isServiceVerified: true,
    serviceType: "Electrical",
    serviceField: "Residential & Commercial",
    comments: "Highly experienced electrician with excellent customer service",
  },
]

export function UserManagement() {
    const [showActions, setShowActions] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRole, setSelectedRole] = useState("All")
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showViewModal, setShowViewModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    address: "",
    ctznNo: "",
    country: "",
    province: "",
    city: "",
    phonenumber: "",
    role: "Customer",
    status: "Active",
    experienceYears: "",
    shopName: "",
    shopLocation: "",
    minimumCharge: "",
    serviceType: "",
    serviceField: "",
    comments: "",
  })

  const filteredUsers = users.filter(
    (user) =>
      (user.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedRole === "All" || user.role === selectedRole),
  )

  const handleAddUser = () => {
    setFormData({
      fullname: "",
      username: "",
      email: "",
      address: "",
      ctznNo: "",
      country: "",
      province: "",
      city: "",
      phonenumber: "",
      role: "Customer",
      status: "Active",
      experienceYears: "",
      shopName: "",
      shopLocation: "",
      minimumCharge: "",
      serviceType: "",
      serviceField: "",
      comments: "",
    })
    setShowAddModal(true)
  }

  const handleEditUser = (user) => {
    setSelectedUser(user)
    setFormData({
      fullname: user.fullname,
      username: user.username,
      email: user.email,
      address: user.address,
      ctznNo: user.ctznNo,
      country: user.country,
      province: user.province,
      city: user.city,
      phonenumber: user.phonenumber,
      role: user.role,
      status: user.status,
      experienceYears: user.experienceYears || "",
      shopName: user.shopName || "",
      shopLocation: user.shopLocation || "",
      minimumCharge: user.minimumCharge || "",
      serviceType: user.serviceType || "",
      serviceField: user.serviceField || "",
      comments: user.comments || "",
    })
    setShowEditModal(true)
  }

  const handleDeleteUser = (user) => {
    setSelectedUser(user)
    setShowDeleteModal(true)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    toast.success(showAddModal ? "User added successfully!" : "User updated successfully!")
    setShowAddModal(false)
    setShowEditModal(false)
  }

  const handleDeleteConfirm = () => {
    toast.success(`User ${selectedUser.fullname} deleted successfully!`)
    setShowDeleteModal(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const closeAllModals = () => {
    setShowAddModal(false)
    setShowEditModal(false)
    setShowDeleteModal(false)
    setShowViewModal(false)
    setSelectedUser(null)
  }

  return (
    <>

      <Toaster position="top-right" />
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-xl font-semibold text-gray-900">User Management</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search users..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-3">
                <div className="relative">
                  <select
                    className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                  >
                    <option value="All">All Roles</option>
                    <option value="Customer">Customer</option>
                    <option value="Service Provider">Service Provider</option>
                  </select>
                  <Filter
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={16}
                  />
                </div>
                <button
                  onClick={handleAddUser}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <UserPlus size={18} />
                  <span>Add User</span>
                </button>
              </div>
            </div>
          </div>
        </div>
       <div className="overflow-x-auto rounded-xl shadow-md mt-6">
            <table className="min-w-full text-sm border-collapse">
              <thead className="bg-white/70 backdrop-blur-md border-b">
                <tr className="text-left text-gray-700">
                  <th className="p-4 font-medium">Full Name</th>
                  <th className="p-4 font-medium">Username</th>
                  <th className="p-4 font-medium">Email</th>
                  <th className="p-4 font-medium">Phone</th>
                  <th className="p-4 font-medium">Role</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Rating</th>
                  <th className="p-4 font-medium">City</th>
                  <th className="p-4 font-medium">Country</th>
                  <th className="p-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr key={index} className="even:bg-white odd:bg-gray-50 hover:bg-gray-100">
                    <td className="p-4 font-medium text-gray-900">{user.fullname}</td>
                    <td className="p-4">{user.username}</td>
                    <td className="p-4">{user.email}</td>
                    <td className="p-4">{user.phonenumber}</td>
                    <td className="p-4">{user.role}</td>
                    <td className="p-4">{user.status}</td>
                    <td className="p-4">{user.rating}</td>
                    <td className="p-4">{user.city}</td>
                    <td className="p-4">{user.country}</td>
                    <td className="p-4 text-right">
                      <button onClick={() => handleEditUser(user)} className="text-blue-600 hover:underline mr-2">Edit</button>
                      <button onClick={() => handleDeleteUser(user)} className="text-red-600 hover:underline">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">{filteredUsers.length}</span> of{" "}
            <span className="font-medium">{users.length}</span> users
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

      {/* Add/Edit User Modal */}
      {/* {(showAddModal || showEditModal) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">{showAddModal ? "Add New User" : "Edit User"}</h3>
              <button onClick={closeAllModals} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleFormSubmit} className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <h4 className="text-md font-medium text-gray-900 mb-4">Basic Information</h4>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Username *</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    name="phonenumber"
                    value={formData.phonenumber}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Citizen Number</label>
                  <input
                    type="text"
                    name="ctznNo"
                    value={formData.ctznNo}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role *</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="Customer">Customer</option>
                    <option value="Service Provider">Service Provider</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status *</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Province/State</label>
                  <input
                    type="text"
                    name="province"
                    value={formData.province}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {formData.role === "Service Provider" && (
                  <>
                    <div className="md:col-span-2">
                      <h4 className="text-md font-medium text-gray-900 mb-4 mt-6">Service Provider Information</h4>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Shop Name</label>
                      <input
                        type="text"
                        name="shopName"
                        value={formData.shopName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Shop Location</label>
                      <input
                        type="text"
                        name="shopLocation"
                        value={formData.shopLocation}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Experience Years</label>
                      <input
                        type="number"
                        name="experienceYears"
                        value={formData.experienceYears}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Charge ($)</label>
                      <input
                        type="number"
                        name="minimumCharge"
                        value={formData.minimumCharge}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Service Type</option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Electrical">Electrical</option>
                        <option value="Cleaning">Cleaning</option>
                        <option value="Landscaping">Landscaping</option>
                        <option value="HVAC">HVAC</option>
                        <option value="Painting">Painting</option>
                        <option value="Handyman">Handyman</option>
                        <option value="Appliance Repair">Appliance Repair</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service Field</label>
                      <input
                        type="text"
                        name="serviceField"
                        value={formData.serviceField}
                        onChange={handleInputChange}
                        placeholder="e.g., Residential & Commercial"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Comments</label>
                      <textarea
                        name="comments"
                        value={formData.comments}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="flex justify-end space-x-3 mt-6 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={closeAllModals}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  {showAddModal ? "Add User" : "Update User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )} */}

      {/* View User Modal */}
      {showViewModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">User Details</h3>
              <button onClick={closeAllModals} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Profile Section */}
                <div className="md:col-span-2 flex items-center mb-6">
                  <img
                    className="h-20 w-20 rounded-full"
                    src={selectedUser.profilepic || "/placeholder.svg"}
                    alt={selectedUser.fullname}
                  />
                  <div className="ml-6">
                    <h4 className="text-xl font-semibold text-gray-900">{selectedUser.fullname}</h4>
                    <p className="text-gray-600">@{selectedUser.username}</p>
                    <div className="flex items-center mt-2">
                      <Star className="text-yellow-400 mr-1" size={16} fill="currentColor" />
                      <span className="text-sm text-gray-900">{selectedUser.rating} Rating</span>
                      <span
                        className={`ml-4 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          selectedUser.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {selectedUser.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Basic Information */}
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Contact Information</h5>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Email:</span> {selectedUser.email}
                    </p>
                    <p>
                      <span className="font-medium">Phone:</span> {selectedUser.phonenumber}
                    </p>
                    <p>
                      <span className="font-medium">Address:</span> {selectedUser.address}
                    </p>
                    <p>
                      <span className="font-medium">Citizen No:</span> {selectedUser.ctznNo}
                    </p>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Location</h5>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Country:</span> {selectedUser.country}
                    </p>
                    <p>
                      <span className="font-medium">Province:</span> {selectedUser.province}
                    </p>
                    <p>
                      <span className="font-medium">City:</span> {selectedUser.city}
                    </p>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Account Information</h5>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Role:</span> {selectedUser.role}
                    </p>
                    <p>
                      <span className="font-medium">Created:</span> {selectedUser.createdAt}
                    </p>
                    <p>
                      <span className="font-medium">Last Login:</span> {selectedUser.lastLogin}
                    </p>
                    <p>
                      <span className="font-medium">Login Location:</span> {selectedUser.lastLoginLocation}
                    </p>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Service Statistics</h5>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">Total Requests:</span> {selectedUser.totalServiceRequests}
                    </p>
                    <p>
                      <span className="font-medium">Completed:</span> {selectedUser.totalServiceCompleted}
                    </p>
                    <p>
                      <span className="font-medium">Pending:</span> {selectedUser.totalServicePending}
                    </p>
                    <p>
                      <span className="font-medium">In Progress:</span> {selectedUser.totalServiceInProgress}
                    </p>
                  </div>
                </div>

                {/* Service Provider Information */}
                {selectedUser.role === "Service Provider" && (
                  <>
                    <div className="md:col-span-2">
                      <h5 className="font-medium text-gray-900 mb-3 mt-6">Service Provider Details</h5>
                    </div>
                    <div>
                      <div className="space-y-2 text-sm">
                        <p>
                          <span className="font-medium">Shop Name:</span> {selectedUser.shopName}
                        </p>
                        <p>
                          <span className="font-medium">Shop Location:</span> {selectedUser.shopLocation}
                        </p>
                        <p>
                          <span className="font-medium">Experience:</span> {selectedUser.experienceYears} years
                        </p>
                        <p>
                          <span className="font-medium">Minimum Charge:</span> ${selectedUser.minimumCharge}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="space-y-2 text-sm">
                        <p>
                          <span className="font-medium">Service Type:</span> {selectedUser.serviceType}
                        </p>
                        <p>
                          <span className="font-medium">Service Field:</span> {selectedUser.serviceField}
                        </p>
                        <p>
                          <span className="font-medium">CSAT Score:</span> {selectedUser.csatscore}
                        </p>
                        <p>
                          <span className="font-medium">Verified:</span> {selectedUser.isServiceVerified ? "Yes" : "No"}
                        </p>
                      </div>
                    </div>
                    {selectedUser.comments && (
                      <div className="md:col-span-2">
                        <p className="text-sm">
                          <span className="font-medium">Comments:</span> {selectedUser.comments}
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal
      {showDeleteModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <Trash2 className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Delete User</h3>
                  <p className="text-gray-600">This action cannot be undone</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Are you sure you want to delete <strong>{selectedUser.fullname}</strong>? This will permanently remove
                the user and all associated data.
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={closeAllModals}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteConfirm}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Delete User
                </button>
              </div>
            </div>
          </div>
        </div>
      )} */}


   {(showAddModal || showEditModal) && (
  <div className="absolute top-10 left-1/2 z-50 -translate-x-1/2 w-full max-w-6xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl p-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">{showAddModal ? "Add New User" : "Edit User"}</h2>
      <button onClick={closeAllModals}>
        <X size={22} className="text-gray-600" />
      </button>
    </div>
    <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
      {/* Required fields */}
      <input name="fullname" value={formData.fullname} onChange={handleInputChange} placeholder="Full Name *" required className="p-2 border rounded-md" />
      <input name="username" value={formData.username} onChange={handleInputChange} placeholder="Username *" required className="p-2 border rounded-md" />
      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email *" required className="p-2 border rounded-md" />
      <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password *" required className="p-2 border rounded-md" />
      <input type="tel" name="phonenumber" value={formData.phonenumber} onChange={handleInputChange} placeholder="Phone Number *" required className="p-2 border rounded-md" />

      {/* Optional fields */}
      <input name="ctznNo" value={formData.ctznNo} onChange={handleInputChange} placeholder="Citizen Number" className="p-2 border rounded-md" />
      <input name="country" value={formData.country} onChange={handleInputChange} placeholder="Country" className="p-2 border rounded-md" />
      <input name="province" value={formData.province} onChange={handleInputChange} placeholder="Province" className="p-2 border rounded-md" />
      <input name="city" value={formData.city} onChange={handleInputChange} placeholder="City" className="p-2 border rounded-md" />
      <input name="address" value={formData.address} onChange={handleInputChange} placeholder="Address" className="p-2 border rounded-md" />
      <input name="profilepic" value={formData.profilepic} onChange={handleInputChange} placeholder="Profile Pic URL" className="p-2 border rounded-md" />
      <input name="rating" value={formData.rating} onChange={handleInputChange} placeholder="Rating" type="number" min="0" max="5" step="0.1" className="p-2 border rounded-md" />

      {/* Dropdowns */}
      <select name="role" value={formData.role} onChange={handleInputChange} className="p-2 border rounded-md" required>
        <option value="Customer">Customer</option>
        <option value="Service Provider">Service Provider</option>
      </select>
      <select name="status" value={formData.status} onChange={handleInputChange} className="p-2 border rounded-md" required>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      {/* Additional metadata */}
      <input type="text" name="lastLoginIp" onChange={handleInputChange} placeholder="Last Login IP" className="p-2 border rounded-md" />
      <input type="text" name="lastLoginLocation" onChange={handleInputChange} placeholder="Login Location" className="p-2 border rounded-md" />
      <input type="text" name="lastLoginDevice" onChange={handleInputChange} placeholder="Device" className="p-2 border rounded-md" />
      <input type="datetime-local" name="lastLogin" onChange={handleInputChange} className="p-2 border rounded-md" />
      <input type="datetime-local" name="createdAt" onChange={handleInputChange} className="p-2 border rounded-md" />
      <input type="datetime-local" name="updatedAt" onChange={handleInputChange} className="p-2 border rounded-md" />

      {/* Service stats */}
      <input type="number" name="totalServiceRequests" onChange={handleInputChange} placeholder="Total Requests" className="p-2 border rounded-md" />
      <input type="number" name="totalServiceCompleted" onChange={handleInputChange} placeholder="Completed" className="p-2 border rounded-md" />
      <input type="number" name="totalServicePending" onChange={handleInputChange} placeholder="Pending" className="p-2 border rounded-md" />
      <input type="number" name="totalServiceInProgress" onChange={handleInputChange} placeholder="In Progress" className="p-2 border rounded-md" />
      <input type="number" name="totalServiceCancelled" onChange={handleInputChange} placeholder="Cancelled" className="p-2 border rounded-md" />

      {/* Footer buttons */}
      <div className="md:col-span-4 flex justify-end gap-4 mt-4">
        <button type="button" onClick={closeAllModals} className="px-4 py-2 bg-gray-200 rounded-md">Cancel</button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
          {showAddModal ? "Add User" : "Update User"}
        </button>
      </div>
    </form>
  </div>
)}


        {/* Delete Modal */}
        {showDeleteModal && (
          <div className="absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-white/90 backdrop-blur-md border border-red-200 shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>
            <p className="mb-6 text-sm text-gray-700">
              Are you sure you want to delete <strong>{selectedUser?.fullname}</strong>?
            </p>
            <div className="flex justify-end space-x-3">
              <button onClick={closeAllModals} className="px-4 py-2 bg-gray-100 rounded-md">
                Cancel
              </button>
              <button onClick={handleDeleteConfirm} className="px-4 py-2 bg-red-600 text-white rounded-md">
                Delete
              </button>
            </div>
          </div>
        )}
    </>
  )
}
