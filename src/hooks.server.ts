// import type { Handle, HandleServerError } from '@sveltejs/kit';

// --- Internacionalização
// export const handle: Handle = async ({ event, resolve }) => {
// 	const locale = 'en';
// 	event.locals.locale = locale;
// 	return resolve(event, {
// 		transformPageChunk: ({ html }) => html.replace('%lang%', locale)
// 	});
// };

// --- Error Logging:
// export const handleError: HandleServerError = async({ error, event}) => {
//     console.log(error)

//     return {
//         message: 'ERRO!'
//     }
// }

