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

<Modal components={modalComponentRegistry} />

<Drawer>
	<Navigation />
	<NavigationHeader />
</Drawer>

<!-- <ViewTransition /> -->
<AppShell slotSidebarLeft="w-0 md:w-52">
	<svelte:fragment slot="header">
		<AppBar class="z-10">
			<svelte:fragment slot="lead">
				<button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
					<span>
						<img src={hamburger_svg} alt="hamburger_svg" />
					</span>
				</button>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<Toggle />
				<ul class="flex right-3 nav-list font-semibold text-lg top-0 z-10">
					<li
						class="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:outline-blue-500 duration-200 cursor-pointer active"
					>
						<a
							href="https://github.com/gabrielcmarques"
							target="_blank"
							title="Link do meu Perfil no Github"
						>
							<img src={github_svg} width="40" height="40" alt="Github" />
						</a>
					</li>
					<li
						class="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:outline-blue-500 duration-200 cursor-pointer active"
					>
						<a
							href="https://www.linkedin.com/in/gabriel-christo-marques/"
							target="_blank"
							title="Link do meu Perfil no Linkedin"
						>
							<img src={linkedin_svg} width="40" height="40" alt="Linkedin" />
						</a>
					</li>
					<li
						class="p-4 border-b-2 border-blue-500 border-opacity-0 hover:border-opacity-100 hover:outline-blue-500 duration-200 cursor-pointer"
					>
						<a
							href="https://twitter.com/gabrielchristom"
							target="_blank"
							title="Link do meu Perfil no Twitter"
						>
							<img class="fill-orange-700" src={twitter_svg} width="40" height="40" alt="Twitter" />
						</a>
					</li>
				</ul>
			</svelte:fragment>
			<NavigationHeader />
		</AppBar>
	</svelte:fragment>

	<!-- <svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment> -->

	<div class="main-c h-full w-screen">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</div>

	<!-- <svelte:fragment slot="footer h3">Footer</svelte:fragment> -->
</AppShell>

<style>
	.main-c {
		margin: 0 auto;
		/* padding: 0 1em; */
		/* border: 2px solid red; */
	}
</style>
