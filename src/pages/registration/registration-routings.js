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
    const sendData = req.body

    const result = await controller.sendEmailVerificationCode(sendData)

    res.status(result.status)
    res.send(result.answer)
})

router.post ("/registration/validate/email/code", async (req, res) => {
    const validateData = req.body

    const result = await controller.validateEmailVerificationCode(validateData)

    res.status(result.status)
    res.send(result.answer)
})

router.patch("/registration/register/user", async (req, res) => {
    const userData = req.body

    const result = await controller.registerNewUserProfile(userData)

    res.status(result.status)
    res.send(result.answer)
})


export default router;