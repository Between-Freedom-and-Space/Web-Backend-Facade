import {parseResponse, parseSeveralResponses} from "../api-result-parser.js";

describe('parseResponse', () => {
    it('should be defined as function', () => {
        expect(parseResponse).toBeInstanceOf(Function)
    })

    it('should call action when status 200', () => {
        const response = {
            status: 200,
            body: 'Test'
        }
        const action = jest.fn(response => `!${response?.status}`)
        const received = parseResponse(response, action)

        expect(received?.answer).toBe('!200')
        expect(received?.status).toBe(200)

        expect(action).toBeCalledTimes(1)
    })

    it('should return response body when status not 200', () => {
        const response = {
            status: 404,
            body: 'Test'
        }
        const action = jest.fn(response => `!${response?.status}`)
        const received = parseResponse(response, action)

        expect(received?.answer).toBe('Test')
        expect(received?.status).toBe(404)

        expect(action).toBeCalledTimes(0)
    })
})

describe('parseSeveralResponses', () => {
    it('should be defined as function', () => {
        expect(parseSeveralResponses).toBeInstanceOf(Function)
    })

    it('should call action when all statuses 200', () => {
        const response1 = {
            status: 200,
            body: 'Test1'
        }
        const response2 = {
            status: 200,
            body: 'Test2'
        }
        const action = jest.fn((responses) => `${responses[0].body} ${responses[1].body}`)
        const received = parseSeveralResponses([response1, response2], action)

        expect(received?.status).toBe(200)
        expect(received?.answer).toBe('Test1 Test2')

        expect(action).toBeCalledTimes(1)
    })

    it ('should return first not 200 response', () => {
        const response1 = {
            status: 200,
            body: 'Test1'
        }
        const response2 = {
            status: 404,
            body: 'Test2',
        }
        const response3 = {
            status: 401,
            body: 'Test3'
        }
        const action = jest.fn((responses) => 'Action')
        const received = parseSeveralResponses(
            [response1, response2, response3], action
        )

        expect(received?.status).toBe(404)
        expect(received?.answer).toBe('Test2')

        expect(action).toBeCalledTimes(0)
    })
})

