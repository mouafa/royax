const fs = require('fs')
const PNG = require('pngjs').PNG

function readImage(pth) {
  return new Promise(resolve => {
    const img = fs
      .createReadStream(pth)
      .on('error', e => resolve([e]))
      .pipe(new PNG())
      .on('parsed', () => resolve([null, { data: img.data, width: img.width, height: img.height }]))
      .on('error', e => resolve([e]))
  })
}

function writeImage(writeTo, { data, width, height }) {
  const img = new PNG({ width, height })
  img.data = data
  return new Promise(resolve => {
    try {
      img
        .pack()
        .pipe(fs.createWriteStream(writeTo))
        .on('finish', () => resolve([null, 'done']))
        .on('error', e => resolve([e]))
    } catch (error) {
      resolve([error])
    }
  })
}

module.exports = {
  readImage,
  writeImage
}
