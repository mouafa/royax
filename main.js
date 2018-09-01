const { readImage, writeImage } = require('./lib/image')
const roya = require('roya')

async function main(img1Path, img2Path, writeTo, options) {
  let [err0, img1] = await readImage(img1Path)
  if (err0) return [err0]
  const [err1, img2] = await readImage(img2Path)
  if (err1) return [err1]

  const res = roya(img1.data, img2.data, options)
  if (writeTo) {
    const data = res.data
    const width = img1.width || img2.width
    const height = img1.height || img2.height
    const [err2] = await writeImage(writeTo, { data, width, height })
    if (err2) return [err2]
  }
  return [null, res]
}

module.exports = main
