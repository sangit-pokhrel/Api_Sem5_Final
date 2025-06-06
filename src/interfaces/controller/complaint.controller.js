// 📁 src/interfaces/controllers/complaint.controller.js
const ComplaintController = (useCases) => ({
  create: async (req, res) => {
    try {
      const complaint = await useCases.createComplaint(req.body);
      res.status(201).json({ success: true, complaint });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },
  getAll: async (_req, res) => {
    try {
      const complaints = await useCases.getAllComplaints();
      res.status(200).json({ success: true, complaints });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },
  getOne: async (req, res) => {
    try {
      const complaint = await useCases.getComplaintById(req.params.id);
      res.status(200).json({ success: true, complaint });
    } catch (err) {
      res.status(404).json({ success: false, message: err.message });
    }
  },
  getByUser: async (req, res) => {
    try {
      const complaints = await useCases.getComplaintsByUserId(
        req.params.userId
      );
      res.status(200).json({ success: true, complaints });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },
  update: async (req, res) => {
    try {
      const updated = await useCases.updateComplaintById(
        req.params.id,
        req.body
      );
      res.status(200).json({ success: true, complaint: updated });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },
  remove: async (req, res) => {
    try {
      await useCases.deleteComplaintById(req.params.id);
      res.status(200).json({ success: true, message: "Complaint deleted" });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },
});

module.exports = ComplaintController;
