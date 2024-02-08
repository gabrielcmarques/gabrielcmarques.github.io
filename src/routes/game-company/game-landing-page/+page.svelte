<script lang="ts">
	// import type { PageData } from './$types';
	// export let data: PageData;
	import Section1 from './Section1.svelte';
	import Section2 from './Section2.svelte';
	import Section3 from './Section3.svelte';
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Navbar from './Navbar.svelte';
	import './components/game-lp.postcss';
	import SteamCard from './components/SteamCard.svelte';
	import BlogPosts from './components/BlogPosts.svelte';
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

<!-- <div style="background: linear-gradient(#30006c, #3c0063); height: 100px; width: 100%;"></div> -->
<div>
	<Navbar />
	<Header />
	<BlogPosts />
	<Section1 />
	<Section2 />
	<Section3 />
	<Footer />
	<SteamCard />
</div>