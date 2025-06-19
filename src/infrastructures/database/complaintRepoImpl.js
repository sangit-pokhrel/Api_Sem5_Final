// 📁 src/infrastructure/database/complaintRepoImpl.js
const Complaint = require("./model/complaint.model");

module.exports = {
  createComplaint: async (data) => await Complaint.create(data),
  getAllComplaints: async () =>
    await Complaint.find().populate("userId providerId requesterId"),
  getComplaintById: async (id) =>
    await Complaint.findById(id).populate("userId providerId requesterId"),
  getComplaintsByUserId: async (userId) => await Complaint.find({ userId }),
  updateComplaintById: async (id, data) =>
    await Complaint.findByIdAndUpdate(id, data, { new: true }),
  deleteComplaintById: async (id) => await Complaint.findByIdAndDelete(id),
};
