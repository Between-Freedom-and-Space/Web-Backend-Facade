import {createGetBasePath, fetch} from "../common/helpers/api-helpers.js";
import {AUTH_TOKEN_HEADER_NAME} from "../common/headers/headers-names.js";

const getBasePath = createGetBasePath("/popular")

const getLastCreatedPosts = async (params) => {
    const path = getBasePath() + "/last/created/post"
    const { token, body } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const getLastCreatedTags = async (params) => {
    const path = getBasePath() + "/last/created/tags"
    const { token, body } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const getLastCreatedProfiles = async (params) => {
    const path = getBasePath() + "/last/created/profiles"
    const { token, body } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const getPopularPosts = async (params) => {
    const path = getBasePath() + "/posts"
    const { token, body } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const getPopularTags = async (params) => {
    const path = getBasePath() + "/tags"
    const { token, body } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const getPopularProfiles = async (params) => {
    const path = getBasePath() + "/profiles"
    const { token, body } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

export const popularApiEndpoints = {
    getLastCreatedPosts,
    getLastCreatedTags,
    getLastCreatedProfiles,
    getPopularPosts,
    getPopularTags,
    getPopularProfiles,
}