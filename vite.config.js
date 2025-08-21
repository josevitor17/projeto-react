import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/projeto-react/", // garante caminhos corretos no GitHub Pages
});
