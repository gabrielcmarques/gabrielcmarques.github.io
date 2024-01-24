<script lang="ts">
	import ImageGrid from './ImageGrid.svelte';

	const tools: any[] = Object.values(
		import.meta.glob('$lib/assets/images/tools/*.svg', {
			import: 'default',
			eager: true
		})
	);

	const stack: any[] = Object.values(
		import.meta.glob('$lib/assets/images/stack/*.svg', {
			import: 'default',
			eager: true
		})
	);
</script>

<section class="flex flex-col items-center justify-center mt-[10vh] max-sm:mt-[5vh]">
	<h1 class="text-7xl mb-1">Utilizando tecnologias e ferramentas modernas</h1>

	<div class="my-20">
		<div class="gap-5 w-full h-full">
			<div id="one-panel">
				<ImageGrid images={stack} />
			</div>

			<div id="one-two ">
				<ImageGrid images={tools} />
			</div>
		</div>
	</div>
</section>
