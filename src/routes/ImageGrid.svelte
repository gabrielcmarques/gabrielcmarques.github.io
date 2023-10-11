<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	export let images: any[] = [];
	export let title = '';

	const avatarClass = 'w-20 md:w-32 rounded-2xl';
</script>

<div>
	{#if title}
		<h2>{title}</h2>
	{/if}
	<div class="flex flex-wrap gap-3">
		{#each Object.entries(images) as [key, image]}
			<Avatar src={image} title={key} alt={key} class={avatarClass} />
		{/each}
	</div>
</div>
