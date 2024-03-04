<script lang="ts">
	import { reveal } from 'svelte-reveal';

	import ImageGrid from '../ImageGrid.svelte';
	import Orbit from './Orbit.svelte';

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

<section class="flex flex-col items-center justify-center z-0 h-full w-full relative">
	<div class="mt-80 z-10">
		<div class="relative">
			<Orbit />
		</div>
	</div>
</section>
