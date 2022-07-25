import {postsApiEndpoints} from "../../api/posts-api.js";
import MultipleFetch from "multiple-fetch";

class PostController {

    #ENABLE_LOGS = process.env.ENABLE_LOGS

    async getPostFullInformation(postId, token) {
        const getPostFetch = postsApiEndpoints.getPostById
        const getPostCommentsFetch = postsApiEndpoints.getPostComments
        const getPostReactionsFetch = postsApiEndpoints.getPostReactions
        const getPostTagsFetch = postsApiEndpoints.getPostTags
        const multiplyFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const getPostAsync = multiplyFetch.run(() => getPostFetch(postId, token))
        const getPostCommentsAsync = multiplyFetch.run(() => getPostCommentsFetch(postId, token))
        const getPostReactionsAsync = multiplyFetch.run(() => getPostReactionsFetch(postId, token))
        const getPostTagsAsync = multiplyFetch.run(() => getPostTagsFetch(postId, token))

        const getPostResult = await getPostAsync.synchronize()
        const getPostCommentsResult = await getPostCommentsAsync.synchronize()
        const getPostReactionsResult = await getPostReactionsAsync.synchronize()
        const getPostTagsResult = await getPostTagsAsync.synchronize()

    }

    async commentPost(postId, comment, token) {
        const commentPostFetch = postsApiEndpoints.commentPost
        const multiplyFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const commentPostResult = await multiplyFetch
            .run(() => commentPostFetch(postId, {body: comment, token}))
            .synchronize()
    }

    async reactPost(postId, react, token) {
        const reactPostFetch = postsApiEndpoints.reactPost
        const multiplyFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const reactPostResult = await multiplyFetch
            .run(() => reactPostFetch(postId, {body: react, token}))
            .synchronize()
    }
}

export default PostController;