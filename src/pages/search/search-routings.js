import express from "express";
import SearchController from "./search-controller.js";

const router = express.Router()
const controller = new SearchController()

export default router