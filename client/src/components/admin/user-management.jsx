"use client"

import { useState, useEffect  } from "react"
import axios from "axios"
import { Search, MoreHorizontal, Edit, Trash2, UserPlus, Filter, X, Eye, Star } from "lucide-react"
import { Toaster, toast } from "react-hot-toast"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// Sample user data based on your User model
// const users = [
//   {
//     userId: 1,
//     fullname: "John Smith", 
//     username: "johnsmith",
//     email: "john.smith@example.com",
//     address: "123 Main St, Anytown",
//     ctznNo: "1234567890",
//     country: "USA",
//     province: "California",
//     city: "Los Angeles",
//     phonenumber: "+1-555-0123",
//     role: "Customer",
//     profilepic: "/placeholder.svg?height=40&width=40",
//     status: "Active",
//     rating: 4.5,
//     createdAt: "2023-10-15",
//     lastLogin: "2024-01-15 10:30:00",
//     lastLoginIp: "192.168.1.1", 
//     lastLoginLocation: "Los Angeles, CA",
//     lastLoginDevice: "Chrome Browser",
//     totalServiceRequests: 15,
//     totalServiceCompleted: 12,
//     totalServiceCancelled: 1,
//     totalServicePending: 2,
//     totalServiceInProgress: 0,
//   },
//   {
//     userId: 2,
//     fullname: "Sarah Johnson",
//     username: "sarahj",
//     email: "sarah.j@example.com", 
//     address: "456 Oak Ave, Somewhere",
//     ctznNo: "0987654321",
//     country: "USA",
//     province: "New York",
//     city: "New York",
//     phonenumber: "+1-555-0456",
//     role: "Customer",
//     profilepic: "/placeholder.svg?height=40&width=40",
//     status: "Active",
//     rating: 4.8,
//     createdAt: "2023-11-05",
//     lastLogin: "2024-01-14 15:45:00",
//     lastLoginIp: "192.168.1.2",
//     lastLoginLocation: "New York, NY", 
//     lastLoginDevice: "Mobile App",
//     totalServiceRequests: 8,
//     totalServiceCompleted: 7,
//     totalServiceCancelled: 0,
//     totalServicePending: 1,
//     totalServiceInProgress: 0,
//   },
//   {
//     userId: 3,
//     fullname: "Mike Wilson",
//     username: "mikew",
//     email: "mike.wilson@example.com",
//     address: "789 Pine St, Elsewhere",
//     ctznNo: "1122334455",
//     country: "USA", 
//     province: "Texas",
//     city: "Houston",
//     phonenumber: "+1-555-0789",
//     role: "Service Provider",
//     profilepic: "/placeholder.svg?height=40&width=40",
//     status: "Active",
//     rating: 4.9,
//     createdAt: "2023-09-22",
//     lastLogin: "2024-01-15 09:15:00",
//     lastLoginIp: "192.168.1.3",
//     lastLoginLocation: "Houston, TX",
//     lastLoginDevice: "Desktop",
//     totalServiceRequests: 45,
//     totalServiceCompleted: 42,
//     totalServiceCancelled: 1,
//     totalServicePending: 0,
//     totalServiceInProgress: 2,
//     // Service Provider specific fields
//     experienceYears: 8,
//     shopName: "Mike's Electrical Services",
//     shopLocation: "Houston, TX",
//     minimumCharge: 75,
//     serviceCompleted: 42,
//     csatscore: 4.9,
//     isServiceVerified: true,
//     serviceType: "Electrical",
//     serviceField: "Residential & Commercial",
//     comments: "Highly experienced electrician with excellent customer service",
//   },
// ]

import { useLoadScript, Autocomplete } from "@react-google-maps/api";
const libraries = ["places"];



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
    then: yup.number().required("Experience years required")
  }),
  shopName: yup.string().when("role", {
    is: "Service Provider", 
    then: yup.string().required("Shop name required")
  }),
  shopLocation: yup.string().when("role", {
    is: "Service Provider",
    then: yup.string().required("Shop location required")
  }),
  minimumCharge: yup.number().when("role", {
    is: "Service Provider",
    then: yup.number().required("Minimum charge required")
  }),
  serviceType: yup.string().when("role", {
    is: "Service Provider",
    then: yup.string().required("Service type required")
  }),
  serviceField: yup.string().when("role", {
    is: "Service Provider",
    then: yup.string().required("Service field required")
  })
});

const inputClass = "p-2 border rounded-md w-full";
const errorClass = "text-sm text-red-500";




