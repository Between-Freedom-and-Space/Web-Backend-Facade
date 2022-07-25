import express from "express";
import AuthenticationController from "./authentication-controller";

const router = express.Router()
const controller = new AuthenticationController()

router.post("/authentication/refresh/access/token", (req, res) => {

})

router.post("/authentication/authenticate", (req, res) => {

})

export default router;