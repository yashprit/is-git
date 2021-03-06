'use strict';

var parser = require('iniparser').parse;
var exists = require('fs').exists;

var getFolderName = function(path) {
  return path.split("/").pop();
}

var isGit = function(path, cb) {
  if (typeof path === "function") {
    cb = path;
    path = "*";
  }

  if (typeof path === "undefined") {
    path = "*";
  }

  //check only for path as "*", not undefined,
  //as we have already modified path value above
  if (path === "*") {
    var dir = process.cwd() + "/.git/config";
    var folder = getFolderName(process.cwd());
  } else if (typeof path === "string") {
    var folder = getFolderName(path);
    if ((/\/$/).test(path)) {
      path += ".git/config";
    } else {
      path += "/.git/config";
    }
    var dir = path;
  }

  //default value for callback
  cb = cb || function(err, data) {
    if (err) {
      console.error(err);
      return
    }
    console.log(data)
    return data;
  }

  exists(dir, function(exists) {
    if (exists) {
      parser(dir, function(err, data) {
        if (err) {
          cb(new Error("Error ocured while parsing config file"));
        }
        //check for
        if (data && data.core) {
          cb(null, true);
        } else {
          cb(null, false);
        }
        return;
      });
    } else {
      cb(null, false);
    }
  });
}

module.exports = isGit;
