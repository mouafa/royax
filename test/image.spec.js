const path = require('path')
const fs = require('fs')

const { readImage, writeImage } = require('../lib/image')
const imgPath = path.resolve(__dirname, '../img/dark.png')
const mockPath = path.resolve(__dirname, '__mock__/dark.hex')
const hex = fs.readFileSync(mockPath, 'utf8')
const mockImgData = Buffer.from(hex, 'hex')

describe('Image | readImage', () => {
  it('should readImage properly', async () => {
    const [err, img] = await readImage(imgPath)
    const isEqual = mockImgData.compare(img.data) === 0

    expect(err).toBeFalsy()
    expect(isEqual).toBeTruthy()
  })

  it('should return error for invalid path', async () => {
    const [err, img] = await readImage('invalid/path')

    expect(err).toBeTruthy()
    expect(err.toString()).toEqual(expect.stringContaining('ENOENT: no such file or directory'))

    expect(img).toBeFalsy()
  })

  it('should return error for invalid image', async () => {
    const [err, img] = await readImage(mockPath)

    expect(err).toBeTruthy()
    expect(err.toString()).toEqual(expect.stringContaining('Invalid file signature'))

    expect(img).toBeFalsy()
  })
})

describe('Image | writeImage', () => {
  it('should readImage properly', async () => {
    const writeTo = path.resolve(__dirname, 'tmp.png')
    const [err, done] = await writeImage(writeTo, { data: mockImgData, width: 10, height: 10 })

    expect(err).toBeFalsy()
    expect(done).toBeTruthy()
  })
})
