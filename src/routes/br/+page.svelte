<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { reveal, setDefaultOptions } from 'svelte-reveal';
	import '../../app.postcss';

	import og_image from '$lib/assets/images/og_image_html.webp';
	import {
		// DEFAULT_OG_IMAGE,
		MY_TWITTER_HANDLE,
		OG_IMAGE_HEIGHT,
		OG_IMAGE_WIDTH,
		SITE_DESCRIPTION,
		SITE_TITLE,
		SITE_URL
	} from '$lib/siteConfig';

	import Header from './Header.svelte';
	import Orbit from './Orbit.svelte';
	import Section1 from './Section1.svelte';
	import Section2 from './Section2.svelte';
	import Section3 from './Section3.svelte';
	import Section4 from './Section4.svelte';
	import Section5 from './Section5.svelte';
	import Section6 from './Section6.svelte';
	import Section7 from './Section7.svelte';
	import LanguageSelector from '$lib/components/LanguageSelector.svelte';
</script>

<svelte:head>
	<title>Freelance Developer - Gabriel Christo | Home</title>
	<link rel="canonical" href={SITE_URL} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={og_image} />
	<meta property="og:image:width" content={OG_IMAGE_WIDTH} />
	<meta property="og:image:height" content={OG_IMAGE_HEIGHT} />
	<meta name="twitter:image" content={og_image} />
	<meta name="twitter:card" content="Gabriel Christo - Freelancer Developer" />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
</svelte:head>

<div>
	<LanguageSelector />
	<Header />
	<Section1 />
	<Section2 />
	<Section7 />
	<Section3 />
	<Section4 />
	<Section5 />
	<Section6 />
	<Footer />
</div>
