import express from "express";
import RegistrationController from "./registration-controller.js";

const router = express.Router()
const controller = new RegistrationController()

router.post("/registration/check/nickname/:nickname/exists", async (req, res) => {
    const nickname = req.params["nickname"]

    const result = await controller.checkNicknameExists(nickname)

    res.status(result.status)
    res.send(result.answer)
})

router.post("/registration/send/email/code", async (req, res) => {
    const body = JSON.parse(req.body)

    const result = await controller.sendEmailVerificationCode(email)

    res.status(result.status)
    res.send(result.answer)
})

router.post("/registration/send/phone/code", async (req, res) => {
    const body = JSON.parse(req.body)

    const result = await controller.sendPhoneVerificationCode(phoneNumber)

    res.status(result.status)
    res.send(result.answer)
})

router.post ("/registration/validate/email/code", async (req, res) => {
    const body = JSON.parse(req.body)

    const result = await controller.validateEmailVerificationCode(email, code)

    res.status(result.status)
    res.send(result.answer)
})

router.post("/registration/validate/phone/code", async (req, res) => {
    const body = JSON.parse(req.body)

    const result = await controller.validatePhoneVerificationCode(phoneNumber, code)

    res.status(result.status)
    res.send(result.answer)
})

router.patch("/registration/register/user", async (req, res) => {
    const userData = JSON.parse(req.body)

    const result = await controller.registerNewUserProfile(userData)

    res.status(result.status)
    res.send(result.answer)
})


export default router;