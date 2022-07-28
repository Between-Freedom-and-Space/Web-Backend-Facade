import express from "express";
import ProfileSubscriptionsController from "./profile-subscriptions-controller.js";
import {AUTH_TOKEN_HEADER_NAME} from "../../common/headers/headers-names";

const router = express.Router()
const controller = new ProfileSubscriptionsController()

router.get("/subscriptions/:nickname/get", async (req, res) => {
    const nickname = req.params["nickname"]
    const token = req.header(AUTH_TOKEN_HEADER_NAME)

    const result = await controller.getProfileSubscriptions(nickname, token)

    res.status(result.status)
    res.send(result.answer)
})

export default router