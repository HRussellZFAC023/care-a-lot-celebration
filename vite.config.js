// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    root: 'public',
    build: {
        assetsDir: './assets'
    },
    envDir: "../"
});
