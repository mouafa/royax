const path = require('path')
const fs = require('fs')

const main = require('../main')

const darkImgPath = path.resolve(__dirname, '../img/dark.png')
const lightImgPath = path.resolve(__dirname, '../img/light.png')

const diffImgPath = path.resolve(__dirname, './diff.ignore.png')

describe('Main | readImage', () => {
  it('should return expected schema', async () => {
    const [err, result] = await main(darkImgPath, lightImgPath)

    expect(err).toBeFalsy()
    expect(result).toEqual(
      expect.objectContaining({
        data: expect.any(Object),
        match: expect.any(Number),
        missmatch: expect.any(Number)
      })
    )
  })

  it('should return expected schema', async () => {
    const [err, result] = await main(darkImgPath, lightImgPath, diffImgPath)

    expect(err).toBeFalsy()
    expect(result).toEqual(
      expect.objectContaining({
        data: expect.any(Object),
        match: expect.any(Number),
        missmatch: expect.any(Number)
      })
    )
  })

  it('should handle error | readImage 1', async () => {
    const [err, result] = await main('invalid/path', lightImgPath, diffImgPath)

    expect(err).toBeTruthy()
    expect(result).toBeFalsy()
  })

  it('should handle error | readImage 2', async () => {
    const [err, result] = await main(lightImgPath, 'invalid/path', diffImgPath)

    expect(err).toBeTruthy()
    expect(result).toBeFalsy()
  })
})
