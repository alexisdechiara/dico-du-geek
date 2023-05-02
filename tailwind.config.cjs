/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
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
					base: colors.white,
					definition: {
						primary: 'var(--color-light-definition-primary)',
						secondary: 'var(--color-light-definition-secondary)',
						ternary: 'var(--color-light-definition-ternary)',
						border: 'var(--color-light-definition-border)',
						hover: 'var(--color-light-definition-hover)',
						background: 'var(--color-light-definition-background)',
					},
					etymology: {
						primary: 'var(--color-light-etymology-primary)',
						secondary: 'var(--color-light-etymology-secondary)',
						ternary: 'var(--color-light-etymology-ternary)',
						border: 'var(--color-light-etymology-border)',
						hover: 'var(--color-light-etymology-hover)',
						background: 'var(--color-light-etymology-background)',
					},
					explanation: {
						primary: 'var(--color-light-explanation-primary)',
						secondary: 'var(--color-light-explanation-secondary)',
						ternary: 'var(--color-light-explanation-ternary)',
						border: 'var(--color-light-explanation-border)',
						hover: 'var(--color-light-explanation-hover)',
						background: 'var(--color-light-explanation-background)',
					},
					statistic: {
						primary: 'var(--color-light-statistic-primary)',
						secondary: 'var(--color-light-statistic-secondary)',
						ternary: 'var(--color-light-statistic-ternary)',
						border: 'var(--color-light-statistic-border)',
						hover: 'var(--color-light-statistic-hover)',
						background: 'var(--color-light-statistic-background)',
					}
				},
				dark: {
					primary: 'var(--color-dark-primary)',
					secondary: 'var(--color-dark-secondary)',
					ternary: 'var(--color-dark-ternary)',
					border: 'var(--color-dark-border)',
					hover: 'var(--color-dark-hover)',
					background: 'var(--color-dark-background)',
					base: colors.neutral[900],
					definition: {
						primary: 'var(--color-dark-definition-primary)',
						secondary: 'var(--color-dark-definition-secondary)',
						ternary: 'var(--color-dark-definition-ternary)',
						border: 'var(--color-dark-definition-border)',
						hover: 'var(--color-dark-definition-hover)',
						background: 'var(--color-dark-definition-background)',
					},
					etymology: {
						primary: 'var(--color-dark-etymology-primary)',
						secondary: 'var(--color-dark-etymology-secondary)',
						ternary: 'var(--color-dark-etymology-ternary)',
						border: 'var(--color-dark-etymology-border)',
						hover: 'var(--color-dark-etymology-hover)',
						background: 'var(--color-dark-etymology-background)',
					},
					explanation: {
						primary: 'var(--color-dark-explanation-primary)',
						secondary: 'var(--color-dark-explanation-secondary)',
						ternary: 'var(--color-dark-explanation-ternary)',
						border: 'var(--color-dark-explanation-border)',
						hover: 'var(--color-dark-explanation-hover)',
						background: 'var(--color-dark-explanation-background)',
					},
					statistic: {
						primary: 'var(--color-dark-statistic-primary)',
						secondary: 'var(--color-dark-statistic-secondary)',
						ternary: 'var(--color-dark-statistic-ternary)',
						border: 'var(--color-dark-statistic-border)',
						hover: 'var(--color-dark-statistic-hover)',
						background: 'var(--color-dark-statistic-background)',
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
			pattern: /(bg|text|border|fill)-(light|dark)-(definition|etymology|explanation|statistic)-(primary|secondary|ternary|border|hover|background)/,
			variants: ['sm','md','lg','xl','hover','dark']
		}
	],
	plugins: [
		require('@tailwindcss/typography'),
	],
}
