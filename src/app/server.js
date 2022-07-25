import express from 'express'
import dotenv from 'dotenv'
import postRouter from "../pages/post/post-routings.js";
import registrationRouter from "../pages/registration/registration-routings.js";
import authenticationRouter from "../pages/authentication/authentication-routings.js";
import homeRouter from "../pages/home/home-routings.js";
import commentRouter from "../pages/comment/comment-routings.js";
import postCreateRouter from "../pages/post-create/post-create-routings.js";
import aboutServiceRouter from "../pages/about-service/about-service-routings.js";
import profileRouter from "../pages/profile/profile-routings.js";
import profileSettingsRouter from "../pages/profile-settings/profile-settings-routings.js";
import profileSubscribersRouter from "../pages/profile-subscribers/profile-subscribers-routing.js";
import profileSubscriptionsRouter from "../pages/profile-subscriptions/profile-subscriptions-routings.js";
import searchRouter from "../pages/search/search-routings.js"

dotenv.config()

const app = express()

const port = process.env.PORT

const serverRoutes = [
    postRouter,
    registrationRouter,
    authenticationRouter,
    homeRouter,
    commentRouter,
    postCreateRouter,
    aboutServiceRouter,
    profileRouter,
    profileSettingsRouter,
    profileSubscribersRouter,
    profileSubscriptionsRouter,
    searchRouter
]

app.use(express.json())
app.use(serverRoutes)

const server = app.listen(port,() => {
    console.log(`Server started on port ${port}`);
})