import express from "express";
import CommentController from "./comment-controller.js";
import {AUTH_TOKEN_HEADER_NAME} from "../../common/headers/headers-names.js";

const router = express.Router()
const controller = new CommentController()

router.patch("/comment/:commentId/react", async (req, res) => {
    const commentId = req.params["commentId"]
    const token = req.header(AUTH_TOKEN_HEADER_NAME)
    const reactModel = req.body

    const result = await controller.reactComment(commentId, reactModel, token)

    res.status(result.status)
    res.send(result.answer)
})

router.delete("/comment/:commentId/remove/react", async (req, res) => {
    const commentId = req.params["commentId"]
    const token = req.header(AUTH_TOKEN_HEADER_NAME)

    const result = await controller.removeReactComment(commentId, token)

    res.status(result.status)
    res.send(result.answer)
})

router.delete("/comment/:commentId/delete", async (req, res) => {
    const commentId = req.params["commentId"]
    const token = req.header(AUTH_TOKEN_HEADER_NAME)

    const result = await controller.deleteComment(commentId, token)

    res.status(result.status)
    res.send(result.answer)
})

export default router