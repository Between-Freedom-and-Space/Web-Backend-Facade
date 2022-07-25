import express from "express";
import PostController from "./post-controller";

const router = express.Router()
const controller = new PostController()

router.get("/post/:postId", (req, res) => {

})

router.post("/post/:postId/react", (req, res) => {

})

router.post("/post/:postId/comment", (req, res) => {

})

export default router