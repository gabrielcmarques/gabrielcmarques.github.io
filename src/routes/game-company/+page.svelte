<script lang="ts">
	import Header from './components/Header.svelte';
	import Navbar from './components/Navbar.svelte';
	import SocialCards from './components/Social-Cards.svelte';
	import metaGameCompany from './components/game-images/meta-game-company.webp';
	import pattern from './components/svgs/pattern.svg';
	// import type { PageData } from './$types';

	import './components/game-company.postcss';

	// export let data: PageData;
</script>

<svelte:head>
	<title>Game Company | Home</title>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Gabriel's Game Company" />
	<meta
		name="Description"
		content="A template made for my portfolio, to showcase my Web Development Skills"
	/>
	<meta
		property="og:description"
		content="A template made for my portfolio, to showcase my Web Development Skills"
	/>
	<meta property="og:image" content={metaGameCompany} />
	<meta property="og:image:width" content="1280" />
	<meta property="og:image:height" content="720" />
	<meta name="twitter:image" content={metaGameCompany} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Gabriel's Game Company" />
	<meta
		name="twitter:description"
		content="A template made for my portfolio, to showcase my Web Development Skills"
	/>
</svelte:head>

<div
	class="background-container"
	style="background: url('{pattern}'); 
	background-size: cover; 
	background-position: center;"
>
	<Navbar />
	<Header />
	<SocialCards />
</div>
