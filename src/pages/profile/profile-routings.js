import express from "express";
import ProfileController from "./profile-controller.js";

const router = express.Router()
const controller = new ProfileController()

router.get("/profile/:nickname", (req, res) => {

})

router.post("/profile/:nickname/subscribe", (req, res) => {

})

router.post("/profile/:nickname/unsubscribe", (req, res) => {

})

export default router