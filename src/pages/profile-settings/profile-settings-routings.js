import express from "express";
import ProfileSettingsController from "./profile-settings-controller.js";

const router = express.Router()
const controller = new ProfileSettingsController()

router.post("/profile/:nickname/settings/change", async (req, res) => {

})

export default router