// 📁 src/domain/use-cases/notification.usecases.js
module.exports = (repo) => ({
  createNotification: async (data) => await repo.createNotification(data),
  getAllNotifications: async () => await repo.getAllNotifications(),
  getNotificationById: async (id) => await repo.getNotificationById(id),
  getNotificationsByUserId: async (userId) =>
    await repo.getNotificationsByUserId(userId),
  updateNotificationById: async (id, data) =>
    await repo.updateNotificationById(id, data),
  deleteNotificationById: async (id) => await repo.deleteNotificationById(id),
});
