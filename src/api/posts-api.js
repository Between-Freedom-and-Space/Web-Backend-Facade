import fetch from "node-fetch";

const url = process.env.MONO_BACKEND_URL
const basePath = url + "/post"

const createPost = async (params) => {
    const path = basePath + "/create"
    return fetch(path, {

    })
}

const getAllPosts = async (params) => {
    const path = basePath + "/all"
    return fetch(path, {

    })
}

const getPostById = async (id, params) => {
    const path = basePath + `/${id}`
    return fetch(path, {

    })
}

const getPostComments = async (id, params) => {
    const path = basePath + `/${id}/comments`
    return fetch(path, {

    })
}

const getPostReactions = async (id, params) => {
    const path = basePath + `/${id}/reactions`
    return fetch(path, {

    })
}

const getPostCommentsCount = async (id, params) => {
    const path = basePath + `/${id}/comments/count`
    return fetch(path, {

    })
}

const getPostReactionsCount = async (id, params) => {
    const path = basePath + `/${id}/reactions/count`
    return fetch(path, {

    })
}

const getPostTags = async (id, params) => {
    const path = basePath + `/${id}/tags`
    return fetch(path, {

    })
}

const reactPost = async (id, params) => {
    const path = basePath + `/${id}/react`
    return fetch(path, {

    })
}

const commentPost = async (id, params) => {
    const path = basePath + `/${id}/comment`
    return fetch(path, {

    })
}

const updatePost = async (id, params) => {
    const path = basePath + `/${id}/update`
    return fetch(path, {

    })
}

const deletePost = async (id, params) => {
    const path = basePath + `/${id}/delete`
    return fetch(path, {

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