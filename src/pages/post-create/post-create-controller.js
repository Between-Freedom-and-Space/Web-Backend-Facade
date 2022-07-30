import {postsApiEndpoints} from "../../api/posts-api";
import MultipleFetch from "multiple-fetch";
import {parseResponse} from "../../api/parsers/api-result-parser";

class PostCreateController {

    #ENABLE_LOGS = process.env.ENABLE_LOGS

    async createPost(post, token) {
        const createFetch = postsApiEndpoints.createPost
        const multiFetch = new MultipleFetch(this.#ENABLE_LOGS)

        const result = await multiFetch
            .run(() => createFetch({token, body: post}))
            .synchronize()
        return parseResponse(result, (response) => {
            return response.body
        })
    }
}

export default PostCreateController