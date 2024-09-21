<script>
	import { availableLanguageTags, languageTag } from '$lib/paraglide/runtime.js';
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';
	import { brazil_svg, usa_svg } from '$lib';

	const flagsMap = {
		en: usa_svg,
		'pt-br': brazil_svg
	};
	const labels = {
		en: `EN`, // 🇺🇸 EN
		'pt-br': ` PT-BR ` // 🇧🇷 pt-BR
	};
</script>

<div class="absolute top-0 right-0 p-4 flex space-x-2 rounded-bl-lg shadow-md">
	<!-- animate__animated animate__fadeIn animate__delay-1s -->
	{#each availableLanguageTags as lang}
		<a
			class="translation hover:border-b px-1"
			href={i18n.route($page.url.pathname)}
			hreflang={lang}
			aria-current={lang === languageTag() ? 'page' : undefined}
		>
			<img
				width="36"
				height="36"
				src={flagsMap[lang]}
				alt={`${lang} flag`}
				class="size-9 align-middle"
			/>
		</a>
	{/each}
</div>

<style>
	.translation {
		transition: transform 0.2s ease-in-out;
	}

	.translation:hover {
		transform: translateY(-5px); /* Adjust the value to control the jump height */
	}
</style>
