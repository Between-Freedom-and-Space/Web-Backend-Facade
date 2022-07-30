import express from "express";
import AboutServiceController from "./about-service-controller.js";

const router = express.Router()
const controller = new AboutServiceController()

router.get("/about", (req, res) => {
    // TODO(Not Implementer yet)
})

export default router