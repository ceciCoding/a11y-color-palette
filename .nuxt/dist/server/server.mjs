
// --------------------
// Request: /Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/nuxt/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ohmyfetch/dist/index.mjs ($id_780217c4)
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/paths.mjs ($id_45afd558)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/css.mjs ($id_61f9e10a)
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/plugins/server.mjs ($id_9a6979ea)
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/root-component.mjs ($id_3ac0ac02)
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/app-component.mjs ($id_c3c374a4)
// --------------------
const $id_5345282d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ohmyfetch/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/paths.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/css.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/plugins/server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/root-component.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/app-component.mjs");

if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_1__.$fetch.create({
    baseURL: __vite_ssr_import_2__.baseURL()
  });
}
let entry;
const plugins = __vite_ssr_import_3__.normalizePlugins(__vite_ssr_import_5__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_6__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp });
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#__nuxt");
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_0__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/vue/dist/vue.cjs.js
// Parents: 
// - /Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/nuxt/dist/app/entry ($id_5345282d)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/components.plugin.mjs ($id_ad8b1b7f)
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_80f433aa)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// - /pages/about.vue?macro=true ($id_9ddc318c)
// - /components/ColorPicker.vue ($id_cc354da9)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/about.vue ($id_a93ccd0b)
// - /pages/index.vue ($id_cca58e97)
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/dist.plugin.85eab33a.mjs ($id_9471e6b6)
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_0c5717a4)
// - /plugins/color.js ($id_084b04fd)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/imports.mjs ($id_f13f616f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/layouts.mjs ($id_5ee4df05)
// - /layouts/custom.vue ($id_d158cf1f)
// - /layouts/default.vue ($id_7689e89d)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// Dependencies: 

// --------------------
const $id_60f0615f = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/vue/dist/vue.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/vue/dist/vue.cjs.js\".")
  })


// --------------------
// Request: /node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - /Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/nuxt/dist/app/entry ($id_5345282d)
// Dependencies: 

// --------------------
const $id_780217c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/ohmyfetch/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/ohmyfetch/dist/index.mjs\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/paths.mjs
// Parents: 
// - /Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/nuxt/dist/app/entry ($id_5345282d)
// Dependencies: 
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// --------------------
const $id_45afd558 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const appConfig = {"baseURL":"/","buildAssetsDir":"/_nuxt/","assetsPath":{},"cdnURL":"","head":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]}}
const baseURL = () => appConfig.baseURL
Object.defineProperty(__vite_ssr_exports__, "baseURL", { enumerable: true, configurable: true, get(){ return baseURL }});
const buildAssetsDir = () => appConfig.buildAssetsDir
Object.defineProperty(__vite_ssr_exports__, "buildAssetsDir", { enumerable: true, configurable: true, get(){ return buildAssetsDir }});
const buildAssetsURL = (...path) => __vite_ssr_import_0__.joinURL(publicAssetsURL(), buildAssetsDir(), ...path)
Object.defineProperty(__vite_ssr_exports__, "buildAssetsURL", { enumerable: true, configurable: true, get(){ return buildAssetsURL }});
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? __vite_ssr_import_0__.joinURL(publicBase, ...path) : publicBase
}
Object.defineProperty(__vite_ssr_exports__, "publicAssetsURL", { enumerable: true, configurable: true, get(){ return publicAssetsURL }});;
}


// --------------------
// Request: /node_modules/ufo/dist/index.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/paths.mjs ($id_45afd558)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_614de060 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/ufo/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/ufo/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/index.mjs
// Parents: 
// - /Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/nuxt/dist/app/entry ($id_5345282d)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_0063df1b)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_6fe050f1)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_9871bba0)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /plugins/api.js ($id_d3728021)
// - /plugins/pinia-persisted.js ($id_023ebd7f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/imports.mjs ($id_f13f616f)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_161bfe9f)
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// --------------------
const $id_36927477 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/hookable/dist/index.mjs ($id_a2c811c4)
// - /node_modules/unctx/dist/index.mjs ($id_a569ca2d)
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// --------------------
const $id_e069d411 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/unctx/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/legacy-app.mjs");

const nuxtAppCtx = __vite_ssr_import_2__.getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = true ? options.ssrContext.runtimeConfig : __vite_ssr_import_0__.reactive(nuxtApp.payload.config);
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      if (true || prop === "public" || prop === "app") {
        return false;
      }
      target[prop] = value;
      target.public[prop] = value;
      return true;
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_3__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxtAppCtx.callAsync(nuxt, fn);
  } else {
    nuxtAppCtx.set(nuxt);
    return fn();
  }
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    const nuxtAppInstance = nuxtAppCtx.use();
    if (!nuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return nuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 

// --------------------
const $id_a2c811c4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/hookable/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/hookable/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/unctx/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 

// --------------------
const $id_a569ca2d = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/unctx/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/unctx/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/legacy-app.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// Dependencies: 
// - /node_modules/unenv/runtime/mock/proxy.mjs ($id_39e12da7)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// --------------------
const $id_a48341bc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = new Proxy(nuxtApp.vueApp, {
        get(source, p) {
          if (["$root", "constructor"].includes(p)) {
            return legacyApp;
          }
          return source[p] || nuxtApp[p];
        }
      });
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a48341bc)
// Dependencies: 

// --------------------
const $id_39e12da7 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/unenv/runtime/mock/proxy.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/unenv/runtime/mock/proxy.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_0063df1b)
// - /node_modules/nuxt/dist/app/composables/state.mjs ($id_7d872108)
// - /node_modules/nuxt/dist/app/composables/error.mjs ($id_6fe050f1)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// --------------------
const $id_b067a79a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.refreshNuxtData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.mjs");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useError }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLazyFetch }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt/dist/app/nuxt.mjs ($id_e069d411)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// --------------------
const $id_53345950 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 

