<script lang="ts">
	import { crossfade, draw, fly, scale, slide } from 'svelte/transition';

	export let url: string;
</script>

{#key url}
	<div class="transition" in:fly>
		<slot />
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
