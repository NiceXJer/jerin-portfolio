import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://portfolio.jeringeorge.online",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});