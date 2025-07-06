// src/domain/repositories/order.repo.js
const Order = require("../../infrastructures/database/model/order.model")

const OrderRepo = {
    createOrder: async (data) => await Order.create(data),

    getAllOrders: async () => await Order.find(),

    getOrderById: async (id) => await Order.findById(id),

    updateOrder: async (id, updates) => await Order.findByIdAndUpdate(id, updates, { new: true }),

    updateStatus: async (id, status) => await Order.findByIdAndUpdate(id, { status }, { new: true }),

    updateTrackingStep: async (id, step) =>
        await Order.findByIdAndUpdate(id, { "tracking.currentStep": step }, { new: true }),

    deleteOrder: async (id) => await Order.findByIdAndDelete(id),
}

module.exports = OrderRepo
