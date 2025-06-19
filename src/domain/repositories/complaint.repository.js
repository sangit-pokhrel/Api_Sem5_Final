// // 📁 src/domain/repositories/complaint.repository.js
// class ComplaintRepository {
//   async createComplaint(data) {}
//   async getAllComplaints() {}
//   async getComplaintById(id) {}
//   async getComplaintsByUserId(userId) {}
//   async updateComplaintById(id, data) {}
//   async deleteComplaintById(id) {}
// }
// module.exports = ComplaintRepository;
// 📁 src/domain/repositories/complaint.repository.js
const Complaint = require("../../infrastructures/database/model/complaint.model");

class ComplaintRepository {
  async createComplaint(data) {
    return await Complaint.create(data);
  }

  async getAllComplaints() {
    return await Complaint.find().populate("userId providerId requesterId");
  }

  async getComplaintById(id) {
    return await Complaint.findById(id).populate(
      "userId providerId requesterId"
    );
  }

  async getComplaintsByUserId(userId) {
    return await Complaint.find({ userId }).populate("requesterId providerId");
  }

  async updateComplaintById(id, data) {
    return await Complaint.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  }

  async deleteComplaintById(id) {
    return await Complaint.findByIdAndDelete(id);
  }
}

module.exports = ComplaintRepository;
