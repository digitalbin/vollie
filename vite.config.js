import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { svelte } from '@sveltejs/vite-plugin-svelte';
// import { visualizer } from 'rollup-plugin-visualizer';

const base = './'
// https://vitejs.dev/config/
export default defineConfig({
    base: base,
    plugins: [
        svelte(),
        VitePWA({
            base: base,
            includeAssets: [
                'favicon.ico',
                'robots.txt',
                'apple-touch-icon.png',
            ],
            manifest: {
                name: 'Vollie',
                short_name: 'Vollie',
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
                theme_color: '#ffffff',
                background_color: '#ffffff',
                display: 'standalone',
                start_url: base,
            },
        }),
        // visualizer(),
    ],
});
