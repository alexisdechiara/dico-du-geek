/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
			serif: ["Source Serif 4", ...defaultTheme.fontFamily.sans],
			header: ["Poppins"]
		},
		extend: {
			colors: {
				light: {
					primary: 'var(--color-light-primary)',
					secondary: 'var(--color-light-secondary)',
					ternary: 'var(--color-light-ternary)',
					border: 'var(--color-light-border)',
					hover: 'var(--color-light-hover)',
					background: 'var(--color-light-background)',
					definition: {
						primary: 'var(--color-light-definition-primary)',
						secondary: 'var(--color-light-definition-secondary)',
						ternary: 'var(--color-light-definition-ternary)',
						border: 'var(--color-light-definition-border)',
						hover: 'var(--color-light-definition-hover)',
						background: 'var(--color-light-definition-background)',
					},
					lore: {
						primary: 'var(--color-light-lore-primary)',
						secondary: 'var(--color-light-lore-secondary)',
						ternary: 'var(--color-light-lore-ternary)',
						border: 'var(--color-light-lore-border)',
						hover: 'var(--color-light-lore-hover)',
						background: 'var(--color-light-lore-background)',
					},
					examples: {
						primary: 'var(--color-light-examples-primary)',
						secondary: 'var(--color-light-examples-secondary)',
						ternary: 'var(--color-light-examples-ternary)',
						border: 'var(--color-light-examples-border)',
						hover: 'var(--color-light-examples-hover)',
						background: 'var(--color-light-examples-background)',
					},
					statistics: {
						primary: 'var(--color-light-statistics-primary)',
						secondary: 'var(--color-light-statistics-secondary)',
						ternary: 'var(--color-light-statistics-ternary)',
						border: 'var(--color-light-statistics-border)',
						hover: 'var(--color-light-statistics-hover)',
						background: 'var(--color-light-statistics-background)',
					}
				},
				dark: {
					primary: 'var(--color-dark-primary)',
					secondary: 'var(--color-dark-secondary)',
					ternary: 'var(--color-dark-ternary)',
					border: 'var(--color-dark-border)',
					hover: 'var(--color-dark-hover)',
					background: 'var(--color-dark-background)',
					definition: {
						primary: 'var(--color-dark-definition-primary)',
						secondary: 'var(--color-dark-definition-secondary)',
						ternary: 'var(--color-dark-definition-ternary)',
						border: 'var(--color-dark-definition-border)',
						hover: 'var(--color-dark-definition-hover)',
						background: 'var(--color-dark-definition-background)',
					},
					lore: {
						primary: 'var(--color-dark-lore-primary)',
						secondary: 'var(--color-dark-lore-secondary)',
						ternary: 'var(--color-dark-lore-ternary)',
						border: 'var(--color-dark-lore-border)',
						hover: 'var(--color-dark-lore-hover)',
						background: 'var(--color-dark-lore-background)',
					},
					examples: {
						primary: 'var(--color-dark-examples-primary)',
						secondary: 'var(--color-dark-examples-secondary)',
						ternary: 'var(--color-dark-examples-ternary)',
						border: 'var(--color-dark-examples-border)',
						hover: 'var(--color-dark-examples-hover)',
						background: 'var(--color-dark-examples-background)',
					},
					statistics: {
						primary: 'var(--color-dark-statistics-primary)',
						secondary: 'var(--color-dark-statistics-secondary)',
						ternary: 'var(--color-dark-statistics-ternary)',
						border: 'var(--color-dark-statistics-border)',
						hover: 'var(--color-dark-statistics-hover)',
						background: 'var(--color-dark-statistics-background)',
					}
				},
			},
			fontSize: {
				title: ['1rem', {
					lineHeight: '1.5rem',
					fontWeight: '700'
				}],
				entry: ['4rem', {
					lineHeight: '4rem',
					fontWeight: '700'
				}],
				tag: ['0.875rem', {
					lineHeight: '0.875rem',
					fontWeight: '600'
				}],
				header: ['1.125rem', {
					lineHeight: '1.25rem',
					fontWeight: '500'
				}],
				paragraph: ['1rem', {
					lineHeight: '1.125rem',
					fontWeight: '450'
				}],
				select: ['1.5rem', {
					lineHeight: '1.75rem',
					fontWeight: '500'
				}],
				button: ['0.625rem', {
					lineHeight: '0.75rem',
					fontWeight: '500'
				}],
				footer: ['0.875rem', {
					lineHeight: '1rem',
					fontWeight: '500',
					letterSpacing: '-0.8px',
				}],
				'presentation-header': ['4rem', {
					lineHeight: '6rem',
					fontWeight: '700'
				}],
				'presentation-paragraph': ['2rem', {
					lineHeight: '3rem',
					fontWeight: '600'
				}],
				'lexicon-letter': ['8rem', {
					fontWeight: '600'
				}],
				'lexicon-word': ['3rem', {
					fontWeight: '600'
				}]
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						'--tw-prose-body': theme('colors.light[primary]'),
						'--tw-prose-headings': theme('colors.light[ternary]'),
						'--tw-prose-lead': theme('colors.light[ternary]'),
						'--tw-prose-links': theme('colors.light[ternary]'),
						'--tw-prose-bold': theme('colors.light[secondary]'),
						'--tw-prose-counters': theme('colors.light[secondary]'),
						'--tw-prose-bullets': theme('colors.light[secondary]'),
						'--tw-prose-hr': theme('colors.light[border]'),
						'--tw-prose-quotes': theme('colors.light[primary]'),
						'--tw-prose-quote-borders': theme('colors.light[ternary]'),
						'--tw-prose-captions': theme('colors.light[ternary]'),
						'--tw-prose-code': theme('colors.light[primary]'),
						'--tw-prose-pre-code': theme('colors.light[background]'),
						'--tw-prose-pre-bg': theme('colors.light[primary]'),
						'--tw-prose-th-borders': theme('colors.light[border]'),
						'--tw-prose-td-borders': theme('colors.light[background]'),

						'--tw-prose-invert-body':theme('colors.dark[primary]'),
						'--tw-prose-invert-headings': theme('colors.dark[ternary]'),
						'--tw-prose-invert-lead': theme('colors.dark[ternary]'),
						'--tw-prose-invert-links': theme('colors.dark[ternary]'),
						'--tw-prose-invert-bold': theme('colors.dark[secondary]'),
						'--tw-prose-invert-counters': theme('colors.dark[secondary]'),
						'--tw-prose-invert-bullets': theme('colors.dark[secondary]'),
						'--tw-prose-invert-hr': theme('colors.dark[border]'),
						'--tw-prose-invert-quotes': theme('colors.dark[primary]'),
						'--tw-prose-invert-quote-borders': theme('colors.dark[ternary]'),
						'--tw-prose-invert-captions': theme('colors.dark[ternary]'),
						'--tw-prose-invert-code': theme('colors.dark[primary]'),
						'--tw-prose-invert-pre-code': theme('colors.dark[background]'),
						'--tw-prose-invert-pre-bg': theme('colors.dark[primary]'),
						'--tw-prose-invert-th-borders': theme('colors.dark[border]'),
						'--tw-prose-invert-td-borders': theme('colors.dark[background]'),
						
					},
				},
				lore: {
					css: {
						'--tw-prose-body': theme('colors.light.lore[primary]'),
						'--tw-prose-headings': theme('colors.light.lore[ternary]'),
						'--tw-prose-lead': theme('colors.light.lore[ternary]'),
						'--tw-prose-links': theme('colors.light.lore[ternary]'),
						'--tw-prose-bold': theme('colors.light.lore[secondary]'),
						'--tw-prose-counters': theme('colors.light.lore[secondary]'),
						'--tw-prose-bullets': theme('colors.light.lore[secondary]'),
						'--tw-prose-hr': theme('colors.light.lore[border]'),
						'--tw-prose-quotes': theme('colors.light.lore[primary]'),
						'--tw-prose-quote-borders': theme('colors.light.lore[ternary]'),
						'--tw-prose-captions': theme('colors.light.lore[ternary]'),
						'--tw-prose-code': theme('colors.light.lore[primary]'),
						'--tw-prose-pre-code': theme('colors.light.lore[background]'),
						'--tw-prose-pre-bg': theme('colors.light.lore[primary]'),
						'--tw-prose-th-borders': theme('colors.light.lore[border]'),
						'--tw-prose-td-borders': theme('colors.light.lore[background]'),

						'--tw-prose-invert-body':theme('colors.dark[primary]'),
						'--tw-prose-invert-headings': theme('colors.dark[ternary]'),
						'--tw-prose-invert-lead': theme('colors.dark[ternary]'),
						'--tw-prose-invert-links': theme('colors.dark[ternary]'),
						'--tw-prose-invert-bold': theme('colors.dark[secondary]'),
						'--tw-prose-invert-counters': theme('colors.dark[secondary]'),
						'--tw-prose-invert-bullets': theme('colors.dark[secondary]'),
						'--tw-prose-invert-hr': theme('colors.dark[border]'),
						'--tw-prose-invert-quotes': theme('colors.dark[primary]'),
						'--tw-prose-invert-quote-borders': theme('colors.dark[ternary]'),
						'--tw-prose-invert-captions': theme('colors.dark[ternary]'),
						'--tw-prose-invert-code': theme('colors.dark[primary]'),
						'--tw-prose-invert-pre-code': theme('colors.dark[background]'),
						'--tw-prose-invert-pre-bg': theme('colors.dark[primary]'),
						'--tw-prose-invert-th-borders': theme('colors.dark[border]'),
						'--tw-prose-invert-td-borders': theme('colors.dark[background]'),
					}
				},
			}),
		},
	},
	safelist: [
		{
			pattern: /(bg|text|border|fill)-(light|dark)-(definition|lore|examples|statistics)-(primary|secondary|ternary|border|hover|background)/,
			variants: ['sm','md','lg','xl','hover','dark']
		}
	],
	plugins: [
		require('@tailwindcss/typography'),
	],
}
