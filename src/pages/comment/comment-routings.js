import express from "express";
import CommentController from "./comment-controller";

const router = express.Router()
const controller = new CommentController()

router.patch("/comment/:commentId/react", (req, res) => {
    const commentId = req.params["commentId"]
})

router.delete("/comment/:commentId/remove/react", (req, res) => {
    const commentId = req.params["commentId"]

})

export default router