import {postsApiEndpoints} from "../../api/posts-api.js";
import MultipleFetch from "multiple-fetch";
import {parseResponse, parseSeveralResponses} from "../../api/parsers/api-result-parser.js";
import {collectResults} from "../../common/helpers/controller-results-collector.js";
import {profilesApiEndpoints} from "../../api/profiles-api.js";

class PostController {

    #ENABLE_LOGS = process.env.ENABLE_LOGS

    async getPostFullInformation(postId, token) {
        const pageParamsRequestBody = {
            page_number: 1,
            page_size: 20
        }
        const getProfileFetch = profilesApiEndpoints.getProfileById
        const getPostFetch = postsApiEndpoints.getPostById
        const getPostCommentsFetch = postsApiEndpoints.getPostComments
        const getPostCommentsCountFetch = postsApiEndpoints.getPostCommentsCount
        const getPostReactionsCountFetch = postsApiEndpoints.getPostReactionsCount
        const getPostTagsFetch = postsApiEndpoints.getPostTags
        const multiplyFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const getPostAsync = multiplyFetch
            .run(() => getPostFetch(postId, {token}))
        const getPostCommentsAsync = multiplyFetch
            .run(() => getPostCommentsFetch(postId, {token, body: pageParamsRequestBody}))
        const getPostCommentsCountAsync = multiplyFetch
            .run(() => getPostCommentsCountFetch(postId, {token}))
        const getPostReactionsCountAsync = multiplyFetch
            .run(() => getPostReactionsCountFetch(postId, {token}))
        const getPostTagsAsync = multiplyFetch
            .run(() => getPostTagsFetch(postId, {token, body: pageParamsRequestBody}))

        const getPostResult = await getPostAsync.synchronize()
        const getPostCommentsResult = await getPostCommentsAsync.synchronize()
        const getPostCommentsCountResult = await getPostCommentsCountAsync.synchronize()
        const getPostReactionsCountResult = await getPostReactionsCountAsync.synchronize()
        const getPostTagsResult = await getPostTagsAsync.synchronize()

        const getProfileResult = await multiplyFetch
            .run(() => getProfileFetch(getPostResult.body.content.author_id, {token}))
            .synchronize()

        return parseSeveralResponses([
            getPostResult, getPostCommentsResult, getPostCommentsCountResult,
            getPostReactionsCountResult, getPostTagsResult, getProfileResult
        ], (responses) => {
            const postBody = responses[0].body
            const postComments = responses[1].body.content
            const postCommentsCount = responses[2].body.content
            const postReactionsCount = responses[3].body.content
            const postTags = responses[4].body.content
            const postAuthor = responses[5].body.content

            postBody.content.comments_count = postCommentsCount.comments_count
            postBody.content.likes_count = this.#getLikesCount(postReactionsCount)
            postBody.content.dislikes_count = this.#getDislikesCount(postReactionsCount)
            postBody.content.comments = postComments
            postBody.content.tags = postTags
            postBody.content.author = postAuthor

            return postBody
        })
    }

    async commentPost(postId, comment, token) {
        const commentPostFetch = postsApiEndpoints.commentPost
        const multiplyFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const commentPostResult = await multiplyFetch
            .run(() => commentPostFetch(postId, {body: comment, token}))
            .synchronize()
        return parseResponse(commentPostResult, (response) => {
            return response.body
        })
    }

    async reactPost(postId, react, token) {
        const reactPostFetch = postsApiEndpoints.reactPost
        const multiplyFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const reactPostResult = await multiplyFetch
            .run(() => reactPostFetch(postId, {body: react, token}))
            .synchronize()
        return parseResponse(reactPostResult, (response) => {
            return response.body
        })
    }

    async removeReactPost(postId, token) {

    }

    #getLikesCount(reactionsCount) {
        const reactionsCountArray = reactionsCount.reactions_count
        const likesArray = reactionsCountArray.filter(el => el.reaction_alias === 'LIKE')
        if (likesArray.length === 0) {
            return 0
        } else {
            return likesArray[0].count
        }
    }

    #getDislikesCount(reactionsCount) {
        const reactionsCountArray = reactionsCount.reactions_count
        const dislikesArray = reactionsCountArray.filter(el => el.reaction_alias === 'DISLIKE')
        if (dislikesArray.length === 0) {
            return 0
        } else {
            return dislikesArray[0].count
        }
    }
}

export default PostController;