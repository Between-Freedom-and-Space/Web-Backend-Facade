import multipleFetch from 'multiple-fetch'

describe('multipleFetch', () => {
    it('should be defined as a function', () => {
        expect(multipleFetch).toBeInstanceOf(Function)
    })

    it('should returns an object with the same keys', () => {
        const objectParam = {key1: {}, key2: {}, key3: {}}
        const transform = (object) => JSON.stringify(Object.keys(object).sort())

        const expected = transform(objectParam)
        const received = transform(multipleFetch(objectParam))
        expect(received).toBe(expected)
    })

    it('should returns an empty object for falsy argument', () => {
        expect(multipleFetch()).toBeInstanceOf(Object);
        expect(multipleFetch(undefined)).toBeInstanceOf(Object);
        expect(multipleFetch(null)).toBeInstanceOf(Object);

        expect(Object.entries(multipleFetch())).toHaveLength(0);
        expect(Object.entries(multipleFetch(undefined))).toHaveLength(0);
        expect(Object.entries(multipleFetch(null))).toHaveLength(0);
    })
})