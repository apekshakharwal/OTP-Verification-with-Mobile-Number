const express = require('express');
const router = express.Router();
const verificationController = require("../controller/verification.controller");



router.post('/sendOTP', verificationController.sendOtp);

router.post('/verifyOTP', verificationController.otpVerification);

module.exports = router;
