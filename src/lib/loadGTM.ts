//@ts-nocheck
// export function loadGTM() {
// 	return new Promise((resolve, reject) => {
// 		(function (w, d, s, l, i) {
// 			w[l] = w[l] || [];
// 			w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
// 			var f = d.getElementsByTagName(s)[0],
// 				j = d.createElement(s) as HTMLScriptElement,
// 				dl = l != 'dataLayer' ? '&l=' + l : '';
// 			j.async = true;
// 			j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
// 			j.onload = resolve;
// 			j.onerror = reject;
// 			f.parentNode.insertBefore(j, f);
// 		})(window, document, 'script', 'dataLayer', 'GTM-XXXXXXXXXX');
// 	});
// }

// Google Analytics script (to be added after GTM loads)
// export function loadGA() {
// 	return new Promise((resolve, reject) => {
// 		const script = document.createElement('script');
// 		script.async = true;
// 		script.src = 'https://www.googletagmanager.com/gtag/js?id=G-1YR6V9F5L3';
// 		script.onload = () => {
// 			window.dataLayer = window.dataLayer || [];
// 			function gtag() {
// 				dataLayer.push(arguments);
// 			}
// 			gtag('js', new Date());
// 			gtag('config', 'G-1YR6V9F5L3');
// 			resolve();
// 		};
// 		script.onerror = reject;
// 		document.head.appendChild(script);
// 	});
// }

// loadGA.ts

declare global {
	interface Window {
		dataLayer: any[];
		gtag: (...args: any[]) => void;
	}
}

const GA_ID = 'G-1YR6V9F5L3';
const GA_URL = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
let gaPromise: Promise<void> | null = null;

export function loadGA(timeout = 5000): Promise<void> {
	if (gaPromise) return gaPromise;

	gaPromise = new Promise((resolve, reject) => {
		// Add preconnect link
		const link = document.createElement('link');
		link.rel = 'preconnect';
		link.href = 'https://www.googletagmanager.com';
		document.head.appendChild(link);

		const script = document.createElement('script');
		script.async = true;
		script.defer = true; // Add defer attribute
		script.src = GA_URL;

		// const timeoutId = setTimeout(() => {
		// 	reject(new Error('GA script load timeout'));
		// }, timeout);

		script.onload = () => {
			// clearTimeout(timeoutId);
			window.dataLayer = window.dataLayer || [];
			window.gtag = function (...args: any[]) {
				window.dataLayer.push(arguments);
			};
			window.gtag('js', new Date());
			window.gtag('config', GA_ID);
			resolve();
		};

		// script.onerror = () => {
		// 	clearTimeout(timeoutId);
		// 	reject(new Error('GA script load error'));
		// };

		// Delay script insertion to next tick
		setTimeout(() => {
			document.head.appendChild(script);
		}, 0);
	});

	return gaPromise;
}
