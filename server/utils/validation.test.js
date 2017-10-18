const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var res = isRealString(13);
    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var res = isRealString("   ");
    expect(res).toBe(false);
  });

  it('should allow strings with non-space characters', () => {
  var res = isRealString("L o t R  ");
    expect(res).toBe(true);
  });
});
