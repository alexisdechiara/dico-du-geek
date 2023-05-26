import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import AstroPWA from "@vite-pwa/astro";
import svelte from "@astrojs/svelte";
import partytown from "@astrojs/partytown";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    site: "https://ledicodugeek.geekly.blog",
    integrations: [
        tailwind({
            config: {
                applyBaseStyles: false,
            },
        }),
        image(),
        svelte(),
        AstroPWA({
            mode: "development",
            base: "/",
            scope: "/",
            includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
            registerType: "autoUpdate",
            manifest: {
                name: "Le dico du geek",
                description: "Le dictionnaire de la culture geek",
                theme_color: "#121C40",
                icons: [
                    {
                        src: "/favicon/pwa-48x48.png",
                        sizes: "48x48",
                        type: "image/png",
                        purpose: "maskable",
                    },
                    {
                        src: "/favicon/pwa-72x72.png",
                        sizes: "72x72",
                        type: "image/png",
                        purpose: "maskable",
                    },
                    {
                        src: "/favicon/pwa-96x96.png",
                        sizes: "96x96",
                        type: "image/png",
                        purpose: "maskable",
                    },
                    {
                        src: "/favicon/pwa-128x128.png",
                        sizes: "128x128",
                        type: "image/png",
                        purpose: "maskable",
                    },
                    {
                        src: "/favicon/pwa-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/favicon/pwa-384x384.png",
                        sizes: "384x384",
                        type: "image/png",
                        purpose: "maskable",
                    },
                    {
                        src: "/favicon/pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "maskable",
                    },
                ],
            },
            workbox: {
                navigateFallback: "/404",
                globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
            },
            devOptions: {
                enabled: true,
                navigateFallbackAllowlist: [/^\/404$/],
            },
        }),
        partytown(),
        compress(),
        sitemap(),
    ],
    output: "server",
    adapter: node({
        mode: "standalone",
    }),
});
