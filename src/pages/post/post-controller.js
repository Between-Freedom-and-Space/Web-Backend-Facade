import {postsApiEndpoints} from "../../api/posts-api.js";
import MultipleFetch from "multiple-fetch";
import {parseResponse, parseSeveralResponses} from "../../api/parsers/api-result-parser";
import {collectResults} from "../../common/helpers/controller-results-collector";

class PostController {

    #ENABLE_LOGS = process.env.ENABLE_LOGS

    async getPostFullInformation(postId, token) {
        const pageParamsRequestBody = {
            page_number: 1,
            page_size: 20
        }
        const getPostFetch = postsApiEndpoints.getPostById
        const getPostCommentsFetch = postsApiEndpoints.getPostComments
        const getPostReactionsCountFetch = postsApiEndpoints.getPostReactionsCount
        const getPostTagsFetch = postsApiEndpoints.getPostTags
        const multiplyFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const getPostAsync = multiplyFetch
            .run(() => getPostFetch(postId, {token}))
        const getPostCommentsAsync = multiplyFetch
            .run(() => getPostCommentsFetch(postId, {token, body: pageParamsRequestBody}))
        const getPostReactionsCountAsync = multiplyFetch
            .run(() => getPostReactionsCountFetch(postId, {token}))
        const getPostTagsAsync = multiplyFetch
            .run(() => getPostTagsFetch(postId, {token}))

        const getPostResult = await getPostAsync.synchronize()
        const getPostCommentsResult = await getPostCommentsAsync.synchronize()
        const getPostReactionsCountResult = await getPostReactionsCountAsync.synchronize()
        const getPostTagsResult = await getPostTagsAsync.synchronize()

        return parseSeveralResponses([
            getPostResult, getPostCommentsResult,
            getPostReactionsCountResult, getPostTagsResult,
        ], (responses) => {
            return collectResults([
                {alias: 'post', answer: responses[0].body},
                {alias: 'post_comments', answer: responses[1].body},
                {alias: 'post_reactions_count', answer: responses[2].body},
                {alias: 'post_tags', answer: responses[3].body}
            ])
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
}

export default PostController;