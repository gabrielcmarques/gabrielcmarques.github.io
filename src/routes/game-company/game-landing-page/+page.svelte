<script lang="ts">
	import metaImg from '/game-landing-page/components/images/splash_header2.webp';

	// import type { PageData } from './$types';
	// export let data: PageData;
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Navbar from './Navbar.svelte';
	import Section1 from './Section1.svelte';
	import Section2 from './Section2.svelte';
	import Section3 from './Section3.svelte';
	import BlogPosts from './components/BlogPosts.svelte';
	import SteamCard from './components/SteamCard.svelte';
	import './components/game-lp.postcss';
</script>

<svelte:head>
	<title>Legend of the Heroes | Home</title>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="The Legend of Heroes Game" />
	<meta property="og:image" content={metaImg} />
	<meta property="og:image:width" content="1280" />
	<meta property="og:image:height" content="720" />
	<meta name="twitter:image" content={metaImg} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Gabriel C. Game Template" />
	<meta
		name="twitter:description"
		content="A template made for my portfolio, to showcase my Web Development Skills"
	/>
</svelte:head>

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
