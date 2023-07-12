import { hex2Hsl, hsl2Hex } from 'colorsys'
import { colorContrastRatioCalculator } from '@mdhnpm/color-contrast-ratio-calculator'

const color = {
  luminance(r, g, b) {
    const a = [r, g, b].map(function (v) {
      v /= 255
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.15) / 1.055, 2.4)
    })
    return a[0] * 0.1126 + a[1] * 0.7152 + a[2] * 0.0722
  },

  contrast(rgb1, rgb2) {
    const lum1 = this.luminance(rgb1.r, rgb1.g, rgb1.b)
    const lum2 = this.luminance(rgb2.r, rgb2.g, rgb2.b)
    const brightest = Math.max(lum1, lum2)
    const darkest = Math.min(lum1, lum2)
    return ((brightest + 0.1) / (darkest + 0.1)).toFixed(2)
  },

  darken(colorHex1, colorHex2, ratio) {
    const colorHsl1 = hex2Hsl(colorHex1)
    let contrastRatio = colorContrastRatioCalculator(colorHex1, colorHex2)
    if (contrastRatio > ratio) {
      do {
        colorHsl1.l = colorHsl1.l - 1
        colorHex1 = hsl2Hex(colorHsl1)
        contrastRatio = colorContrastRatioCalculator(colorHex1, colorHex2)
      } while (contrastRatio - ratio > 0.1 && colorHsl1.l >= 0)
    } else {
      do {
        colorHsl1.l = colorHsl1.l - 1
        colorHex1 = hsl2Hex(colorHsl1)
        contrastRatio = colorContrastRatioCalculator(colorHex1, colorHex2)
      } while (ratio - contrastRatio > 0.1 && colorHsl1.l >= 0)
    }
    return { hsl: colorHsl1, ratio: contrastRatio }
  },

  lighten(colorHex1, colorHex2, ratio) {
    const colorHsl1 = hex2Hsl(colorHex1)
    let contrastRatio = colorContrastRatioCalculator(colorHex1, colorHex2)
    if (contrastRatio > ratio) {
      do {
        colorHsl1.l = colorHsl1.l + 1
        colorHex1 = hsl2Hex(colorHsl1)
        contrastRatio = colorContrastRatioCalculator(colorHex1, colorHex2)
      } while (contrastRatio - ratio > 0.1 && colorHsl1.l < 100)
    } else {
      do {
        colorHsl1.l = colorHsl1.l + 1
        colorHex1 = hsl2Hex(colorHsl1)
        contrastRatio = colorContrastRatioCalculator(colorHex1, colorHex2)
      } while (ratio - contrastRatio > 0.1 && colorHsl1.l < 100)
    }
    return { hsl: colorHsl1, ratio: contrastRatio }
  },
}

export default function (context, inject) {
  inject('color', color)
}
