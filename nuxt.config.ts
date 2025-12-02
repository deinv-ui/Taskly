import tsconfigPaths from "vite-tsconfig-paths";

export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  css: ["@/assets/css/tailwind.css"],
  // css: ["bootstrap/dist/css/bootstrap.min.css"],
  vite: {
    plugins: [tsconfigPaths()],
  },
  compatibilityDate: "2025-12-02",
});
