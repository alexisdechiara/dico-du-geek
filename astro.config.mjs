import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import AstroPWA from '@vite-pwa/astro'
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false
			}
		}),
		image(),
		svelte(),
		AstroPWA({
			mode: 'development',
			base: '/',
			scope: '/',
			includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
			registerType: 'autoUpdate',
			manifest: {
				name: 'Le dico du geek',
				description: 'Le dictionnaire de la culture geek',
				theme_color: '#121C40',
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
			},
			workbox: {
				navigateFallback: '/404',
				globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
			},
			devOptions: {
				enabled: true,
				navigateFallbackAllowlist: [/^\/404$/],
			},
		}),
	],
	output: "server",
});