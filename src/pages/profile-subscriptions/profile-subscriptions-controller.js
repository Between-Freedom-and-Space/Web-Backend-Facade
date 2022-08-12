import {profilesApiEndpoints} from "../../api/profiles-api.js";
import MultipleFetch from "multiple-fetch";
import {parseResponse} from "../../api/parsers/api-result-parser.js";

class ProfileSubscriptionsController {

    #ENABLE_LOGS = process.env.ENABLE_LOGS

    async getProfileSubscriptions(nickname, token) {
        const getSubscriptionsRequestBody = {
            page_number: 1,
            page_size: 20,
        }
        const getSubscriptionsFetch = profilesApiEndpoints.getProfileSubscriptions
        const multiFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const result = await multiFetch
            .run(() => getSubscriptionsFetch(nickname, {token, body: getSubscriptionsRequestBody}))
            .synchronize()
        return parseResponse(result, (result) => {
            result.body
        })
    }
}

export default ProfileSubscriptionsController