// src/domain/entities/order.entity.js
class OrderEntity {
    constructor({ customer, product, amount, status, tracking }) {
        this.customer = customer
        this.product = product
        this.amount = amount
        this.status = status || "Pending"
        this.tracking = tracking || {
            steps: ["Order Placed", "Processing", "Shipped", "Delivered"],
            currentStep: 0,
        }
    }
}

module.exports = OrderEntity
