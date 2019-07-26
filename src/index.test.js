import {expect} from 'chai';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', () => {
    let fs = require('fs');
    let jsdom = require('jsdom');
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.querySelector('h1');
      expect(h1.innerHTML).to.equal("Hello World!");
      window.close();
    });
  })
})
