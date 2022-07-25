import express from "express";
import ProfileSubscriptionsController from "./profile-subscriptions-controller.js";

const router = express.Router()
const controller = new ProfileSubscriptionsController()

export default router