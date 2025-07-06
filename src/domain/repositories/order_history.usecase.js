// src/domain/repositories/order_history.repo.js
const OrderHistory = require("../../infrastructures/database/model/order_history.model")

const OrderHistoryRepo = {
    archive: async (order) => {
        return await OrderHistory.create({
            userId: order.userId,
            orderId: order._id,
            customer: order.customer,
            product: order.product,
            amount: order.amount,
            status: order.status,
            tracking: order.tracking,
        })
    },

    getUserHistory: async (userId) => {
        return await OrderHistory.find({ userId }).sort({ completedAt: -1 })
    },

    getAllHistory: async () => await OrderHistory.find().sort({ completedAt: -1 }),
}

module.exports = OrderHistoryRepo
