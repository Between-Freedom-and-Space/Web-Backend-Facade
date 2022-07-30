import {authApiEndpoints} from "../../api/auth-api.js";
import MultipleFetch from "multiple-fetch";
import {parseResponse} from "../../api/parsers/api-result-parser.js";

class AuthenticationController {

    #ENABLE_LOGS = process.env.ENABLE_LOGS

    async refreshAccessToken(token) {
        const refreshFetch = authApiEndpoints.refreshAccessToken
        const multiplyFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const fetchResult = await multiplyFetch
            .run(() => refreshFetch(token))
            .synchronize()
        return parseResponse(fetchResult, async (result) => {
            return await result.headers
        })
    }

    async authenticateUser(login, password) {
        const authenticateRequestBody = {
            nickname: login,
            password_encoded: password
        }

        const authenticateFetch = authApiEndpoints.authenticateUser
        const multiplyFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const fetchResult = await multiplyFetch
            .run(() => authenticateFetch({body: authenticateRequestBody}))
            .synchronize()
        return parseResponse(fetchResult, (result) => {
            return result.body
        })
    }
}

export default AuthenticationController;