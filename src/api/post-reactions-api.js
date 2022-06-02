// noinspection DuplicatedCode

import fetch from "node-fetch";
import {AUTH_TOKEN_HEADER_NAME} from "../common/headers-names";

const url = process.env.MONO_BACKEND_URL
const basePath = url + "/reaction/post"

const getAllPostReactions = async (params) => {
    const path = basePath + "/all"
    const { token, body } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const getPostReactionById = async (id, params) => {
    const path = basePath + `/${id}`
    const { token } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const createPostReaction = async (params) => {
    const path = basePath + "/create"
    const { token, body } = params
    return fetch(path, {
        method: "PATCH",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const updatePostReaction = async (id, params) => {
    const path = basePath + `/${id}/update`
    const { token, body } = params
    return fetch(path, {
        method: "PUT",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const deletePostReaction = async (id, params) => {
    const path = basePath + `/${id}/delete`
    const { token } = params
    return fetch(path, {
        method: "DELETE",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

export const postReactionsApiEndpoints = {
    getAllPostReactions,
    getPostReactionById,
    createPostReaction,
    updatePostReaction,
    deletePostReaction
}