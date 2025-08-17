import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config simplified for Storybook + React
export default defineConfig({
  plugins: [react()],
});
