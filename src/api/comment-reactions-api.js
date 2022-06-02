// noinspection DuplicatedCode

import fetch from "node-fetch";

const url = process.env.MONO_BACKEND_URL
const basePath = url + "/reaction/comment"

const getAllCommentsReactions = async (params) => {
    const path = basePath + "/all"
    return fetch(path, {

    })
}

const getCommentReactionById = async (id, params) => {
    const path = basePath + `/${id}`
    return fetch(path, {

    })
}

const createCommentReaction = async (params) => {
    const path = basePath + "/create"
    return fetch(path, {

    })
}

const updateCommentReaction = async (id, params) => {
    const path = basePath + `/${id}/update`
    return fetch(path, {

    })
}

const deleteCommentReaction = async (id, params) => {
    const path = basePath + `/${id}/delete`
    return fetch(path, {

    })
}

export const commentReactionsApiEndpoints = {
    getAllCommentsReactions,
    getCommentReactionById,
    createCommentReaction,
    updateCommentReaction,
    deleteCommentReaction
}