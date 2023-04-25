import {fetch} from "../common/helpers/api-helpers.js";
import {createGetBasePath} from "../common/helpers/api-helpers.js";

const getBasePath = createGetBasePath("/mailing")

const sendEmailVerificationCode = async (params) => {
    const path = getBasePath() + '/email/verificationCode/send'
    const { body } = params
    return fetch(path, {
        method: 'POST',
        body: JSON.stringify(body)
    })
}

const verifyEmailVerificationCode = async (params) => {
    const path = getBasePath() + '/email/verificationCode/check'
    const { body } = params
    return fetch(path, {
        method: 'POST',
        body: JSON.stringify(body)
    })
}

export const mailingApiEndpoints = {
    sendEmailVerificationCode,
    verifyEmailVerificationCode
}