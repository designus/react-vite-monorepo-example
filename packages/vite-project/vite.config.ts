import { VitePluginWatchWorkspace } from "@prosopo/vite-plugin-watch-workspace";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginWatchWorkspace({
      workspaceRoot: path.resolve("../.."),
      currentPackage: path.resolve("."),
      format: "esm", // or 'cjs'
      fileTypes: ["ts", "tsx", "js", "jsx"], // optional - file types to watch. default is ['ts', 'tsx']
      ignorePaths: ["node_modules", "dist"], // optional - globs to ignore
    }),
  ],
});
