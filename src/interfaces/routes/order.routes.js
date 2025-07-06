// src/interfaces/routes/order.routes.js
const express = require("express")
const router = express.Router()

const OrderRepo = require("../../domain/repositories/order.repository")
const OrderUseCases = require("../../domain/use-cases/order.usecases")(OrderRepo)
const OrderController = require("../controller/order.controller")(OrderUseCases)

router.post("/", OrderController.createOrder)
router.get("/", OrderController.getAllOrders)
router.get("/:id", OrderController.getOrderById)
router.put("/:id", OrderController.updateOrder)
router.patch("/:id/status", OrderController.updateStatus)
router.patch("/:id/track", OrderController.advanceTracking)
router.delete("/:id", OrderController.deleteOrder)

module.exports = router
