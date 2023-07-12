<script setup>
  import { hsl2Rgb, rgb2Hex, rgb2Hsl, rgbToHex } from 'colorsys'
  import { colorContrastRatioCalculator } from '@mdhnpm/color-contrast-ratio-calculator'
  import IcCopy from '@/assets/svg/copy.svg?inline'

  const data = reactive({
    h: 0,
    s: 100,
    l: 0,
    mode: 'hsl',
    theme: 'black',
    modes: ['hsl', 'hex', 'rgb'],
    palette: [],
    ratio100: 4.5,
    ratio300: 1.46,
    ratio600: 3.08,
    ratio700: 5.12,
    ratio800: 9,
    ratio900: 14.1,
    color100: null,
    color300: null,
    color600: null,
    color700: null,
    color800: null,
    color900: null,
    finished: false,
  })

  const contrastColorHex = computed(() => {
    return theme === 'black' ? '#000000' : '#ffffff'
  })

  // const contrastColorRgb = computed(() => {
  //   return theme === 'black' ? { r: 0, g: 0, b: 0 } : { r: 255, g: 255, b: 255 }
  // })

  const baseColorHSL = computed(() => {
    return { h: Number(h), s: Number(s), l: Number(l) }
  })

  const baseColorRgb = computed(() => {
    return hsl2Rgb(baseColorHSL.h, baseColorHSL.s, baseColorHSL.l)
  })

  const baseColorHex = computed(() => {
    return rgb2Hex(baseColorRgb.r, baseColorRgb.g, baseColorRgb.b)
  })

  const contrastRatio = computed(() => {
    return colorContrastRatioCalculator(baseColorHex, contrastColorHex)
  })

  const color100Hex = computed(() => {
    if (!data.color100) return null
    return rgb2Hex(data.color100)
  })

  // const color300Hex = computed(() => {
  //   if (!data.color300) return null
  //   return rgb2Hex(color300)
  // })

  // const color600Hex = computed(() => {
  //   if (!data.color600) return null
  //   return rgb2Hex(data.color600)
  // })

  const color700Hex = computed(() => {
    if (!data.color700) return null
    return rgb2Hex(data.color700)
  })

  // const color800Hex = computed(() => {
  //   if (!data.color800) return null
  //   return rgb2Hex(data.color800)
  // })

  // const color900Hex = computed(() => {
  //   if (!data.color900) return null
  //   return rgb2Hex(data.color900)
  // })

  const bgClass = computed(() => {
    return {
      background: baseColorHex,
    }
  })

  const sortedPalette = computed(() => {
    const paletteCopy = [...data.palette]
    return paletteCopy.sort((a, b) => {
      return a.name - b.name
    })
  })

  function setHue(value) {
    data.h = value
  }

  function setLight(value) {
    data.l = value
  }

  function setSaturation(value) {
    data.s = value
  }

  // function paletteColorRgb(color) {
  //   return rgb2Hex(color.r, color.g, color.b)
  // }

  function get700() {
    let newColor
    if (contrastRatio === ratio700) {
      color700 = baseColorRgb
      data.palette.push({
        name: '700',
        rgb: color700,
        hex: rgb2Hex(color700.r, color700.g, color700.b),
        hsl: rgb2Hsl(color700.r, color700.g, color700.b),
        ratio: `(${data.ratio700}:1 on background)`,
      })
      return
    } else if (contrastRatio > data.ratio700 && theme === 'black') {
      newColor = $color.darken(baseColorHex, contrastColorHex, data.ratio700)
    } else if (contrastRatio > data.ratio700 && theme === 'white') {
      newColor = $color.lighten(baseColorHex, contrastColorHex, data.ratio700)
    } else if (theme === 'black') {
      newColor = $color.lighten(baseColorHex, contrastColorHex, data.ratio700)
    } else {
      newColor = $color.darken(baseColorHex, contrastColorHex, data.ratio700)
    }
    color700 = hsl2Rgb(newColor.hsl)
    palette.push({
      name: '700',
      rgb: color700,
      hex: rgb2Hex(color700.r, color700.g, color700.b),
      hsl: rgb2Hsl(color700.r, color700.g, color700.b),
      ratio: `(${data.ratio700}:1 on background)`,
      fontColor: color100,
    })
  }

  function get100() {
    let newColor
    if (theme === 'black') {
      newColor = $color.darken(color700Hex, color700Hex, data.ratio100)
    } else {
      newColor = $color.lighten(color700Hex, color700Hex, data.ratio100)
    }
    color100 = hsl2Rgb(newColor.hsl)
    data.palette.push({
      name: '100',
      rgb: color100,
      hex: rgb2Hex(color100.r, color100.g, color100.b),
      hsl: rgb2Hsl(color100.r, color100.g, color100.b),
      ratio: `(${newColor.ratio}:1 on 700)`,
    })
  }

  function get300() {
    let newColor
    if (theme === 'black') {
      newColor = $color.lighten(color100Hex, color100Hex, data.ratio300)
    } else {
      newColor = $color.darken(color100Hex, color100Hex, data.ratio300)
    }
    color300 = hsl2Rgb(newColor.hsl)
    data.palette.push({
      name: '300',
      rgb: color300,
      hex: rgb2Hex(color300.r, color300.g, color300.b),
      hsl: rgb2Hsl(color300.r, color300.g, color300.b),
      ratio: `(${newColor.ratio} on 100)`,
    })
  }

  function get600() {
    let newColor
    if (theme === 'black') {
      newColor = $color.lighten(color100Hex, color100Hex, data.ratio600)
    } else {
      newColor = $color.darken(color100Hex, color100Hex, data.ratio600)
    }
    color600 = hsl2Rgb(newColor.hsl)
    data.palette.push({
      name: '600',
      rgb: color600,
      hex: rgb2Hex(color600.r, color600.g, color600.b),
      hsl: rgb2Hsl(color600.r, color600.g, color600.b),
      ratio: `(${newColor.ratio} on 100)`,
    })
  }

  function get800() {
    let newColor
    if (theme === 'black') {
      newColor = $color.lighten(color100Hex, color100Hex, data.ratio800)
    } else {
      newColor = $color.darken(color100Hex, color100Hex, data.ratio800)
    }
    color800 = hsl2Rgb(newColor.hsl)
    data.palette.push({
      name: '800',
      rgb: color800,
      hex: rgb2Hex(color800.r, color800.g, color800.b),
      hsl: rgb2Hsl(color800.r, color800.g, color800.b),
      ratio: `(${newColor.ratio}:1 on 100)`,
    })
  }

  function get900() {
    let newColor
    if (theme === 'black') {
      newColor = $color.lighten(color100Hex, color100Hex, data.ratio900)
    } else {
      newColor = $color.darken(color100Hex, color100Hex, data.ratio900)
    }
    color900 = hsl2Rgb(newColor.hsl)
    data.palette.push({
      name: '900',
      rgb: color900,
      hex: rgb2Hex(color900.r, color900.g, color900.b),
      hsl: rgb2Hsl(color900.r, color900.g, color900.b),
      ratio: `(${newColor.ratio}:1 on 100)`,
      fontColor: color600,
    })
  }

  function generatePalette() {
    if (data.palette.length > 0) {
      data.palette = []
    }
    get700()
    get100()
    get300()
    get600()
    get800()
    get900()
    finished = true
  }

  function copyValue(value) {
    let copyValue
    if (mode === 'hsl') {
      copyValue = `hsl(${value.hsl.h}, ${value.hsl.s}%, ${value.hsl.l}%)`
    }
    const el = document.createElement('textarea')
    el.value = copyValue
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

  function getFontColor(color) {
    let hex
    switch (color) {
      case '100':
        hex = rgb2Hex(color800.r, color800.g, color800.b)
        break
      case '300':
        hex = rgbToHex(color900.r, color900.g, color900.b)
        break
      case '600':
        hex = rgbToHex(color100.r, color100.g, color100.b)
        break
      case '700':
        hex = rgbToHex(color100.r, color100.g, color100.b)
        break
      case '800':
        hex = rgbToHex(color100.r, color100.g, color100.b)
        break
      case '900':
        hex = rgbToHex(color100.r, color100.g, color100.b)
        break
      default:
        hex = theme === 'black' ? '#fff' : '#000'
    }
    return {
      color: hex,
    }
  }

  function getBgClass(color) {
    return {
      background: `rgb(${color.r}, ${color.g}, ${color.b})`,
    }
  }
</script>

<template>
  <div class="text-brand-800">
    <header class="mb-10 space-y-4 text-center">
      <h1 class="mb-10 text-6xl font-bold lg:text-8xl">Ho11y Method</h1>
      <div class="space-y-5">
        <h2 class="text-2xl font-bold lg:text-4xl">
          Accessible Color Palette Generator
        </h2>
        <p class="lg:px-44">
          This method has been created to make it easier to meet WCAG’s
          accessibility guidelines on color applications. It creates an easily
          combinable 6-shades monochromatic color palette that meets a11y
          requirements.
        </p>
      </div>
    </header>
    <main class="mx-auto rounded-md border-2 border-black bg-white py-8 px-12">
      <label for="mode">Mode</label>
      <select
        id="mode"
        v-model="mode"
        class="rounded-md bg-brand-800 text-white"
        name="mode"
      >
        <option value="hsl">HSL</option>
        <option value="hex">Hex</option>
        <option value="rgb">RGB</option>
      </select>
      <div
        class="mt-4 flex flex-col items-start justify-center gap-10 lg:mt-10 lg:flex-row lg:justify-between lg:gap-28"
      >
        <div>
          <ColorPicker
            :mode="mode"
            :bg-class="bgClass"
            @setHue="setHue"
            @setLight="setLight"
            @setSaturation="setSaturation"
          />
          <div class="mt-5 flex w-44 flex-col gap-3">
            <label for="theme">Background Color</label>
            <select id="theme" v-model="theme" class="rounded-md" name="theme">
              <option value="black">Black</option>
              <option value="white">White</option>
            </select>
          </div>
        </div>
        <div v-if="finished">
          <h2>Generated Palette</h2>
          <div class="flex-wrap gap-4 lg:flex">
            <div
              v-for="(color, index) in sortedPalette"
              :key="index"
              class="mt-5 mb-3 lg:mb-0"
            >
              <div
                class="h-28 w-full rounded-t-md border-2 border-black p-3 md:w-44"
                :style="getBgClass(color.rgb)"
              >
                <div>
                  <div
                    class="flex flex-col gap-2"
                    :style="getFontColor(color.name)"
                  >
                    <span class="font-semibold">{{ color.name }}</span>
                    <span class="text-xs">
                      {{ color.ratio }}
                    </span>
                  </div>
                </div>
              </div>
              <div
                class="flex h-9 w-44 items-center justify-between rounded-b-md border-2 border-t-0 border-black px-2"
              >
                <p v-if="mode === 'hsl'" class="text-sm">
                  <span class="font-bold">H:</span>
                  {{ color.hsl.h }}
                  <span class="font-bold">&nbsp;S:</span>
                  {{ color.hsl.s }}
                  <span class="font-bold">&nbsp;L:</span>
                  {{ color.hsl.l }}
                </p>
                <button
                  class="press"
                  :aria-label="`copy value ${color.name}`"
                  @click="copyValue(color)"
                >
                  <IcCopy :text="color.hex" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="mt-6 w-44 rounded-md border border-black p-4"
        @click="generatePalette"
      >
        Generate palette
      </button>
    </main>
  </div>
</template>

<style scoped>
  .press:active {
    transform: scale(0.95);
  }
</style>
