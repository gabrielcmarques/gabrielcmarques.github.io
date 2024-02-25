<script lang="ts">
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';

	import { Avatar } from '@skeletonlabs/skeleton';
	import { blur, fade, fly } from 'svelte/transition';
	export let images: any[] = [];
	export let title = '';

	const containerClass = 'w-28 max-sm:w-20'; // Use the flex-grow class to make the containers grow to fill the available space
	const avatarClass =
		'w-full h-auto p-3 hover:border transition-transform transform hover:scale-110'; // Ensure the image doesn't stretch

	const imageStyle = `width: 100%; height: 100%; object-fit: contain; `;

	const popupHover: PopupSettings = {
		event: 'hover',
		target: 'popupHover',
		placement: 'top'
	};
</script>

<!-- TODO: -->
<!-- <div class="card p-4 variant-filled-secondary z-10" data-popup="popupHover">
	<p>{title}</p>
	<div class="arrow variant-filled-secondary" />
</div> -->

<div class="skills-img">
	{#if title}
		<h2>{title}</h2>
	{/if}

	<!-- testar depois: Botar depois do class abaixo transition in:blur={{ delay: 50, duration: 225 }} -->
	<div class="flex flex-wrap gap-3 p-4 justify-center max-sm:gap-[2px]">
		<!-- <div class="flex flex-wrap gap-3 max-sm:gap-[2px] " transition in:fade={{ delay: 100, duration: 200 }}> -->
		{#each Object.entries(images) as [key, image]}
			<div use:popup={popupHover} class={containerClass}>
				<Avatar src={image} title={key} alt={key} class={avatarClass} style={imageStyle} />
			</div>
		{/each}
	</div>
</div>
