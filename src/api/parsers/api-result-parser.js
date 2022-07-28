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

export function parseSeveralResponses(responses, successAction) {
    let errorResponses = responses
        .filter(response => response.status !== 200)
    if (errorResponses.isEmpty()) {
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