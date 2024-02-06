<script lang="ts">
	import Section1 from './Section1.svelte';
	import Section2 from './Section2.svelte';
	import Section3 from './Section3.svelte';
	// import type { PageData } from './$types';

	import './components/game-lp.postcss';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Navbar from './Navbar.svelte';

	// export let data: PageData;
</script>

<svelte:head>
	<title>Game Company | Home</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Gabriel's Game Company" />
	<!-- <meta property="og:image" content= />
	<meta property="og:image:width" content= />
	<meta property="og:image:height" content= />
	<meta name="twitter:image" content={og_image} />
	<meta name="twitter:card" content="Gabriel's Game Company" />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} /> -->
</svelte:head>

<div>
	<Navbar />
	<Header />
	<Section1 />
	<Section2 />
	<Section3 />
	<Footer />
</div>
