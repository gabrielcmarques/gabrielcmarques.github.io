<script lang="ts">
	import { automation_webp, deploy_webp, web_dev_webp } from '$lib';
</script>

<h3 class="max-sm:text-xl max-md:text-2xl text-4xl mb-8 text-gray-300 mt-2 max-md:text-center max-w-">
	Sou especializado em aplicações web de alta performance com SEO otimizado para amplificar o
	seu negócio.
</h3>
<section class="parent max-w-screen-xl text-center relative m-5 p-5 rounded-lg">
	<div class="card div1 opacity-95 hover:opacity-90 h-96 relative z-10 rounded-lg">
		<p class="whitespace-nowrap text-3xl p-3 relative z-20 text-black bg-white rounded-lg">
			Automação de processos
		</p>
		<img
			src={web_dev_webp}
			alt="Web Dev Photo"
			aria-label="Desenvolvimento web"
			class="inset-0 w-full h-full object-cover z-0 rounded-lg max-h-80"
		/>
	</div>
	<div class="card div2 opacity-95 hover:opacity-90 h-96 relative rounded-lg">
		<p class="whitespace-nowrap text-3xl p-3 relative z-20 text-black bg-white rounded-lg">
			Desenvolvimento web
		</p>
		<img
			src={automation_webp}
			alt="Automação de processos"
			aria-label="Desenvolvimento web"
			class="inset-0 w-full h-full object-cover z-0 rounded-lg max-h-80"
		/>
	</div>
	<div class="card div3 opacity-95 hover:opacity-90 h-96 relative rounded-lg">
		<p class="whitespace-nowrap text-3xl p-3 relative z-20 text-black bg-white rounded-lg">
			Implementação
		</p>
		<img
			src={deploy_webp}
			alt="Deployment Photo"
			aria-label="Implementação"
			class="inset-0 w-full h-full object-cover z-0 rounded-lg max-h-80"
		/>
	</div>
</section>

<style lang="scss">
	.parent {
		display: grid;
		grid-template-columns: repeat(
			auto-fit,
			minmax(380px, 1fr)
		); /* Cards wrap to next line if space is not enough */
		grid-auto-rows: 1fr; /* Automatically adjust row height */
		grid-gap: 10px; /* Spacing between cards */
		margin: auto; /* Center the section horizontally */
	}
</style>
