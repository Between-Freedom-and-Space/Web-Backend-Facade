import {MultipleFetch, Response} from 'multiple-fetch'

describe('MultipleFetch', () => {
    let mFetch = undefined

    beforeEach(() => {
        mFetch = new MultipleFetch(false)
    })

    it('should be defined as a class', () => {
        expect(MultipleFetch).toBeDefined()
    })

    it('should sets loggerStatus', () => {
        expect(mFetch.loggerStatus).toBeFalsy()
    })

    it.each([
        ['loggerStatus'],
        ['fetchCount']
    ])('object should contains %s', (key) => {
        expect(Object.keys(mFetch)).toContain(key)
    })

    it('run should returns an object of Response', () => {
        const testFetch = () => new Promise(resolve => resolve(true))
        expect(mFetch.run(testFetch)).toBeInstanceOf(Response)
    })

    it('should works with more than one case', async () => {
        const array = new Array(0)
        for (let id = 1; id <= 5; id++) {
            array.push(mFetch.run(() => new Promise(resolve => {
                const timeout = setTimeout(() => {
                    resolve(id)
                    clearTimeout(timeout)
                }, id * 1000)
            })))

            // Checks adding fetch for running with fetchCount
            expect(mFetch.fetchCount).toBe(id)
        }

        // Checking for every process has it's resolved value
        array.forEach(async (item, id) => {
            const synced = await item.synchronize()
            expect(synced).toBe(id + 1)
        })
    })
})