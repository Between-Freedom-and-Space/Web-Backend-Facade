import fetch from "node-fetch";

const url = process.env.MONO_BACKEND_URL
const basePath = url + "/profile"

const getAllProfiles = async (params) => {
    const path = basePath + "/all"
    const { token } = params
    return fetch(path, {

    })
}

const checkProfileExists = async (params) => {
    const path = basePath + "/exists"
    const { token } = params
    return fetch(path, {

    })
}

const subscribeToProfile = async (nickname, params) => {
    const path = basePath + `/subscribe/${nickname}`
    const { token } = params
    return fetch(path, {

    })
}

const unsubscribeFromProfile = async (nickname, params) => {
    const path = basePath + `/unsubscribe/${nickname}`
    const { token } = params
    return fetch(path, {

    })
}

const getProfileByNickname = async (nickname, params) => {
    const path = basePath + `/${nickname}`
    const { token } = params
    return fetch(path, {

    })
}

const getProfileSubscriptions = async (nickname, params) => {
    const path = basePath + `/${nickname}/subscriptions`
    const { token } = params
    return fetch(path, {

    })
}

const getProfileSubscribers = async (nickname, params) => {
    const path = basePath + `/${nickname}/subscribers`
    const { token } = params
    return fetch(path, {

    })
}

const getProfileSubscriptionsCount = async (nickname, params) => {
    const path = basePath + `/${nickname}/subscriptions/count`
    const { token } = params
    return fetch(path, {

    })
}

const getProfileSubscribersCount = async (nickname, params) => {
    const path = basePath + `/${nickname}/subscribers/count`
    const { token } = params
    return fetch(path, {

    })
}

const getProfilePosts = async (nickname, params) => {
    const path = basePath + `/${nickname}/posts`
    const { token } = params
    return fetch(path, {

    })
}

const getProfileComments = async (nickname, params) => {
    const path = basePath + `/${nickname}/comments`
    const { token } = params
    return fetch(path, {

    })
}

const getProfileTags = async (nickname, params) => {
    const path = basePath + `/${nickname}/tags`
    const { token } = params
    return fetch(path, {

    })
}

const getProfilePostReactions = async (nickname, params) => {
    const path = basePath + `/${nickname}/post/reactions`
    const { token } = params
    return fetch(path, {

    })
}

const getProfileCommentReactions = async (nickname, params) => {
    const path = basePath + `/${nickname}/comment/reactions`
    const { token } = params
    return fetch(path, {

    })
}

const createProfile = async (params) => {
    const path = basePath + "/create"
    const { token } = params
    return fetch(path, {

    })
}

const updateProfile = async (nickname, params) => {
    const path = basePath + `/${nickname}/update`
    const { token } = params
    return fetch(path, {

    })
}

const deleteProfile = async (nickname, params) => {
    const path = basePath + `/${nickname}/delete`
    const { token } = params
    return fetch(path, {

    })
}

export const ProfilesApiEndpoints = {
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
