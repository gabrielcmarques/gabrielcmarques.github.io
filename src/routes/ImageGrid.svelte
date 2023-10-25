<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	export let images: any[] = [];
	export let title = '';

	const containerClass = 'w-24 md:w-32'; // Adjust this as needed
	const avatarClass = 'w-full h-full p-4'; // This ensures the image doesn't stretch

	const imageStyle = `width: 100%; height: 100%; object-fit: contain; `;
</script>

<div class="">
	{#if title}
		<h2>{title}</h2>
	{/if}
	<div class="flex flex-wrap gap-3 max-sm:gap-[2px]">
		{#each Object.entries(images) as [key, image]}
			<div class={containerClass}>
				<Avatar src={image} title={key} alt={key} class={avatarClass} style={imageStyle} />
			</div>
		{/each}
	</div>
</div>
