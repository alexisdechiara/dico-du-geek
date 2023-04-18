/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
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
				header: ['4rem', {
					lineHeight: '6rem',
					fontWeight: '700'
				}],
				tag: ['0.875rem', {
					lineHeight: '1rem',
					fontWeight: '600'
				}],
				paragraph: ['1rem', {
					lineHeight: '1.125rem',
					fontWeight: '500'
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
					letterSpacing: '-5%',
				}],
				'presentation-header': ['4rem', {
					lineHeight: '6rem',
					fontWeight: '700'
				}],
				'presentation-paragraph': ['2rem', {
					lineHeight: '3rem',
					fontWeight: '600'
				}],
				'index-letter': ['8rem', {
					lineHeight: '12rem',
					fontWeight: '600'
				}],
				'index-word': ['4rem', {
					lineHeight: '6rem',
					fontWeight: '600'
				}]
			}
		},
	},
	plugins: [],
}
