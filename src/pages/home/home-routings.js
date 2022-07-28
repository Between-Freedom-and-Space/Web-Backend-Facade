import express from "express";
import HomeController from "./home-controller.js";
import {AUTH_TOKEN_HEADER_NAME} from "../../common/headers/headers-names.js";

const router = express.Router()
const controller = new HomeController()

router.get("/", async (req, res) => {
    const token = req.header(AUTH_TOKEN_HEADER_NAME)

    const result = await controller.getHomePageInformation(token)

    res.status(result.status)
    res.send(result.answer)
})

export default router;