// 📁 src/interfaces/controllers/notification.controller.js
const NotificationController = (useCases) => ({
  create: async (req, res) => {
    try {
      const notification = await useCases.createNotification(req.body);
      res.status(201).json({ success: true, notification });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },
  getAll: async (_req, res) => {
    try {
      const notifications = await useCases.getAllNotifications();
      res.status(200).json({ success: true, notifications });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },
  getOne: async (req, res) => {
    try {
      const notification = await useCases.getNotificationById(req.params.id);
      res.status(200).json({ success: true, notification });
    } catch (err) {
      res.status(404).json({ success: false, message: err.message });
    }
  },
  getByUser: async (req, res) => {
    try {
      const notifications = await useCases.getNotificationsByUserId(
        req.params.userId
      );
      res.status(200).json({ success: true, notifications });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },
  update: async (req, res) => {
    try {
      const updated = await useCases.updateNotificationById(
        req.params.id,
        req.body
      );
      res.status(200).json({ success: true, notification: updated });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },
  remove: async (req, res) => {
    try {
      await useCases.deleteNotificationById(req.params.id);
      res.status(200).json({ success: true, message: "Notification deleted" });
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },
});

module.exports = NotificationController;
