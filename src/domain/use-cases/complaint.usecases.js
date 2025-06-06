// 📁 src/domain/use-cases/complaint.usecases.js
module.exports = (repo) => ({
  createComplaint: async (data) => await repo.createComplaint(data),
  getAllComplaints: async () => await repo.getAllComplaints(),
  getComplaintById: async (id) => await repo.getComplaintById(id),
  getComplaintsByUserId: async (userId) =>
    await repo.getComplaintsByUserId(userId),
  updateComplaintById: async (id, data) =>
    await repo.updateComplaintById(id, data),
  deleteComplaintById: async (id) => await repo.deleteComplaintById(id),
});
