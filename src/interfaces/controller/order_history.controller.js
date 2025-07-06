
// 📁 src/interfaces/controller/order_history.controller.js
const OrderHistoryController = (useCases) => ({
    create: async (req, res) => {
        try {
            const history = await useCases.archive(req.body)
            res.status(201).json({ success: true, data: history })
        } catch (e) {
            res.status(400).json({ success: false, message: e.message })
        }
    },

    getAll: async (_, res) => {
        const data = await useCases.list()
        res.json({ success: true, data })
    },

    getByUser: async (req, res) => {
        const data = await useCases.getByUser(req.params.userId)
        res.json({ success: true, data })
    },

    getById: async (req, res) => {
        const data = await useCases.getById(req.params.id)
        res.json({ success: true, data })
    },

    update: async (req, res) => {
        const updated = await useCases.update(req.params.id, req.body)
        res.json({ success: true, data: updated })
    },

    delete: async (req, res) => {
        await useCases.delete(req.params.id)
        res.json({ success: true, message: "Deleted from history" })
    },
})

module.exports = OrderHistoryController
