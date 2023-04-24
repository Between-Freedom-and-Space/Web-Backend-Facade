import {authApiEndpoints} from "../../api/auth-api.js";
import MultipleFetch from "multiple-fetch";
import {parseResponse, parseSeveralResponses} from "../../api/parsers/api-result-parser.js";
import {profilesApiEndpoints} from "../../api/profiles-api.js";

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

        const authFetch = authApiEndpoints.authenticateUser
        const myProfileFetch = profilesApiEndpoints.getMyProfile
        const multiplyFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const authResult = await multiplyFetch
            .run(() => authFetch({body: authenticateRequestBody}))
            .synchronize()
        const authResponse = parseResponse(authResult, (result) => {
            return result.body
        })
        if (authResponse.status !== 200) {
            return authResponse
        }

        const myProfileResult = await multiplyFetch
            .run(() => myProfileFetch({token: authResponse.content.access_token}))
            .synchronize()
        return parseSeveralResponses([authResult, myProfileResult], (responses) => {
            const authResponse = responses[0].body
            const myProfileResponse = responses[1].body
            authResponse.content.profile_id = myProfileResponse.content.profile_id
            return authResponse
        })
    }

    async deleteUser(token) {

    }
}

export default AuthenticationController;