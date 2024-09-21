<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';
	import 'animate.css';
	// export let data;

	const baseURL = 'https://www.gabrielcm.dev';
	const hreflangs = [
		{ lang: 'en', url: `${baseURL}/` },
		{ lang: 'pt-br', url: `${baseURL}/pt-br/` }
	];
</script>

<svelte:head>
	<title>{$page.data.post?.title}</title>
	{#each hreflangs as { lang, url }}
		<link rel="alternate" hreflang={lang} href={url} />
	{/each}

	<!-- <noscript>
		<iframe
			src="https://www.googletagmanager.com/ns.html?id=GTM-WSRLN9FV"
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
