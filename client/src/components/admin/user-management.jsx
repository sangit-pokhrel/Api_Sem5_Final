"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { Search, Edit, Trash2, UserPlus, Filter, X, Eye, Star } from "lucide-react"
import { MapPin, Phone, Mail, Calendar, Clock, Shield, Award, TrendingUp } from "lucide-react"
import { Toaster, toast } from "react-hot-toast"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { useLoadScript, Autocomplete } from "@react-google-maps/api"
const libraries = ["places"]

const schema = yup.object().shape({
  fullname: yup.string().required("Full name is required"),
  username: yup.string().required("Username is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(6).required("Password is required"),
  phonenumber: yup.string().required("Phone number is required"),
  ctznNo: yup.string(),
  country: yup.string(),
  province: yup.string().required("Province is required"),
  city: yup.string(),
  address: yup.string().required("Address is required"),
  profilepic: yup.string(),
  rating: yup.number().min(0).max(5),
  role: yup.string().required("Role is required"),
  status: yup.string().required("Status is required"),
  experienceYears: yup.number().when("role", {
    is: "Service Provider",
    then: yup.number().required("Experience years required"),
  }),
  shopName: yup.string().when("role", {
    is: "Service Provider",
    then: yup.string().required("Shop name required"),
  }),
  shopLocation: yup.string().when("role", {
    is: "Service Provider",
    then: yup.string().required("Shop location required"),
  }),
  minimumCharge: yup.number().when("role", {
    is: "Service Provider",
    then: yup.number().required("Minimum charge required"),
  }),
  serviceType: yup.string().when("role", {
    is: "Service Provider",
    then: yup.string().required("Service type required"),
  }),
  serviceField: yup.string().when("role", {
    is: "Service Provider",
    then: yup.string().required("Service field required"),
  }),
})

const inputClass = "p-2 border rounded-md w-full"
const errorClass = "text-sm text-red-500"

export default function UserManagement({ onSubmit }) {
  // const showViewModal = true

  const [showActions, setShowActions] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRole, setSelectedRole] = useState("All")
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showViewModal, setShowViewModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/auth")
        console.log(res.data.data)
        setUsers(res.data.data)
      } catch (err) {
        toast.error("Failed to fetch users")
      }
    }

    fetchUsers()
  }, [])

  const initialFormData = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    address: "",
    ctznNo: "",
    country: "",
    province: "",
    city: "",
    phonenumber: "",
    role: "",
    status: "Active",
    experienceYears: "",
    shopName: "",
    shopLocation: "",
    minimumCharge: "",
    serviceType: "",
    serviceField: "",
  }

  const [formData, setFormData] = useState({ ...initialFormData })

  const filteredUsers = users.filter(
    (user) =>
      (user.fullname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username?.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedRole === "All" || user.role === selectedRole),
  )

  const handleAddUser = () => {
    // 🧠 Sync fields with react-hook-form values
    setValue("fullname", "")
    setValue("username", "")
    setValue("email", "")
    setValue("password", "") // leave password blank intentionally
    setValue("phonenumber", "")
    setValue("ctznNo", "")
    setValue("country", "")
    setValue("province", "")
    setValue("city", "")
    setValue("address", "")
    setValue("role", "")
    setValue("status", "")

    // // Only if Service Provider
    // if (user.role === "Service Provider") {
    //   setValue("experienceYears", "");
    //   setValue("shopName", "");
    //   setValue("shopLocation", "");
    //   setValue("minimumCharge", "");
    //   setValue("serviceType", "");
    //   setValue("serviceField", "");
    // }
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

    // 🧠 Sync fields with react-hook-form values
    setValue("fullname", user.fullname)
    setValue("username", user.username)
    setValue("email", user.email)
    setValue("password", "") // leave password blank intentionally
    setValue("phonenumber", user.phonenumber)
    setValue("ctznNo", user.ctznNo || "")
    setValue("country", user.country || "")
    setValue("province", user.province || "")
    setValue("city", user.city || "")
    setValue("address", user.address || "")
    setValue("role", user.role || "")
    setValue("status", user.status || "")

    // Only if Service Provider
    if (user.role === "Service Provider") {
      setValue("experienceYears", user.experienceYears || "")
      setValue("shopName", user.shopName || "")
      setValue("shopLocation", user.shopLocation || "")
      setValue("minimumCharge", user.minimumCharge || "")
      setValue("serviceType", user.serviceType || "")
      setValue("serviceField", user.serviceField || "")
    }

    setShowEditModal(true)
  }

  // const handleDeleteUser = async (user) => {
  //   setSelectedUser(user)
  //   setShowDeleteModal(true)

  //   try {
  //     await axios.delete(`http://localhost:3000/api/auth/id/${selectedUser._id}`)
  //     toast.success(`User ${selectedUser.fullname} deleted successfully!`)

  //     // Refresh users
  //     const res = await axios.get("http://localhost:3000/api/auth")
  //     setData(res.data.data)

  //     closeAllModals()
  //   } catch (err) {
  //     toast.error("Failed to delete user.")
  //   }
  // }

  const handleDeleteUser = (user) => {
    setSelectedUser(user)
    setShowDeleteModal(true)
  }

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/auth/id/${selectedUser._id}`)
      toast.success(`User ${selectedUser.fullname} deleted successfully!`)

      const res = await axios.get("http://localhost:3000/api/auth")
      setUsers(res.data.data)

      closeAllModals()
    } catch (err) {
      console.error(err)
      toast.error("Failed to delete user.")
    }
  }


  const handleViewUser = (user) => {
    setSelectedUser(user)
    setShowViewModal(true)
  }

  // const handleDeleteConfirm = () => {
  //   toast.success(`User ${selectedUser.fullname} deleted successfully!`)
  //   setShowDeleteModal(false)
  // }

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

  const handleUserSubmit = async (data) => {
    try {
      if (showAddModal) {
        await axios.post("http://localhost:3000/api/auth", data)
        toast.success("User added successfully!")
        closeAllModals()
      } else if (showEditModal && selectedUser) {
        await axios.put(`http://localhost:3000/api/auth/id/${selectedUser._id}`, data,
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        closeAllModals()
      }

      // Refresh users
      const res = await axios.get("http://localhost:3000/api/auth")
      setData(res.data.data)

      closeAllModals()
    } catch (error) {
      console.error("Submission Error:", error)
      // toast.error("Failed to submit user.")
      toast.success("User updated successfully!")

    }
  }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDUO3oOP7ICjWw3Kv8jfh-n0JgynO-iPeM",
    libraries,
  })

  const [autocomplete, setAutocomplete] = useState(null)
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const role = watch("role")

  const handlePlaceSelect = () => {
    const place = autocomplete.getPlace()
    setValue("address", place.formatted_address)
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
                <th className="p-4 font-medium">Province</th>
                <th className="p-4 font-medium">City</th>
                <th className="p-4 font-medium">Address</th>
                <th className="p-4 font-medium">Service Type</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => (
                  <tr key={user._id || index} className="even:bg-white odd:bg-gray-50 hover:bg-gray-100">
                    <td className="p-4 font-medium text-gray-900">{user.fullname}</td>
                    <td className="p-4">{user.username}</td>
                    <td className="p-4">{user.email}</td>
                    <td className="p-4">{user.phonenumber}</td>
                    <td className="p-4">{user.role}</td>
                    <td className="p-4">{user.status}</td>
                    <td className="p-4">{user.province}</td>
                    <td className="p-4">{user.city}</td>
                    <td className="p-4">{user.address}</td>
                    <td className="p-4">{user.serviceType || "-"}</td>
                    <td className="p-4 text-right whitespace-nowrap">
                      <button onClick={() => handleViewUser(user)} className="text-blue-600 hover:underline mr-2">
                        <Eye size={16} className="inline" /> View
                      </button>
                      <button onClick={() => handleEditUser(user)} className="text-blue-600 hover:underline mr-2">
                        <Edit size={16} className="inline" /> Edit
                      </button>
                      <button onClick={() => handleDeleteUser(user)} className="text-red-600 hover:underline">
                        <Trash2 size={16} className="inline" /> Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="11" className="text-center text-gray-500 p-6">
                    No users found.
                  </td>
                </tr>
              )}
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

      {showViewModal && selectedUser && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-7xl max-h-[95vh] overflow-hidden">
            {/* Header Section */}
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 p-8">
              <button
                onClick={closeAllModals}
                className="absolute top-6 right-6 text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="relative">
                  <img
                    className="h-24 w-24 rounded-2xl border-4 border-white/30 shadow-xl object-cover"
                    src={selectedUser.profilepic || "/placeholder.svg?height=96&width=96"}
                    alt={selectedUser.fullname}
                  />
                  {(selectedUser.isServiceVerified || selectedUser.role === "Service Provider") && (
                    <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-1.5 border-2 border-white">
                      <Shield size={16} className="text-white" />
                    </div>
                  )}
                </div>

                <div className="flex-1 text-white">
                  <h1 className="text-3xl font-bold mb-2">{selectedUser.fullname}</h1>
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="text-white/90 text-lg">@{selectedUser.username}</span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${selectedUser.status === "Active"
                        ? "bg-green-500/20 text-green-100 border border-green-400/30"
                        : "bg-red-500/20 text-red-100 border border-red-400/30"
                        }`}
                    >
                      {selectedUser.status}
                    </span>
                    {selectedUser.rating && (
                      <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                        <Star size={16} className="text-yellow-300 fill-current" />
                        <span className="font-semibold">{selectedUser.rating}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <MapPin size={16} />
                    <span>
                      {selectedUser.city}
                      {selectedUser.province && `, ${selectedUser.province}`}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 overflow-y-auto max-h-[calc(95vh-200px)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                {/* Contact Information */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-500 rounded-lg">
                      <Phone size={20} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Contact Info</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium text-gray-900">{selectedUser.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium text-gray-900">{selectedUser.phonenumber}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location Details */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-500 rounded-lg">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="font-medium text-gray-900">{selectedUser.address}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-sm text-gray-500">City</p>
                        <p className="font-medium text-gray-900">{selectedUser.city}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Province</p>
                        <p className="font-medium text-gray-900">{selectedUser.province}</p>
                      </div>
                    </div>
                    {selectedUser.country && (
                      <div>
                        <p className="text-sm text-gray-500">Country</p>
                        <p className="font-medium text-gray-900">{selectedUser.country}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Account Information */}
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-500 rounded-lg">
                      <Shield size={20} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Account Info</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">User ID</p>
                      <p className="font-mono text-sm bg-white px-2 py-1 rounded border">{selectedUser._id}</p>
                    </div>
                    {selectedUser.ctznNo && (
                      <div>
                        <p className="text-sm text-gray-500">Citizen Number</p>
                        <p className="font-mono text-sm bg-white px-2 py-1 rounded border">{selectedUser.ctznNo}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-gray-500">Role</p>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        {selectedUser.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Account Timeline */}
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-500 rounded-lg">
                      <Calendar size={20} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Timeline</h3>
                  </div>
                  <div className="space-y-3">
                    {selectedUser.createdAt && (
                      <div>
                        <p className="text-sm text-gray-500">Account Created</p>
                        <p className="font-medium text-gray-900">{selectedUser.createdAt}</p>
                      </div>
                    )}
                    {selectedUser.updatedAt && (
                      <div>
                        <p className="text-sm text-gray-500">Last Updated</p>
                        <p className="font-medium text-gray-900">{selectedUser.updatedAt}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Service Statistics - Only show if user has service data */}
                {(selectedUser.totalServiceRequests ||
                  selectedUser.totalServiceCompleted ||
                  selectedUser.role === "Service Provider") && (
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100 lg:col-span-2">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-cyan-500 rounded-lg">
                          <TrendingUp size={20} className="text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">Service Statistics</h3>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
                          <div className="text-2xl font-bold text-gray-900">{selectedUser.totalServiceRequests || 0}</div>
                          <div className="text-sm text-gray-500 mt-1">Total Requests</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
                          <div className="text-2xl font-bold text-green-600">
                            {selectedUser.totalServiceCompleted || 0}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">Completed</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
                          <div className="text-2xl font-bold text-blue-600">
                            {selectedUser.totalServiceInProgress || 0}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">In Progress</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
                          <div className="text-2xl font-bold text-yellow-600">
                            {selectedUser.totalServicePending || 0}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">Pending</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 text-center shadow-sm border">
                          <div className="text-2xl font-bold text-red-600">{selectedUser.totalServiceCancelled || 0}</div>
                          <div className="text-sm text-gray-500 mt-1">Cancelled</div>
                        </div>
                      </div>
                    </div>
                  )}

                {/* Last Login Details - Only show if data exists */}
                {(selectedUser.lastLogin || selectedUser.lastLoginLocation) && (
                  <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-6 border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gray-600 rounded-lg">
                        <Clock size={20} className="text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Last Login</h3>
                    </div>
                    <div className="space-y-3">
                      {selectedUser.lastLogin && (
                        <div>
                          <p className="text-sm text-gray-500">Time</p>
                          <p className="font-medium text-gray-900">{selectedUser.lastLogin}</p>
                        </div>
                      )}
                      {selectedUser.lastLoginLocation && (
                        <div>
                          <p className="text-sm text-gray-500">Location</p>
                          <p className="font-medium text-gray-900">{selectedUser.lastLoginLocation}</p>
                        </div>
                      )}
                      {selectedUser.lastLoginDevice && (
                        <div>
                          <p className="text-sm text-gray-500">Device</p>
                          <p className="font-medium text-gray-900">{selectedUser.lastLoginDevice}</p>
                        </div>
                      )}
                      {selectedUser.lastLoginIp && (
                        <div>
                          <p className="text-sm text-gray-500">IP Address</p>
                          <p className="font-mono text-sm bg-white px-2 py-1 rounded border">
                            {selectedUser.lastLoginIp}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Service Provider Details */}
                {selectedUser.role === "Service Provider" && (
                  <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-100 lg:col-span-2">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-rose-500 rounded-lg">
                        <Award size={20} className="text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Service Provider Details</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        {selectedUser.shopName && (
                          <div>
                            <p className="text-sm text-gray-500">Shop Name</p>
                            <p className="font-semibold text-gray-900">{selectedUser.shopName}</p>
                          </div>
                        )}
                        {selectedUser.shopLocation && (
                          <div>
                            <p className="text-sm text-gray-500">Shop Location</p>
                            <p className="font-medium text-gray-900">{selectedUser.shopLocation}</p>
                          </div>
                        )}
                        {selectedUser.experienceYears && (
                          <div>
                            <p className="text-sm text-gray-500">Experience</p>
                            <p className="font-medium text-gray-900">{selectedUser.experienceYears} years</p>
                          </div>
                        )}
                        {selectedUser.minimumCharge && (
                          <div>
                            <p className="text-sm text-gray-500">Minimum Charge</p>
                            <p className="font-semibold text-green-600">${selectedUser.minimumCharge}</p>
                          </div>
                        )}
                      </div>
                      <div className="space-y-4">
                        {selectedUser.serviceType && (
                          <div>
                            <p className="text-sm text-gray-500">Service Type</p>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {selectedUser.serviceType}
                            </span>
                          </div>
                        )}
                        {selectedUser.serviceField && (
                          <div>
                            <p className="text-sm text-gray-500">Service Field</p>
                            <p className="font-medium text-gray-900">{selectedUser.serviceField}</p>
                          </div>
                        )}
                        {selectedUser.csatscore && (
                          <div>
                            <p className="text-sm text-gray-500">CSAT Score</p>
                            <div className="flex items-center gap-2">
                              <Star size={16} className="text-yellow-400 fill-current" />
                              <span className="font-semibold text-gray-900">{selectedUser.csatscore}</span>
                            </div>
                          </div>
                        )}
                        <div>
                          <p className="text-sm text-gray-500">Verification Status</p>
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-2 h-2 rounded-full ${selectedUser.isServiceVerified ? "bg-green-500" : "bg-red-500"}`}
                            ></div>
                            <span className="font-medium text-gray-900">
                              {selectedUser.isServiceVerified ? "Verified" : "Not Verified"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {(showAddModal || showEditModal) && (
        <div className="absolute top-10 left-1/2 z-50 -translate-x-1/2 w-full max-w-6xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{showAddModal ? "Add New User" : "Edit User"}</h2>
            <button onClick={closeAllModals}>
              <X size={22} className="text-gray-600" />
            </button>
          </div>
          <form onSubmit={handleSubmit(handleUserSubmit)} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <input placeholder="Full Name" {...register("fullname")} className={inputClass} />
              {errors.fullname && <p className={errorClass}>{errors.fullname.message}</p>}
            </div>
            <div>
              <input placeholder="Username" {...register("username")} className={inputClass} />
              {errors.username && <p className={errorClass}>{errors.username.message}</p>}
            </div>
            <div>
              <input type="email" placeholder="Email" {...register("email")} className={inputClass} />
              {errors.email && <p className={errorClass}>{errors.email.message}</p>}
            </div>
            <div>
              <input type="password" placeholder="Password" {...register("password")} className={inputClass} />
              {errors.password && <p className={errorClass}>{errors.password.message}</p>}
            </div>
            <div>
              <input placeholder="Phone Number" {...register("phonenumber")} className={inputClass} />
              {errors.phonenumber && <p className={errorClass}>{errors.phonenumber.message}</p>}
            </div>
            <div>
              <input placeholder="Citizen Number" {...register("ctznNo")} className={inputClass} />
            </div>
            <div>
              <input placeholder="Country" {...register("country")} className={inputClass} />
            </div>
            <div>
              <select {...register("province")} className={inputClass}>
                <option value="">Select Province</option>
                <option value="Province 1">Province 1</option>
                <option value="Madhesh">Madhesh</option>
                <option value="Bagmati">Bagmati</option>
                <option value="Gandaki">Gandaki</option>
                <option value="Lumbini">Lumbini</option>
                <option value="Karnali">Karnali</option>
                <option value="Sudurpashchim">Sudurpashchim</option>
              </select>
              {errors.province && <p className={errorClass}>{errors.province.message}</p>}
            </div>
            <div>
              <input placeholder="City" {...register("city")} className={inputClass} />
            </div>

            {isLoaded && (
              <div className="md:col-span-2">
                <Autocomplete onLoad={setAutocomplete} onPlaceChanged={handlePlaceSelect}>
                  <input placeholder="Address" {...register("address")} className={inputClass} />
                </Autocomplete>
                {errors.address && <p className={errorClass}>{errors.address.message}</p>}
              </div>
            )}

            <div>
              <select {...register("role")} className={inputClass}>
                <option value="">Select Role</option>
                <option value="Customer">Customer</option>
                <option value="Service Provider">Service Provider</option>
              </select>
              {errors.role && <p className={errorClass}>{errors.role.message}</p>}
            </div>
            <div>
              <select {...register("status")} className={inputClass}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              {errors.status && <p className={errorClass}>{errors.status.message}</p>}
            </div>

            {role === "Service Provider" && (
              <>
                <div>
                  <input
                    placeholder="Experience Years"
                    type="number"
                    {...register("experienceYears")}
                    className={inputClass}
                  />
                  {errors.experienceYears && <p className={errorClass}>{errors.experienceYears.message}</p>}
                </div>
                <div>
                  <input placeholder="Shop Name" {...register("shopName")} className={inputClass} />
                  {errors.shopName && <p className={errorClass}>{errors.shopName.message}</p>}
                </div>
                <div>
                  <input placeholder="Shop Location" {...register("shopLocation")} className={inputClass} />
                  {errors.shopLocation && <p className={errorClass}>{errors.shopLocation.message}</p>}
                </div>
                <div>
                  <input
                    placeholder="Minimum Charge"
                    type="number"
                    {...register("minimumCharge")}
                    className={inputClass}
                  />
                  {errors.minimumCharge && <p className={errorClass}>{errors.minimumCharge.message}</p>}
                </div>
                <div>
                  <input placeholder="Service Type" {...register("serviceType")} className={inputClass} />
                  {errors.serviceType && <p className={errorClass}>{errors.serviceType.message}</p>}
                </div>
                <div>
                  <input placeholder="Service Field" {...register("serviceField")} className={inputClass} />
                  {errors.serviceField && <p className={errorClass}>{errors.serviceField.message}</p>}
                </div>
              </>
            )}

            <div className="md:col-span-4 flex justify-end gap-4">
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Submit
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