export function UserManagement({ onSubmit }) {
  const [showActions, setShowActions] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRole, setSelectedRole] = useState("All")
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showViewModal, setShowViewModal] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/auth");
        console.log(res.data.data);   
        setUsers(res.data.data); // adjust based on your API response structure
      } catch (err) {
        toast.error("Failed to fetch users");
      }
    };
  
    fetchUsers();
  }, []);

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



  const filteredUsers = users.filter((user) =>
    (user.fullname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     user.username?.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedRole === "All" || user.role === selectedRole)
  );
  

  const handleAddUser = () => {

    // 🧠 Sync fields with react-hook-form values
    setValue("fullname", "");
    setValue("username", "");
    setValue("email", "");
    setValue("password", ""); // leave password blank intentionally
    setValue("phonenumber", "");
    setValue("ctznNo", "");
    setValue("country", "");
    setValue("province", "");
    setValue("city", "");
    setValue("address", "");
    setValue("role", "");
    setValue("status", "");

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
    setSelectedUser(user);
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
    });



    // 🧠 Sync fields with react-hook-form values
    setValue("fullname", user.fullname);
    setValue("username", user.username);
    setValue("email", user.email);
    setValue("password", ""); // leave password blank intentionally
    setValue("phonenumber", user.phonenumber);
    setValue("ctznNo", user.ctznNo || "");
    setValue("country", user.country || "");
    setValue("province", user.province || "");
    setValue("city", user.city || "");
    setValue("address", user.address || "");
    setValue("role", user.role || "");
    setValue("status", user.status || "");

    // Only if Service Provider
    if (user.role === "Service Provider") {
      setValue("experienceYears", user.experienceYears || "");
      setValue("shopName", user.shopName || "");
      setValue("shopLocation", user.shopLocation || "");
      setValue("minimumCharge", user.minimumCharge || "");
      setValue("serviceType", user.serviceType || "");
      setValue("serviceField", user.serviceField || "");
    }

    setShowEditModal(true);
  };

  const handleDeleteUser = async (user) => {
    setSelectedUser(user)
    setShowDeleteModal(true)

    try {
      await axios.delete(`http://localhost:3000/api/users/${selectedUser.userId}`);
      toast.success(`User ${selectedUser.fullname} deleted successfully!`);
  
      // Refresh users
      const res = await axios.get("http://localhost:3000/api/auth");
      setData(res.data.data);
  
      closeAllModals();
    } catch (err) {
      toast.error("Failed to delete user.");
    }
  }

  const handleViewUser = (user) => {
    setSelectedUser(user)
    setShowViewModal(true)
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

  const handleUserSubmit = async (data) => {
    try {
      if (showAddModal) {
        await axios.post("http://localhost:3000/api/auth", data);
        toast.success("User added successfully!");
      } else if (showEditModal && selectedUser) {
        await axios.put(`http://localhost:3000/api/auth/${selectedUser.userId}`, data);
        toast.success("User updated successfully!");
      }
  
      // Refresh users
      const res = await axios.get("http://localhost:3000/api/auth");
      setData(res.data.data);
  
      closeAllModals();
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Failed to submit user.");
    }
  };



  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDUO3oOP7ICjWw3Kv8jfh-n0JgynO-iPeM',
    libraries,
  });

  const [autocomplete, setAutocomplete] = useState(null);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const role = watch("role");

  const handlePlaceSelect = () => {
    const place = autocomplete.getPlace();
    setValue("address", place.formatted_address);
  };



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
      <tr key={user.userId || index} className="even:bg-white odd:bg-gray-50 hover:bg-gray-100">
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
          <button
            onClick={() => handleViewUser(user)}
            className="text-blue-600 hover:underline mr-2"
          >
            <Eye size={16} className="inline" /> View
          </button>
          <button
            onClick={() => handleEditUser(user)}
            className="text-blue-600 hover:underline mr-2"
          >
            <Edit size={16} className="inline" /> Edit
          </button>
          <button
            onClick={() => handleDeleteUser(user)}
            className="text-red-600 hover:underline"
          >
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

     

      {/* View User Modal */}
      {showViewModal && selectedUser && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-2">
          <div className="bg-white rounded-2xl shadow-2xl w-[80vw] max-h-[95vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <img
                  className="h-20 w-20 rounded-full border-4 border-white shadow-lg object-cover"
                  src={selectedUser.profilepic || "/placeholder.svg"}
                  alt={selectedUser.fullname}
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedUser.fullname}</h3>
                  <div className="flex items-center gap-3">
                    <p className="text-gray-500">@{selectedUser.username}</p>
                    <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                      selectedUser.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>
                      {selectedUser.status}
                    </span>
                  </div>
                </div>
              </div>
              <button onClick={closeAllModals} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>

            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
              {/* User ID Card */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-md font-semibold mb-3 text-gray-900 border-b pb-2">User Identification</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">User ID:</span>
                    <span className="font-medium">{selectedUser.userId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Citizen No:</span>
                    <span className="font-medium">{selectedUser.ctznNo}</span>
                  </div>
                </div>
              </div>

              {/* Contact Info Card */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-md font-semibold mb-3 text-gray-900 border-b pb-2">Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Email:</span>
                    <span className="font-medium">{selectedUser.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Phone:</span>
                    <span className="font-medium">{selectedUser.phonenumber}</span>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-md font-semibold mb-3 text-gray-900 border-b pb-2">Location Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Address:</span>
                    <span className="font-medium">{selectedUser.address}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">City:</span>
                    <span className="font-medium">{selectedUser.city}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Province:</span>
                    <span className="font-medium">{selectedUser.province}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Country:</span>
                    <span className="font-medium">{selectedUser.country}</span>
                  </div>
                </div>
              </div>

              {/* Account Status Card */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-md font-semibold mb-3 text-gray-900 border-b pb-2">Account Status</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Role:</span>
                    <span className="font-medium">{selectedUser.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Status:</span>
                    <span className="font-medium">{selectedUser.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Rating:</span>
                    <span className="font-medium flex items-center">
                      <Star className="text-yellow-400 mr-1" size={14} fill="currentColor" />
                      {selectedUser.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Timestamps Card */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-md font-semibold mb-3 text-gray-900 border-b pb-2">Account Timeline</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Created:</span>
                    <span className="font-medium">{selectedUser.createdAt}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Updated:</span>
                    <span className="font-medium">{selectedUser.updatedAt}</span>
                  </div>
                </div>
              </div>

              {/* Service Stats Card */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-md font-semibold mb-3 text-gray-900 border-b pb-2">Service Statistics</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-white p-2 rounded">
                    <div className="text-gray-500">Total</div>
                    <div className="font-bold">{selectedUser.totalServiceRequests}</div>
                  </div>
                  <div className="bg-white p-2 rounded">
                    <div className="text-gray-500">Completed</div>
                    <div className="font-bold text-green-600">{selectedUser.totalServiceCompleted}</div>
                  </div>
                  <div className="bg-white p-2 rounded">
                    <div className="text-gray-500">Cancelled</div>
                    <div className="font-bold text-red-600">{selectedUser.totalServiceCancelled}</div>
                  </div>
                  <div className="bg-white p-2 rounded">
                    <div className="text-gray-500">Pending</div>
                    <div className="font-bold text-yellow-600">{selectedUser.totalServicePending}</div>
                  </div>
                  <div className="bg-white p-2 rounded col-span-2">
                    <div className="text-gray-500">In Progress</div>
                    <div className="font-bold text-blue-600">{selectedUser.totalServiceInProgress}</div>
                  </div>
                </div>
              </div>

              {/* Last Login Details Card */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-md font-semibold mb-3 text-gray-900 border-b pb-2">Last Login Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Time:</span>
                    <span className="font-medium">{selectedUser.lastLogin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">IP:</span>
                    <span className="font-medium">{selectedUser.lastLoginIp}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Location:</span>
                    <span className="font-medium">{selectedUser.lastLoginLocation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Device:</span>
                    <span className="font-medium">{selectedUser.lastLoginDevice}</span>
                  </div>
                </div>
              </div>

              {/* Service Provider Details Card */}
              {selectedUser.role === "Service Provider" && (
                <div className="bg-gray-50 rounded-lg p-4 col-span-2">
                  <h4 className="text-md font-semibold mb-3 text-gray-900 border-b pb-2">Service Provider Details</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Shop Name:</span>
                        <span className="font-medium">{selectedUser.shopName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Location:</span>
                        <span className="font-medium">{selectedUser.shopLocation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Experience:</span>
                        <span className="font-medium">{selectedUser.experienceYears} years</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Min. Charge:</span>
                        <span className="font-medium">${selectedUser.minimumCharge}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Service Type:</span>
                        <span className="font-medium">{selectedUser.serviceType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Field:</span>
                        <span className="font-medium">{selectedUser.serviceField}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">CSAT Score:</span>
                        <span className="font-medium">{selectedUser.csatscore}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Verified:</span>
                        <span className="font-medium">{selectedUser.isServiceVerified ? "Yes" : "No"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
          <form onSubmit={handleUserSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                  <input placeholder="Experience Years" type="number" {...register("experienceYears")} className={inputClass} />
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
                  <input placeholder="Minimum Charge" type="number" {...register("minimumCharge")} className={inputClass} />
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
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md">Submit</button>
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
