<!-- <script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { blur, fade, fly, scale, slide } from 'svelte/transition';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script> -->
