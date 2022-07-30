import {profilesApiEndpoints} from "../../api/profiles-api";
import MultipleFetch from "multiple-fetch";
import {parseResponse, parseSeveralResponses} from "../../api/parsers/api-result-parser";
import {collectResults} from "../../common/helpers/controller-results-collector";

class ProfileController {

    #ENABLE_LOGS = process.env.ENABLE_LOGS

    async getFullProfileInformation(nickname, token) {
        const getProfilePostsBody = {
            page_number: 1,
            page_size: 10
        }

        const getProfileFetch = profilesApiEndpoints.getProfileByNickname
        const getProfileSubscribersCountFetch = profilesApiEndpoints.getProfileSubscribersCount
        const getProfileSubscriptionsCountFetch = profilesApiEndpoints.getProfileSubscriptionsCount
        const getProfilePostsFetch = profilesApiEndpoints.getProfilePosts
        const multiFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const asyncGetProfile = multiFetch
            .run(() => getProfileFetch(nickname, {token}))
        const asyncGetProfileSubscribersCount = multiFetch
            .run(() => getProfileSubscribersCountFetch(nickname, {token}))
        const asyncGetProfileSubscriptionsCount = multiFetch
            .run(() => getProfileSubscriptionsCountFetch(nickname, {token}))
        const asyncGetProfilePosts = multiFetch
            .run(() => getProfilePostsFetch(nickname, {token, body: getProfilePostsBody}))

        const getProfileResult = await asyncGetProfile.synchronize()
        const getProfileSubscribersCountResult = await asyncGetProfileSubscribersCount.synchronize()
        const getProfileSubscriptionsCountResult = await asyncGetProfileSubscriptionsCount.synchronize()
        const getProfilePostsResult = await asyncGetProfilePosts.synchronize()

        return parseSeveralResponses([
            getProfileResult, getProfileSubscribersCountResult,
            getProfileSubscriptionsCountResult, getProfilePostsResult
        ], (responses) => {
            return collectResults([
                {alias: 'profile', answer: responses[0].body},
                {alias: 'profile_subscribers_count', answer: responses[1].body},
                {alias: 'profile_subscriptions_count', answer: responses[2].body},
                {alias: 'profile_posts', answer: responses[3].body}
            ])
        })
    }

    async subscribeToProfile(nickname, token) {
        const subscribeFetch = profilesApiEndpoints.subscribeToProfile
        const multiFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const subscribeResult = await multiFetch
            .run(() => subscribeFetch(nickname, {token}))
            .synchronize()

        return parseResponse(subscribeResult, (result) => {
            return result.body
        })
    }

    async unsubscribeFromProfile(nickname, token) {
        const unsubscribeFetch = profilesApiEndpoints.unsubscribeFromProfile
        const multiFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const unsubscribeResult = await multiFetch
            .run(() => unsubscribeFetch(nickname, {token}))
            .synchronize()

        return parseResponse(unsubscribeResult, (result) => {
            return result.body
        })
    }
}

export default ProfileController