<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let url: string;
</script>

{#key url}
	<div
		transition
		in:fly={{ delay: 200, duration: 350, x: 0, y: 600, opacity: 0.5, easing: cubicInOut }}
		out:fly={{ delay: 100, duration: 300, x: 0, y: 1000, opacity: 0.1, easing: cubicInOut }}
	>
		<slot />
	</div>
{/key}
