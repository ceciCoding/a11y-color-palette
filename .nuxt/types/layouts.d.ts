import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "custom" | "default"
declare module "/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}