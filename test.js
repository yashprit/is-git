'use strict';
var assert = require("assert");
var isGit = require("./");


it("should work if path is not provided", function(done) {
  isGit(function(err, data) {
    assert.equal(err, null, "should be null");
    assert.equal(data, true, "data should be true");
    done();
  });
})
