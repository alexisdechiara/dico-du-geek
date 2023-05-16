/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
darkMode: ['class', '[data-mode="dark"]'],
	theme: {
		fontFamily: {
			sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
			serif: ["Source Serif 4", ...defaultTheme.fontFamily.serif],
			header: ["var(--font-header)", ...defaultTheme.fontFamily.sans],
			pacifico: ["Pacifico"],
			marker: ["Permanent Marker"]
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
				'presentation-header': ['3rem', {
					lineHeight: '5rem',
					fontWeight: '700'
				}],
				'presentation-paragraph': ['1.5rem', {
					lineHeight: '2.5rem',
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
						p: {
							display:'inline-block'
						},
						maxWidth: 'none',
						'--tw-prose-body': theme('colors[primary]'),
						'--tw-prose-headings': theme('colors[ternary]'),
						'--tw-prose-lead': theme('colors[ternary]'),
						'--tw-prose-links': theme('colors[ternary]'),
						'--tw-prose-bold': theme('colors[secondary]'),
						'--tw-prose-counters': theme('colors[secondary]'),
						'--tw-prose-bullets': theme('colors[secondary]'),
						'--tw-prose-hr': theme('colors[border]'),
						'--tw-prose-quotes': theme('colors[primary]'),
						'--tw-prose-quote-borders': theme('colors[ternary]'),
						'--tw-prose-captions': theme('colors[ternary]'),
						'--tw-prose-code': theme('colors[primary]'),
						'--tw-prose-pre-code': theme('colors[background]'),
						'--tw-prose-pre-bg': theme('colors[primary]'),
						'--tw-prose-th-borders': theme('colors[border]'),
						'--tw-prose-td-borders': theme('colors[background]'),

						'--tw-prose-invert-body':theme('colors[primary]'),
						'--tw-prose-invert-headings': theme('colors[ternary]'),
						'--tw-prose-invert-lead': theme('colors[ternary]'),
						'--tw-prose-invert-links': theme('colors[ternary]'),
						'--tw-prose-invert-bold': theme('colors[secondary]'),
						'--tw-prose-invert-counters': theme('colors[secondary]'),
						'--tw-prose-invert-bullets': theme('colors[secondary]'),
						'--tw-prose-invert-hr': theme('colors[border]'),
						'--tw-prose-invert-quotes': theme('colors[primary]'),
						'--tw-prose-invert-quote-borders': theme('colors[ternary]'),
						'--tw-prose-invert-captions': theme('colors[ternary]'),
						'--tw-prose-invert-code': theme('colors[primary]'),
						'--tw-prose-invert-pre-code': theme('colors[background]'),
						'--tw-prose-invert-pre-bg': theme('colors[primary]'),
						'--tw-prose-invert-th-borders': theme('colors[border]'),
						'--tw-prose-invert-td-borders': theme('colors[background]'),
						
					},
				},
				definition: {
					css: {
						'--tw-prose-body': theme('colors.definition[primary]'),
						'--tw-prose-headings': theme('colors.definition[ternary]'),
						'--tw-prose-lead': theme('colors.definition[ternary]'),
						'--tw-prose-links': theme('colors.definition[ternary]'),
						'--tw-prose-bold': theme('colors.definition[secondary]'),
						'--tw-prose-counters': theme('colors.definition[secondary]'),
						'--tw-prose-bullets': theme('colors.definition[secondary]'),
						'--tw-prose-hr': theme('colors.definition[border]'),
						'--tw-prose-quotes': theme('colors.definition[primary]'),
						'--tw-prose-quote-borders': theme('colors.definition[ternary]'),
						'--tw-prose-captions': theme('colors.definition[ternary]'),
						'--tw-prose-code': theme('colors.definition[primary]'),
						'--tw-prose-pre-code': theme('colors.definition[background]'),
						'--tw-prose-pre-bg': theme('colors.definition[primary]'),
						'--tw-prose-th-borders': theme('colors.definition[border]'),
						'--tw-prose-td-borders': theme('colors.definition[background]'),

						'--tw-prose-invert-body':theme('colors.definition[primary]'),
						'--tw-prose-invert-headings': theme('colors.definition[ternary]'),
						'--tw-prose-invert-lead': theme('colors.definition[ternary]'),
						'--tw-prose-invert-links': theme('colors.definition[ternary]'),
						'--tw-prose-invert-bold': theme('colors.definition[secondary]'),
						'--tw-prose-invert-counters': theme('colors.definition[secondary]'),
						'--tw-prose-invert-bullets': theme('colors.definition[secondary]'),
						'--tw-prose-invert-hr': theme('colors.definition[border]'),
						'--tw-prose-invert-quotes': theme('colors.definition[primary]'),
						'--tw-prose-invert-quote-borders': theme('colors.definition[ternary]'),
						'--tw-prose-invert-captions': theme('colors.definition[ternary]'),
						'--tw-prose-invert-code': theme('colors.definition[primary]'),
						'--tw-prose-invert-pre-code': theme('colors.definition[background]'),
						'--tw-prose-invert-pre-bg': theme('colors.definition[primary]'),
						'--tw-prose-invert-th-borders': theme('colors.definition[border]'),
						'--tw-prose-invert-td-borders': theme('colors[background]'),
					}
				},
				etymology: {
					css: {
						'--tw-prose-body': theme('colors.etymology[primary]'),
						'--tw-prose-headings': theme('colors.etymology[ternary]'),
						'--tw-prose-lead': theme('colors.etymology[ternary]'),
						'--tw-prose-links': theme('colors.etymology[ternary]'),
						'--tw-prose-bold': theme('colors.etymology[secondary]'),
						'--tw-prose-counters': theme('colors.etymology[secondary]'),
						'--tw-prose-bullets': theme('colors.etymology[secondary]'),
						'--tw-prose-hr': theme('colors.etymology[border]'),
						'--tw-prose-quotes': theme('colors.etymology[primary]'),
						'--tw-prose-quote-borders': theme('colors.etymology[ternary]'),
						'--tw-prose-captions': theme('colors.etymology[ternary]'),
						'--tw-prose-code': theme('colors.etymology[primary]'),
						'--tw-prose-pre-code': theme('colors.etymology[background]'),
						'--tw-prose-pre-bg': theme('colors.etymology[primary]'),
						'--tw-prose-th-borders': theme('colors.etymology[border]'),
						'--tw-prose-td-borders': theme('colors.etymology[background]'),

						'--tw-prose-invert-body':theme('colors.etymology[primary]'),
						'--tw-prose-invert-headings': theme('colors.etymology[ternary]'),
						'--tw-prose-invert-lead': theme('colors.etymology[ternary]'),
						'--tw-prose-invert-links': theme('colors.etymology[ternary]'),
						'--tw-prose-invert-bold': theme('colors.etymology[secondary]'),
						'--tw-prose-invert-counters': theme('colors.etymology[secondary]'),
						'--tw-prose-invert-bullets': theme('colors.etymology[secondary]'),
						'--tw-prose-invert-hr': theme('colors.etymology[border]'),
						'--tw-prose-invert-quotes': theme('colors.etymology[primary]'),
						'--tw-prose-invert-quote-borders': theme('colors.etymology[ternary]'),
						'--tw-prose-invert-captions': theme('colors.etymology[ternary]'),
						'--tw-prose-invert-code': theme('colors.etymology[primary]'),
						'--tw-prose-invert-pre-code': theme('colors.etymology[background]'),
						'--tw-prose-invert-pre-bg': theme('colors.etymology[primary]'),
						'--tw-prose-invert-th-borders': theme('colors.etymology[border]'),
						'--tw-prose-invert-td-borders': theme('colors.etymology[background]'),
					}
				},
				explanation: {
					css: {
						'--tw-prose-body': theme('colors.explanation[primary]'),
						'--tw-prose-headings': theme('colors.explanation[ternary]'),
						'--tw-prose-lead': theme('colors.explanation[ternary]'),
						'--tw-prose-links': theme('colors.explanation[ternary]'),
						'--tw-prose-bold': theme('colors.explanation[secondary]'),
						'--tw-prose-counters': theme('colors.explanation[secondary]'),
						'--tw-prose-bullets': theme('colors.explanation[secondary]'),
						'--tw-prose-hr': theme('colors.explanation[border]'),
						'--tw-prose-quotes': theme('colors.explanation[primary]'),
						'--tw-prose-quote-borders': theme('colors.explanation[ternary]'),
						'--tw-prose-captions': theme('colors.explanation[ternary]'),
						'--tw-prose-code': theme('colors.explanation[primary]'),
						'--tw-prose-pre-code': theme('colors.explanation[background]'),
						'--tw-prose-pre-bg': theme('colors.explanation[primary]'),
						'--tw-prose-th-borders': theme('colors.explanation[border]'),
						'--tw-prose-td-borders': theme('colors.explanation[background]'),

						'--tw-prose-invert-body':theme('colors.explanation[primary]'),
						'--tw-prose-invert-headings': theme('colors.explanation[ternary]'),
						'--tw-prose-invert-lead': theme('colors.explanation[ternary]'),
						'--tw-prose-invert-links': theme('colors.explanation[ternary]'),
						'--tw-prose-invert-bold': theme('colors.explanation[secondary]'),
						'--tw-prose-invert-counters': theme('colors.explanation[secondary]'),
						'--tw-prose-invert-bullets': theme('colors.explanation[secondary]'),
						'--tw-prose-invert-hr': theme('colors.explanation[border]'),
						'--tw-prose-invert-quotes': theme('colors.explanation[primary]'),
						'--tw-prose-invert-quote-borders': theme('colors.explanation[ternary]'),
						'--tw-prose-invert-captions': theme('colors.explanation[ternary]'),
						'--tw-prose-invert-code': theme('colors.explanation[primary]'),
						'--tw-prose-invert-pre-code': theme('colors.explanation[background]'),
						'--tw-prose-invert-pre-bg': theme('colors.explanation[primary]'),
						'--tw-prose-invert-th-borders': theme('colors.explanation[border]'),
						'--tw-prose-invert-td-borders': theme('colors.explanation[background]'),
					}
				},
				relation: {
					css: {
						'--tw-prose-body': theme('colors.relation[primary]'),
						'--tw-prose-headings': theme('colors.relation[ternary]'),
						'--tw-prose-lead': theme('colors.relation[ternary]'),
						'--tw-prose-links': theme('colors.relation[ternary]'),
						'--tw-prose-bold': theme('colors.relation[secondary]'),
						'--tw-prose-counters': theme('colors.relation[secondary]'),
						'--tw-prose-bullets': theme('colors.relation[secondary]'),
						'--tw-prose-hr': theme('colors.relation[border]'),
						'--tw-prose-quotes': theme('colors.relation[primary]'),
						'--tw-prose-quote-borders': theme('colors.relation[ternary]'),
						'--tw-prose-captions': theme('colors.relation[ternary]'),
						'--tw-prose-code': theme('colors.relation[primary]'),
						'--tw-prose-pre-code': theme('colors.relation[background]'),
						'--tw-prose-pre-bg': theme('colors.relation[primary]'),
						'--tw-prose-th-borders': theme('colors.relation[border]'),
						'--tw-prose-td-borders': theme('colors.relation[background]'),

						'--tw-prose-invert-body':theme('colors.relation[primary]'),
						'--tw-prose-invert-headings': theme('colors.relation[ternary]'),
						'--tw-prose-invert-lead': theme('colors.relation[ternary]'),
						'--tw-prose-invert-links': theme('colors.relation[ternary]'),
						'--tw-prose-invert-bold': theme('colors.relation[secondary]'),
						'--tw-prose-invert-counters': theme('colors.relation[secondary]'),
						'--tw-prose-invert-bullets': theme('colors.relation[secondary]'),
						'--tw-prose-invert-hr': theme('colors.relation[border]'),
						'--tw-prose-invert-quotes': theme('colors.relation[primary]'),
						'--tw-prose-invert-quote-borders': theme('colors.relation[ternary]'),
						'--tw-prose-invert-captions': theme('colors.relation[ternary]'),
						'--tw-prose-invert-code': theme('colors.relation[primary]'),
						'--tw-prose-invert-pre-code': theme('colors.relation[background]'),
						'--tw-prose-invert-pre-bg': theme('colors.relation[primary]'),
						'--tw-prose-invert-th-borders': theme('colors.relation[border]'),
						'--tw-prose-invert-td-borders': theme('colors.relation[background]'),
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
