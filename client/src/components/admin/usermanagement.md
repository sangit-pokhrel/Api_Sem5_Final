 {/* View User Modal */}
      {/* {showViewModal && selectedUser && (
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
                    <span className={`px-2 py-1 rounded-full text-sm font-medium ${selectedUser.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
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
      )} */}
