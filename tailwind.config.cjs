/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
darkMode: ['class', '[data-mode="dark"]'],
	theme: {
		fontFamily: {
			sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
			serif: ["Source Serif 4", ...defaultTheme.fontFamily.serif],
			header: ["Poppins"],
			pacifico: ["Pacifico"]
		},
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'var(--color-secondary)',
				ternary: 'var(--color-ternary)',
				border: 'var(--color-border)',
				hover: 'var(--color-hover)',
				background: 'var(--color-background)',
				base: 'var(--color-base)',
				definition: {
					primary: 'var(--color-definition-primary)',
					secondary: 'var(--color-definition-secondary)',
					ternary: 'var(--color-definition-ternary)',
					border: 'var(--color-definition-border)',
					hover: 'var(--color-definition-hover)',
					background: 'var(--color-definition-background)',
				},
				etymology: {
					primary: 'var(--color-etymology-primary)',
					secondary: 'var(--color-etymology-secondary)',
					ternary: 'var(--color-etymology-ternary)',
					border: 'var(--color-etymology-border)',
					hover: 'var(--color-etymology-hover)',
					background: 'var(--color-etymology-background)',
				},
				explanation: {
					primary: 'var(--color-explanation-primary)',
					secondary: 'var(--color-explanation-secondary)',
					ternary: 'var(--color-explanation-ternary)',
					border: 'var(--color-explanation-border)',
					hover: 'var(--color-explanation-hover)',
					background: 'var(--color-explanation-background)',
				},
				relation: {
					primary: 'var(--color-relation-primary)',
					secondary: 'var(--color-relation-secondary)',
					ternary: 'var(--color-relation-ternary)',
					border: 'var(--color-relation-border)',
					hover: 'var(--color-relation-hover)',
					background: 'var(--color-relation-background)',
				}
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
				definition: {
					css: {
						'--tw-prose-body': theme('colors.light.definition[primary]'),
						'--tw-prose-headings': theme('colors.light.definition[ternary]'),
						'--tw-prose-lead': theme('colors.light.definition[ternary]'),
						'--tw-prose-links': theme('colors.light.definition[ternary]'),
						'--tw-prose-bold': theme('colors.light.definition[secondary]'),
						'--tw-prose-counters': theme('colors.light.definition[secondary]'),
						'--tw-prose-bullets': theme('colors.light.definition[secondary]'),
						'--tw-prose-hr': theme('colors.light.definition[border]'),
						'--tw-prose-quotes': theme('colors.light.definition[primary]'),
						'--tw-prose-quote-borders': theme('colors.light.definition[ternary]'),
						'--tw-prose-captions': theme('colors.light.definition[ternary]'),
						'--tw-prose-code': theme('colors.light.definition[primary]'),
						'--tw-prose-pre-code': theme('colors.light.definition[background]'),
						'--tw-prose-pre-bg': theme('colors.light.definition[primary]'),
						'--tw-prose-th-borders': theme('colors.light.definition[border]'),
						'--tw-prose-td-borders': theme('colors.light.definition[background]'),

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
				etymology: {
					css: {
						'--tw-prose-body': theme('colors.light.etymology[primary]'),
						'--tw-prose-headings': theme('colors.light.etymology[ternary]'),
						'--tw-prose-lead': theme('colors.light.etymology[ternary]'),
						'--tw-prose-links': theme('colors.light.etymology[ternary]'),
						'--tw-prose-bold': theme('colors.light.etymology[secondary]'),
						'--tw-prose-counters': theme('colors.light.etymology[secondary]'),
						'--tw-prose-bullets': theme('colors.light.etymology[secondary]'),
						'--tw-prose-hr': theme('colors.light.etymology[border]'),
						'--tw-prose-quotes': theme('colors.light.etymology[primary]'),
						'--tw-prose-quote-borders': theme('colors.light.etymology[ternary]'),
						'--tw-prose-captions': theme('colors.light.etymology[ternary]'),
						'--tw-prose-code': theme('colors.light.etymology[primary]'),
						'--tw-prose-pre-code': theme('colors.light.etymology[background]'),
						'--tw-prose-pre-bg': theme('colors.light.etymology[primary]'),
						'--tw-prose-th-borders': theme('colors.light.etymology[border]'),
						'--tw-prose-td-borders': theme('colors.light.etymology[background]'),

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
				explanation: {
					css: {
						'--tw-prose-body': theme('colors.light.explanation[primary]'),
						'--tw-prose-headings': theme('colors.light.explanation[ternary]'),
						'--tw-prose-lead': theme('colors.light.explanation[ternary]'),
						'--tw-prose-links': theme('colors.light.explanation[ternary]'),
						'--tw-prose-bold': theme('colors.light.explanation[secondary]'),
						'--tw-prose-counters': theme('colors.light.explanation[secondary]'),
						'--tw-prose-bullets': theme('colors.light.explanation[secondary]'),
						'--tw-prose-hr': theme('colors.light.explanation[border]'),
						'--tw-prose-quotes': theme('colors.light.explanation[primary]'),
						'--tw-prose-quote-borders': theme('colors.light.explanation[ternary]'),
						'--tw-prose-captions': theme('colors.light.explanation[ternary]'),
						'--tw-prose-code': theme('colors.light.explanation[primary]'),
						'--tw-prose-pre-code': theme('colors.light.explanation[background]'),
						'--tw-prose-pre-bg': theme('colors.light.explanation[primary]'),
						'--tw-prose-th-borders': theme('colors.light.explanation[border]'),
						'--tw-prose-td-borders': theme('colors.light.explanation[background]'),

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
			pattern: /(bg|text|border|fill)-(definition|etymology|explanation|relation)-(primary|secondary|ternary|border|hover|background)/,
			variants: ['sm','md','lg','xl','hover','dark','peer-checked:dark', 'group-checked:dark']
		}
	],
	plugins: [
		require('@tailwindcss/typography'),
	],
}
