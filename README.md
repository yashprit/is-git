#  is-git [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

> check if dir is git directory or not


## Install

```sh
$ npm install --save is-git
```

## Usage

##### api

```js
var isGit = require('is-git');
isGit("/path/folder"); // or false

isGit("*"); //true or false

isGit(); //true or false
```

##### cli

```sh
$ npm install --global is-git
$ is-git (check in current working directory)
```


## Report Issue

[issue-url]


## License

MIT © [Yashprit](yashprit.github.io)

[issue-url]: https://github.com/yashprit/is-git/issues
[npm-url]: https://npmjs.org/package/is-git
[npm-image]: https://badge.fury.io/js/is-git.svg
[travis-url]: https://travis-ci.org/yashprit/is-git
[travis-image]: https://travis-ci.org/yashprit/is-git.svg?branch=master
