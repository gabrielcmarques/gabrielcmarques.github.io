<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import type { DrawerStore } from '@skeletonlabs/skeleton';
	import {
		AppBar,
		AppShell,
		Drawer,
		getDrawerStore,
		initializeStores
	} from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import NavigationHeader from './../lib/components/NavigationHeader.svelte';

	initializeStores();
	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open();
	}
</script>

<Drawer>
	<Navigation />
	<NavigationHeader />
</Drawer>

<AppShell slotSidebarLeft="w-0 md:w-52">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<button class="md:hidden btn btn-sm mr-4" on:click={drawerOpen}>
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							width="35"
							height="35"
							viewBox="0 0 50 50"
						>
							<rect x="0" y="7.5" width="50" height="5" fill="white" />
							<rect x="0" y="22.5" width="50" height="5" fill="white" />
							<rect x="0" y="37.5" width="50" height="5" fill="white" />
						</svg>
					</span>
				</button>
				<!-- <strong class="text-xl uppercase">Portfolio</strong> -->
			</svelte:fragment>
			<NavigationHeader />
		</AppBar>
	</svelte:fragment>

	<!-- <svelte:fragment slot="sidebarLeft">
		<Navigation />
	</svelte:fragment> -->

	<div class="h-full w-screen m-0 p-0 border">
		<slot />
	</div>
	<svelte:fragment slot="footer h3">Footer</svelte:fragment>
</AppShell>
