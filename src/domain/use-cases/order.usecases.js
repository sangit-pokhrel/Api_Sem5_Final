// src/domain/use-cases/order.usecase.js
const OrderEntity = require("../entities/order.entity")

const OrderUseCases = (orderRepo) => ({
    create: async (orderData) => {
        const entity = new OrderEntity(orderData)
        return await orderRepo.createOrder(entity)
    },

    list: async () => await orderRepo.getAllOrders(),

    getById: async (id) => await orderRepo.getOrderById(id),

    update: async (id, data) => await orderRepo.updateOrder(id, data),

    changeStatus: async (id, status) => await orderRepo.updateStatus(id, status),

    nextTrackingStep: async (id) => {
        const order = await orderRepo.getOrderById(id)
        if (!order) throw new Error("Order not found")

        const nextStep = order.tracking.currentStep + 1
        if (nextStep >= order.tracking.steps.length) throw new Error("Tracking completed")

        return await orderRepo.updateTrackingStep(id, nextStep)
    },

    delete: async (id) => await orderRepo.deleteOrder(id),
})

module.exports = OrderUseCases
