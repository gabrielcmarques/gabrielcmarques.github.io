<script lang="ts">
	import metaImg from './components/images/splash_header2.webp';

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
	<meta
		name="Description"
		content="A template made for my portfolio, to showcase my Web Development Skills"
	/>
	<meta
		property="og:description"
		content="A template made for my portfolio, to showcase my Web Development Skills"
	/>
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
	<div class="s3">
		<Section1 />
		<Section2 />
		<Section3 />
		<Footer />
	</div>
	<SteamCard />
</div>

<style lang="scss">
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
	}
</style>
