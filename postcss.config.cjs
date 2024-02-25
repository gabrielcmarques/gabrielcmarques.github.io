/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const config = {
	plugins: [
		require('postcss-import'),
		require('postcss-font-magician')({
			variants: {
				'Adventure Request': {
					400: []
				}
			},
			foundries: ['cdn'],
			protocol: 'https:'
		}),
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer
	]
};

module.exports = config;
