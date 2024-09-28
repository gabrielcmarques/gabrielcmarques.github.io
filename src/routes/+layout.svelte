<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { onCLS, onFID, onLCP } from 'web-vitals';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';
	import 'animate.css';
	import { onMount } from 'svelte';
	import { loadGA } from '$lib/loadGTM';
	import { browser } from '$app/environment';
	// export let data;

	const baseURL = 'https://www.gabrielcm.dev';
	const hreflangs = [
		{ lang: 'en', url: `${baseURL}/` },
		{ lang: 'pt-br', url: `${baseURL}/pt-br/` }
	];

	function sendToGoogleAnalytics(metric) {
		const { name, delta, id } = metric;
		if (typeof gtag === 'function') {
			gtag('event', name, {
				value: delta,
				metric_id: id,
				metric_value: delta,
				metric_delta: delta
			});
		}
	}

	onMount(() => {
		if (browser) {
			onCLS(sendToGoogleAnalytics);
			onFID(sendToGoogleAnalytics);
			onLCP(sendToGoogleAnalytics);
			loadGA();
		}
	});
</script>

<svelte:head>
	<title>{$page.data.post?.title}</title>
	{#each hreflangs as { lang, url }}
		<link rel="alternate" hreflang={lang} href={url} />
	{/each}

	<!-- <noscript>
		<iframe
			src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXXX"
			height="0"
			width="0"
			style="display:none;visibility:hidden"
		></iframe>
	</noscript> -->
</svelte:head>

<ParaglideJS {i18n}>
	<main class="main-c min-w-0 overflow-x-hidden relative">
		<slot />
	</main>
</ParaglideJS>

<style>
	.main-c {
		margin: 0 auto;
	}
</style>
