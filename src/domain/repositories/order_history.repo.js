
// 📁 src/domain/repositories/order_history.repo.js
const OrderHistory = require("../../infrastructures/database/model/order_history.model")

const OrderHistoryRepo = {
    archive: async (order) => await OrderHistory.create(order),

    getAll: async () => await OrderHistory.find().sort({ completedAt: -1 }),

    getByUser: async (userId) => await OrderHistory.find({ userId }).sort({ completedAt: -1 }),

    getById: async (id) => await OrderHistory.findById(id),

    updateById: async (id, data) => await OrderHistory.findByIdAndUpdate(id, data, { new: true }),

    deleteById: async (id) => await OrderHistory.findByIdAndDelete(id),
}

module.exports = OrderHistoryRepo
