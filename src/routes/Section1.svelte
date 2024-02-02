<script lang="ts">
	import { automation_webp, deploy_webp, web_dev_webp } from '$lib';
</script>

<h1
	class="animate__animated animate__fadeIn animate__delay-1s max-w-screen-xl max-sm:text-xl max-md:text-2xl text-4xl text-gray-300 max-md:text-center mx-auto p-5"
>
	I specialize in high-performance web applications with SEO optimized to expand the reach of your business.
</h1>

<section class=" parent max-w-screen-xl text-center relative m-5 p-5 rounded-lg">
	<div
		class="animate__animated animate__fadeInLeft div1 opacity-95 hover:opacity-90 h-96 relative z-10 rounded-lg"
	>
		<p class="glass-effect whitespace-nowrap text-2xl p-3 relative z-20 text-white rounded-lg">
			Process automation
		</p>
		<img
			src={web_dev_webp}
			alt="Web Dev Photo"
			class="inset-0 w-full h-full object-cover z-0 rounded-lg max-h-80"
		/>
	</div>
	<div
		class="animate__animated animate__fadeInLeft div2 opacity-95 hover:opacity-90 h-96 relative rounded-lg"
	>
		<p class="glass-effect whitespace-nowrap text-2xl p-3 relative z-20 text-white rounded-lg">
			Web development
		</p>
		<img
			src={automation_webp}
			alt="Automação de processos"
			class="inset-0 w-full h-full object-cover z-0 rounded-lg max-h-80"
		/>
	</div>
	<div
		class="animate__animated animate__fadeInLeft div3 opacity-95 hover:opacity-90 h-96 relative rounded-lg"
	>
		<p class="glass-effect whitespace-nowrap text-2xl p-3 relative z-20 text-white rounded-lg">
			Implementation
		</p>
		<img
			src={deploy_webp}
			alt="Deployment Photo"
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
