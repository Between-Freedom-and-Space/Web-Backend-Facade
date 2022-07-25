import express from "express";
import ProfileSettingsController from "./profile-settings-controller.js";

const router = express.Router()
const controller = new ProfileSettingsController()


export default router