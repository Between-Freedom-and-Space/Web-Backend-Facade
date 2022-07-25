import express from "express";
import AuthenticationController from "./authentication-controller";
import {AUTH_TOKEN_HEADER_NAME} from "../../common/headers/headers-names";

const router = express.Router()
const controller = new AuthenticationController()

router.post("/authentication/refresh/access/token", (req, res) => {
    const token = req.header(AUTH_TOKEN_HEADER_NAME)

    const result = controller.refreshAccessToken(token)
})

router.post("/authentication/authenticate", (req, res) => {
    const login = req.body["login"]
    const passwordEncoded = req.body["password_encoded"]

    const result = controller.authenticateUser(login, passwordEncoded)
})

export default router;