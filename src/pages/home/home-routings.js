import express from "express";
import HomeController from "./home-controller.js";

const router = express.Router()
const controller = new HomeController()

router.get("/", (req, res) => {

})

export default router;