// 📁 src/infrastructure/database/notificationRepoImpl.js
const Notification = require("./models/notification.model");

module.exports = {
  createNotification: async (data) => await Notification.create(data),
  getAllNotifications: async () =>
    await Notification.find().populate("userId", "fullname email"),
  getNotificationById: async (id) =>
    await Notification.findById(id).populate("userId"),
  getNotificationsByUserId: async (userId) =>
    await Notification.find({ userId }),
  updateNotificationById: async (id, data) =>
    await Notification.findByIdAndUpdate(id, data, { new: true }),
  deleteNotificationById: async (id) =>
    await Notification.findByIdAndDelete(id),
};
