// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  mongoose: {
    uri: "mongodb://localhost:27017",
  },

  modules: ["@nuxt/devtools-ui-kit", "nuxt-mongoose"],
});
