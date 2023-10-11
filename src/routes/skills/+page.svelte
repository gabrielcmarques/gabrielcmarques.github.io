<script lang="ts">
	import ImageGrid from '../ImageGrid.svelte';

	const tools: any[] = Object.values(
		import.meta.glob('$lib/assets/images/tools/*.webp', {
			import: 'default',
			eager: true
		})
	);

	const stack: any[] = Object.values(
		import.meta.glob('$lib/assets/images/stack/*.webp', {
			import: 'default',
			eager: true
		})
	);
</script>

<svelte:head>
	<title>Conhecimentos - Portfolio Gabriel C Marques</title>
</svelte:head>

<div class="flex flex-col items-center space-y-10 translate-y-5 mt-10 m-7">
	<h1 class="text-4xl md:text-5xl">Conhecimentos</h1>
	<div class="max-w-screen-lg">
		<div class="gap-5">
			<h2 class="text-center text-2xl md:text-3xl my-4">Stack Principal:</h2>
			<div id="one-panel ">
				<div class="">
					<ImageGrid images={stack} />
				</div>
			</div>
			<h2 class="text-center text-2xl md:text-3xl my-4">Outras Ferramentas:</h2>
			<div id="one-two ">
				<div>
					<ImageGrid images={tools} />
				</div>
			</div>
		</div>
	</div>
</div>
