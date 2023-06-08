import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
export const baseURl = "/the_ezra_klein_podject/";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: baseURl,
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test_setup.js",
  },
});
