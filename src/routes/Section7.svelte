<script lang="ts">
	import { reveal } from 'svelte-reveal';

	import { arabesco_tiny_webp, game_company_tiny_webp, legend_of_heroes_tiny_webp } from '$lib';
</script>

<section class="my-projects">
	<div class="max-w-screen-xl mx-auto font-normal">
		<h1
			id="projects"
			use:reveal={{ transition: 'fly' }}
			class="max-w-fit mx-auto text-5xl text-gray-100 text-center font-medium z-[30] relative p-5"
		>
			My projects
		</h1>
		<article
			use:reveal={{ transition: 'slide', delay: 100, x: -100, duration: 500 }}
			class="project_1 flex max-lg:flex-col card4 blurred-glass p-4 mx-4 opacity-95 hover:opacity-90 rounded-2xl border border-gray-400 relative max-md:text-center z-30"
		>
			<img
				class="project__image m-3 h-full lg:w-[30%] rounded-xl self-center"
				src={legend_of_heroes_tiny_webp}
				alt="Project Gaming Website by Gabriel C"
			/>

			<div class="lg:w-[70%]">
				<h2 class="max-sm:text-2xl max-md:text-1xl text-3xl text-gray-100 py-2 max-lg:text-center">
					Gaming Website
				</h2>
				<p class="max-sm:text-xl max-md:text-1xl text-2xl text-gray-200">
					I like video-games, and I decided to channel that enthusiasm into crafting a well-designed
					website. This project involved creating a fictional game website. The website is fully
					responsive across all devices and meticulously optimized for swift loading.
				</p>
				<a
					class="projects__link bg-white rounded hover:border-blue-600 hover:border-4 absolute -bottom-5 -right-5 m-3 font-bold"
					href="/game-company/game-landing-page"
					target="_blank">Visit Website</a
				>
			</div>
		</article>
		<article
			use:reveal={{ transition: 'slide', delay: 100, x: 100, duration: 500 }}
			class="project_2 flex flex-row-reverse max-lg:flex-col card4 blurred-glass p-4 m-4 opacity-95 hover:opacity-90 rounded-2xl border border-gray-400 relative max-md:text-center z-30"
		>
			<img
				class="project__image m-3 h-full lg:w-[30%] rounded-xl self-center"
				src={game_company_tiny_webp}
				alt="Project linktree clone"
			/>

			<div class="lg:w-[70%]">
				<h2
					class="max-sm:text-2xl max-md:text-1xl text-3xl text-gray-200 py-2 font-medium max-lg:text-center"
				>
					LinkTree Clone
				</h2>
				<p class="max-sm:text-xl max-md:text-1xl text-2xl text-gray-100">
					Recognizing the utility of platforms like <a
						href="https://linktr.ee/s/templates/"
						target="_blank">LinkTree</a
					> for content creators, artists, and companies to streamline social media links, I undertook
					the development of a template tailored specifically for the fictional game website I created.
					This template allows for a seamless presentation of various social media channels, enhancing
					the overall user experience.
				</p>

				<a
					class="projects__link bg-white rounded hover:border-blue-600 hover:border-4 absolute -bottom-5 -left-5 m-3 font-bold"
					href="https://gabrielcm.dev/game-company"
					target="_blank">Visit Website</a
				>
			</div>
		</article>
		<article
			use:reveal={{ transition: 'slide', delay: 100, x: -100, duration: 500 }}
			class="project_3 flex max-lg:flex-col card4 blurred-glass p-4 m-4 opacity-95 hover:opacity-90 rounded-2xl border border-gray-400 relative max-md:text-center z-30"
		>
			<img
				class="project__image m-3 h-full lg:w-[30%] rounded-xl self-center"
				src={arabesco_tiny_webp}
				alt="Project Gaming Website by Gabriel C"
			/>

			<div class="lg:w-[70%]">
				<h2
					class="max-sm:text-2xl max-md:text-1xl text-3xl text-gray-100 py-2 font-medium max-lg:text-center"
				>
					Arabesco Artisan Creations
				</h2>
				<p class="max-sm:text-xl max-md:text-1xl text-2xl text-gray-200">
					As a freelance endeavor, I developed a showcase website for my sister's creative works,
					encompassing cardboard designs, jewelry, and handmade crafts. The site is designed to be
					fully responsive on all devices and prioritizes fast loading, ensuring a smooth and
					engaging experience for visitors.
				</p>
				<a
					class="projects__link bg-white rounded hover:border-blue-600 hover:border-4 absolute -bottom-5 -right-5 m-3 font-bold"
					href="https://arabescocartonagem.store/ "
					target="_blank">Visit Website</a
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
	</div>
	<hr class="mt-10 max-w-screen-xl mx-auto" style="border-color: gray;" />
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
	#projects {
		/* background: rgba(255, 255, 255, 0.5); */
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
	}
</style>
