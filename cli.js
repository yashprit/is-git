#!/usr/bin/env node

'use strict';
var isGit = require('./');
var args = process.argv;
var pathIndex = args.indexOf('--path') + 1;
var path = pathIndex ? args[pathIndex] : undefined;

isGit(path);
