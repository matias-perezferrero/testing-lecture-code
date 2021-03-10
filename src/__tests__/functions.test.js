const { sum, sayHello } = require('../functions');

describe('function sum', () => {
    test('sum should return the sum of a and b if a and b are positive', () => {
        expect(sum(1, 2)).toBe(3)
        expect(sum(1, 4)).toBe(5)
        expect(sum(1, 2)).not.toBe(4)
    })
    
    test('sum should throw a corrupted balance error if a or b is negative', () => {
        expect(() => sum(-1, 2)).toThrow('Corrupted bank account balance')
    })
    
    test('sum should throw an invalid argument error if a or b is not a number', () => {
        expect(() => sum(' ', 2)).toThrow('Invalid argument(s)')
        expect(() => sum(2, {})).toThrow('Invalid argument(s)')
    })
})

test('sayHello should return hello', () => {
    expect(sayHello()).toEqual('hello')
})