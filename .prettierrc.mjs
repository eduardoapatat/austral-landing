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
		// El CSS, el JSON, el YAML y el Markdown del repo ya usan dos espacios.
		{
			files: ['*.css', '*.json', '*.yaml', '*.yml', '*.md'],
			options: {
				useTabs: false,
			},
		},
		// El YAML (también el frontmatter de DESIGN.md) mantiene sus comillas dobles.
		{
			files: ['*.yaml', '*.yml', '*.md'],
			options: {
				singleQuote: false,
			},
		},
	],
};
