const express = require("express");
const router = express.Router();
const controller = require("../controllers/forgetPassword.controller");

router.post("/forgot/phone", controller.verifyPhone);
router.post("/forgot/email", controller.verifyEmail);
router.post("/forgot/verify-otp", controller.validateOtp);
router.post("/forgot/reset-password", controller.resetPassword);

module.exports = router;
