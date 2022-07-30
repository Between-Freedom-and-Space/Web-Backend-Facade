import {popularApiEndpoints} from "../../api/popular-api.js";
import MultipleFetch from "multiple-fetch";
import {parseSeveralResponses} from "../../api/parsers/api-result-parser.js";
import {collectResults} from "../../common/helpers/controller-results-collector.js";
import {profilesApiEndpoints} from "../../api/profiles-api.js";

class HomeController {

    #ENABLE_LOGS = process.env.ENABLE_LOGS

    async getHomePageInformation(token) {
        return token
            ? this.#getPersonalHomePage(token)
            : this.#getGenericHomePage()
    }

    /**
     * Collect data for target user.
     * @param token user token.
     * @see MultipleFetch
     * @returns {Promise<{answer: *, status: number}|{answer: *, status: *}>}
     */
    async #getPersonalHomePage(token) {
        const pageParamsRequestBody = {
            page_number: 1,
            page_size: 20,
        }
        const getPopularProfilesFetch = popularApiEndpoints.getPopularProfiles
        const getPopularTagsFetch = popularApiEndpoints.getPopularTags
        const getLastCreatedPostsFetch = popularApiEndpoints.getLastCreatedPosts
        const getProfileSubscriptionsPostsFetch = profilesApiEndpoints.getProfileLastSubscriptionsPosts
        const multiFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const getPopularProfilesAsync = multiFetch
            .run(() => getPopularProfilesFetch({token, body: pageParamsRequestBody}))
        const getPopularTagsAsync = multiFetch
            .run(() => getPopularTagsFetch({token, body: pageParamsRequestBody}))
        const getLastCreatedPostsAsync = multiFetch
            .run(() => getLastCreatedPostsFetch({token, body: pageParamsRequestBody}))
        const getProfileSubscriptionsPostsAsync = multiFetch
            .run(() => getProfileSubscriptionsPostsFetch({token, body: pageParamsRequestBody}))

        const getPopularProfilesResult = await getPopularProfilesAsync.synchronize()
        const getPopularTagsResult = await getPopularTagsAsync.synchronize()
        const getLastCreatedPostsResult = await getLastCreatedPostsAsync.synchronize()
        const getProfileSubscriptionsPostsResult = await getProfileSubscriptionsPostsAsync.synchronize()

        return parseSeveralResponses([
            getPopularProfilesResult, getPopularTagsResult,
            getLastCreatedPostsResult, getProfileSubscriptionsPostsResult
        ], (responses) => {
            return collectResults([
                {alias: 'popular_profiles', answer: responses[0].body},
                {alias: 'popular_tags', answer: responses[1].body},
                {alias: 'last_created_posts', answer: responses[2].body},
                {alias: 'profile_subscriptions_posts', answer: responses[3].body}
            ])
        })
    }

    /**
     * Collect generic data for home preview.
     * @see MultipleFetch
     * @returns {Promise<{answer: *, status: number}|{answer: *, status: *}>}
     */
    async #getGenericHomePage() {
        const pageParamsRequestBody = {
            page_number: 1,
            page_size: 20
        }
        const getPopularPostsFetch = popularApiEndpoints.getPopularPosts
        const getPopularProfilesFetch = popularApiEndpoints.getPopularProfiles
        const getPopularTagsFetch = popularApiEndpoints.getPopularTags
        const multiFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const getPopularPostsAsync = multiFetch
            .run(() => getPopularPostsFetch({body: pageParamsRequestBody}))
        const getPopularProfilesAsync = multiFetch
            .run(() => getPopularProfilesFetch({body: pageParamsRequestBody}))
        const getPopularTagsAsync = multiFetch
            .run(() => getPopularTagsFetch({body: pageParamsRequestBody}))

        const getPopularPostsResult = await getPopularPostsAsync.synchronize()
        const getPopularProfilesResult = await getPopularProfilesAsync.synchronize()
        const getPopularTagsResult = await getPopularTagsAsync.synchronize()

        return parseSeveralResponses([
            getPopularPostsResult,
            getPopularProfilesResult,
            getPopularTagsResult
        ], (responses) => {
            return collectResults([
                {alias: 'popular_posts', answer: responses[0].body},
                {alias: 'popular_profiles', answer: responses[1].body},
                {alias: 'popular_tags', answer: responses[2].body}
            ])
        })
    }
}

export default HomeController