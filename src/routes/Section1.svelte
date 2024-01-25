<script lang="ts">
	import { automation_webp, deploy_webp, web_dev_webp } from '$lib';
</script>

<section class="parent max-w-screen-xl text-center relative">
	<div
		class="card div1 opacity-95 hover:opacity-90 text-lg md:text-4xl h-96 relative z-10 rounded-lg"
	>
		<p class="p-1 relative z-20 text-black bg-white">Desenvolvimento web</p>
		<img
			src={web_dev_webp}
			alt="Web Dev Photo"
			class=" inset-0 w-full h-full object-cover z-0 rounded-lg"
		/>
	</div>
	<div class="card div2 opacity-95 hover:opacity-90 text-lg md:text-4xl h-96 relative rounded-lg">
		<p class="p-1 relative z-20 text-black bg-white">Automação de processos</p>
		<img
			src={automation_webp}
			alt="Automation Photo"
			class=" inset-0 w-full h-full object-cover z-0 rounded-lg"
		/>
	</div>
	<div class="card div3 opacity-95 hover:opacity-90 text-lg md:text-4xl h-96 relative rounded-lg">
		<p class="p-1 relative z-20 text-black bg-white">Implementação</p>
		<img
			src={deploy_webp}
			alt="Deployment Photo"
			class=" inset-0 w-full h-full object-cover z-0 rounded-lg"
		/>
	</div>
</section>

<style lang="scss">
	.parent {
		display: grid;
		grid-template-columns: repeat(3, 1fr); /* Three columns with equal width */
		grid-template-rows: 1fr; /* Single row */
		grid-column-gap: 5px;
		grid-row-gap: 5px;
		margin: auto; /* Center the section horizontally */
	}

	.div1 {
		grid-area: 1 / 1 / 2 / 2;
	}

	.div2 {
		grid-area: 1 / 2 / 2 / 3;
	}

	.div3 {
		grid-area: 1 / 3 / 2 / 4;
	}
</style>
