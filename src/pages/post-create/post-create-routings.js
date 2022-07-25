import express from "express";
import PostCreateController from "./post-create-controller";

const router = express.Router()
const controller = new PostCreateController()

router.patch("/post/create", (req, res) => {

})

export default router;