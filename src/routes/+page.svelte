<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import Footer from '$lib/components/Footer.svelte';
	import { reveal, setDefaultOptions } from 'svelte-reveal';
	import '../app.postcss';

	// import og_image from '$lib/assets/images/og_image.webp';
	// import og_image from '$lib/assets/images/og_image_html.webp';
	// import {
	// 	// DEFAULT_OG_IMAGE,
	// 	MY_TWITTER_HANDLE,
	// 	OG_IMAGE_HEIGHT,
	// 	OG_IMAGE_WIDTH,
	// 	SITE_DESCRIPTION,
	// 	SITE_TITLE,
	// 	SITE_URL
	// } from '$lib/siteConfig';
	// import LanguageSelector from '$lib/components/LanguageSelector.svelte';
	// ----=----=----=----=----= Imports ----=----=----=----=----=

	import { page } from '$app/stores';
	import Header from './Header.svelte';
	import Orbit from './Orbit.svelte';
	import Section1 from './Section1.svelte';
	import Section2 from './Section2.svelte';
	import Section3 from './Section3.svelte';
	import Section4 from './Section4.svelte';
	import Section5 from './Section5.svelte';
	import Section6 from './Section6.svelte';
	import Section7 from './Section7.svelte';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';

	// ----=----=----=----=----= SEO ----=----=----=----=----=
	import ogSquareImageSrc from '$lib/assets/home/home-open-graph-square.jpg';
	import ogImageSrc from '$lib/assets/home/home-open-graph.jpg';
	import twitterImageSrc from '$lib/assets/home/home-twitter.jpg';
	import featuredImageSrc from '$lib/assets/home/home.jpg';
	// import og_image from '$lib/assets/images/og_image.webp';
	import website from '$lib/config/website';
	import SEO from '$lib/components/SEO/index.svelte';

	let pagePath = $page.url.pathname;
	$: pagePath = $page.url.pathname;
	const isPortuguese = pagePath.startsWith('/pt-br');

	const { author, siteUrl } = website;
	let title = isPortuguese ? 'Inicio' : 'Home';
	const breadcrumbs = [
		{
			name: isPortuguese ? 'Início' : 'Home',
			slug: ''
		}
	];
	let metadescription = isPortuguese
		? 'Engenheiro de software fullstack especializado em aplicações web de alto desempenho. Crio sites otimizados, acessíveis e com SEO eficiente, usando JavaScript, Python, SQL e mais.'
		: 'Fullstack software engineer specializing in high-performance web applications. I create optimized, accessible, and SEO-friendly websites using JavaScript, Python, SQL, and more.';
	const featuredImageAlt = isPortuguese
		? 'Imagem em formato de carta escrito Gabriel de Christo Marques, apresentando o seu portfolio'
		: 'Image in letter format written by Gabriel de Christo Marques, presenting his portfolio';
	const featuredImage = {
		url: featuredImageSrc,
		alt: featuredImageAlt,
		width: 672,
		height: 448,
		caption: 'Home page'
	};
	const ogImage = {
		url: ogImageSrc,
		alt: featuredImageAlt
	};
	const ogSquareImage = {
		url: ogSquareImageSrc,
		alt: featuredImageAlt
	};

	const twitterImage = {
		url: twitterImageSrc,
		alt: featuredImageAlt
	};
	const entityMeta = {
		url: `${siteUrl}/`,
		faviconWidth: 512,
		faviconHeight: 512,
		caption: author
	};
	const seoProps = {
		title,
		slug: '',
		entityMeta,
		datePublished: '2024-05-01T14:19:33.000+0100',
		lastUpdated: '2024-09-05T14:19:33.000+0100',
		breadcrumbs,
		metadescription,
		article: false,
		featuredImage,
		ogImage,
		ogSquareImage,
		twitterImage
	};
</script>

<SEO {...seoProps} />
<!-- <svelte:head>
	<title>Freelancer Developer - Gabriel Christo | Home</title>
</svelte:head> -->

<div>
	<LanguageSwitcher />
	<!-- <LanguageSelector /> -->
	<div class="s1">
		<Header />
	</div>
	<div class="s2">
		<Section1 />
		<Section3 />
		<Section2 />
	</div>
	<div class="s3">
		<Section7 />
		<Section5 />
		<Section4 />
		<Section6 />
	</div>
	<div class="s4" />

	<Footer />
	<!-- <CookieConsent on:consentAccepted={handleCookieConsent} /> -->
</div>

<style>
	.s1 {
		background-image: linear-gradient(rgba(7, 0, 18, 0.1), rgb(0, 0, 0, 2)),
			url('$lib/assets/images/bg_website_magicpattern.svg');

		/* url('$lib/assets/images/bg_website.webp'); */
		background-size: cover;
		background-position: center;
		background-attachment: fixed;

		border-bottom-left-radius: 50% 50px;
		border-bottom-right-radius: 50% 50px;
	}
	/* .s2 {
		background: linear-gradient(to bottom, #09203f 0%, #537895 100%);

		border-bottom-left-radius: 50% 10px;
		border-bottom-right-radius: 50% 10px;
	} */
	.s3 {
		background: rgb(0, 117, 105);
		background: -moz-linear-gradient(0deg, rgba(0, 117, 105, 1) 0%, rgba(12, 26, 58, 1) 100%);
		background: -webkit-linear-gradient(0deg, rgba(0, 117, 105, 1) 0%, rgba(12, 26, 58, 1) 100%);
		background: linear-gradient(0deg, rgba(1, 52, 75, 1) 0%, rgba(18, 13, 40, 0.982) 7%);
		/* rgb(12,26,58) */
		background-size: contain;
		background-position: center;
		/* background-attachment: fixed; */

		border-top-left-radius: 50% 50px;
		border-top-right-radius: 50% 50px;

		/* border-bottom-left-radius: 50% 50px;
		border-bottom-right-radius: 50% 50px;	 */
	}

	.s4 {
		background: rgb(0, 117, 105);
		background: -moz-linear-gradient(0deg, rgba(0, 117, 105, 1) 0%, rgba(12, 26, 58, 1) 100%);
		background: -webkit-linear-gradient(0deg, rgba(0, 117, 105, 1) 0%, rgba(12, 26, 58, 1) 100%);
		background: linear-gradient(0deg, rgba(0, 117, 105, 1) 0%, rgb(14, 33, 77) 100%);
		/* rgb(12,26,58) */
		background-size: contain;
		background-position: center;
		/* background-attachment: fixed; */

		border-top-left-radius: 50% 50px;
		border-top-right-radius: 50% 50px;
	}
</style>
