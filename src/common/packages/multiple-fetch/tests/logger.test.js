import {Logger} from "../models/logger";

describe('MultipleFetch', () => {
    it('should be defined as a class', () => {
        expect(Logger).toBeDefined()
    })

    it.each([
        ['start'],
        ['success'],
        ['fail']
    ])('returned from log() object should contains %s', (key) => {
        expect(Object.keys(Logger.log())).toContain(key)
    })
})