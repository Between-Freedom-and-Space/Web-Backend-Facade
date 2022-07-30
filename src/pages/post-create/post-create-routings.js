import express from "express";
import PostCreateController from "./post-create-controller.js";
import {AUTH_TOKEN_HEADER_NAME} from "../../common/headers/headers-names.js";

const router = express.Router()
const controller = new PostCreateController()

router.patch("/post/create", async (req, res) => {
    const postModel = req.body
    const token = req.header(AUTH_TOKEN_HEADER_NAME)

    const result = await controller.createPost(postModel, token)

    res.status(result.status)
    res.send(result.answer)
})

export default router;