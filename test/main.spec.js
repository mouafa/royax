const path = require('path')
const fs = require('fs')

const royax = require('../main')

const darkImgPath = path.resolve(__dirname, '../img/dark.png')
const lightImgPath = path.resolve(__dirname, '../img/light.png')

const diffImgPath = path.resolve(__dirname, './diff.ignore.png')

describe('Royax', () => {
  beforeEach(() => {
    try {
      fs.unlinkSync(diffImgPath)
    } catch (e) {}
  })

  it('should return expected schema without writing', async () => {
    const [err, result] = await royax(darkImgPath, lightImgPath)

    expect(err).toBeFalsy()
    expect(result).toEqual(
      expect.objectContaining({
        data: expect.any(Object),
        match: expect.any(Number),
        missmatch: expect.any(Number)
      })
    )
    expect(fs.existsSync(diffImgPath)).toBeFalsy()
  })

  it('should return expected schema and write image', async () => {
    const [err, result] = await royax(darkImgPath, lightImgPath, diffImgPath)

    expect(err).toBeFalsy()
    expect(result).toEqual(
      expect.objectContaining({
        data: expect.any(Object),
        match: expect.any(Number),
        missmatch: expect.any(Number)
      })
    )
    expect(fs.existsSync(diffImgPath)).toBeTruthy()
  })

  it('should handle error | readImage 1', async () => {
    const [err, result] = await royax('invalid/path', lightImgPath, diffImgPath)

    expect(err).toBeTruthy()
    expect(result).toBeFalsy()
    expect(fs.existsSync(diffImgPath)).toBeFalsy()
  })

  it('should handle error | readImage 2', async () => {
    const [err, result] = await royax(lightImgPath, 'invalid/path', diffImgPath)

    expect(err).toBeTruthy()
    expect(result).toBeFalsy()
    expect(fs.existsSync(diffImgPath)).toBeFalsy()
  })
})
