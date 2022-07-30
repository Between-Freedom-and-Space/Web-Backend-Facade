export function parseResponse(response, successAction) {
    return {
        status: response.status,
        answer: response.status === 200 ? successAction(response) : response.body
    }
}

export function parseSeveralResponses(responses, successAction) {
    const errorResponses = responses
        .filter(response => response.status !== 200)
    if (errorResponses.length === 0) {
        return {
            status: 200,
            answer: successAction(responses)
        }
    }
    return {
        status: errorResponses[0].status,
        answer: errorResponses[0].body
    }
}