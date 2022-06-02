// noinspection DuplicatedCode

import fetch from "node-fetch";
import {AUTH_TOKEN_HEADER_NAME} from "../common/headers/headers-names";

const url = process.env.MONO_BACKEND_URL
const basePath = url + "/post"

const createPost = async (params) => {
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

const getAllPosts = async (params) => {
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

const getPostById = async (id, params) => {
    const path = basePath + `/${id}`
    const { token } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const getPostComments = async (id, params) => {
    const path = basePath + `/${id}/comments`
    const { token, body } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const getPostReactions = async (id, params) => {
    const path = basePath + `/${id}/reactions`
    const { token, body } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const getPostCommentsCount = async (id, params) => {
    const path = basePath + `/${id}/comments/count`
    const { token } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const getPostReactionsCount = async (id, params) => {
    const path = basePath + `/${id}/reactions/count`
    const { token } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const getPostTags = async (id, params) => {
    const path = basePath + `/${id}/tags`
    const { token, body } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const reactPost = async (id, params) => {
    const path = basePath + `/${id}/react`
    const { token, body} = params
    return fetch(path, {
        method: "POST",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const commentPost = async (id, params) => {
    const path = basePath + `/${id}/comment`
    const { token, body } = params
    return fetch(path, {
        method: "POST",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const updatePost = async (id, params) => {
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

const deletePost = async (id, params) => {
    const path = basePath + `/${id}/delete`
    const { token } = params
    return fetch(path, {
        method: "DELETE",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

export const postsApiEndpoints = {
    createPost,
    getAllPosts,
    getPostById,
    getPostComments,
    getPostReactions,
    getPostCommentsCount,
    getPostReactionsCount,
    getPostTags,
    reactPost,
    commentPost,
    updatePost,
    deletePost
}