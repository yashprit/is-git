'use strict';

var exists = require("fs").exists;

var isGit = function(path, callback) {

  if (path === undefined || path === "*") {
    var dir = process.cwd();
  } else {
    if ((/\/$/).test(path)) {
      path += ".git";
    } else {
      path += "/.git";
    }
    var dir = path;
  }
  console.log(dir)
  if (typeof callback === "function") {
    exists(dir, function(err, isExists) {
      if (err || isExists) {
        callback(false);
      } else {
        callback(true)
      }
    })
  } else {
    exists(dir, function(isExists) {
      console.log(isExists)
      return isExists;
    });
  }
}

module.exports = isGit;
