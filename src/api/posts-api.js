// noinspection DuplicatedCode

import {fetch} from "../common/helpers/api-helpers.js";
import {AUTH_TOKEN_HEADER_NAME} from "../common/headers/headers-names.js";
import {createGetBasePath} from "../common/helpers/api-helpers.js";

const getBasePath = createGetBasePath("/post")

const createPost = async (params) => {
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

const getAllPosts = async (params) => {
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

const getPostById = async (id, params) => {
    const path = getBasePath() + `/${id}`
    const { token } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const getPostComments = async (id, params) => {
    const path = getBasePath() + `/${id}/comments`
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
    const path = getBasePath() + `/${id}/reactions`
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
    const path = getBasePath() + `/${id}/comments/count`
    const { token } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const getPostReactionsCount = async (id, params) => {
    const path = getBasePath() + `/${id}/reactions/count`
    const { token } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const getPostTags = async (id, params) => {
    const path = getBasePath() + `/${id}/tags`
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
    const path = getBasePath() + `/${id}/react`
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
    const path = getBasePath() + `/${id}/comment`
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

const deletePost = async (id, params) => {
    const path = getBasePath() + `/${id}/delete`
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
    deletePost,
}