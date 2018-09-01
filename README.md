# RoyaX

RoyaX, wrapper for Roya image diffing library

[![npm version](https://badge.fury.io/js/royax.svg)](https://badge.fury.io/js/royax)
[![Coverage Status](https://coveralls.io/repos/github/mouafa/royax/badge.svg?branch=master)](https://coveralls.io/github/mouafa/royax?branch=master)
[![Build Status](https://api.travis-ci.org/mouafa/royax.svg?branch=master)](https://travis-ci.org/mouafa/royax#)

## Installation

using yarn

```bash
yarn add royax
```

using npm

```bash
npm i -S royax
```

### API

```
royax(img1Path, img2Path, [,outputImgPath,  options])
```

`img1Path`, `img2Path` — Path to image file (png files)

`outputImgPath` — Path to place the output diff image, if it's not provided the write to disk will be omitted

`options` is a Roya option object

## Usage

```js
const royax = require('royax')

royax('path/to/img1.png', 'path/to/img1.png', 'path/to/diff.png')
```

**P.S.** image dimensions must be equal.
