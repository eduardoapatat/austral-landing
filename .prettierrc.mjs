/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	printWidth: 120,
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	tailwindStylesheet: './src/styles/global.css',
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
