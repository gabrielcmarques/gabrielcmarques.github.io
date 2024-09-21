<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
</script>

<header
	class="hero flex flex-col items-center justify-center pb-[25vh] max-sm:pb-[10vh] pt-[25vh] max-sm:pt-[10vh]"
>
	<div class="header lg:ml-10 p-3 m-3">
		<div class="header-child">
			<!-- Heading -->
			<h1
				class="animate__animated animate__fadeInDown max-sm:text-4xl max-md:text-6xl text-7xl max-md:text-center text-gray-100 "
			>
				<!-- Gabriel Christo Marques  -->
				{m.hero_title_gabriel()}
			</h1>
			<h2
				class="animate__animated animate__fadeInDown h2-header max-sm:text-2xl max-md:text-4xl text-5xl mt-3 text-gray-200 max-md:text-center "
			>
				{m.hero_h2_freelance()}
			</h2>

			<p
				class="animate__animated animate__fadeIn animate__delay-1s max-w-screen-xl max-sm:text-xl max-md:text-2xl text-4xl text-gray-300 max-md:text-center mx-auto my-4"
			>
				{m.hero_p_specialized()}
			</p>

			<!-- Contact Button -->
			<div class="animate__animated animate__fadeIn animate__delay-1s mt-8 max-md:text-center">
				<a
					href="#contato"
					class="contato-btn p-5 max-sm:p-3 variant-filled-primary hover:variant-ringed hover:text-white rounded-full shadow-md transition duration-300 ease-in-out text-2xl max-md:text-xl  border border-gray-400"
					>{m.hero_contact()}
				</a>
			</div>
		</div>
	</div>
</header>

<style>
	.h2-header {
		animation-delay: 0.6s;
		animation-duration: 0.5s;
	}
</style>
