var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Chris';
    var text = 'Some Message';
    var res = generateMessage(from, text);

    expect(res).toInclude({from, text});
    expect(res.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Chris';
    var long = 1;
    var lat = 2;
    var url = `http://www.google.com/maps?q=${lat},${long}`
    var res = generateLocationMessage(from, lat, long);

    expect(res).toInclude({from, url});
    expect(res.createdAt).toBeA('number');
  })
});
