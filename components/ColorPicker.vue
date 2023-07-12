<script setup>
  // import { hsl2Hex, hex2Rgb } from 'colorsys'

  defineProps({
    title: {
      type: String,
      default: 'Base Color',
    },

    bgClass: {
      type: String,
      required: true,
    },

    mode: {
      type: String,
      default: 'hsl',
    },
  })

  defineEmits(['setHue', 'setSaturation', 'setLight'])

  const data = reactive({
    h: 0,
    s: 100,
    l: 0,
    localHex: '',
  })

  // let hsl = computed(() => `hsl(${data.h}, ${data.s}% , ${data.l}%)`)

  // let hex = computed(() => {
  //   return hsl2Hex(data.h, data.s, data.l)
  // })

  // let rgb = computed(() => {
  //   return hex2Rgb(hex.value)
  // })
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="mt-5 flex flex-col items-end gap-5 lg:flex-row">
      <div
        class="h-36 w-44 rounded-md border-2 border-black"
        :style="bgClass"
      />
      <div class="flex flex-col gap-4">
        <div
          v-if="mode === 'hsl'"
          class="flex h-full flex-col justify-between gap-2"
        >
          <div class="flex gap-2">
            <label for="h">H</label>
            <input
              id="h"
              v-model="h"
              class="w-44 rounded-md border-2 border-black"
              type="number"
              max="360"
              min="0"
              @input="$emit('setHue', data.h)"
            />
          </div>
          <div class="flex items-center gap-2">
            <label for="s">S</label>
            <input
              id="s"
              v-model="s"
              class="w-44 rounded-md border-2 border-black"
              type="number"
              max="100"
              min="0"
              @input="$emit('setSaturation', data.s)"
            />
          </div>
          <div class="flex items-center gap-2">
            <label for="b">L</label>
            <input
              id="b"
              v-model="l"
              class="w-44 rounded-md border-2 border-black"
              type="number"
              max="100"
              min="0"
              @input="$emit('setLight', data.l)"
            />
          </div>
        </div>
        <div v-if="mode === 'hex'" class="flex items-center gap-2">
          <label for="hex">Hex</label>
          <input
            id="hex"
            v-model="localHex"
            class="w-44 rounded-md border-2 border-black"
            type="text"
          />
        </div>
      </div>
    </div>
  </div>
</template>
