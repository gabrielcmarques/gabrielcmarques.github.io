<script lang="ts">
	import { page } from '$app/stores';
	import 'animate.css';
	// export let data;
</script>

<svelte:head>
	<title>{$page.data.post?.title}</title>
</svelte:head>

<main class="main-c min-w-0 overflow-x-hidden relative">
	<slot />
</main>

<style>
	.main-c {
		margin: 0 auto;
	}
</style>