// --------------------
const $id_f9a4a698 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/vue-router/dist/vue-router.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/vue-router/dist/vue-router.cjs.js\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.mjs ($id_53345950)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_d5b6a221 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  options.initialCache = options.initialCache ?? true;
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: __vite_ssr_import_1__.wrapInRef(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(!useInitialCache()),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = __vite_ssr_import_0__.unref(options.default());
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = initialFetch();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating && key in nuxt.payload.data) {
      asyncData.pending.value = false;
    } else if (instance && nuxt.payload.serverRendered && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else {
      initialFetch();
    }
    if (options.watch) {
      __vite_ssr_import_0__.watch(options.watch, () => asyncData.refresh());
    }
    const off = nuxt.hook("app:data:refresh", (keys) => {
      if (!keys || keys.includes(key)) {
        return asyncData.refresh();
      }
    });
    if (instance) {
      __vite_ssr_import_0__.onUnmounted(off);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  return __vite_ssr_import_2__.useNuxtApp().callHook("app:data:refresh", _keys);
}
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return refreshNuxtData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_df511336 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const wrapInRef = (value) => __vite_ssr_import_0__.isRef(value) ? value : __vite_ssr_import_0__.ref(value);
Object.defineProperty(__vite_ssr_exports__, "wrapInRef", { enumerable: true, configurable: true, get(){ return wrapInRef }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_0063df1b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_7d872108 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (__vite_ssr_import_0__.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/error.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_6fe050f1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useError = () => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  return __vite_ssr_import_0__.useState("error", () => true ? nuxtApp.ssrContext.error : nuxtApp.payload.error);
};
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const throwError = (_err) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  if (true) {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  } else {
    error.value = error.value || err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return throwError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/ohash/dist/index.mjs ($id_b1b82cf3)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_d5b6a221)
// --------------------
const $id_41f5ae4e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.mjs");

function useFetch(request, opts = {}) {
  if (true && opts.transform && !opts.key) {
    console.warn("[nuxt] You should provide a key for `useFetch` when using a custom transform function.");
  }
  const key = "$f_" + (opts.key || __vite_ssr_import_0__.hash([request, { ...opts, transform: null }]));
  const _request = __vite_ssr_import_1__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_1__.isRef(r) ? r.value : r;
  });
  const _fetchOptions = {
    ...opts,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    ...opts,
    watch: [
      _request,
      ...opts.watch || []
    ]
  };
  const asyncData = __vite_ssr_import_2__.useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions);
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(request, opts = {}) {
  return useFetch(request, {
    ...opts,
    lazy: true
  });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: /node_modules/ohash/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/fetch.mjs ($id_41f5ae4e)
// Dependencies: 

// --------------------
const $id_b1b82cf3 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/ohash/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/ohash/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/cookie-es/dist/index.mjs ($id_f4975261)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/destr/dist/index.mjs ($id_03d15ecd)
// - /node_modules/nuxt/dist/app/composables/ssr.mjs ($id_c4866ba7)
// - /node_modules/nuxt/dist/app/composables/utils.mjs ($id_df511336)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_511b441d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const CookieDefaults = {
  path: "/",
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_5__.wrapInRef(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const nuxtApp = __vite_ssr_import_6__.useNuxtApp();
    const writeFinalCookieValue = () => {
      if (cookie.value !== cookies[name]) {
        writeServerCookie(__vite_ssr_import_4__.useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(__vite_ssr_import_4__.useRequestEvent()?.req.headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    __vite_ssr_import_2__.appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 

// --------------------
const $id_f4975261 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/cookie-es/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/cookie-es/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/router.mjs ($id_db4d90a8)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_57d7ded6 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/h3/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/h3/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// Dependencies: 

// --------------------
const $id_03d15ecd = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/destr/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/destr/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.mjs ($id_511b441d)
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_c4866ba7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.event.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
function useRequestEvent(nuxtApp = __vite_ssr_import_0__.useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return useRequestEvent }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.mjs ($id_b067a79a)
// Dependencies: 
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_db4d90a8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_2__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const useActiveRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._activeRoute;
};
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return useActiveRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_2__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  if (false && isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  if (true) {
    const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = __vite_ssr_import_1__.joinURL(__vite_ssr_import_2__.useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => __vite_ssr_import_0__.sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 302));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// --------------------
const $id_161bfe9f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-link.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/index.mjs ($id_161bfe9f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_ffac87b5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return __vite_ssr_import_0__.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = __vite_ssr_import_2__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, true);
      });
      return () => {
        if (!isExternal.value) {
          return __vite_ssr_import_0__.h(__vite_ssr_import_0__.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue
          }, slots.default);
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        return __vite_ssr_import_0__.h("a", { href, rel, target }, slots.default?.());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = defineNuxtLink({ componentName: "NuxtLink" });
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/imports.mjs ($id_f13f616f)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// --------------------
const $id_b7351483 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/composables.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 
// - /node_modules/@vue/shared/dist/shared.cjs.js ($id_852b06a2)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_04ea9504 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

function useHead(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useHead(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
function useMeta(meta) {
  return useHead(meta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// Dependencies: 

// --------------------
const $id_852b06a2 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/@vue/shared/dist/shared.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/@vue/shared/dist/shared.cjs.js\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/css.mjs
// Parents: 
// - /Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/nuxt/dist/app/entry ($id_5345282d)
// Dependencies: 
// - /node_modules/@nuxtjs/tailwindcss/dist/runtime/tailwind.css ($id_0a1402e6)
// --------------------
const $id_61f9e10a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxtjs/tailwindcss/dist/runtime/tailwind.css");
;
}


// --------------------
// Request: /node_modules/@nuxtjs/tailwindcss/dist/runtime/tailwind.css
// Parents: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/css.mjs ($id_61f9e10a)
// Dependencies: 

// --------------------
const $id_0a1402e6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/*! tailwindcss v3.1.6 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-family:Space Grotesk,sans-serif;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::-webkit-backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.mx-auto{margin-left:auto;margin-right:auto}.mt-5{margin-top:1.25rem}.mb-10{margin-bottom:2.5rem}.mt-4{margin-top:1rem}.mb-3{margin-bottom:.75rem}.mt-6{margin-top:1.5rem}.flex{display:flex}.h-36{height:9rem}.h-full{height:100%}.h-28{height:7rem}.h-9{height:2.25rem}.w-44{width:11rem}.w-full{width:100%}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-5{gap:1.25rem}.gap-4{gap:1rem}.gap-2{gap:.5rem}.gap-10{gap:2.5rem}.gap-3{gap:.75rem}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.rounded-md{border-radius:.375rem}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.rounded-b-md{border-bottom-left-radius:.375rem;border-bottom-right-radius:.375rem}.border-2{border-width:2px}.border{border-width:1px}.border-t-0{border-top-width:0}.border-black{--tw-border-opacity:1;border-color:rgb(0 0 0/var(--tw-border-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-brand-800{--tw-bg-opacity:1;background-color:rgb(18 74 38/var(--tw-bg-opacity))}.p-3{padding:.75rem}.p-4{padding:1rem}.py-8{padding-bottom:2rem;padding-top:2rem}.px-12{padding-left:3rem;padding-right:3rem}.px-2{padding-left:.5rem;padding-right:.5rem}.text-center{text-align:center}.text-6xl{font-size:3.75rem;line-height:1}.text-2xl{font-size:1.5rem;line-height:2rem}.text-xs{font-size:.75rem;line-height:1rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.font-semibold{font-weight:600}.text-brand-800{--tw-text-opacity:1;color:rgb(18 74 38/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}@media (min-width:768px){.md\\:w-44{width:11rem}}@media (min-width:1024px){.lg\\:mt-10{margin-top:2.5rem}.lg\\:mb-0{margin-bottom:0}.lg\\:flex{display:flex}.lg\\:flex-row{flex-direction:row}.lg\\:justify-between{justify-content:space-between}.lg\\:gap-28{gap:7rem}.lg\\:px-44{padding-left:11rem;padding-right:11rem}.lg\\:text-8xl{font-size:6rem;line-height:1}.lg\\:text-4xl{font-size:2.25rem;line-height:2.5rem}}";
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/plugins/server.mjs
// Parents: 
// - /Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/nuxt/dist/app/entry ($id_5345282d)
// Dependencies: 
// - /node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_9871bba0)
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/components.plugin.mjs ($id_ad8b1b7f)
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/dist.plugin.85eab33a.mjs ($id_9471e6b6)
// - /plugins/api.js ($id_d3728021)
// - /plugins/color.js ($id_084b04fd)
// - /plugins/pinia-persisted.js ($id_023ebd7f)
// --------------------
const $id_9a6979ea = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/components.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/router.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/dist.plugin.85eab33a.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/plugins/api.js");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/plugins/color.js");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/plugins/pinia-persisted.js");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default,
  __vite_ssr_import_5__.default,
  __vite_ssr_import_6__.default,
  __vite_ssr_import_7__.default,
  __vite_ssr_import_8__.default
];
}


// --------------------
// Request: /node_modules/nuxt/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/plugins/server.mjs ($id_9a6979ea)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_9871bba0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/components.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/plugins/server.mjs ($id_9a6979ea)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_ad8b1b7f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


const components = {}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/plugins/server.mjs ($id_9a6979ea)
// Dependencies: 
// - /node_modules/@vueuse/head/dist/index.mjs ($id_c032264e)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/defu/dist/defu.mjs ($id_d7afab65)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_e6f12003 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/defu/dist/defu.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  const titleTemplate = __vite_ssr_import_1__.ref();
  nuxtApp._useHead = (_meta) => {
    const meta = __vite_ssr_import_1__.ref(_meta);
    if ("titleTemplate" in meta.value) {
      titleTemplate.value = meta.value.titleTemplate;
    }
    const headObj = __vite_ssr_import_1__.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta.value.title) : titleTemplate.value.replace(/%s/g, meta.value.title);
      }
      if (meta.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta.value.charset });
      }
      if (meta.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta.value.viewport });
      }
      return __vite_ssr_import_2__.default(overrides, meta.value);
    });
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_c032264e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/defu/dist/defu.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_e6f12003)
// Dependencies: 

// --------------------
const $id_d7afab65 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/defu/dist/defu.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/defu/dist/defu.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/plugins/server.mjs ($id_9a6979ea)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/components.mjs ($id_b2a29d6f)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/meta.config.mjs ($id_3a5d43d0)
// --------------------
const $id_a2650341 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/meta.config.mjs");

const metaMixin = {
  created() {
    const instance = __vite_ssr_import_0__.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
    __vite_ssr_import_2__.useHead(source);
  }
};
__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useHead(__vite_ssr_import_0__.markRaw({ title: "", ...__vite_ssr_import_4__.default.globalMeta }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/components.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/head/runtime/composables.mjs ($id_04ea9504)
// --------------------
const $id_b2a29d6f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default?.()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a2650341)
// Dependencies: 

// --------------------
const $id_3a5d43d0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]}};
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/router.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/plugins/server.mjs ($id_9a6979ea)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/h3/dist/index.mjs ($id_57d7ded6)
// - /node_modules/ufo/dist/index.mjs ($id_614de060)
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/routes.mjs ($id_1c2bc2b6)
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/router.options.mjs ($id_ec252065)
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/middleware.mjs ($id_212c4542)
// --------------------
const $id_a090977b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/page.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/routes.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/router.options.mjs");

const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/middleware.mjs");

function createCurrentLocation(base, location) {
  const { pathname, search, hash } = location;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    const slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") {
      pathFromHash = "/" + pathFromHash;
    }
    return __vite_ssr_import_3__.withoutBase(pathFromHash, "");
  }
  const path = __vite_ssr_import_3__.withoutBase(pathname, base);
  return path + search + hash;
}
__vite_ssr_exports__.default = __vite_ssr_import_5__.defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component("NuxtPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtNestedPage", __vite_ssr_import_4__.default);
  nuxtApp.vueApp.component("NuxtChild", __vite_ssr_import_4__.default);
  const baseURL = __vite_ssr_import_5__.useRuntimeConfig().app.baseURL;
  const routerHistory = false ? __vite_ssr_import_1__.createWebHistory(baseURL) : __vite_ssr_import_1__.createMemoryHistory(baseURL);
  const initialURL = true ? nuxtApp.ssrContext.url : createCurrentLocation(baseURL, window.location);
  const router = __vite_ssr_import_1__.createRouter({
    ...__vite_ssr_import_7__.default,
    history: routerHistory,
    routes: __vite_ssr_import_6__.default
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = __vite_ssr_import_0__.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = __vite_ssr_import_0__.computed(() => router.currentRoute.value[key]);
  }
  const _activeRoute = __vite_ssr_import_0__.shallowRef(router.resolve(initialURL));
  const syncCurrentRoute = () => {
    _activeRoute.value = router.currentRoute.value;
  };
  nuxtApp.hook("page:finish", syncCurrentRoute);
  router.afterEach((to, from) => {
    if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
      syncCurrentRoute();
    }
  });
  const activeRoute = {};
  for (const key in _activeRoute.value) {
    activeRoute[key] = __vite_ssr_import_0__.computed(() => _activeRoute.value[key]);
  }
  nuxtApp._route = __vite_ssr_import_0__.reactive(route);
  nuxtApp._activeRoute = __vite_ssr_import_0__.reactive(activeRoute);
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  const error = __vite_ssr_import_5__.useError();
  try {
    if (true) {
      await router.push(initialURL);
    }
    await router.isReady();
  } catch (error2) {
    __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
  }
  router.beforeEach(async (to, from) => {
    to.meta = __vite_ssr_import_0__.reactive(to.meta);
    nuxtApp._processingMiddleware = true;
    const middlewareEntries = new Set([...__vite_ssr_import_8__.globalMiddleware, ...nuxtApp._middleware.global]);
    for (const component of to.matched) {
      const componentMiddleware = component.meta.middleware;
      if (!componentMiddleware) {
        continue;
      }
      if (Array.isArray(componentMiddleware)) {
        for (const entry of componentMiddleware) {
          middlewareEntries.add(entry);
        }
      } else {
        middlewareEntries.add(componentMiddleware);
      }
    }
    for (const entry of middlewareEntries) {
      const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_8__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
      if (!middleware) {
        if (true) {
          throw new Error(`Unknown route middleware: '${entry}'. Valid middleware: ${Object.keys(__vite_ssr_import_8__.namedMiddleware).map((mw) => `'${mw}'`).join(", ")}.`);
        }
        throw new Error(`Unknown route middleware: '${entry}'.`);
      }
      const result = await __vite_ssr_import_5__.callWithNuxt(nuxtApp, middleware, [to, from]);
      if (true) {
        if (result === false || result instanceof Error) {
          const error2 = result || __vite_ssr_import_2__.createError({
            statusMessage: `Route navigation aborted: ${initialURL}`
          });
          return __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
        }
      }
      if (result || result === false) {
        return result;
      }
    }
  });
  router.afterEach(async (to) => {
    delete nuxtApp._processingMiddleware;
    if (false && !nuxtApp.isHydrating && error.value) {
      await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.clearError);
    }
    if (to.matched.length === 0) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [__vite_ssr_import_2__.createError({
        statusCode: 404,
        statusMessage: `Page not found: ${to.fullPath}`
      })]);
    } else if (true && to.matched[0].name === "404" && nuxtApp.ssrContext) {
      nuxtApp.ssrContext.res.statusCode = 404;
    } else if (true) {
      const currentURL = to.fullPath || "/";
      if (!__vite_ssr_import_3__.isEqual(currentURL, initialURL)) {
        await __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.navigateTo, [currentURL]);
      }
    }
  });
  nuxtApp.hooks.hookOnce("app:created", async () => {
    try {
      await router.replace({
        ...router.resolve(initialURL),
        name: void 0,
        force: true
      });
    } catch (error2) {
      __vite_ssr_import_5__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error2]);
    }
  });
  return { provide: { router } };
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/page.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue-router/dist/vue-router.cjs.js ($id_f9a4a698)
// - /node_modules/nuxt/dist/pages/runtime/utils.mjs ($id_80f433aa)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// --------------------
const $id_5fc14cdc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/utils.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const isNestedKey = Symbol("isNested");
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const isNested = __vite_ssr_import_0__.inject(isNestedKey, false);
    __vite_ssr_import_0__.provide(isNestedKey, true);
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => routeProps.Component && __vite_ssr_import_4__._wrapIf(__vite_ssr_import_0__.Transition, routeProps.route.meta.pageTransition ?? defaultPageTransition, __vite_ssr_import_2__.wrapInKeepAlive(routeProps.route.meta.keepalive, isNested && nuxtApp.isHydrating ? __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) : __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
          onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
          onResolve: () => nuxtApp.callHook("page:finish", routeProps.Component)
        }, { default: () => __vite_ssr_import_0__.h(routeProps.Component, { key: __vite_ssr_import_2__.generateRouteKey(props.pageKey, routeProps) }) }))).default()
      });
    };
  }
});
const defaultPageTransition = { name: "page", mode: "out-in" };
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_80f433aa = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (override, routeProps) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? interpolatePath(routeProps.route, matchedRoute);
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/utils.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.mjs ($id_5fc14cdc)
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_69c52686 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const Fragment = {
  setup(_props, { slots }) {
    return () => slots.default?.();
  }
};
const _wrapIf = (component, props, slots) => {
  return { default: () => props ? __vite_ssr_import_0__.h(component, props === true ? {} : props, slots) : __vite_ssr_import_0__.h(Fragment, {}, slots) };
};
Object.defineProperty(__vite_ssr_exports__, "_wrapIf", { enumerable: true, configurable: true, get(){ return _wrapIf }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 
// - /pages/about.vue?macro=true ($id_9ddc318c)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/about.vue ($id_a93ccd0b)
// - /pages/index.vue ($id_cca58e97)
// --------------------
const $id_1c2bc2b6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/about.vue?macro=true");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/index.vue?macro=true");

__vite_ssr_exports__.default = [
  {
    name: "about",
    path: "/about",
    file: "/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/pages/about.vue",
    children: [],
    meta: __vite_ssr_import_0__.meta,
    alias: __vite_ssr_import_0__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/about.vue')
  },
  {
    name: "index",
    path: "/",
    file: "/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/pages/index.vue",
    children: [],
    meta: __vite_ssr_import_1__.meta,
    alias: __vite_ssr_import_1__.meta?.alias || [],
    component: () => __vite_ssr_dynamic_import__('/pages/index.vue')
  }
];
}


// --------------------
// Request: /pages/about.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/routes.mjs ($id_1c2bc2b6)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_9ddc318c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const _sfc_main = {
  __name: 'about',
  setup(__props, { expose }) {
  expose();

  /*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({
    layout: 'custom',
  })

const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(_attrs)}>About Page using custom layout</div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/about.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/pages/about.vue"]])
const meta = {
    layout: 'custom',
  }
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/composables.mjs
// Parents: 
// - /pages/about.vue?macro=true ($id_9ddc318c)
// - /pages/about.vue ($id_a93ccd0b)
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/imports.mjs ($id_f13f616f)
// Dependencies: 

// --------------------
const $id_ff6ed455 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const warnRuntimeUsage = (method) => console.warn(`${method}() is a compiler-hint helper that is only usable inside the script block of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
const definePageMeta = (meta) => {
  if (true) {
    warnRuntimeUsage("definePageMeta");
  }
};
Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return definePageMeta }});
;
}


// --------------------
// Request: /node_modules/vue/server-renderer/index.js
// Parents: 
// - /pages/about.vue?macro=true ($id_9ddc318c)
// - /components/ColorPicker.vue ($id_cc354da9)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/about.vue ($id_a93ccd0b)
// - /pages/index.vue ($id_cca58e97)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /layouts/custom.vue ($id_d158cf1f)
// - /layouts/default.vue ($id_7689e89d)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// Dependencies: 

// --------------------
const $id_b215fa1c = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/vue/server-renderer/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/vue/server-renderer/index.js\".")
  })


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /pages/about.vue?macro=true ($id_9ddc318c)
// - /components/ColorPicker.vue ($id_cc354da9)
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/about.vue ($id_a93ccd0b)
// - /pages/index.vue ($id_cca58e97)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// - /layouts/custom.vue ($id_d158cf1f)
// - /layouts/default.vue ($id_7689e89d)
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /pages/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/routes.mjs ($id_1c2bc2b6)
// Dependencies: 
// - /components/ColorPicker.vue ($id_cc354da9)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/colorsys/colorsys.js ($id_3015c70f)
// - /node_modules/@mdhnpm/color-contrast-ratio-calculator/dist/index.js ($id_ab3ab19f)
// - /assets/svg/copy.svg?inline ($id_4ee5c39a)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/index.vue?vue&type=style&index=0&scoped=true&lang.css ($id_4aa9e65e)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_5dd70240 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/ColorPicker.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/colorsys/colorsys.js");

  const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@mdhnpm/color-contrast-ratio-calculator/dist/index.js");

  const __vite_ssr_import_4__ = await __vite_ssr_import__("/assets/svg/copy.svg?inline");


  
const _sfc_main = {
  __name: 'index',
  setup(__props, { expose }) {
  expose();

  const data = __vite_ssr_import_1__.reactive({
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

  const contrastColorHex = __vite_ssr_import_1__.computed(() => {
    return theme === 'black' ? '#000000' : '#ffffff'
  })

  // const contrastColorRgb = computed(() => {
  //   return theme === 'black' ? { r: 0, g: 0, b: 0 } : { r: 255, g: 255, b: 255 }
  // })

  const baseColorHSL = __vite_ssr_import_1__.computed(() => {
    return { h: Number(__vite_ssr_import_1__.h), s: Number(s), l: Number(l) }
  })

  const baseColorRgb = __vite_ssr_import_1__.computed(() => {
    return __vite_ssr_import_2__.hsl2Rgb(baseColorHSL.h, baseColorHSL.s, baseColorHSL.l)
  })

  const baseColorHex = __vite_ssr_import_1__.computed(() => {
    return __vite_ssr_import_2__.rgb2Hex(baseColorRgb.r, baseColorRgb.g, baseColorRgb.b)
  })

  const contrastRatio = __vite_ssr_import_1__.computed(() => {
    return __vite_ssr_import_3__.colorContrastRatioCalculator(baseColorHex, contrastColorHex)
  })

  const color100Hex = __vite_ssr_import_1__.computed(() => {
    if (!data.color100) return null
    return __vite_ssr_import_2__.rgb2Hex(data.color100)
  })

  // const color300Hex = computed(() => {
  //   if (!data.color300) return null
  //   return rgb2Hex(color300)
  // })

  // const color600Hex = computed(() => {
  //   if (!data.color600) return null
  //   return rgb2Hex(data.color600)
  // })

  const color700Hex = __vite_ssr_import_1__.computed(() => {
    if (!data.color700) return null
    return __vite_ssr_import_2__.rgb2Hex(data.color700)
  })

  // const color800Hex = computed(() => {
  //   if (!data.color800) return null
  //   return rgb2Hex(data.color800)
  // })

  // const color900Hex = computed(() => {
  //   if (!data.color900) return null
  //   return rgb2Hex(data.color900)
  // })

  const bgClass = __vite_ssr_import_1__.computed(() => {
    return {
      background: baseColorHex,
    }
  })

  const sortedPalette = __vite_ssr_import_1__.computed(() => {
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
        hex: __vite_ssr_import_2__.rgb2Hex(color700.r, color700.g, color700.b),
        hsl: __vite_ssr_import_2__.rgb2Hsl(color700.r, color700.g, color700.b),
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
    color700 = __vite_ssr_import_2__.hsl2Rgb(newColor.hsl)
    palette.push({
      name: '700',
      rgb: color700,
      hex: __vite_ssr_import_2__.rgb2Hex(color700.r, color700.g, color700.b),
      hsl: __vite_ssr_import_2__.rgb2Hsl(color700.r, color700.g, color700.b),
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
    color100 = __vite_ssr_import_2__.hsl2Rgb(newColor.hsl)
    data.palette.push({
      name: '100',
      rgb: color100,
      hex: __vite_ssr_import_2__.rgb2Hex(color100.r, color100.g, color100.b),
      hsl: __vite_ssr_import_2__.rgb2Hsl(color100.r, color100.g, color100.b),
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
    color300 = __vite_ssr_import_2__.hsl2Rgb(newColor.hsl)
    data.palette.push({
      name: '300',
      rgb: color300,
      hex: __vite_ssr_import_2__.rgb2Hex(color300.r, color300.g, color300.b),
      hsl: __vite_ssr_import_2__.rgb2Hsl(color300.r, color300.g, color300.b),
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
    color600 = __vite_ssr_import_2__.hsl2Rgb(newColor.hsl)
    data.palette.push({
      name: '600',
      rgb: color600,
      hex: __vite_ssr_import_2__.rgb2Hex(color600.r, color600.g, color600.b),
      hsl: __vite_ssr_import_2__.rgb2Hsl(color600.r, color600.g, color600.b),
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
    color800 = __vite_ssr_import_2__.hsl2Rgb(newColor.hsl)
    data.palette.push({
      name: '800',
      rgb: color800,
      hex: __vite_ssr_import_2__.rgb2Hex(color800.r, color800.g, color800.b),
      hsl: __vite_ssr_import_2__.rgb2Hsl(color800.r, color800.g, color800.b),
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
    color900 = __vite_ssr_import_2__.hsl2Rgb(newColor.hsl)
    data.palette.push({
      name: '900',
      rgb: color900,
      hex: __vite_ssr_import_2__.rgb2Hex(color900.r, color900.g, color900.b),
      hsl: __vite_ssr_import_2__.rgb2Hsl(color900.r, color900.g, color900.b),
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
        hex = __vite_ssr_import_2__.rgb2Hex(color800.r, color800.g, color800.b)
        break
      case '300':
        hex = __vite_ssr_import_2__.rgbToHex(color900.r, color900.g, color900.b)
        break
      case '600':
        hex = __vite_ssr_import_2__.rgbToHex(color100.r, color100.g, color100.b)
        break
      case '700':
        hex = __vite_ssr_import_2__.rgbToHex(color100.r, color100.g, color100.b)
        break
      case '800':
        hex = __vite_ssr_import_2__.rgbToHex(color100.r, color100.g, color100.b)
        break
      case '900':
        hex = __vite_ssr_import_2__.rgbToHex(color100.r, color100.g, color100.b)
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

const __returned__ = { data, contrastColorHex, baseColorHSL, baseColorRgb, baseColorHex, contrastRatio, color100Hex, color700Hex, bgClass, sortedPalette, setHue, setLight, setSaturation, get700, get100, get300, get600, get800, get900, generatePalette, copyValue, getFontColor, getBgClass, hsl2Rgb: __vite_ssr_import_2__.hsl2Rgb, rgb2Hex: __vite_ssr_import_2__.rgb2Hex, rgb2Hsl: __vite_ssr_import_2__.rgb2Hsl, rgbToHex: __vite_ssr_import_2__.rgbToHex, colorContrastRatioCalculator: __vite_ssr_import_3__.colorContrastRatioCalculator, IcCopy: __vite_ssr_import_4__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ColorPicker = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({ class: "text-brand-800" }, _attrs))} data-v-2a183b29><header class="mb-10 space-y-4 text-center" data-v-2a183b29><h1 class="mb-10 text-6xl font-bold lg:text-8xl" data-v-2a183b29>Ho11y Method</h1><div class="space-y-5" data-v-2a183b29><h2 class="text-2xl font-bold lg:text-4xl" data-v-2a183b29> Accessible Color Palette Generator </h2><p class="lg:px-44" data-v-2a183b29> This method has been created to make it easier to meet WCAG’s accessibility guidelines on color applications. It creates an easily combinable 6-shades monochromatic color palette that meets a11y requirements. </p></div></header><main class="mx-auto rounded-md border-2 border-black bg-white py-8 px-12" data-v-2a183b29><label for="mode" data-v-2a183b29>Mode</label><select id="mode" class="rounded-md bg-brand-800 text-white" name="mode" data-v-2a183b29><option value="hsl" data-v-2a183b29>HSL</option><option value="hex" data-v-2a183b29>Hex</option><option value="rgb" data-v-2a183b29>RGB</option></select><div class="mt-4 flex flex-col items-start justify-center gap-10 lg:mt-10 lg:flex-row lg:justify-between lg:gap-28" data-v-2a183b29><div data-v-2a183b29>`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_ColorPicker, {
    mode: _ctx.mode,
    "bg-class": $setup.bgClass,
    onSetHue: $setup.setHue,
    onSetLight: $setup.setLight,
    onSetSaturation: $setup.setSaturation
  }, null, _parent))
  _push(`<div class="mt-5 flex w-44 flex-col gap-3" data-v-2a183b29><label for="theme" data-v-2a183b29>Background Color</label><select id="theme" class="rounded-md" name="theme" data-v-2a183b29><option value="black" data-v-2a183b29>Black</option><option value="white" data-v-2a183b29>White</option></select></div></div>`)
  if (_ctx.finished) {
    _push(`<div data-v-2a183b29><h2 data-v-2a183b29>Generated Palette</h2><div class="flex-wrap gap-4 lg:flex" data-v-2a183b29><!--[-->`)
    __vite_ssr_import_6__.ssrRenderList($setup.sortedPalette, (color, index) => {
      _push(`<div class="mt-5 mb-3 lg:mb-0" data-v-2a183b29><div class="h-28 w-full rounded-t-md border-2 border-black p-3 md:w-44" style="${
        __vite_ssr_import_6__.ssrRenderStyle($setup.getBgClass(color.rgb))
      }" data-v-2a183b29><div data-v-2a183b29><div class="flex flex-col gap-2" style="${
        __vite_ssr_import_6__.ssrRenderStyle($setup.getFontColor(color.name))
      }" data-v-2a183b29><span class="font-semibold" data-v-2a183b29>${
        __vite_ssr_import_6__.ssrInterpolate(color.name)
      }</span><span class="text-xs" data-v-2a183b29>${
        __vite_ssr_import_6__.ssrInterpolate(color.ratio)
      }</span></div></div></div><div class="flex h-9 w-44 items-center justify-between rounded-b-md border-2 border-t-0 border-black px-2" data-v-2a183b29>`)
      if (_ctx.mode === 'hsl') {
        _push(`<p class="text-sm" data-v-2a183b29><span class="font-bold" data-v-2a183b29>H:</span> ${
          __vite_ssr_import_6__.ssrInterpolate(color.hsl.h)
        } <span class="font-bold" data-v-2a183b29> S:</span> ${
          __vite_ssr_import_6__.ssrInterpolate(color.hsl.s)
        } <span class="font-bold" data-v-2a183b29> L:</span> ${
          __vite_ssr_import_6__.ssrInterpolate(color.hsl.l)
        }</p>`)
      } else {
        _push(`<!---->`)
      }
      _push(`<button class="press"${__vite_ssr_import_6__.ssrRenderAttr("aria-label", `copy value ${color.name}`)} data-v-2a183b29>`)
      _push(__vite_ssr_import_6__.ssrRenderComponent($setup["IcCopy"], {
        text: color.hex
      }, null, _parent))
      _push(`</button></div></div>`)
    })
    _push(`<!--]--></div></div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</div><button class="mt-6 w-44 rounded-md border border-black p-4" data-v-2a183b29> Generate palette </button></main></div>`)
}

const __vite_ssr_import_7__ = await __vite_ssr_import__("/pages/index.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_9__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-2a183b29"],['__file',"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/pages/index.vue"]])
const meta = undefined
Object.defineProperty(__vite_ssr_exports__, "meta", { enumerable: true, configurable: true, get(){ return meta }});;
}


// --------------------
// Request: /components/ColorPicker.vue
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cc354da9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
const _sfc_main = {
  __name: 'ColorPicker',
  props: {
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
  },
  emits: ['setHue', 'setSaturation', 'setLight'],
  setup(__props, { expose }) {
  expose();

  // import { hsl2Hex, hex2Rgb } from 'colorsys'

  

  

  const data = __vite_ssr_import_0__.reactive({
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

const __returned__ = { data }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(_attrs)
  }><h2>${
    __vite_ssr_import_2__.ssrInterpolate($props.title)
  }</h2><div class="mt-5 flex flex-col items-end gap-5 lg:flex-row"><div class="h-36 w-44 rounded-md border-2 border-black" style="${
    __vite_ssr_import_2__.ssrRenderStyle($props.bgClass)
  }"></div><div class="flex flex-col gap-4">`)
  if ($props.mode === 'hsl') {
    _push(`<div class="flex h-full flex-col justify-between gap-2"><div class="flex gap-2"><label for="h">H</label><input id="h"${
      __vite_ssr_import_2__.ssrRenderAttr("value", __vite_ssr_import_1__.h)
    } class="w-44 rounded-md border-2 border-black" type="number" max="360" min="0"></div><div class="flex items-center gap-2"><label for="s">S</label><input id="s"${
      __vite_ssr_import_2__.ssrRenderAttr("value", _ctx.s)
    } class="w-44 rounded-md border-2 border-black" type="number" max="100" min="0"></div><div class="flex items-center gap-2"><label for="b">L</label><input id="b"${
      __vite_ssr_import_2__.ssrRenderAttr("value", _ctx.l)
    } class="w-44 rounded-md border-2 border-black" type="number" max="100" min="0"></div></div>`)
  } else {
    _push(`<!---->`)
  }
  if ($props.mode === 'hex') {
    _push(`<div class="flex items-center gap-2"><label for="hex">Hex</label><input id="hex"${__vite_ssr_import_2__.ssrRenderAttr("value", _ctx.localHex)} class="w-44 rounded-md border-2 border-black" type="text"></div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</div></div></div>`)
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/ColorPicker.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/components/ColorPicker.vue"]]);
}


// --------------------
// Request: /node_modules/colorsys/colorsys.js
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// - /plugins/color.js ($id_084b04fd)
// Dependencies: 

// --------------------
const $id_3015c70f = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/colorsys/colorsys.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/colorsys/colorsys.js\".")
  })


// --------------------
// Request: /node_modules/@mdhnpm/color-contrast-ratio-calculator/dist/index.js
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// - /plugins/color.js ($id_084b04fd)
// Dependencies: 

// --------------------
const $id_ab3ab19f = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/@mdhnpm/color-contrast-ratio-calculator/dist/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/@mdhnpm/color-contrast-ratio-calculator/dist/index.js\".")
  })


// --------------------
// Request: /assets/svg/copy.svg?inline
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 

// --------------------
const $id_4ee5c39a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/_nuxt/@fs/assets/svg/copy.svg?inline";
}


// --------------------
// Request: /pages/index.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /pages/index.vue?macro=true ($id_5dd70240)
// - /pages/index.vue ($id_cca58e97)
// Dependencies: 

// --------------------
const $id_4aa9e65e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".press[data-v-2a183b29]:active{transform:scale(.95)}";
}


// --------------------
// Request: /pages/about.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/routes.mjs ($id_1c2bc2b6)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_a93ccd0b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const _sfc_main = {
  __name: 'about',
  setup(__props, { expose }) {
  expose();

  /*#__PURE__*/ false && __vite_ssr_import_0__.definePageMeta({
    layout: 'custom',
  })

const __returned__ = {  }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(_attrs)}>About Page using custom layout</div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/about.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/pages/about.vue"]]);
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/routes.mjs ($id_1c2bc2b6)
// Dependencies: 
// - /components/ColorPicker.vue ($id_cc354da9)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/colorsys/colorsys.js ($id_3015c70f)
// - /node_modules/@mdhnpm/color-contrast-ratio-calculator/dist/index.js ($id_ab3ab19f)
// - /assets/svg/copy.svg?inline ($id_4ee5c39a)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /pages/index.vue?vue&type=style&index=0&scoped=true&lang.css ($id_4aa9e65e)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_cca58e97 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/ColorPicker.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/colorsys/colorsys.js");

  const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@mdhnpm/color-contrast-ratio-calculator/dist/index.js");

  const __vite_ssr_import_4__ = await __vite_ssr_import__("/assets/svg/copy.svg?inline");


  
const _sfc_main = {
  __name: 'index',
  setup(__props, { expose }) {
  expose();

  const data = __vite_ssr_import_1__.reactive({
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

  const contrastColorHex = __vite_ssr_import_1__.computed(() => {
    return theme === 'black' ? '#000000' : '#ffffff'
  })

  // const contrastColorRgb = computed(() => {
  //   return theme === 'black' ? { r: 0, g: 0, b: 0 } : { r: 255, g: 255, b: 255 }
  // })

  const baseColorHSL = __vite_ssr_import_1__.computed(() => {
    return { h: Number(__vite_ssr_import_1__.h), s: Number(s), l: Number(l) }
  })

  const baseColorRgb = __vite_ssr_import_1__.computed(() => {
    return __vite_ssr_import_2__.hsl2Rgb(baseColorHSL.h, baseColorHSL.s, baseColorHSL.l)
  })

  const baseColorHex = __vite_ssr_import_1__.computed(() => {
    return __vite_ssr_import_2__.rgb2Hex(baseColorRgb.r, baseColorRgb.g, baseColorRgb.b)
  })

  const contrastRatio = __vite_ssr_import_1__.computed(() => {
    return __vite_ssr_import_3__.colorContrastRatioCalculator(baseColorHex, contrastColorHex)
  })

  const color100Hex = __vite_ssr_import_1__.computed(() => {
    if (!data.color100) return null
    return __vite_ssr_import_2__.rgb2Hex(data.color100)
  })

  // const color300Hex = computed(() => {
  //   if (!data.color300) return null
  //   return rgb2Hex(color300)
  // })

  // const color600Hex = computed(() => {
  //   if (!data.color600) return null
  //   return rgb2Hex(data.color600)
  // })

  const color700Hex = __vite_ssr_import_1__.computed(() => {
    if (!data.color700) return null
    return __vite_ssr_import_2__.rgb2Hex(data.color700)
  })

  // const color800Hex = computed(() => {
  //   if (!data.color800) return null
  //   return rgb2Hex(data.color800)
  // })

  // const color900Hex = computed(() => {
  //   if (!data.color900) return null
  //   return rgb2Hex(data.color900)
  // })

  const bgClass = __vite_ssr_import_1__.computed(() => {
    return {
      background: baseColorHex,
    }
  })

  const sortedPalette = __vite_ssr_import_1__.computed(() => {
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
        hex: __vite_ssr_import_2__.rgb2Hex(color700.r, color700.g, color700.b),
        hsl: __vite_ssr_import_2__.rgb2Hsl(color700.r, color700.g, color700.b),
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
    color700 = __vite_ssr_import_2__.hsl2Rgb(newColor.hsl)
    palette.push({
      name: '700',
      rgb: color700,
      hex: __vite_ssr_import_2__.rgb2Hex(color700.r, color700.g, color700.b),
      hsl: __vite_ssr_import_2__.rgb2Hsl(color700.r, color700.g, color700.b),
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
    color100 = __vite_ssr_import_2__.hsl2Rgb(newColor.hsl)
    data.palette.push({
      name: '100',
      rgb: color100,
      hex: __vite_ssr_import_2__.rgb2Hex(color100.r, color100.g, color100.b),
      hsl: __vite_ssr_import_2__.rgb2Hsl(color100.r, color100.g, color100.b),
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
    color300 = __vite_ssr_import_2__.hsl2Rgb(newColor.hsl)
    data.palette.push({
      name: '300',
      rgb: color300,
      hex: __vite_ssr_import_2__.rgb2Hex(color300.r, color300.g, color300.b),
      hsl: __vite_ssr_import_2__.rgb2Hsl(color300.r, color300.g, color300.b),
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
    color600 = __vite_ssr_import_2__.hsl2Rgb(newColor.hsl)
    data.palette.push({
      name: '600',
      rgb: color600,
      hex: __vite_ssr_import_2__.rgb2Hex(color600.r, color600.g, color600.b),
      hsl: __vite_ssr_import_2__.rgb2Hsl(color600.r, color600.g, color600.b),
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
    color800 = __vite_ssr_import_2__.hsl2Rgb(newColor.hsl)
    data.palette.push({
      name: '800',
      rgb: color800,
      hex: __vite_ssr_import_2__.rgb2Hex(color800.r, color800.g, color800.b),
      hsl: __vite_ssr_import_2__.rgb2Hsl(color800.r, color800.g, color800.b),
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
    color900 = __vite_ssr_import_2__.hsl2Rgb(newColor.hsl)
    data.palette.push({
      name: '900',
      rgb: color900,
      hex: __vite_ssr_import_2__.rgb2Hex(color900.r, color900.g, color900.b),
      hsl: __vite_ssr_import_2__.rgb2Hsl(color900.r, color900.g, color900.b),
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
        hex = __vite_ssr_import_2__.rgb2Hex(color800.r, color800.g, color800.b)
        break
      case '300':
        hex = __vite_ssr_import_2__.rgbToHex(color900.r, color900.g, color900.b)
        break
      case '600':
        hex = __vite_ssr_import_2__.rgbToHex(color100.r, color100.g, color100.b)
        break
      case '700':
        hex = __vite_ssr_import_2__.rgbToHex(color100.r, color100.g, color100.b)
        break
      case '800':
        hex = __vite_ssr_import_2__.rgbToHex(color100.r, color100.g, color100.b)
        break
      case '900':
        hex = __vite_ssr_import_2__.rgbToHex(color100.r, color100.g, color100.b)
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

const __returned__ = { data, contrastColorHex, baseColorHSL, baseColorRgb, baseColorHex, contrastRatio, color100Hex, color700Hex, bgClass, sortedPalette, setHue, setLight, setSaturation, get700, get100, get300, get600, get800, get900, generatePalette, copyValue, getFontColor, getBgClass, hsl2Rgb: __vite_ssr_import_2__.hsl2Rgb, rgb2Hex: __vite_ssr_import_2__.rgb2Hex, rgb2Hsl: __vite_ssr_import_2__.rgb2Hsl, rgbToHex: __vite_ssr_import_2__.rgbToHex, colorContrastRatioCalculator: __vite_ssr_import_3__.colorContrastRatioCalculator, IcCopy: __vite_ssr_import_4__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ColorPicker = __vite_ssr_import_0__.default

  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({ class: "text-brand-800" }, _attrs))} data-v-2a183b29><header class="mb-10 space-y-4 text-center" data-v-2a183b29><h1 class="mb-10 text-6xl font-bold lg:text-8xl" data-v-2a183b29>Ho11y Method</h1><div class="space-y-5" data-v-2a183b29><h2 class="text-2xl font-bold lg:text-4xl" data-v-2a183b29> Accessible Color Palette Generator </h2><p class="lg:px-44" data-v-2a183b29> This method has been created to make it easier to meet WCAG’s accessibility guidelines on color applications. It creates an easily combinable 6-shades monochromatic color palette that meets a11y requirements. </p></div></header><main class="mx-auto rounded-md border-2 border-black bg-white py-8 px-12" data-v-2a183b29><label for="mode" data-v-2a183b29>Mode</label><select id="mode" class="rounded-md bg-brand-800 text-white" name="mode" data-v-2a183b29><option value="hsl" data-v-2a183b29>HSL</option><option value="hex" data-v-2a183b29>Hex</option><option value="rgb" data-v-2a183b29>RGB</option></select><div class="mt-4 flex flex-col items-start justify-center gap-10 lg:mt-10 lg:flex-row lg:justify-between lg:gap-28" data-v-2a183b29><div data-v-2a183b29>`)
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_ColorPicker, {
    mode: _ctx.mode,
    "bg-class": $setup.bgClass,
    onSetHue: $setup.setHue,
    onSetLight: $setup.setLight,
    onSetSaturation: $setup.setSaturation
  }, null, _parent))
  _push(`<div class="mt-5 flex w-44 flex-col gap-3" data-v-2a183b29><label for="theme" data-v-2a183b29>Background Color</label><select id="theme" class="rounded-md" name="theme" data-v-2a183b29><option value="black" data-v-2a183b29>Black</option><option value="white" data-v-2a183b29>White</option></select></div></div>`)
  if (_ctx.finished) {
    _push(`<div data-v-2a183b29><h2 data-v-2a183b29>Generated Palette</h2><div class="flex-wrap gap-4 lg:flex" data-v-2a183b29><!--[-->`)
    __vite_ssr_import_6__.ssrRenderList($setup.sortedPalette, (color, index) => {
      _push(`<div class="mt-5 mb-3 lg:mb-0" data-v-2a183b29><div class="h-28 w-full rounded-t-md border-2 border-black p-3 md:w-44" style="${
        __vite_ssr_import_6__.ssrRenderStyle($setup.getBgClass(color.rgb))
      }" data-v-2a183b29><div data-v-2a183b29><div class="flex flex-col gap-2" style="${
        __vite_ssr_import_6__.ssrRenderStyle($setup.getFontColor(color.name))
      }" data-v-2a183b29><span class="font-semibold" data-v-2a183b29>${
        __vite_ssr_import_6__.ssrInterpolate(color.name)
      }</span><span class="text-xs" data-v-2a183b29>${
        __vite_ssr_import_6__.ssrInterpolate(color.ratio)
      }</span></div></div></div><div class="flex h-9 w-44 items-center justify-between rounded-b-md border-2 border-t-0 border-black px-2" data-v-2a183b29>`)
      if (_ctx.mode === 'hsl') {
        _push(`<p class="text-sm" data-v-2a183b29><span class="font-bold" data-v-2a183b29>H:</span> ${
          __vite_ssr_import_6__.ssrInterpolate(color.hsl.h)
        } <span class="font-bold" data-v-2a183b29> S:</span> ${
          __vite_ssr_import_6__.ssrInterpolate(color.hsl.s)
        } <span class="font-bold" data-v-2a183b29> L:</span> ${
          __vite_ssr_import_6__.ssrInterpolate(color.hsl.l)
        }</p>`)
      } else {
        _push(`<!---->`)
      }
      _push(`<button class="press"${__vite_ssr_import_6__.ssrRenderAttr("aria-label", `copy value ${color.name}`)} data-v-2a183b29>`)
      _push(__vite_ssr_import_6__.ssrRenderComponent($setup["IcCopy"], {
        text: color.hex
      }, null, _parent))
      _push(`</button></div></div>`)
    })
    _push(`<!--]--></div></div>`)
  } else {
    _push(`<!---->`)
  }
  _push(`</div><button class="mt-6 w-44 rounded-md border border-black p-4" data-v-2a183b29> Generate palette </button></main></div>`)
}

const __vite_ssr_import_7__ = await __vite_ssr_import__("/pages/index.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_9__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-2a183b29"],['__file',"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/pages/index.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/router.options.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_ec252065 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const configRouterOptions = {}
__vite_ssr_exports__.default = {
...configRouterOptions,
};
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/router.mjs ($id_a090977b)
// Dependencies: 

// --------------------
const $id_212c4542 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const globalMiddleware = []
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/dist.plugin.85eab33a.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/plugins/server.mjs ($id_9a6979ea)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// - /node_modules/pinia/dist/pinia.mjs ($id_b1920624)
// --------------------
const $id_9471e6b6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/pinia/dist/pinia.mjs");


if (__vite_ssr_import_1__.isVue2) {
  __vite_ssr_import_1__.install();
  const Vue = "default" in __vite_ssr_import_1__.Vue2 ? __vite_ssr_import_1__.Vue2.default : __vite_ssr_import_1__.Vue2;
  Vue.use(__vite_ssr_import_2__.PiniaVuePlugin);
}
const PiniaNuxtPlugin = (context, inject) => {
  const pinia = __vite_ssr_import_2__.createPinia();
  if (__vite_ssr_import_1__.isVue2) {
    context.app.pinia = pinia;
  } else {
    context.vueApp.use(pinia);
  }
  inject("pinia", pinia);
  context.pinia = pinia;
  __vite_ssr_import_2__.setActivePinia(pinia);
  pinia._p.push(({ store }) => {
    Object.defineProperty(store, "$nuxt", { value: context });
  });
  if (true) {
    if (__vite_ssr_import_1__.isVue2) {
      context.beforeNuxtRender(({ nuxtState }) => {
        nuxtState.pinia = pinia.state.value;
      });
    } else {
      context.nuxtState.pinia = pinia.state.value;
    }
  } else if (context.nuxtState && context.nuxtState.pinia) {
    pinia.state.value = context.nuxtState.pinia;
  }
};


Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return PiniaNuxtPlugin }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/vue-demi.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/dist.plugin.85eab33a.mjs ($id_9471e6b6)
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/imports.mjs ($id_f13f616f)
// Dependencies: 
// - /node_modules/nuxt/dist/app/compat/capi.mjs ($id_0c5717a4)
// --------------------
const $id_a8110be7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/capi.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const Vue2 = void 0;
Object.defineProperty(__vite_ssr_exports__, "Vue2", { enumerable: true, configurable: true, get(){ return Vue2 }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/capi.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// --------------------
const $id_0c5717a4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const install = () => {
};
Object.defineProperty(__vite_ssr_exports__, "install", { enumerable: true, configurable: true, get(){ return install }});
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
Object.defineProperty(__vite_ssr_exports__, "set", { enumerable: true, configurable: true, get(){ return set }});
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
Object.defineProperty(__vite_ssr_exports__, "del", { enumerable: true, configurable: true, get(){ return del }});
;
}


// --------------------
// Request: /node_modules/pinia/dist/pinia.mjs
// Parents: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/dist.plugin.85eab33a.mjs ($id_9471e6b6)
// - /stores/auth.js ($id_f81eb43f)
// Dependencies: 

// --------------------
const $id_b1920624 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/pinia/dist/pinia.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/pinia/dist/pinia.mjs\".")
  })


// --------------------
// Request: /plugins/api.js
// Parents: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/plugins/server.mjs ($id_9a6979ea)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/axios/index.js ($id_9a0dac16)
// - /api/auth.js ($id_d59c8e5a)
// - /stores/auth.js ($id_f81eb43f)
// --------------------
const $id_d3728021 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/axios/index.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/api/auth.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/stores/auth.js");


__vite_ssr_exports__.default = __vite_ssr_import_1__.defineNuxtPlugin(() => {
  const authStore = __vite_ssr_import_4__.useAuthStore()
  const router = __vite_ssr_import_0__.useRouter()
  const config = __vite_ssr_import_0__.useRuntimeConfig()
  const http = __vite_ssr_import_2__.default.create({
    baseURL: config.public.apiBase,
    withCredentials: true,
  })

  if (false) {
    http.interceptors.request.use(
      config => {
        const token = window.localStorage.getItem('token')

        if (token && token.length) {
          config.headers.common['Authorization'] = `Bearer ${token}`
        }

        return config
      },
      error => Promise.reject(error)
    )

    http.interceptors.response.use(
      response => response,
      error => {
        if (
          401 === error.response.status &&
          (error.response.data?.message !== 'Invalid Credentials' ||
            error.response.data?.error !== 'Invalid Credentials')
        ) {
          authStore.logout()
          router.push({ path: '/auth/login?loggedOut=1' })
        }
        return Promise.reject(error)
      }
    )
  }

  const repositories = {
    auth: __vite_ssr_import_3__.default(http),
  }

  return {
    provide: {
      api: repositories,
    },
  }
})
;
}


// --------------------
// Request: /node_modules/axios/index.js
// Parents: 
// - /plugins/api.js ($id_d3728021)
// Dependencies: 

// --------------------
const $id_9a0dac16 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/axios/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/axios/index.js\".")
  })


// --------------------
// Request: /api/auth.js
// Parents: 
// - /plugins/api.js ($id_d3728021)
// Dependencies: 

// --------------------
const $id_d59c8e5a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = http => ({
  login: async formData => {
    return http.get('/sanctum/csrf-cookie').then(() => {
      return http.post('/api/auth/login', formData)
    })
  },

  loginWithGoogle: async formData => {
    return http.post('/api/auth/social/google', formData)
  },

  loginWithFacebook: async formData => {
    return http.post('/api/auth/social/facebook', formData)
  },

  logout: async () => http.post('/api/auth/logout'),

  register: async formData => {
    return http.post('/api/auth/register', formData)
  },

  forgotPassword: async formData => http.post('/api/forgot-password', formData),

  resetPassword: async formData =>
    http.post('/api/auth/password/reset', formData),

  resetPasswordEmail: async payload =>
    http.post('/api/auth/password/email', payload),

  validate: async payload =>
    http.get('/api/auth/password/validate-token', { params: payload }),

  user: async () => http.get('/api/user'),
})
;
}


// --------------------
// Request: /stores/auth.js
// Parents: 
// - /plugins/api.js ($id_d3728021)
// Dependencies: 
// - /node_modules/pinia/dist/pinia.mjs ($id_b1920624)
// --------------------
const $id_f81eb43f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/pinia/dist/pinia.mjs");


const useAuthStore = __vite_ssr_import_0__.defineStore('auth', {
  state: () => {
    return {
      token: '',
      user: {},
    }
  },

  getters: {
    firstName: state => state.user?.first_name,
    lastName: state => state.user?.last_name,
    email: state => state.user?.email,
    loggedIn: state => !!state.token.length,
  },

  persist: true,

  actions: {
    async login(formData) {
      try {
        const { data: response } = await this.$nuxt.$api.auth.login(formData)
        if (!response.success) {
          throw new Error(response.message)
        }
        this.token = response.data.bearer_token
        this.user = response.data
      } catch (error) {
        throw new Error(
          typeof error === 'object' ? error.response.data.message : error
        )
      }
    },

    setBearerToken(token) {
      this.token = token
    },

    setUser(user) {
      if (user.bearer_token) {
        this.token = user.bearer_token
      }

      this.user = user
    },

    async getUser() {
      const { data: response } = await this.$nuxt.$api.auth.user()
      this.setUser(response.data)
    },

    async loginWithGoogle(formData) {
      try {
        const { data: response } = await this.$nuxt.$api.auth.loginWithGoogle(
          formData
        )
        if (!response.success) {
          throw new Error('Login failed. Please try again')
        }
        this.token = response.data.bearer_token
        this.user = response.data
      } catch (error) {
        throw new Error(
          typeof error === 'object' ? error.response.data.message : error
        )
      }
    },

    async loginWithFacebook(formData) {
      try {
        const { data: response } = await this.$nuxt.$api.auth.loginWithFacebook(
          formData
        )
        if (!response.success) {
          throw new Error('Login failed. Please try again')
        }
        this.token = response.data.bearer_token
        this.user = response.data
      } catch (error) {
        throw new Error(
          typeof error === 'object' ? error.response.data.message : error
        )
      }
    },

    async logout() {
      await this.$nuxt.$api.auth.logout()
      this.token = ''
      this.user = {}
    },

    async register(formData) {
      const { data: response } = await this.$nuxt.$api.auth.register(formData)
      if (!response.success) {
        throw new Error(response.message)
      }
      this.token = response.data.user.bearer_token
      this.user = response.data.user
    },

    async forgotPassword(formData) {
      const response = await this.$nuxt.$api.auth.forgotPassword(formData)
      console.log(response)
    },

    async resetPassword(formData) {
      const response = await this.$nuxt.$api.auth.resetPassword(formData)
      console.log(response)
    },

    async updateUser(formData, userId = this.user.id) {
      const { data: response } = await this.$nuxt.$api.auth.updateUser(
        formData,
        userId
      )
      if (response.data.bearer_token) {
        this.token = response.data.bearer_token
      }
      this.user = response.data
    },

    async sendResetPasswordEmail(payload) {
      await this.$nuxt.$api.auth.resetPasswordEmail(payload)
    },

    async validateResetToken(payload) {
      await this.$nuxt.$api.auth.validate(payload)
    },
  },
})
Object.defineProperty(__vite_ssr_exports__, "useAuthStore", { enumerable: true, configurable: true, get(){ return useAuthStore }});
;
}


// --------------------
// Request: /plugins/color.js
// Parents: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/plugins/server.mjs ($id_9a6979ea)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/colorsys/colorsys.js ($id_3015c70f)
// - /node_modules/@mdhnpm/color-contrast-ratio-calculator/dist/index.js ($id_ab3ab19f)
// --------------------
const $id_084b04fd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/colorsys/colorsys.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@mdhnpm/color-contrast-ratio-calculator/dist/index.js");


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
    const colorHsl1 = __vite_ssr_import_1__.hex2Hsl(colorHex1)
    let contrastRatio = __vite_ssr_import_2__.colorContrastRatioCalculator(colorHex1, colorHex2)
    if (contrastRatio > ratio) {
      do {
        colorHsl1.l = colorHsl1.l - 1
        colorHex1 = __vite_ssr_import_1__.hsl2Hex(colorHsl1)
        contrastRatio = __vite_ssr_import_2__.colorContrastRatioCalculator(colorHex1, colorHex2)
      } while (contrastRatio - ratio > 0.1 && colorHsl1.l >= 0)
    } else {
      do {
        colorHsl1.l = colorHsl1.l - 1
        colorHex1 = __vite_ssr_import_1__.hsl2Hex(colorHsl1)
        contrastRatio = __vite_ssr_import_2__.colorContrastRatioCalculator(colorHex1, colorHex2)
      } while (ratio - contrastRatio > 0.1 && colorHsl1.l >= 0)
    }
    return { hsl: colorHsl1, ratio: contrastRatio }
  },

  lighten(colorHex1, colorHex2, ratio) {
    const colorHsl1 = __vite_ssr_import_1__.hex2Hsl(colorHex1)
    let contrastRatio = __vite_ssr_import_2__.colorContrastRatioCalculator(colorHex1, colorHex2)
    if (contrastRatio > ratio) {
      do {
        colorHsl1.l = colorHsl1.l + 1
        colorHex1 = __vite_ssr_import_1__.hsl2Hex(colorHsl1)
        contrastRatio = __vite_ssr_import_2__.colorContrastRatioCalculator(colorHex1, colorHex2)
      } while (contrastRatio - ratio > 0.1 && colorHsl1.l < 100)
    } else {
      do {
        colorHsl1.l = colorHsl1.l + 1
        colorHex1 = __vite_ssr_import_1__.hsl2Hex(colorHsl1)
        contrastRatio = __vite_ssr_import_2__.colorContrastRatioCalculator(colorHex1, colorHex2)
      } while (ratio - contrastRatio > 0.1 && colorHsl1.l < 100)
    }
    return { hsl: colorHsl1, ratio: contrastRatio }
  },
}

__vite_ssr_exports__.default = function (context, inject) {
  inject('color', color)
}
;
}


// --------------------
// Request: /plugins/pinia-persisted.js
// Parents: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/plugins/server.mjs ($id_9a6979ea)
// Dependencies: 
// - /node_modules/pinia-plugin-persistedstate/dist/index.mjs ($id_4c58ab53)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// --------------------
const $id_023ebd7f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/pinia-plugin-persistedstate/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");


__vite_ssr_exports__.default = __vite_ssr_import_1__.defineNuxtPlugin(nuxtApp => {
  nuxtApp.$pinia.use(__vite_ssr_import_0__.createNuxtPersistedState(__vite_ssr_import_1__.useCookie))
})
;
}


// --------------------
// Request: /node_modules/pinia-plugin-persistedstate/dist/index.mjs
// Parents: 
// - /plugins/pinia-persisted.js ($id_023ebd7f)
// Dependencies: 

// --------------------
const $id_4c58ab53 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/pinia-plugin-persistedstate/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/pinia-plugin-persistedstate/dist/index.mjs\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/root-component.mjs
// Parents: 
// - /Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/nuxt/dist/app/entry ($id_5345282d)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// --------------------
const $id_3ac0ac02 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/root-component.mjs ($id_3ac0ac02)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/error-component.mjs ($id_b84a54b3)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_e9bfada3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

// @ts-ignore
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/error-component.mjs");



const _sfc_main = {
  __name: 'nuxt-root',
  setup(__props, { expose }) {
  expose();

const nuxtApp = __vite_ssr_import_1__.useNuxtApp()
const onResolve = () => nuxtApp.callHook('app:suspense:resolve')

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if (true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = __vite_ssr_import_1__.useError()
__vite_ssr_import_0__.onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true) {
    __vite_ssr_import_1__.callWithNuxt(nuxtApp, __vite_ssr_import_1__.throwError, [err])
  }
})

const __returned__ = { nuxtApp, onResolve, results, error, onErrorCaptured: __vite_ssr_import_0__.onErrorCaptured, callWithNuxt: __vite_ssr_import_1__.callWithNuxt, throwError: __vite_ssr_import_1__.throwError, useError: __vite_ssr_import_1__.useError, useNuxtApp: __vite_ssr_import_1__.useNuxtApp, ErrorComponent: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_3__.resolveComponent("App")

  __vite_ssr_import_4__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else {
        _push(__vite_ssr_import_4__.ssrRenderComponent(_component_App, null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_e9bfada3)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// --------------------
const $id_b84a54b3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-error-page.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/error-component.mjs ($id_b84a54b3)
// Dependencies: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_8cc6d73f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue");



const _sfc_main = {
  __name: 'nuxt-error-page',
  props: {
  error: Object
},
  setup(__props, { expose }) {
  expose();

const props = __props



const error = props.error

// TODO: extract to a separate utility
const stacktrace = (error.stack || '')
  .split('\n')
  .splice(1)
  .map((line) => {
    const text = line
      .replace('webpack:/', '')
      .replace('.vue', '.js') // TODO: Support sourcemap
      .trim()
    return {
      text,
      internal: (line.includes('node_modules') && !line.includes('.cache')) ||
          line.includes('internal') ||
          line.includes('new Promise')
    }
  }).map(i => `<span class="stack${i.internal ? ' internal' : ''}">${i.text}</span>`).join('\n')

// Error page props
const statusCode = String(error.statusCode || 500)
const is404 = statusCode === '404'

const statusMessage = error.statusMessage ?? (is404 ? 'Page Not Found' : 'Internal Server Error')
const description = error.message || error.toString()
const stack = true && !is404 ? error.description || `<pre>${stacktrace}</pre>` : undefined

const ErrorTemplate = is404 ? __vite_ssr_import_0__.default : true ? __vite_ssr_import_2__.default : __vite_ssr_import_1__.default

const __returned__ = { props, error, stacktrace, statusCode, is404, statusMessage, description, stack, ErrorTemplate, Error404: __vite_ssr_import_0__.default, Error500: __vite_ssr_import_1__.default, ErrorDev: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorTemplate"], __vite_ssr_import_3__.mergeProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack }, _attrs), null, _parent))
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_ffac87b5)
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/imports.mjs ($id_f13f616f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css ($id_e68b6b38)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_b90d4d0f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-404',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "404"
  },
  statusMessage: {
    type: String,
    default: "Not Found"
  },
  description: {
    type: String,
    default: "Sorry, the page you are looking for could not be found."
  },
  backHome: {
    type: String,
    default: "Go back home"
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_1__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_1__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-573335c0><div class="fixed left-0 right-0 spotlight z-10" data-v-573335c0></div><div class="max-w-520px text-center z-20" data-v-573335c0><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-573335c0>${
    __vite_ssr_import_3__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-573335c0>${
    __vite_ssr_import_3__.ssrInterpolate($props.description)
  }</p><div class="w-full flex items-center justify-center" data-v-573335c0>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate($props.backHome)}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($props.backHome), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-573335c0"],['__file',"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/imports.mjs
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// Dependencies: 
// - /node_modules/nuxt/dist/head/runtime/index.mjs ($id_b7351483)
// - /node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_a8110be7)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/pages/runtime/composables.mjs ($id_ff6ed455)
// --------------------
const $id_f13f616f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useMeta }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.isVue2 }});
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.isVue3 }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.refreshNuxtData }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtComponent }});
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useNuxtApp }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtPlugin }});
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRuntimeConfig }});
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useState }});
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useLazyFetch }});
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useCookie }});
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRouter }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useError }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtLink }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

Object.defineProperty(__vite_ssr_exports__, "withCtx", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withCtx }});
Object.defineProperty(__vite_ssr_exports__, "withDirectives", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withDirectives }});
Object.defineProperty(__vite_ssr_exports__, "withKeys", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withKeys }});
Object.defineProperty(__vite_ssr_exports__, "withMemo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withMemo }});
Object.defineProperty(__vite_ssr_exports__, "withModifiers", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withModifiers }});
Object.defineProperty(__vite_ssr_exports__, "withScopeId", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withScopeId }});
Object.defineProperty(__vite_ssr_exports__, "onActivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onActivated }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeMount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onBeforeMount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUnmount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onBeforeUnmount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUpdate", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onBeforeUpdate }});
Object.defineProperty(__vite_ssr_exports__, "onDeactivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onDeactivated }});
Object.defineProperty(__vite_ssr_exports__, "onErrorCaptured", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onErrorCaptured }});
Object.defineProperty(__vite_ssr_exports__, "onMounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onMounted }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTracked", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onRenderTracked }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTriggered", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onRenderTriggered }});
Object.defineProperty(__vite_ssr_exports__, "onServerPrefetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onServerPrefetch }});
Object.defineProperty(__vite_ssr_exports__, "onUnmounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onUnmounted }});
Object.defineProperty(__vite_ssr_exports__, "onUpdated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onUpdated }});
Object.defineProperty(__vite_ssr_exports__, "computed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.computed }});
Object.defineProperty(__vite_ssr_exports__, "customRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.customRef }});
Object.defineProperty(__vite_ssr_exports__, "isProxy", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isProxy }});
Object.defineProperty(__vite_ssr_exports__, "isReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isReactive }});
Object.defineProperty(__vite_ssr_exports__, "isReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isReadonly }});
Object.defineProperty(__vite_ssr_exports__, "isRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isRef }});
Object.defineProperty(__vite_ssr_exports__, "markRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.markRaw }});
Object.defineProperty(__vite_ssr_exports__, "proxyRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.proxyRefs }});
Object.defineProperty(__vite_ssr_exports__, "reactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.reactive }});
Object.defineProperty(__vite_ssr_exports__, "readonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.readonly }});
Object.defineProperty(__vite_ssr_exports__, "ref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.ref }});
Object.defineProperty(__vite_ssr_exports__, "shallowReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.shallowReactive }});
Object.defineProperty(__vite_ssr_exports__, "shallowReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.shallowReadonly }});
Object.defineProperty(__vite_ssr_exports__, "shallowRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.shallowRef }});
Object.defineProperty(__vite_ssr_exports__, "toRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.toRaw }});
Object.defineProperty(__vite_ssr_exports__, "toRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.toRef }});
Object.defineProperty(__vite_ssr_exports__, "toRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.toRefs }});
Object.defineProperty(__vite_ssr_exports__, "triggerRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.triggerRef }});
Object.defineProperty(__vite_ssr_exports__, "unref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.unref }});
Object.defineProperty(__vite_ssr_exports__, "watch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.watch }});
Object.defineProperty(__vite_ssr_exports__, "watchEffect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.watchEffect }});
Object.defineProperty(__vite_ssr_exports__, "isShallow", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isShallow }});
Object.defineProperty(__vite_ssr_exports__, "effect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.effect }});
Object.defineProperty(__vite_ssr_exports__, "effectScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.effectScope }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.getCurrentScope }});
Object.defineProperty(__vite_ssr_exports__, "onScopeDispose", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onScopeDispose }});
Object.defineProperty(__vite_ssr_exports__, "defineComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineComponent }});
Object.defineProperty(__vite_ssr_exports__, "defineAsyncComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineAsyncComponent }});
Object.defineProperty(__vite_ssr_exports__, "resolveComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.resolveComponent }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentInstance", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.getCurrentInstance }});
Object.defineProperty(__vite_ssr_exports__, "h", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.h }});
Object.defineProperty(__vite_ssr_exports__, "inject", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.inject }});
Object.defineProperty(__vite_ssr_exports__, "nextTick", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.nextTick }});
Object.defineProperty(__vite_ssr_exports__, "provide", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.provide }});
Object.defineProperty(__vite_ssr_exports__, "useAttrs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useAttrs }});
Object.defineProperty(__vite_ssr_exports__, "useCssModule", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useCssModule }});
Object.defineProperty(__vite_ssr_exports__, "useCssVars", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useCssVars }});
Object.defineProperty(__vite_ssr_exports__, "useSlots", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useSlots }});
Object.defineProperty(__vite_ssr_exports__, "useTransitionState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useTransitionState }});
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.mjs");

Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.definePageMeta }});;
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_b90d4d0f)
// Dependencies: 

// --------------------
const $id_e68b6b38 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-573335c0]{cursor:pointer}.flex[data-v-573335c0]{display:flex}.grid[data-v-573335c0]{display:grid}.place-content-center[data-v-573335c0]{place-content:center}.items-center[data-v-573335c0]{align-items:center}.justify-center[data-v-573335c0]{justify-content:center}.font-sans[data-v-573335c0]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-573335c0]{font-weight:500}.font-light[data-v-573335c0]{font-weight:300}.text-8xl[data-v-573335c0]{font-size:6rem;line-height:1}.text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-573335c0]{line-height:1.25}.mb-8[data-v-573335c0]{margin-bottom:2rem}.mb-16[data-v-573335c0]{margin-bottom:4rem}.max-w-520px[data-v-573335c0]{max-width:520px}.min-h-screen[data-v-573335c0]{min-height:100vh}.overflow-hidden[data-v-573335c0]{overflow:hidden}.px-8[data-v-573335c0]{padding-left:2rem;padding-right:2rem}.py-2[data-v-573335c0]{padding-bottom:.5rem;padding-top:.5rem}.px-4[data-v-573335c0]{padding-left:1rem;padding-right:1rem}.fixed[data-v-573335c0]{position:fixed}.left-0[data-v-573335c0]{left:0}.right-0[data-v-573335c0]{right:0}.text-center[data-v-573335c0]{text-align:center}.text-black[data-v-573335c0]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-573335c0]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-573335c0]{width:100%}.z-10[data-v-573335c0]{z-index:10}.z-20[data-v-573335c0]{z-index:20}@media (min-width:640px){.sm\\:text-4xl[data-v-573335c0]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-573335c0]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-573335c0]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-573335c0]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-573335c0]{padding-bottom:.75rem;padding-top:.75rem}.sm\\:px-6[data-v-573335c0]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-573335c0]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-573335c0]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-573335c0]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-30vh;filter:blur(20vh);height:40vh}.gradient-border[data-v-573335c0]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative}@media (prefers-color-scheme:light){.gradient-border[data-v-573335c0]{background-color:#ffffff4d}.gradient-border[data-v-573335c0]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-573335c0]{background-color:#1414144d}.gradient-border[data-v-573335c0]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}.gradient-border[data-v-573335c0]:before{background-size:400% auto;border-radius:.5rem;bottom:0;content:\"\";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-573335c0]:hover:before{background-position:-50% 0;opacity:1}";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/imports.mjs ($id_f13f616f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css ($id_a2b3b709)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_14c8b574 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-500',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "This page is temporarily unavailable."
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-0914425d><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-0914425d></div><div class="max-w-520px text-center" data-v-0914425d><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-0914425d>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-0914425d>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-0914425d"],['__file',"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_14c8b574)
// Dependencies: 

// --------------------
const $id_a2b3b709 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.grid[data-v-0914425d]{display:grid}.place-content-center[data-v-0914425d]{place-content:center}.font-sans[data-v-0914425d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-0914425d]{font-weight:500}.font-light[data-v-0914425d]{font-weight:300}.h-1\\/2[data-v-0914425d]{height:50%}.text-8xl[data-v-0914425d]{font-size:6rem;line-height:1}.text-xl[data-v-0914425d]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-0914425d]{line-height:1.25}.mb-8[data-v-0914425d]{margin-bottom:2rem}.mb-16[data-v-0914425d]{margin-bottom:4rem}.max-w-520px[data-v-0914425d]{max-width:520px}.min-h-screen[data-v-0914425d]{min-height:100vh}.overflow-hidden[data-v-0914425d]{overflow:hidden}.px-8[data-v-0914425d]{padding-left:2rem;padding-right:2rem}.fixed[data-v-0914425d]{position:fixed}.left-0[data-v-0914425d]{left:0}.right-0[data-v-0914425d]{right:0}.-bottom-1\\/2[data-v-0914425d]{bottom:-50%}.text-center[data-v-0914425d]{text-align:center}.text-black[data-v-0914425d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-0914425d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width:640px){.sm\\:text-4xl[data-v-0914425d]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-10xl[data-v-0914425d]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-0914425d]{padding-left:0;padding-right:0}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-0914425d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-0914425d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-0914425d]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_8cc6d73f)
// Dependencies: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/imports.mjs ($id_f13f616f)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css ($id_2691164c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_bc2d74a1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-dev',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
  },
  stack: {
    type: String,
    default: ""
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col" }, _attrs))
  } data-v-1da4697d><div class="fixed left-0 right-0 spotlight" data-v-1da4697d></div><h1 class="text-6xl sm:text-8xl font-medium mb-6" data-v-1da4697d>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight" data-v-1da4697d>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto" data-v-1da4697d><pre class="text-xl font-light leading-tight z-10 p-8" data-v-1da4697d>${
    $props.stack
  }</pre></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-1da4697d"],['__file',"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_bc2d74a1)
// Dependencies: 

// --------------------
const $id_2691164c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5[data-v-1da4697d]{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md[data-v-1da4697d]{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex[data-v-1da4697d]{display:flex}.flex-col[data-v-1da4697d]{flex-direction:column}.flex-1[data-v-1da4697d]{flex:1 1 0%}.font-sans[data-v-1da4697d]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-1da4697d]{font-weight:500}.font-light[data-v-1da4697d]{font-weight:300}.h-auto[data-v-1da4697d]{height:auto}.text-xl[data-v-1da4697d]{font-size:1.25rem;line-height:1.75rem}.text-6xl[data-v-1da4697d]{font-size:3.75rem;line-height:1}.leading-tight[data-v-1da4697d]{line-height:1.25}.mb-8[data-v-1da4697d]{margin-bottom:2rem}.mb-6[data-v-1da4697d]{margin-bottom:1.5rem}.min-h-screen[data-v-1da4697d]{min-height:100vh}.overflow-y-auto[data-v-1da4697d]{overflow-y:auto}.p-8[data-v-1da4697d]{padding:2rem}.px-10[data-v-1da4697d]{padding-left:2.5rem;padding-right:2.5rem}.pt-14[data-v-1da4697d]{padding-top:3.5rem}.fixed[data-v-1da4697d]{position:fixed}.left-0[data-v-1da4697d]{left:0}.right-0[data-v-1da4697d]{right:0}.text-black[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-1da4697d]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10[data-v-1da4697d]{z-index:10}@media (min-width:640px){.sm\\:text-8xl[data-v-1da4697d]{font-size:6rem;line-height:1}.sm\\:text-2xl[data-v-1da4697d]{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-1da4697d]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10[data-v-1da4697d]{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white[data-v-1da4697d]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-1da4697d]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}";
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/app-component.mjs
// Parents: 
// - /Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/nuxt/dist/app/entry ($id_5345282d)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// --------------------
const $id_c3c374a4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/app.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/app-component.mjs ($id_c3c374a4)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_6c61010f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.mjs");

const _sfc_main = {}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default
  const _component_NuxtPage = __vite_ssr_import_1__.resolveComponent("NuxtPage")

  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtPage, null, null, _parent, _scopeId))
      } else {
        return [
          __vite_ssr_import_1__.createVNode(_component_NuxtPage)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
}


const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/pages/runtime/app.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/nuxt/dist/pages/runtime/app.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/layout.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/app.vue ($id_6c61010f)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/nuxt/dist/app/components/utils.mjs ($id_69c52686)
// - /node_modules/nuxt/dist/app/index.mjs ($id_36927477)
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/layouts.mjs ($id_5ee4df05)
// --------------------
const $id_39003883 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/layouts.mjs");

const defaultLayoutTransition = { name: "layout", mode: "out-in" };
__vite_ssr_exports__.default = __vite_ssr_import_0__.defineComponent({
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const route = __vite_ssr_import_2__.useRoute();
    return () => {
      const layout = (__vite_ssr_import_0__.isRef(props.name) ? props.name.value : props.name) ?? route.meta.layout ?? "default";
      const hasLayout = layout && layout in __vite_ssr_import_3__.default;
      if (true && layout && !hasLayout && layout !== "default") {
        console.warn(`Invalid layout \`${layout}\` selected.`);
      }
      return __vite_ssr_import_1__._wrapIf(__vite_ssr_import_0__.Transition, hasLayout && (route.meta.layoutTransition ?? defaultLayoutTransition), __vite_ssr_import_1__._wrapIf(__vite_ssr_import_3__.default[layout], hasLayout, context.slots)).default();
    };
  }
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/layout.mjs ($id_39003883)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /layouts/custom.vue ($id_d158cf1f)
// - /layouts/default.vue ($id_7689e89d)
// --------------------
const $id_5ee4df05 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

__vite_ssr_exports__.default = {
  custom: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/layouts/custom.vue')),
  default: __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__('/layouts/default.vue'))
};
}


// --------------------
// Request: /layouts/custom.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/layouts.mjs ($id_5ee4df05)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_d158cf1f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "flex flex-col items-center justify-center" }, _attrs))}> Custom Layout <main>`)
  __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</main></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/custom.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/layouts/custom.vue"]]);
}


// --------------------
// Request: /layouts/default.vue
// Parents: 
// - /@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/layouts.mjs ($id_5ee4df05)
// Dependencies: 
// - /node_modules/vue/dist/vue.cjs.js ($id_60f0615f)
// - /node_modules/vue/server-renderer/index.js ($id_b215fa1c)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_7689e89d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const _sfc_main = {}
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "flex flex-col items-center justify-center" }, _attrs))}><main>`)
  __vite_ssr_import_1__.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent)
  _push(`</main></div>`)
}


const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/default.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/layouts/default.vue"]]);
}


const __modules__ = {
  "/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/nuxt/dist/app/entry": $id_5345282d,
  "/node_modules/vue/dist/vue.cjs.js": $id_60f0615f,
  "/node_modules/ohmyfetch/dist/index.mjs": $id_780217c4,
  "/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/paths.mjs": $id_45afd558,
  "/node_modules/ufo/dist/index.mjs": $id_614de060,
  "/node_modules/nuxt/dist/app/index.mjs": $id_36927477,
  "/node_modules/nuxt/dist/app/nuxt.mjs": $id_e069d411,
  "/node_modules/hookable/dist/index.mjs": $id_a2c811c4,
  "/node_modules/unctx/dist/index.mjs": $id_a569ca2d,
  "/node_modules/nuxt/dist/app/compat/legacy-app.mjs": $id_a48341bc,
  "/node_modules/unenv/runtime/mock/proxy.mjs": $id_39e12da7,
  "/node_modules/nuxt/dist/app/composables/index.mjs": $id_b067a79a,
  "/node_modules/nuxt/dist/app/composables/component.mjs": $id_53345950,
  "/node_modules/vue-router/dist/vue-router.cjs.js": $id_f9a4a698,
  "/node_modules/nuxt/dist/app/composables/asyncData.mjs": $id_d5b6a221,
  "/node_modules/nuxt/dist/app/composables/utils.mjs": $id_df511336,
  "/node_modules/nuxt/dist/app/composables/hydrate.mjs": $id_0063df1b,
  "/node_modules/nuxt/dist/app/composables/state.mjs": $id_7d872108,
  "/node_modules/nuxt/dist/app/composables/error.mjs": $id_6fe050f1,
  "/node_modules/nuxt/dist/app/composables/fetch.mjs": $id_41f5ae4e,
  "/node_modules/ohash/dist/index.mjs": $id_b1b82cf3,
  "/node_modules/nuxt/dist/app/composables/cookie.mjs": $id_511b441d,
  "/node_modules/cookie-es/dist/index.mjs": $id_f4975261,
  "/node_modules/h3/dist/index.mjs": $id_57d7ded6,
  "/node_modules/destr/dist/index.mjs": $id_03d15ecd,
  "/node_modules/nuxt/dist/app/composables/ssr.mjs": $id_c4866ba7,
  "/node_modules/nuxt/dist/app/composables/router.mjs": $id_db4d90a8,
  "/node_modules/nuxt/dist/app/components/index.mjs": $id_161bfe9f,
  "/node_modules/nuxt/dist/app/components/nuxt-link.mjs": $id_ffac87b5,
  "/node_modules/nuxt/dist/head/runtime/index.mjs": $id_b7351483,
  "/node_modules/nuxt/dist/head/runtime/composables.mjs": $id_04ea9504,
  "/node_modules/@vue/shared/dist/shared.cjs.js": $id_852b06a2,
  "/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/css.mjs": $id_61f9e10a,
  "/node_modules/@nuxtjs/tailwindcss/dist/runtime/tailwind.css": $id_0a1402e6,
  "/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/plugins/server.mjs": $id_9a6979ea,
  "/node_modules/nuxt/dist/app/plugins/preload.server.mjs": $id_9871bba0,
  "/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/components.plugin.mjs": $id_ad8b1b7f,
  "/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs": $id_e6f12003,
  "/node_modules/@vueuse/head/dist/index.mjs": $id_c032264e,
  "/node_modules/defu/dist/defu.mjs": $id_d7afab65,
  "/node_modules/nuxt/dist/head/runtime/plugin.mjs": $id_a2650341,
  "/node_modules/nuxt/dist/head/runtime/components.mjs": $id_b2a29d6f,
  "/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/meta.config.mjs": $id_3a5d43d0,
  "/node_modules/nuxt/dist/pages/runtime/router.mjs": $id_a090977b,
  "/node_modules/nuxt/dist/pages/runtime/page.mjs": $id_5fc14cdc,
  "/node_modules/nuxt/dist/pages/runtime/utils.mjs": $id_80f433aa,
  "/node_modules/nuxt/dist/app/components/utils.mjs": $id_69c52686,
  "/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/routes.mjs": $id_1c2bc2b6,
  "/pages/about.vue?macro=true": $id_9ddc318c,
  "/node_modules/nuxt/dist/pages/runtime/composables.mjs": $id_ff6ed455,
  "/node_modules/vue/server-renderer/index.js": $id_b215fa1c,
  "/@id/plugin-vue:export-helper": $id_bbb863c1,
  "/pages/index.vue?macro=true": $id_5dd70240,
  "/components/ColorPicker.vue": $id_cc354da9,
  "/node_modules/colorsys/colorsys.js": $id_3015c70f,
  "/node_modules/@mdhnpm/color-contrast-ratio-calculator/dist/index.js": $id_ab3ab19f,
  "/assets/svg/copy.svg?inline": $id_4ee5c39a,
  "/pages/index.vue?vue&type=style&index=0&scoped=true&lang.css": $id_4aa9e65e,
  "/pages/about.vue": $id_a93ccd0b,
  "/pages/index.vue": $id_cca58e97,
  "/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/router.options.mjs": $id_ec252065,
  "/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/middleware.mjs": $id_212c4542,
  "/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/dist.plugin.85eab33a.mjs": $id_9471e6b6,
  "/node_modules/nuxt/dist/app/compat/vue-demi.mjs": $id_a8110be7,
  "/node_modules/nuxt/dist/app/compat/capi.mjs": $id_0c5717a4,
  "/node_modules/pinia/dist/pinia.mjs": $id_b1920624,
  "/plugins/api.js": $id_d3728021,
  "/node_modules/axios/index.js": $id_9a0dac16,
  "/api/auth.js": $id_d59c8e5a,
  "/stores/auth.js": $id_f81eb43f,
  "/plugins/color.js": $id_084b04fd,
  "/plugins/pinia-persisted.js": $id_023ebd7f,
  "/node_modules/pinia-plugin-persistedstate/dist/index.mjs": $id_4c58ab53,
  "/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/root-component.mjs": $id_3ac0ac02,
  "/node_modules/nuxt/dist/app/components/nuxt-root.vue": $id_e9bfada3,
  "/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/error-component.mjs": $id_b84a54b3,
  "/node_modules/nuxt/dist/app/components/nuxt-error-page.vue": $id_8cc6d73f,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": $id_b90d4d0f,
  "/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/imports.mjs": $id_f13f616f,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css": $id_e68b6b38,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": $id_14c8b574,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css": $id_a2b3b709,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue": $id_bc2d74a1,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css": $id_2691164c,
  "/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/app-component.mjs": $id_c3c374a4,
  "/node_modules/nuxt/dist/pages/runtime/app.vue": $id_6c61010f,
  "/node_modules/nuxt/dist/app/components/layout.mjs": $id_39003883,
  "/@id/virtual:nuxt:/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/.nuxt/layouts.mjs": $id_5ee4df05,
  "/layouts/custom.vue": $id_d158cf1f,
  "/layouts/default.vue": $id_7689e89d
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  const cjsModule = {
    get exports () {
      return stubModule.default
    },
    set exports (v) {
      stubModule.default = v
    },
  }

  await mod(
    __ssrContext__.global,
    cjsModule,
    stubModule.default,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("/Users/ceci/Desktop/proyectos/nuxt3-boilerplate/node_modules/nuxt/dist/app/entry")