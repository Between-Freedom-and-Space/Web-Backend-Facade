// noinspection DuplicatedCode

import fetch from "node-fetch";
import {AUTH_TOKEN_HEADER_NAME} from "../common/headers/headers-names";

const url = process.env.MONO_BACKEND_URL
const basePath = url + "/comment"

const getAllComments = async (params) => {
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

const getCommentById = async (id, params) => {
    const path = basePath + `/${id}`
    const { token } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const createComment = async (params) => {
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

const updateComment = async (id, params) => {
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

const deleteComment = async (id, params) => {
    const path = basePath + `/${id}/delete`
    const { token } = params
    return fetch(path, {
        method: "DELETE",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

export const commentsApiEndpoints = {
    getAllComments,
    getCommentById,
    createComment,
    updateComment,
    deleteComment
}