import express from 'express'
import dotenv from 'dotenv'
import {default as postRouter} from "../pages/post/post-routings.js";
import {default as registrationRouter} from "../pages/registration/registration-routings.js";
import {default as authenticationRouter} from "../pages/authentication/authentication-routings.js";
import {default as homeRouter} from "../pages/home/home-routings";
import {default as commentRouter} from "../pages/comment/comment-routings";
import {default as postCreateRouter} from "../pages/post-create/post-create-routings";
import {default as aboutServiceRouter} from "../pages/about-service/about-service-routings";

const app = express()

dotenv.config()

const port = process.env.PORT

const serverRoutes = [
    postRouter,
    registrationRouter,
    authenticationRouter,
]

app.use(serverRoutes)

const server = app.listen(port,() => {
    console.log(`Server started on port ${port}`);
})