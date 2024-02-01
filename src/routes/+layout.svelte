<script lang="ts">
	// import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
	// storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
	// import { github_svg, hamburger_svg, linkedin_svg, twitter_svg } from '$lib';
	// import { crossfade, draw, fade, fly, scale, slide } from 'svelte/transition';
	// import ViewTransition from '$lib/components/ViewTransition.svelte';

	import { page } from '$app/stores';
	import { AppBar, AppShell, initializeStores } from '@skeletonlabs/skeleton';
	import 'animate.css';
	import '../app.postcss';
	
	
	

	// export let data;
</script>

<svelte:head>
	<title>{$page.data.post?.title}</title>
</svelte:head>

<main class="main-c min-w-0 overflow-x-hidden">
	<slot />
</main>

<style>
	.main-c {
		margin: 0 auto;
		/* border: 2px solid red; */
	}

	/* .scrolled {
		opacity: 0;
		transform: translateY(20px);
	}

	@keyframes scroll-in {
		0% {
			opacity: 0;
			transforma: translateY(20px);
		}
		100% {
			opacity: 1;
			transform: translate(0);
			animation: scroll-in 3s forwards;
		}
	} */
</style>
