<script lang="ts">
	import { automation_webp, blog_vector_webp, web_dev_webp } from '$lib';
</script>

<section
	class=" parent max-w-screen-xl text-center relative m-5 p-5 rounded-lg font-normal max-sm:w-[362px] z-10"
>
	<div
		class="blurred-glass animate__animated animate__fadeInLeft div1 opacity-95 hover:opacity-90 h-96 relative z-10 rounded-lg"
	>
		<p class=" whitespace-nowrap text-2xl p-3 relative z-20 text-white rounded-lg">
			Web Development
		</p>
		<img
			src={web_dev_webp}
			alt="Web Dev"
			class="inset-0 w-full h-full object-cover z-0 rounded-lg max-h-80 hover:opacity-80"
		/>
	</div>
	<div
		class="blurred-glass animate__animated animate__fadeInLeft div2 opacity-95 hover:opacity-90 h-96 relative rounded-lg"
	>
		<p class=" whitespace-nowrap text-2xl p-3 relative z-20 text-white rounded-lg">Blog</p>
		<img
			src={blog_vector_webp}
			alt="Automação de processos"
			class="inset-0 w-full h-full object-cover z-0 rounded-lg max-h-80 hover:opacity-80"
		/>
	</div>
	<div
		class="blurred-glass animate__animated animate__fadeInLeft div3 opacity-95 hover:opacity-90 h-96 relative rounded-lg"
	>
		<p class=" whitespace-nowrap text-2xl p-3 relative z-20 text-white rounded-lg">E-commerce</p>
		<img
			src={automation_webp}
			alt="Deployment"
			class="inset-0 w-full h-full object-cover z-0 rounded-lg max-h-80 hover:opacity-80"
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

	.div1 {
		animation-delay: 1.2s;
		animation-duration: 0.5s;
	}
	.div2 {
		animation-delay: 1.7s;
		animation-duration: 0.5s;
	}
	.div3 {
		animation-delay: 2s;
		animation-duration: 0.5s;
	}
</style>
