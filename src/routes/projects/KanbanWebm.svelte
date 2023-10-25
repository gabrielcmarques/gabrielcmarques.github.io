<script lang="ts">
	import { kanbanjs_webm } from '$lib';
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	// Props
	/** Exposes parent props to this component. */
	export let parent: any;

	// Base Classes
	const cBase = 'w-full lg:w-modal-wide shadow-xl z-10 absolute';
	const cButton = 'absolute -top-1 -right-1 z-1 btn-icon variant-filled';
	const cIframe = 'bg-black w-full aspect-video rounded-container-token overflow-hidden';
</script>

<!-- @component This example creates an embedded video modal. -->

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<button class={cButton} on:click={parent.onClose}>✕</button>
		<iframe
			class={cIframe}
			src="{kanbanjs_webm}"
			title="Kanban app video project"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen			  
		/>
	</div>
{/if}