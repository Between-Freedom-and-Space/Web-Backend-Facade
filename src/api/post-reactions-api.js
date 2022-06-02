// noinspection DuplicatedCode

import fetch from "node-fetch";

const url = process.env.MONO_BACKEND_URL
const basePath = url + "/reaction/post"

const getAllPostReactions = async (params) => {
    const path = basePath + "/all"
    return fetch(path, {

    })
}

const getPostReactionById = async (id, params) => {
    const path = basePath + `/${id}`
    return fetch(path, {

    })
}

const createPostReaction = async (params) => {
    const path = basePath + "/create"
    return fetch(path, {

    })
}

const updatePostReaction = async (id, params) => {
    const path = basePath + `/${id}/update`
    return fetch(path, {

    })
}

const deletePostReaction = async (id, params) => {
    const path = basePath + `/${id}/delete`
    return fetch(path, {

    })
}

export const postReactionsApiEndpoints = {
    getAllPostReactions,
    getPostReactionById,
    createPostReaction,
    updatePostReaction,
    deletePostReaction
}