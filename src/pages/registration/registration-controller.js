import {authApiEndpoints} from "../../api/auth-api.js";
import {profilesApiEndpoints} from "../../api/profiles-api.js";
import MultipleFetch from "multiple-fetch";

class RegistrationController {

    #ENABLE_LOGS = process.env.ENABLE_LOGS

    async checkNicknameExists(nickname) {
        const existsRequestBody = {
            profile_nickname: nickname
        }
        const existsFetch = profilesApiEndpoints.checkProfileExists
        const multipleFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const result = await multipleFetch
            .run(() => existsFetch(existsRequestBody))
            .synchronize()
    }

    async sendEmailVerificationCode(email) {
        const verificationRequestBody = {
            email: email
        }
        const sendFetch = authApiEndpoints.sendEmailVerificationCode
        const multipleFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const result = await multipleFetch
            .run(() => sendFetch(verificationRequestBody))
            .synchronize()
    }

    async sendPhoneVerificationCode(phoneNumber) {
        const verificationRequestBody = {
            phone_number: phoneNumber
        }
        const sendFetch = authApiEndpoints.sendPhoneVerificationCode
        const multipleFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const result = await multipleFetch
            .run(() => sendFetch(verificationRequestBody))
            .synchronize()
    }

    async validateEmailVerificationCode(email, code) {
        const validateRequestBody = {
            email: email,
            verification_code: code
        }
        const validateFetch = authApiEndpoints.verifyEmailVerificationCode
        const multipleFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const result = await multipleFetch
            .run(() => validateFetch(validateRequestBody))
            .synchronize()
    }

    async validatePhoneVerificationCode(phone, code) {
        const validateRequestBody = {
            phone_number: phone,
            verification_code: code
        }
        const validateFetch = authApiEndpoints.verifyPhoneVerificationCode
        const multipleFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const result = await multipleFetch
            .run(() => validateFetch(validateRequestBody))
            .synchronize()
    }

    async registerNewUserProfile(inputData) {
        const registerFetch = authApiEndpoints.registerUser
        const multipleFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const result = await multipleFetch
            .run(() => registerFetch(inputData))
            .synchronize()
    }
}

export default RegistrationController;