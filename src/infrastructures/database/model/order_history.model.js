// src/infrastructures/database/model/order_history.model.js
const mongoose = require("mongoose")

const OrderHistorySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
    customer: String,
    product: String,
    amount: Number,
    status: String,
    tracking: {
        steps: [String],
        currentStep: Number,
    },
    completedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model("OrderHistory", OrderHistorySchema)
