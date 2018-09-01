const path = require('path')
const fs = require('fs')

const diff = require('../main')

const darkImgPath = path.resolve(__dirname, '../img/dark.png')
const lightImgPath = path.resolve(__dirname, '../img/light.png')
const mockPath = path.resolve(__dirname, '__mock__/dark.hex')
const hex = fs.readFileSync(mockPath, 'utf8')
const darkImgMockData = Buffer.from(hex, 'hex')

describe('Diff | readImage', () => {
  it('should return expected schema', async () => {
    const [err, result] = await diff(darkImgPath, darkImgPath)

    expect(err).toBeFalsy()
    expect(result).toEqual(
      expect.objectContaining({
        data: expect.any(Object),
        match: expect.any(Number),
        missmatch: expect.any(Number)
      })
    )
  })

  it('should return expected diff | no diff', async () => {
    const [err, result] = await diff(darkImgPath, darkImgPath)

    expect(err).toBeFalsy()
    expect(result).toEqual(
      expect.objectContaining({
        match: 1,
        missmatch: 0
      })
    )
  })

  it('should return expected diff | no diff', async () => {
    const [err, result] = await diff(darkImgPath, lightImgPath)

    expect(err).toBeFalsy()
    expect(result).toEqual(
      expect.objectContaining({
        match: 0,
        missmatch: 1
      })
    )
  })
})
