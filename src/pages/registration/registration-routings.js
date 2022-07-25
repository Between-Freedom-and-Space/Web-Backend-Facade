import express from "express";
import RegistrationController from "./registration-controller.js";

const router = express.Router()
const controller = new RegistrationController()

router.post("/registration/check/nickname/:alias/exists", (req, res) => {
    const nickname = req.params["alias"]

    const result = controller.checkNicknameExists(nickname)

    res.send(JSON.stringify(result))
})

router.post("/registration/send/email/code", (req, res) => {

})

router.post("/registration/send/phone/code", (req, res) => {

})

router.post ("/registration/validate/email/code", (req, res) => {

})

router.post("/registration/validate/phone/code", (req, res) => {

})

router.patch("/registration/register/user", (req, res) => {

})


export default router;