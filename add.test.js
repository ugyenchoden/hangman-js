const { default: TestRunner } = require("jest-runner")
const add = require('./add');

test('returns the sum of two number', () => {
    expect(add(1,2)).toBe(3)
})