import {profilesApiEndpoints} from "../../api/profiles-api.js";
import MultipleFetch from "multiple-fetch";
import {parseResponse, parseSeveralResponses} from "../../api/parsers/api-result-parser.js";
import {collectResults} from "../../common/helpers/controller-results-collector.js";

class ProfileController {

    #ENABLE_LOGS = process.env.ENABLE_LOGS

    async getFullProfileInformationByNickname(nickname, token) {
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

    async getProfileFullInformationById(id, token) {
        const getProfilePostsBody = {
            page_number: 1,
            page_size: 10
        }

        const getProfileFetch = profilesApiEndpoints.getProfileById
        const getSubscribersCountFetch = profilesApiEndpoints.getProfileSubscribersCountById
        const getSubscriptionsCountFetch = profilesApiEndpoints.getProfileSubscriptionsCountById
        const getProfilePostsFetch = profilesApiEndpoints.getProfilePostsById
        const multiFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const profileAsync = multiFetch
            .run(() => getProfileFetch(id, {token}))
        const subscribersCountAsync = multiFetch
            .run(() => getSubscribersCountFetch(id, {token}))
        const subscriptionsCountAsync = multiFetch
            .run(() => getSubscriptionsCountFetch(id, {token}))
        const profilePostsAsync = multiFetch
            .run(() => getProfilePostsFetch(id, {token, body: getProfilePostsBody}))

        const profileResult = await profileAsync.synchronize()
        const subscribersCountResult = await subscribersCountAsync.synchronize()
        const subscriptionsCountResult = await subscriptionsCountAsync.synchronize()
        const profilePostsResult = await profilePostsAsync.synchronize()

        return parseSeveralResponses([
            profileResult, subscribersCountResult,
            subscriptionsCountResult, profilePostsResult
        ], (responses) => {
            const profileBody = responses[0].body
            const subscribersCount = responses[1].body.content
            const subscriptionsCount = responses[2].body.content
            const posts = responses[3].body.content

            profileBody.content.subscribers_count = subscribersCount
            profileBody.content.subscriptions_count = subscriptionsCount
            profileBody.content.posts = posts
            return profileBody
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