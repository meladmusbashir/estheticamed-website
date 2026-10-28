import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Server-rendered TanStack Start app, deployed as one Cloudflare Worker.
// The server bundle has no node_modules at runtime, so all deps are bundled.
export default defineConfig({
  ssr: {
    noExternal: true,
    external: ["cloudflare:workers"],
  },
  build: {
    rollupOptions: { external: [/^cloudflare:/] },
  },
  plugins: [tanstackStart({ server: { entry: "server" } }), react(), tailwindcss(), tsconfigPaths()],
});
