import express from "express";
import ProfileSubscribersController from "./profile-subscribers-controller.js";
import {AUTH_TOKEN_HEADER_NAME} from "../../common/headers/headers-names.js";

const router = express.Router()
const controller = new ProfileSubscribersController()

router.get("/subscribers/:nickname/get", async (req, res) => {
    const nickname = req.params["nickname"]
    const token = req.header(AUTH_TOKEN_HEADER_NAME)

    const result = controller.getProfileSubscribers(nickname, token)

    res.status(result.status)
    res.send(result.answer)
})

export default router