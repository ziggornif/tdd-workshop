const words = require('./words');

describe('Word count', () => {
  it('should return 1 when only one word is present', () => {
    const count = words.count('Hello');
    expect(count).toEqual(1);
  });
});
