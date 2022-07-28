import express from "express";
import PostController from "./post-controller.js";
import {AUTH_TOKEN_HEADER_NAME} from "../../common/headers/headers-names.js";

const router = express.Router()
const controller = new PostController()

router.get("/post/:postId", async (req, res) => {
    const postId = req.params["postId"]
    const token = req.header(AUTH_TOKEN_HEADER_NAME)

    const result = await controller.getPostFullInformation(postId, token)

    res.status(result.status)
    res.send(result.answer)
})

router.post("/post/:postId/react", async (req, res) => {
    const postId = req.params["postId"]
    const token = req.header(AUTH_TOKEN_HEADER_NAME)
    const reactModel = req.body

    const result = await controller.reactPost(postId, reactModel, token)

    res.status(result.status)
    res.send(result.answer)
})

router.post("/post/:postId/remove/react", async (req, res) => {
    const postId = req.params["postId"]
    const token = req.header(AUTH_TOKEN_HEADER_NAME)
})

router.post("/post/:postId/comment", async (req, res) => {
    const postId = req.params["postId"]
    const token = req.header(AUTH_TOKEN_HEADER_NAME)
    const commentModel = req.body

    const result = await controller.commentPost(postId, commentModel, token)

    res.status(result.status)
    res.send(result.answer)
})

export default router