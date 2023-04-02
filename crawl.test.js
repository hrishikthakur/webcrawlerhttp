// import normalizeURL function from the crawl.js file
const {normalizeURL} = require('./crawl');

// import two more functions from jest
const {test, expect} = require('@jest/globals');

// test 1: use the test function from jest to create a test named "normalizeURL strip protocol"
test('normaliseURL strip protocol', () => {
    const input = 'https://blog.boot.dev/path';
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected);
})

// test 2: remove trailing slash
test('normaliseURL strip trailing slash', () => {
    const input = 'https://blog.boot.dev/path/';
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected);
})

// test 3: URL is case insensitive, hence URL constructor does this conversion for us
test('normaliseURL capitals', () => {
    const input = 'https://BLOG.boot.dev/path/';
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected);
})