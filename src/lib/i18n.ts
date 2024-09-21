// src/lib/i18n.js
import { createI18n } from '@inlang/paraglide-sveltekit';
import * as runtime from '$lib/paraglide/runtime.js';
import { match as int } from './params/int';
// import * as m from '$lib/paraglide/messages.js';
// import { base } from "$app/paths"
export const i18n = createI18n(runtime, {
	// sourceLanguageTag = "en",
	defaultLanguageTag: 'en',
	pathnames: {
		// '/about': {
		// 	en: '/about',
		// 	'pt-br': '/sobre'
		// },

		// You can use parameters
		// All translations must use identical parameters and names
		'/user/[id=int]/[...rest]': {
			en: '/user/[id=int]/[...rest]',
			'pt-br': '/usuario/[id=int]/[...rest]'
		}
		// Instead of a map, you can also pass a message-function reference
		// "/admin" : m.admin_path
	},

	// If you're using matchers in the pathnames, you need to pass them
	matchers: { int },
	exclude: ["/game-company", "/vet-system", ],
	textDirection: {
		en: 'ltr',
		'pt-br': 'ltr'
	}
});
