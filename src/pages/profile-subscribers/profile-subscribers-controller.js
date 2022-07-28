import {profilesApiEndpoints} from "../../api/profiles-api";
import MultipleFetch from "multiple-fetch";
import {parseResponse} from "../../api/parsers/api-result-parser.js";

class ProfileSubscribersController {

    #ENABLE_LOGS = process.env.ENABLE_LOGS

    async getProfileSubscribers(nickname, token) {
        const getSubscribersFetch = profilesApiEndpoints.getProfileSubscribers
        const multiFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const result = await multiFetch
            .run(() => getSubscribersFetch(nickname, {token}))
            .synchronize()
        return parseResponse(result, (result) => {
            return result.body
        })
    }
}

export default ProfileSubscribersController