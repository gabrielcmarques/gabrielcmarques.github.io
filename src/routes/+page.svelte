<script lang="ts">
	import {
		// DEFAULT_OG_IMAGE,
		MY_TWITTER_HANDLE,
		SITE_DESCRIPTION,
		SITE_TITLE,
		SITE_URL,
		OG_IMAGE_URL,
OG_IMAGE_WIDTH,
OG_IMAGE_HEIGHT
	} from '$lib/siteConfig';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Orbit from './Orbit.svelte';
	import Section1 from './Section1.svelte';
	import Section2 from './Section2.svelte';
	import Section3 from './Section3.svelte';
	
</script>

<svelte:head>
	<title>Home - Gabriel Christo, Web Developer</title>
	<link rel="canonical" href={SITE_URL} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={OG_IMAGE_URL} />
	<meta property="og:image:width" content={OG_IMAGE_WIDTH} />
	<meta property="og:image:height" content={OG_IMAGE_HEIGHT} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
	<!-- <meta name="twitter:image" content={DEFAULT_OG_IMAGE} /> -->
</svelte:head>


<div>
	<Header />
	<Section1 />
	<Section2 />
	<Section3 />
	<Footer />
</div>
