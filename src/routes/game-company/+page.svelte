<script lang="ts">
	import Header from './components/Header.svelte';
	import Navbar from './components/Navbar.svelte';
	import SocialCards from './components/Social-Cards.svelte';
	import pattern from './components/svgs/pattern.svg';
	// import type { PageData } from './$types';

	import './components/game-company.postcss';

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

<div
	class="background-container"
	style="background-image: url('{pattern}'); background-size: cover; background-position: center;"
>
	<Navbar />
	<Header />
	<SocialCards />
</div>
