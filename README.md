#  is-git [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> check if dir is git directory or not


## Install

```sh
$ npm install --save is-git
```


## Usage

##### NodeJS

```js
var isGit = require('is-git');
isGit("/path/folder"); //true

isGit("*"); //true

isGit(); //true
```

##### cli

```sh
$ npm install --global is-git
$ is-git --help
```


## Report Issue

[issue-url]


## License

MIT © [Yashprit](yashprit.github.io)

[issue-url]: https://github.com/yashprit.github.com/is-git/issues
[npm-url]: https://npmjs.org/package/is-git
[npm-image]: https://badge.fury.io/js/is-git.svg
[travis-url]: https://travis-ci.org/yashprit.github.com/is-git
[travis-image]: https://travis-ci.org/yashprit.github.com/is-git.svg?branch=master
