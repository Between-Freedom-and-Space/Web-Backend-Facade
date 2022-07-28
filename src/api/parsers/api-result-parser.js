export function parseResponse(response, successAction) {
    if (response.status === 200) {
        return {
            status: response.status,
            answer: successAction(response)
        }
    }
    return {
        status: response.status,
        answer: response.body
    }
}