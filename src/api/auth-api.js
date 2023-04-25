import {fetch} from "../common/helpers/api-helpers.js";
import {AUTH_TOKEN_HEADER_NAME} from "../common/headers/headers-names.js";
import {createGetBasePath} from "../common/helpers/api-helpers.js";

const getBasePath = createGetBasePath("/auth")

const registerUser = async (params) => {
    const path = getBasePath() + "/user/register"
    const { body } = params
    return fetch(path, {
        method: "PATCH",
        body: JSON.stringify(body)
    })
}

const authenticateUser = async (params) => {
    const path = getBasePath() + "/user/authenticate"
    const { body } = params
    return fetch(path, {
        method: "POST",
        body: JSON.stringify(body)
    })
}

const deleteUser = async (params) => {
    const path = getBasePath() + "/user/delete"
    const { token } = params
    return fetch(path, {
        method: "DELETE",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const verifyAccessToken = async (params) => {
    const path = getBasePath() + "/token/verifyAccess"
    const { token } = params
    return fetch(path, {
        method: "POST",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const verifyRefreshToken = async (params) => {
    const path = getBasePath() + "/token/verifyRefresh"
    const { token } = params
    return fetch(path, {
        method: "POST",
        headers: {
            [AUTH_TOKEN_HEADER_NAME]: token
        }
    })
}

const refreshAccessToken = async (params) => {
    const path = getBasePath() + "/token/refreshAccess"
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
    refreshAccessToken,
}
