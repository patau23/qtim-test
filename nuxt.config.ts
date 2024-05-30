// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/fonts", "shadcn-nuxt"],
  fonts: {
    families: [{ name: "TTCommons", provider: "local" }],
    defaults: {
      styles: ["normal"],
      weights: [400],
    },
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
});