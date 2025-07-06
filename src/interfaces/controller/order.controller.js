// src/interfaces/controller/order.controller.js
const OrderController = (orderUseCases) => ({
    createOrder: async (req, res) => {
        try {
            const order = await orderUseCases.create(req.body)
            res.status(201).json({ success: true, data: order })
        } catch (e) {
            res.status(400).json({ success: false, message: e.message })
        }
    },

    getAllOrders: async (_, res) => {
        const orders = await orderUseCases.list()
        res.json({ success: true, data: orders })
    },

    getOrderById: async (req, res) => {
        const order = await orderUseCases.getById(req.params.id)
        if (!order) return res.status(404).json({ success: false, message: "Not found" })
        res.json({ success: true, data: order })
    },

    updateOrder: async (req, res) => {
        const updated = await orderUseCases.update(req.params.id, req.body)
        res.json({ success: true, data: updated })
    },

    updateStatus: async (req, res) => {
        const updated = await orderUseCases.changeStatus(req.params.id, req.body.status)
        res.json({ success: true, data: updated })
    },

    advanceTracking: async (req, res) => {
        try {
            const updated = await orderUseCases.nextTrackingStep(req.params.id)
            res.json({ success: true, data: updated })
        } catch (e) {
            res.status(400).json({ success: false, message: e.message })
        }
    },

    deleteOrder: async (req, res) => {
        await orderUseCases.delete(req.params.id)
        res.json({ success: true, message: "Deleted" })
    },

    //order history
    getUserOrderHistory: async (req, res) => {
        try {
            const history = await orderHistoryUseCases.getByUser(req.params.userId)
            res.json({ success: true, data: history })
        } catch (err) {
            res.status(500).json({ success: false, message: err.message })
        }
    }

})

module.exports = OrderController
