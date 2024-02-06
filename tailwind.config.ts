/** @type {import('tailwindcss').Config} */
import { skeleton } from '@skeletonlabs/tw-plugin';
import { join } from 'path';
import type { Config } from 'tailwindcss';
import { myCustomTheme } from './my-custom-theme';
import { addDynamicIconSelectors } from '@iconify/tailwind';

const config = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},
	plugins: [
		// 4. Append the Skeleton plugin (after other plugins)
		skeleton({
			themes: { custom: [myCustomTheme] }
		}),
		addDynamicIconSelectors()
	]
} satisfies Config;

export default config;
