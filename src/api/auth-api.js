import fetch from "node-fetch";
import {AUTH_TOKEN_HEADER_NAME} from "../common/headers-names.js";

const url = process.env.MONO_BACKEND_URL
const basePath = url + "/auth"

const registerUser = async (params) => {
    const path = basePath + "/user/register"
    const { body } = params
    return fetch(path, {
        method: "POST",
        body: JSON.stringify(body)
    })
}

const authenticateUser = async (params) => {
    const path = basePath + "/user/authenticate"
    const { body } = params
    return fetch(path, {
        method: "POST",
        body: JSON.stringify(body)
    })
}

const deleteUser = async (params) => {
    const path = basePath + "/user/delete"
    const { token } = params
    return fetch(path, {
        method: "DELETE",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const verifyAccessToken = async (params) => {
    const path = basePath + "/token/verifyAccess"
    const { token } = params
    return fetch(path, {
        method: "POST",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const verifyRefreshToken = async (params) => {
    const path = basePath + "/token/verifyRefresh"
    const { token } = params
    return fetch(path, {
        method: "POST",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const refreshAccessToken = async (params) => {
    const path = basePath + "/token/refreshAccess"
    const { token } = params
    return fetch(path, {
        method: "POST",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

export const authApiEndpoints = {
    registerUser,
    authenticateUser,
    deleteUser,
    verifyAccessToken,
    verifyRefreshToken,
    refreshAccessToken
}
