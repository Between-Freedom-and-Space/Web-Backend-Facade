import fetch from "node-fetch";

const url = process.env.MONO_BACKEND_URL
const basePath = url + "/tag"

const getAllTags = async (params) => {
    const path = basePath + "/all"
    const { token } = params
    return fetch(path, {

    })
}

const getTagById = async (id, params) => {
    const path = basePath + `/byId/${id}`
    const { token } = params
    return fetch(path, {

    })
}

const getTagByAlias = async (alias, params) => {
    const path = basePath + `/byAlias/${alias}`
    const { token } = params
    return fetch(path, {

    })
}

const createTag = async (params) => {
    const path = basePath + "/create"
    const { token } = params
    return fetch(path, {

    })
}

const updateTagById = async (id, params) => {
    const path = basePath + `/byId/${id}/update`
    const { token } = params
    return fetch(path, {

    })
}

const updateTagByAlias = async (alias, params) => {
    const path = basePath + `/byAlias/${alias}/update`
    const { token } = params
    return fetch(path, {

    })
}

const deleteTagById = async (id, params) => {
    const path = basePath + `/byId/${id}/delete`
    const { token } = params
    return fetch(path, {

    })
}

const deleteTagByAlias = async (alias, params) => {
    const path = basePath + `/byAlias/${alias}/delete`
    const { token } = params
    return fetch(path, {

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