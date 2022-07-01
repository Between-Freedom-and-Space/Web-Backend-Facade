import fetch from "node-fetch";
import {AUTH_TOKEN_HEADER_NAME} from "../common/headers/headers-names";

const url = process.env.MONO_BACKEND_URL
const basePath = url + "/tag"

const getAllTags = async (params) => {
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

const getTagById = async (id, params) => {
    const path = basePath + `/byId/${id}`
    const { token } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
    })
}

const getTagByAlias = async (alias, params) => {
    const path = basePath + `/byAlias/${alias}`
    const { token } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
    })
}

const createTag = async (params) => {
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

const updateTagById = async (id, params) => {
    const path = basePath + `/byId/${id}/update`
    const { token, body } = params
    return fetch(path, {
        method: "PUT",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const updateTagByAlias = async (alias, params) => {
    const path = basePath + `/byAlias/${alias}/update`
    const { token, body } = params
    return fetch(path, {
        method: "PUT",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const deleteTagById = async (id, params) => {
    const path = basePath + `/byId/${id}/delete`
    const { token } = params
    return fetch(path, {
        method: "DELETE",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
    })
}

const deleteTagByAlias = async (alias, params) => {
    const path = basePath + `/byAlias/${alias}/delete`
    const { token } = params
    return fetch(path, {
        method: "DELETE",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
    })
}

export const tagsApiEndpoints = {
    getAllTags,
    getTagById,
    getTagByAlias,
    createTag,
    updateTagById,
    updateTagByAlias,
    deleteTagById,
    deleteTagByAlias
}