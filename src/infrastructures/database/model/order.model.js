const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    customer: { type: String, required: true },
    product: { type: String, required: true },
    amount: { type: Number, required: true },
    status: {
        type: String,
        enum: ["Pending", "Processing", "Shipped", "Completed", "Cancelled"],
        default: "Pending",
    },
    date: { type: Date, default: Date.now },
    tracking: {
        steps: {
            type: [String],
            default: ["Order Placed", "Processing", "Shipped", "Delivered"],
        },
        currentStep: { type: Number, default: 0 },
    },
})

module.exports = mongoose.model("Order", OrderSchema)
