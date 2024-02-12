<script lang="ts">
	import { reveal } from 'svelte-reveal';

	import { arabesco_tiny_webp, game_company_tiny_webp, legend_of_heroes_tiny_webp } from '$lib';
</script>

<h1
	id="projects"
	use:reveal={{ transition: 'fly' }}
	class="max-w-screen-xl text-5xl text-gray-100 mt-10 mx-auto text-center font-medium"
>
	My projects
</h1>
<section class="max-w-screen-md lg:max-w-screen-xl gap-3 m-3 p-3 mx-auto font-normal">
	<article
		use:reveal={{ transition: 'slide', delay: 200, x: -150, duration: 500 }}
		class="project_1 flex max-lg:flex-col card4 blurred-glass p-4 m-4 opacity-95 hover:opacity-90 rounded-2xl border relative max-md:text-center"
	>
		<img
			class="project__image m-3 h-full lg:w-[30%] rounded-xl self-center"
			src={legend_of_heroes_tiny_webp}
			alt="Image of Project Gaming Website by Gabriel C"
		/>

		<div class="lg:w-[70%]">
			<h2 class="max-sm:text-2xl max-md:text-1xl text-3xl text-gray-100 py-2 max-lg:text-center">
				Gaming Website
			</h2>
			<p class="max-sm:text-xl max-md:text-1xl text-2xl text-gray-200">
				I like video-games, their website are always very well made. As a exercise, I made a website
				of a fictional game website with AI generated Images, just for demonstration purposes. It's
				Fully responsive for all devices and optimized to load very fast.
			</p>
			<a
				class="projects__link bg-white rounded hover:border-blue-600 hover:border-4 absolute -bottom-5 -right-5 m-3 font-bold"
				href="/game-company/game-landing-page">Visit Website</a
			>
		</div>
	</article>
	<article
		use:reveal={{ transition: 'slide', delay: 200, x: -150, duration: 500 }}
		class="project_2 flex flex-row-reverse max-lg:flex-col card4 blurred-glass p-4 m-4 opacity-95 hover:opacity-90 rounded-2xl border relative max-md:text-center"
	>
		<img
			class="project__image m-3 h-full lg:w-[30%] rounded-xl self-center"
			src={game_company_tiny_webp}
			alt="Image of the project linktree clone"
		/>

		<div class="lg:w-[70%]">
			<h2
				class="max-sm:text-2xl max-md:text-1xl text-3xl text-gray-200 py-2 font-medium max-lg:text-center"
			>
				LinkTree Clone
			</h2>
			<p class="max-sm:text-xl max-md:text-1xl text-2xl text-gray-100">
				<a href="https://linktr.ee/s/templates/">LinkTree</a> is a platform to create a list of social
				midia links, used by content creators, artist, and companies, to help show their audience where
				to talk to them. I decided to make a template, specific for the fictional game website i made.
			</p>

			<a
				class="projects__link bg-white rounded hover:border-blue-600 hover:border-4 absolute -bottom-5 -left-5 m-3 font-bold"
				href="/game-company/">Visit Website</a
			>
		</div>
	</article>
	<article
		use:reveal={{ transition: 'slide', delay: 200, x: -150, duration: 500 }}
		class="project_3 flex max-lg:flex-col card4 blurred-glass p-4 m-4 opacity-95 hover:opacity-90 rounded-2xl border relative max-md:text-center"
	>
		<img
			class="project__image m-3 h-full lg:w-[30%] rounded-xl self-center"
			src={arabesco_tiny_webp}
			alt="Image of Project Gaming Website by Gabriel C"
		/>

		<div class="lg:w-[70%]">
			<h2
				class="max-sm:text-2xl max-md:text-1xl text-3xl text-gray-100 py-2 font-medium max-lg:text-center"
			>
				Arabesco Artisan Creations
			</h2>
			<p class="max-sm:text-xl max-md:text-1xl text-2xl text-gray-200">
				This is a freelance project I made for my sister, it's to showcase her work with Cardboard
				Designs, Jewelry, and Handmade Crafts. Fully responsive for all devices and loading fast.
			</p>
			<a
				class="projects__link bg-white rounded hover:border-blue-600 hover:border-4 absolute -bottom-5 -right-5 m-3 font-bold"
				href="https://arabescocartonagem.store/">Visit Website</a
			>
		</div>
	</article>

	<!-- <article
		use:reveal={{ transition: 'slide', delay: 200, x: 150, duration: 500 }}
		class="card4 blurred-glass p-4 opacity-95 hover:opacity-90 rounded-2xl text-gray-100"
	>
		<p class="max-sm:text-xl max-md:text-2xl text-3xl">
			With expertise in both front-end and back-end, I develop websites and applications that not
			only captivate visually but also deliver robust performance and an exceptional user
			experience. Every line of code is carefully crafted to translate the client's vision into a
			compelling online presence.
		</p>
	</article> -->
</section>

<style>
	article:hover {
		transform: scale(1.02);
		transition: transform 0.1s ease-in-out;
	}

	.project__image {
		filter: drop-shadow(0 0 13px rgba(0, 0, 0, 0.45));
	}

	/* .project__content {
		width: 70%;
	} */

	.projects__link {
		color: #373568;
		box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
		border-radius: 99px;
		/* display: inline-block; */
		padding: 5px 14px;
		transition: 25ms;
	}
</style>
