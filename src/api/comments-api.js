// noinspection DuplicatedCode

import fetch from "node-fetch";

const url = process.env.MONO_BACKEND_URL
const basePath = url + "/comment"

const getAllComments = async (params) => {
    const path = basePath + "/all"
    return fetch(path, {

    })
}

const getCommentById = async (id, params) => {
    const path = basePath + `/${id}`
    return fetch(path, {

    })
}

const createComment = async (params) => {
    const path = basePath + "/create"
    return fetch(path, {

    })
}

const updateComment = async (id, params) => {
    const path = basePath + `/${id}/update`
    return fetch(path, {

    })
}

const deleteComment = async (id, params) => {
    const path = basePath + `/${id}/delete`
    return fetch(path, {

    })
}

export const commentsApiEndpoints = {
    getAllComments,
    getCommentById,
    createComment,
    updateComment,
    deleteComment
}