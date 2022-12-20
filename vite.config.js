import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            "/api": {
                target: 'http://localhost:7070',
                changeOrigin: false,
                rewrite: (path) => path.replace(/^\/api/, ''),
            }
        }
    },
    plugins: [vue()],
});
