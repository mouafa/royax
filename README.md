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
royax(img1Path, img2Path, [,diffImgPath,  options])
```

`img1Path`, `img2Path` — Path to image file (png files)

`diffImgPath` — Path to place the output diff image, if it's not provided the write to disk will be omitted

`options` is a Roya option object

| Property       | Description                                                                                                    | Default     |
| -------------- | -------------------------------------------------------------------------------------------------------------- | ----------- |
| threshold      | Matching threshold, ranges from 0 to 1. Smaller values make the comparison more sensitive                      | 0.1         |
| highlightFade  | Highlight color intensity will depend on the pixel ditance value                                               | true        |
| highlightColor | The used highlight color, should be an array of [R,G,B] values                                                 | [255, 0, 0] |
| transparent    | Whether to keep the original image ot to use a blank convas to highlight the diff                              | false       |
| overlapse      | Whether to use the highlight color or use the changing pixel itself                                            | false       |
| method         | Matching and diffing method to be used, should be one of the available methods, rgb, rgbTuned, yiq or yiqTuned | 'rgb'       |

**P.S.** rgb method is the fastest but it might not be the best for your usecase, try the others method and pick the right one for you.

### Example:

| img1                            | img2                            |
| ------------------------------- | ------------------------------- |
| ![](testdrive/fixture/img1.png) | ![](testdrive/fixture/img2.png) |

| options                                        | result                                           |
| ---------------------------------------------- | ------------------------------------------------ |
| `undefined`                                    | ![](testdrive/fixture/diff_default.png)          |
| `{ threshold: 0.5 }`                           | ![](testdrive/fixture/diff_higher_threshold.png) |
| `{ highlightColor: [255, 255, 0] }`            | ![](testdrive/fixture/diff_yellow.png)           |
| `{ highlightFade: false }`                     | ![](testdrive/fixture/diff_solid.png)            |
| `{ transparent: true, highlightFade: false }`  | ![](testdrive/fixture/diff_transparent.png)      |
| `{ overlapse: true, transparent: true }`       | ![](testdrive/fixture/diff_overlapse.png)        |
|                                                |
| `{ method: 'rgb', highlightFade: false }`      | ![](testdrive/fixture/diff_method_rgb.png)       |
| `{ method: 'rgbTuned', highlightFade: false }` | ![](testdrive/fixture/diff_method_rgbTuned.png)  |
| `{ method: 'yiq', highlightFade: false }`      | ![](testdrive/fixture/diff_method_yiq.png)       |
| `{ method: 'yiqTuned', highlightFade: false }` | ![](testdrive/fixture/diff_method_yiqTuned.png)  |

## Usage

```js
const royax = require('royax')

royax('path/to/img1.png', 'path/to/img1.png', 'path/to/diff.png')
```

**P.S.** image dimensions must be equal.
