import express from "express";
import ProfileSubscribersController from "./profile-subscribers-controller.js";

const router = express.Router()
const controller = new ProfileSubscribersController()

export default router