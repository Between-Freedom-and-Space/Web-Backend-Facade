import {fetch} from "../common/helpers/api-helpers.js";
import {AUTH_TOKEN_HEADER_NAME} from "../common/headers/headers-names.js";
import {createGetBasePath} from "../common/helpers/api-helpers.js";

const getBasePath = createGetBasePath("/tag")

const getAllTags = async (params) => {
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

const getTagById = async (id, params) => {
    const path = getBasePath() + `/byId/${id}`
    const { token } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
    })
}

const getTagByAlias = async (alias, params) => {
    const path = getBasePath() + `/byAlias/${alias}`
    const { token } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
    })
}

const createTag = async (params) => {
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

const updateTagById = async (id, params) => {
    const path = getBasePath() + `/byId/${id}/update`
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
    const path = getBasePath() + `/byAlias/${alias}/update`
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
    const path = getBasePath() + `/byId/${id}/delete`
    const { token } = params
    return fetch(path, {
        method: "DELETE",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
    })
}

const deleteTagByAlias = async (alias, params) => {
    const path = getBasePath() + `/byAlias/${alias}/delete`
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
    deleteTagByAlias,
}