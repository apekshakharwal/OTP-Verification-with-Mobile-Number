const accountSid = "";
const authToken = "";
const verifySid = "";
const client = require("twilio")(accountSid, authToken);


exports.sendOtp = async (req, res) => {

    try {
        const number = req.body.number

        client.verify.v2
            .services(verifySid)
            .verifications.create({ to: number, channel: "sms" })
            .then(() => {
                res.status(200).json({ success: 1, message: "Otp Sent" })
            })
            .catch(() =>
                res.status(200).json({ success: 0, message: "Pending" }))
    }
    catch (error) {
        res.status(200).send({ success: 0, message: error });
    }
}

exports.otpVerification = async (req, res) => {

    try {
        const OTP = req.body.otp
        const number = req.body.number

        client.verify.v2
            .services(verifySid)
            .verificationChecks.create({ code: OTP, to: number })
            .then((check) => {
                if (check.status === 'approved') {
                    res.status(200).json({ success: 1, message: "OTP verified successfully" })
                }
                else {
                    res.status(200).json({ success: 0, message: "Incorrect OTP" })
                }
            })
    }
    catch (error) {
        res.status(200).send({ success: 0, message: error });
    }
}