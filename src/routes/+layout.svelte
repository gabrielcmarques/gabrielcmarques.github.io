<script lang="ts">
	import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	import { page } from '$app/stores';
	import { github_svg, hamburger_svg, linkedin_svg, twitter_svg } from '$lib';
	import { crossfade, draw, fade, fly, scale, slide } from 'svelte/transition';

	import Toggle from './Toggle.svelte';
	import PageTransition from './Transition.svelte';

	import Navigation from '$lib/components/Navigation.svelte';
	import NavigationHeader from '$lib/components/NavigationHeader.svelte';
	// import ViewTransition from '$lib/components/ViewTransition.svelte';
	import type {
		DrawerStore,
		ModalComponent,
		ModalSettings,
		ModalStore
	} from '@skeletonlabs/skeleton';
	import {
		AppBar,
		AppShell,
		Drawer,
		Modal,
		getDrawerStore,
		initializeStores
	} from '@skeletonlabs/skeleton';
	import '../app.postcss';

	import DevSearch from './projects/DevSearchMp4.svelte';
	import KanbanWebm from './projects/KanbanWebm.svelte';
	import StatmedWebm from './projects/StatmedWebm.svelte';

	initializeStores();
	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open();
	}

	const modalComponentRegistry: Record<string, ModalComponent> = {
		statmedWebm: { ref: StatmedWebm },
		kanbanWebm: { ref: KanbanWebm },
		devSearchMp4: { ref: DevSearch }
	};

	// function sleepSpinner(ms) {
	// 	return new Promise((resolve) => setTimeout(resolve, ms));
	// }

	// export async function loadSpinner() {
	// 	await sleepSpinner(3000);

	// 	return {
	// 		status: 200
	// 	};
	// }
	export let data;
</script>

<svelte:head>
	<title>{$page.data.post?.title}</title>
</svelte:head>

<main class="main-c min-w-0 overflow-x-hidden">
	<PageTransition url={data.url}>
		<slot />
	</PageTransition>
</main>

<style>
	.main-c {
		margin: 0 auto;
		/* padding: 0 1em; */
		/* border: 2px solid red; */
	}
</style>
