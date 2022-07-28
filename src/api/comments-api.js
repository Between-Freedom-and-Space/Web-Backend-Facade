// noinspection DuplicatedCode

import {fetch} from "../common/helpers/api-helpers.js";
import {AUTH_TOKEN_HEADER_NAME} from "../common/headers/headers-names.js";
import {createGetBasePath} from "../common/helpers/api-helpers.js";

const getBasePath = createGetBasePath( "/comment")

const getAllComments = async (params) => {
    const path = getBasePath() + "/all"
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
    const path = getBasePath() + `/${id}`
    const { token } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const createComment = async (params) => {
    const path = getBasePath() + "/create"
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
    const path = getBasePath() + `/${id}/update`
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
    const path = getBasePath() + `/${id}/delete`
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