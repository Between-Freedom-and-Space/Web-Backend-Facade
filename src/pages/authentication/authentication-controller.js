import {authApiEndpoints} from "../../api/auth-api.js";
import MultipleFetch from "multiple-fetch";

class AuthenticationController {

    #ENABLE_LOGS = process.env.ENABLE_LOGS

    async refreshAccessToken(token) {
        const refreshFetch = authApiEndpoints.refreshAccessToken
        const multiplyFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const result = await multiplyFetch
            .run(() => refreshFetch(token))
            .synchronize()
    }

    async authenticateUser(login, password) {
        const authenticateRequestBody = {
            "nickname": login,
            "password_encoded": password
        }

        const authenticateFetch = authApiEndpoints.authenticateUser
        const multiplyFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const result = await multiplyFetch
            .run(() => authenticateFetch(authenticateRequestBody))
            .synchronize()
    }
}

export default AuthenticationController;