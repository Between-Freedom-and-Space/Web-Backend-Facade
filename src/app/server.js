import express from 'express'
import dotenv from 'dotenv'
import {postPageAdapter} from "../pages/post-page/post-page-adapter.js";

const app = express()

dotenv.config()

const port = process.env.PORT

postPageAdapter(app)

const server = app.listen(port,() => {
    console.log(`Server started on port ${port}`);
})