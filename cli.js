#!/usr/bin/env node

'use strict';
var isGit = require('./');
var args = process.argv;
var pathIndex = args.indexOf('--path') + 1;
var path = pathIndex ? args[pathIndex] : undefined;

isGit(path, function(err, data) {
  if (err) {
    console.error(err);
  }
  if (data) {
    console.log("this is git folder");
  } else {
    console.warn("this is not git folder");
  }
});
