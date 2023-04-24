import express from "express";
import ProfileController from "./profile-controller.js";
import {AUTH_TOKEN_HEADER_NAME} from "../../common/headers/headers-names.js";

const router = express.Router()
const controller = new ProfileController()

router.get("/profile/:nickname", async (req, res) => {
    const nickname = req.params["nickname"]
    const token = req.header(AUTH_TOKEN_HEADER_NAME)

    const result = await controller.getFullProfileInformationByNickname(nickname, token)

    res.status(result.status)
    res.send(result.answer)
})

router.get("/profile/by-id/:id", async (req, res) => {
    const id = req.params["id"]
    const token = req.header(AUTH_TOKEN_HEADER_NAME)

    const result = await controller.getProfileFullInformationById(id, token)

    res.status(result.status)
    res.send(result.answer)
})

router.post("/profile/:nickname/subscribe", async (req, res) => {
    const nickname = req.params["nickname"]
    const token = req.header(AUTH_TOKEN_HEADER_NAME)

    const result = await controller.subscribeToProfile(nickname, token)

    res.status(result.status)
    res.send(result.answer)
})

router.post("/profile/:nickname/unsubscribe", async (req, res) => {
    const nickname = req.params["nickname"]
    const token = req.header(AUTH_TOKEN_HEADER_NAME)

    const result = await controller.unsubscribeFromProfile(nickname, token)

    res.status(result.status)
    res.send(result.answer)
})

export default router