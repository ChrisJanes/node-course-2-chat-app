var expect = require('expect');

var {generateMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Chris';
    var text = 'Some Message';
    var res = generateMessage(from, text);

    expect(res).toInclude({from, text});
    expect(res.createdAt).toBeA('number');
  });
});
