import express from "express";
import AuthenticationController from "./authentication-controller.js";
import {AUTH_TOKEN_HEADER_NAME} from "../../common/headers/headers-names.js";

const router = express.Router()
const controller = new AuthenticationController()

router.post("/authentication/refresh/access/token", async (req, res) => {
    const token = req.header(AUTH_TOKEN_HEADER_NAME)

    const result = await controller.refreshAccessToken(token)

    res.status(result.status)
    res.send(result.answer)
})

router.post("/authentication/authenticate", async (req, res) => {
    const login = req.body["login"]
    const passwordEncoded = req.body["password_encoded"]

    const result = await controller.authenticateUser(login, passwordEncoded)

    res.status(result.status)
    res.send(result.answer)
})

router.delete('/authentication/user/delete', async (req, res) => {
    const token = req.header(AUTH_TOKEN_HEADER_NAME)

    const result = await controller.deleteUser(token)

    res.status(result.status)
    res.send(result.answer)
})

export default router;