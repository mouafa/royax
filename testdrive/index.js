/* lib */
const royax = require('../')

royax('./fixture/img1.png', './fixture/img2.png', './fixture/diff_default.png')
royax('./fixture/img1.png', './fixture/img2.png', './fixture/diff_higher_threshold.png', { threshold: 0.5 })
royax('./fixture/img1.png', './fixture/img2.png', './fixture/diff_yellow.png', { highlightColor: [255, 255, 0] })
royax('./fixture/img1.png', './fixture/img2.png', './fixture/diff_solid.png', { highlightFade: false })
royax('./fixture/img1.png', './fixture/img2.png', './fixture/diff_transparent.png', { transparent: true, highlightFade: false })
royax('./fixture/img1.png', './fixture/img2.png', './fixture/diff_overlapse.png', { overlapse: true, transparent: true })

royax('./fixture/img1.png', './fixture/img2.png', './fixture/diff_method_rgb.png', { method: 'rgb', highlightFade: false })
royax('./fixture/img1.png', './fixture/img2.png', './fixture/diff_method_rgbTuned.png', { method: 'rgbTuned', highlightFade: false })
royax('./fixture/img1.png', './fixture/img2.png', './fixture/diff_method_yiq.png', { method: 'yiq', highlightFade: false })
royax('./fixture/img1.png', './fixture/img2.png', './fixture/diff_method_yiqTuned.png', { method: 'yiqTuned', highlightFade: false })
