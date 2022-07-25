// noinspection DuplicatedCode

import fetch from "node-fetch";
import {AUTH_TOKEN_HEADER_NAME} from "../common/headers/headers-names.js";

const url = process.env.MONO_BACKEND_URL
const basePath = url + "/profile"

const getAllProfiles = async (params) => {
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

const checkProfileExists = async (params) => {
    const path = basePath + "/exists"
    const { body } = params
    return fetch(path, {
        method: "POST",
        body: JSON.stringify(body)
    })
}

const subscribeToProfile = async (nickname, params) => {
    const path = basePath + `/subscribe/${nickname}`
    const { token } = params
    return fetch(path, {
        method: "POST",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const unsubscribeFromProfile = async (nickname, params) => {
    const path = basePath + `/unsubscribe/${nickname}`
    const { token } = params
    return fetch(path, {
        method: "POST",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const getProfileByNickname = async (nickname, params) => {
    const path = basePath + `/${nickname}`
    const { token } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const getProfileSubscriptions = async (nickname, params) => {
    const path = basePath + `/${nickname}/subscriptions`
    const { token } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const getProfileSubscribers = async (nickname, params) => {
    const path = basePath + `/${nickname}/subscribers`
    const { token } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const getProfileSubscriptionsCount = async (nickname, params) => {
    const path = basePath + `/${nickname}/subscriptions/count`
    const { token } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const getProfileSubscribersCount = async (nickname, params) => {
    const path = basePath + `/${nickname}/subscribers/count`
    const { token } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const getProfilePosts = async (nickname, params) => {
    const path = basePath + `/${nickname}/posts`
    const { token, body } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const getProfileComments = async (nickname, params) => {
    const path = basePath + `/${nickname}/comments`
    const { token, body } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const getProfileTags = async (nickname, params) => {
    const path = basePath + `/${nickname}/tags`
    const { token, body } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const getProfilePostReactions = async (nickname, params) => {
    const path = basePath + `/${nickname}/post/reactions`
    const { token, body } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const getProfileCommentReactions = async (nickname, params) => {
    const path = basePath + `/${nickname}/comment/reactions`
    const { token, body } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const createProfile = async (params) => {
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

const updateProfile = async (nickname, params) => {
    const path = basePath + `/${nickname}/update`
    const { token, body } = params
    return fetch(path, {
        method: "PUT",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const deleteProfile = async (nickname, params) => {
    const path = basePath + `/${nickname}/delete`
    const { token } = params
    return fetch(path, {
        method: "DELETE",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

export const profilesApiEndpoints = {
    getAllProfiles,
    checkProfileExists,
    subscribeToProfile,
    unsubscribeFromProfile,
    getProfileByNickname,
    getProfileSubscriptions,
    getProfileSubscribers,
    getProfileSubscriptionsCount,
    getProfileSubscribersCount,
    getProfilePosts,
    getProfileComments,
    getProfileTags,
    getProfilePostReactions,
    getProfileCommentReactions,
    createProfile,
    updateProfile,
    deleteProfile
}
