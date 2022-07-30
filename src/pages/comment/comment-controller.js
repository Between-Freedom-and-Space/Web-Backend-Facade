import {commentsApiEndpoints} from "../../api/comments-api.js";
import MultipleFetch from "multiple-fetch";
import {parseResponse} from "../../api/parsers/api-result-parser.js";

class CommentController {

    #ENABLE_LOGS = process.env.ENABLE_LOGS

    async reactComment(commentId, react, token) {
        const reactFetch = commentsApiEndpoints.reactComment
        const multiFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const result = await multiFetch
            .run(() => reactFetch(commentId, {token, body: react}))
            .synchronize()
        return parseResponse(result, (response) => {
            return response.body
        })
    }

    async removeReactComment(commentId, token) {
        const removeReactFetch = commentsApiEndpoints.removeReactComment
        const multiFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const result = await multiFetch
            .run(() => removeReactFetch(commentId, {token}))
            .synchronize()
        return parseResponse(result, (response) => {
            return response.body
        })
    }

    async deleteComment(commentId, token) {
        const deleteFetch = commentsApiEndpoints.deleteComment
        const multiFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const result = await multiFetch
            .run(() => deleteFetch(commentId, {token}))
            .synchronize()
        return parseResponse(result, (response) => {
            return response.body
        })
    }
}

export default CommentController