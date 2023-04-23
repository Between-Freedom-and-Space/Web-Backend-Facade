import {authApiEndpoints} from "../../api/auth-api.js";
import {mailingApiEndpoints} from "../../api/mailing-api.js";
import {profilesApiEndpoints} from "../../api/profiles-api.js";
import MultipleFetch from "multiple-fetch";
import {parseResponse} from "../../api/parsers/api-result-parser.js";

class RegistrationController {

    #ENABLE_LOGS = process.env.ENABLE_LOGS

    async checkNicknameExists(nickname) {
        const existsRequestBody = {
            profile_nickname: nickname
        }
        const existsFetch = profilesApiEndpoints.checkProfileExists
        const multipleFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const result = await multipleFetch
            .run(() => existsFetch({ body: existsRequestBody }))
            .synchronize()
        return parseResponse(result, (response) => {
            return response.body
        })
    }

    async sendEmailVerificationCode(bodyData) {
        const sendFetch = mailingApiEndpoints.sendEmailVerificationCode
        const multipleFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const result = await multipleFetch
            .run(() => sendFetch({ body: bodyData }))
            .synchronize()
        return parseResponse(result, (response) => {
            return response.body
        })
    }

    async validateEmailVerificationCode(bodyData) {
        const validateFetch = mailingApiEndpoints.verifyEmailVerificationCode
        const multipleFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const result = await multipleFetch
            .run(() => validateFetch({ body: bodyData }))
            .synchronize()
        return parseResponse(result, (response) => {
            return response.body
        })
    }

    async registerNewUserProfile(bodyData) {
        const registerFetch = authApiEndpoints.registerUser
        const authFetch = authApiEndpoints.authenticateUser
        const multipleFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const registerResult = await multipleFetch
            .run(() => registerFetch({ body: bodyData }))
            .synchronize()
        const registerResponse = parseResponse(registerResult, (response) => {
            return response.body
        })
        if (registerResponse.status !== 200) {
            return registerResponse
        }

        const authResult = await multipleFetch
            .run(() => authFetch({
                body: {
                    nickname: bodyData.nickname,
                    password_encoded: bodyData.password_encrypted
                }
            }))
            .synchronize()
        return parseResponse(authResult, (response) => {
            return response.body
        })
    }
}

export default RegistrationController;