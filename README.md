#  is-git [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> check if dir is git directory or not


## Install

```sh
$ npm install --save is-git
```

## Usage


## Example

### JavaScript

```js
var isGit = require('is-git');
isGit("/path/folder"); // or false

isGit("*"); //true or false

isGit(); //true or false
```

### Command Line reference 

```sh
$ npm install --g git-scope-config
$ is-git --path path/to/git/folder
```

## Methods

```js
var isGit = require('is-git');
isGit("/path/folder"); // or false

isGit("*"); //true or false

isGit(); //true or false
```

### isGit([path], cb)

Check if current folder is git folder or not


## Run Test
```sh
npm test
```

## Contribute or Report Issue
For bugs and feature requests, [please create an issue][issue-url].


## License

MIT © [Yashprit](yashprit.github.io)

[issue-url]: https://github.com/yashprit/is-git/issues
[npm-url]: https://npmjs.org/package/is-git
[npm-image]: https://badge.fury.io/js/is-git.svg
[travis-url]: https://travis-ci.org/yashprit/is-git
[travis-image]: https://travis-ci.org/yashprit/is-git.svg?branch=master
