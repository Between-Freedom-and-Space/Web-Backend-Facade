import express from "express";
import HomeController from "./home-controller";

const router = express.Router()
const controller = new HomeController()

router.get("/", (req, res) => {

})

export default router;