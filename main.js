const { readImage, writeImage } = require('./lib/image')
const farq = require('farq')

async function diff(img1Path, img2Path, options, writeTo) {
  let [err, data] = await readImage(img1Path)
  if (err) return [err]
  img1 = data
  ;[err, data] = await readImage(img2Path)
  if (err) return [err]
  img2 = data

  const res = farq(img1.data, img2.data, options)
  if (writeTo) {
    const data = res.data
    const width = img1.width || img2.width
    const height = img1.height || img2.height
    await writeImage(writeTo, { data, width, height })
  }
  return [null, res]
}

module.exports = diff
