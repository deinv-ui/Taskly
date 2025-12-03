import tsconfigPaths from "vite-tsconfig-paths";

export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  css: ["~/assets/css/tailwind.css"],
  // css: ["bootstrap/dist/css/bootstrap.min.css"],
  // nuxt 4 didnt allow postcss file for tailwind
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    plugins: [tsconfigPaths()],
  },
  compatibilityDate: "2025-12-02",
});
