import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // 1. Set the root to 'src' because that's likely where your index.html lives
  root: "src",
  plugins: [
    // 2. Standard plugins for TanStack, React, and path mapping
    TanStackRouterVite(),
    react(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      // 3. Ensuring the @ alias works across all 2,100+ modules
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // 4. Since root is 'src', we move the output back up to the main 'dist' folder
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: true,
    // 5. Ensures the build process handles assets correctly
    assetsDir: "assets",
  },
});