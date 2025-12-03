import tsconfigPaths from "vite-tsconfig-paths";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Taskly", // Default tab title
      meta: [
        {
          name: "description",
          content:
            "Taskly is a modern task management app built with Nuxt 3, helping you organize, prioritize, and track your tasks efficiently.",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
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
