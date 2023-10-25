<script lang="ts">
	import { kanbanjs_webm } from '$lib';
</script>

<svelte:head>
	<title>Kanban Board - Portfolio Gabriel C Marques</title>
</svelte:head>

<div class="flex flex-col items-center space-y-5">
	<div class="max-w-screen-2xl">
		<div class="flex flex-center">
			<!-- svelte-ignore a11y-media-has-caption -->
			<video width="1920" height="auto" controls>
				<source src={kanbanjs_webm} type="video/webm" />
			</video>
		</div>
	</div>
</div>

