// noinspection DuplicatedCode

import {fetch} from "../common/helpers/api-helpers.js";
import {AUTH_TOKEN_HEADER_NAME} from "../common/headers/headers-names.js";
import {createGetBasePath} from "../common/helpers/api-helpers.js";

const getBasePath = createGetBasePath("/profile")

const getAllProfiles = async (params) => {
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

const checkProfileExists = async (params) => {
    const path = getBasePath() + "/exists"
    const { body } = params
    return fetch(path, {
        method: "POST",
        body: JSON.stringify(body)
    })
}

const subscribeToProfile = async (nickname, params) => {
    const path = getBasePath() + `/subscribe/${nickname}`
    const { token } = params
    return fetch(path, {
        method: "POST",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const unsubscribeFromProfile = async (nickname, params) => {
    const path = getBasePath() + `/unsubscribe/${nickname}`
    const { token } = params
    return fetch(path, {
        method: "POST",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const getProfileByNickname = async (nickname, params) => {
    const path = getBasePath() + `/${nickname}`
    const { token } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const getProfileSubscriptions = async (nickname, params) => {
    const path = getBasePath() + `/${nickname}/subscriptions`
    const { token, body } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const getProfileSubscribers = async (nickname, params) => {
    const path = getBasePath() + `/${nickname}/subscribers`
    const { token, body } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const getProfileSubscriptionsCount = async (nickname, params) => {
    const path = getBasePath() + `/${nickname}/subscriptions/count`
    const { token } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const getProfileSubscribersCount = async (nickname, params) => {
    const path = getBasePath() + `/${nickname}/subscribers/count`
    const { token } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const getProfilePosts = async (nickname, params) => {
    const path = getBasePath() + `/${nickname}/posts`
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
    const path = getBasePath() + `/${nickname}/comments`
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
    const path = getBasePath() + `/${nickname}/tags`
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
    const path = getBasePath() + `/${nickname}/post/reactions`
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
    const path = getBasePath() + `/${nickname}/comment/reactions`
    const { token, body } = params
    return fetch(path, {
        method: "GET",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        },
        body: JSON.stringify(body)
    })
}

const getProfileLastSubscriptionsPosts = async (params) => {
    const path = getBasePath() + `/${nickname}/subscriptions/posts`
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

const updateProfile = async (nickname, params) => {
    const path = getBasePath() + `/${nickname}/update`
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
    const path = getBasePath() + `/${nickname}/delete`
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
    getProfileLastSubscriptionsPosts,
    createProfile,
    updateProfile,
    deleteProfile,
}
