import {Response} from "../models/response";

const RESOLVE = 'test'

describe('Response', () => {
    let response = undefined

    beforeEach(() => {
        const callback = () => new Promise(resolve => resolve(RESOLVE))
        response = new Response({callback, log: false, id: 1})
    })

    it('should be defined as a class', () => {
        expect(Response).toBeDefined()
    })

    it.each([
        ['promise'],
        ['synchronize']
    ])('object should contains %s', (key) => {
        expect(Object.keys(response)).toContain(key)
    })

    it('should synchronize', async () => {
        const synced = await response.synchronize()
        expect(synced).toBe(RESOLVE)
    })

    it('should resolve with undefined for wrong callback', async () => {
        response = new Response({callback: null, log: false, id: 1})
        const synced = await response.synchronize()
        expect(synced).toBeUndefined()
    })
})