<script>
	import * as m from '$lib/paraglide/messages.js';
	import {
		arabesco_tiny_webp,
		game_company_tiny_webp,
		legend_of_heroes_tiny_webp,
		my_menthor_tiny_webp,
		sys_vet_tiny_webp
	} from '$lib';
	import { onMount } from 'svelte';
	import { reveal } from 'svelte-reveal';
	import SysVetSlider from './SysVetSlider.svelte';

	onMount(() => {
		window.openModal = function (modalId) {
			document.getElementById(modalId).style.display = 'block';
			document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden');
		};

		window.closeModal = function (modalId) {
			document.getElementById(modalId).style.display = 'none';
			document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden');
		};
		// Close all modals when press ESC
		document.onkeydown = function (event) {
			event = event || window.event;
			if (event.keyCode === 27) {
				document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden');
				let modals = document.getElementsByClassName('modal');
				Array.prototype.slice.call(modals).forEach((i) => {
					i.style.display = 'none';
				});
			}
		};
	});
</script>

<div class="w-full mx-auto flex">
	<button
		class="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition mx-auto"
		onclick="openModal('modal')"
	>
		{m.section4_viewmore()}
	</button>
</div>

<div
	id="modal"
	class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 modal"
>
	<div
		class="relative top-20 mx-auto shadow-xl rounded-md max-w-screen-xl bg-gray-900 bg-opacity-75"
	>
		<!-- Modal header -->
		<div
			class="flex justify-between items-center bg-green-500 text-white text-xl rounded-t-md px-4 py-2"
		>
			<h3 class="text-transparent pointer-events-none">.</h3>
			<button onclick="closeModal('modal')" class="hover:bg-green-400 py-2 px-4 rounded-md"
				>X</button
			>
		</div>

		<!-- Modal body -->
		<div class="my-projects-modal max-h-[50rem] overflow-y-scroll p-4">
			<div class="max-w-screen-xl mx-auto">
				<h2
					id="projects"
					use:reveal={{ transition: 'fly' }}
					class="max-w-fit mx-auto text-5xl text-gray-100 text-center z-[30] relative p-5"
				>
					{m.section4_title()}
				</h2>
				<article
					use:reveal={{ transition: 'slide', delay: 100, x: -100, duration: 500 }}
					class="project_1 flex max-lg:flex-col card4 blurred-glass p-4 mx-4 rounded-2xl border border-gray-400 relative max-md:text-center z-30"
				>
					<img
						class="project__image m-3 h-full lg:w-[30%] rounded-xl self-center"
						src={sys_vet_tiny_webp}
						alt="Project Gaming Website by Gabriel C"
					/>

					<div class="lg:w-[70%]">
						<h2
							class="max-sm:text-2xl max-md:text-1xl text-3xl text-gray-100 py-2 max-lg:text-center"
						>
							{m.section4_proj1_title()}
						</h2>
						<p class="max-sm:text-xl max-md:text-1xl text-2xl text-gray-200">
							{m.section4_proj1_desc()}
						</p>
						<!-- <details>
							<summary
								class="projects__link cursor-pointer bg-white rounded hover:border-blue-600 hover:border-4 absolute -bottom-5 -right-5 m-3  z-50"
								>{m.section4_imggalery()}</summary
							>
							<SysVetSlider />
						</details> -->
						<!-- <a
							class="projects__link bg-white rounded hover:border-blue-600 hover:border-4 absolute -bottom-5 -right-5 m-3 "
							href="/vetsystem"
							target="_blank">{m.section4_visitweb()}</a
						> -->
					</div>
				</article>
				<article
					use:reveal={{ transition: 'slide', delay: 100, x: 100, duration: 500 }}
					class="project_2 flex flex-row-reverse max-lg:flex-col card4 blurred-glass p-4 m-4 rounded-2xl border border-gray-400 relative max-md:text-center z-30"
				>
					<img
						class="project__image m-3 h-full lg:w-[30%] rounded-xl self-center"
						src={my_menthor_tiny_webp}
						alt="Project linktree clone"
					/>

					<div class="lg:w-[70%]">
						<h2
							class="max-sm:text-2xl max-md:text-1xl text-3xl text-gray-200 py-2 max-lg:text-center"
						>
							{m.section4_proj2_title()}
						</h2>
						<p class="max-sm:text-xl max-md:text-1xl text-2xl text-gray-100">
							{m.section4_proj2_desc()}
						</p>

						<a
							class="projects__link bg-white rounded hover:border-blue-600 hover:border-4 absolute -bottom-5 -left-5 m-3"
							href="https://www.mymenthor.com/"
							target="_blank">{m.section4_visitweb()}</a
						>
					</div>
				</article>
				<article
					use:reveal={{ transition: 'slide', delay: 100, x: -100, duration: 500 }}
					class="project_3 flex max-lg:flex-col card4 blurred-glass p-4 m-4 rounded-2xl border border-gray-400 relative max-md:text-center z-30"
				>
					<img
						class="project__image m-3 h-full lg:w-[30%] rounded-xl self-center"
						src={arabesco_tiny_webp}
						alt="Project Gaming Website by Gabriel C"
					/>

					<div class="lg:w-[70%]">
						<h2
							class="max-sm:text-2xl max-md:text-1xl text-3xl text-gray-100 py-2 max-lg:text-center"
						>
							{m.section4_proj3_title()}
						</h2>
						<p class="max-sm:text-xl max-md:text-1xl text-2xl text-gray-200">
							{m.section4_proj3_desc()}
						</p>
						<a
							class="projects__link bg-white rounded hover:border-blue-600 hover:border-4 absolute -bottom-5 -right-5 m-3"
							href="https://arabescocartonagem.store/ "
							target="_blank">{m.section4_visitweb()}</a
						>
					</div>
				</article>
				<article
					use:reveal={{ transition: 'slide', delay: 100, x: -100, duration: 500 }}
					class="project_1 flex max-lg:flex-col card4 blurred-glass p-4 mx-4 rounded-2xl border border-gray-400 relative max-md:text-center z-30"
				>
					<img
						class="project__image m-3 h-full lg:w-[30%] rounded-xl self-center"
						src={legend_of_heroes_tiny_webp}
						alt="Project Gaming Website by Gabriel C"
					/>

					<div class="lg:w-[70%]">
						<h2
							class="max-sm:text-2xl max-md:text-1xl text-3xl text-gray-100 py-2 max-lg:text-center"
						>
							{m.section4_proj4_title()}
						</h2>
						<p class="max-sm:text-xl max-md:text-1xl text-2xl text-gray-200">
							{m.section4_proj4_desc()}
						</p>
						<a
							class="projects__link bg-white rounded hover:border-blue-600 hover:border-4 absolute -bottom-5 -right-5 m-3"
							href="/game-company/game-landing-page"
							target="_blank">{m.section4_visitweb()}</a
						>
					</div>
				</article>
				<article
					use:reveal={{ transition: 'slide', delay: 100, x: 100, duration: 500 }}
					class="project_2 flex flex-row-reverse max-lg:flex-col card4 blurred-glass p-4 m-4 rounded-2xl border border-gray-400 relative max-md:text-center z-30"
				>
					<img
						class="project__image m-3 h-full lg:w-[30%] rounded-xl self-center"
						src={game_company_tiny_webp}
						alt="Project linktree clone"
					/>

					<div class="lg:w-[70%]">
						<h2
							class="max-sm:text-2xl max-md:text-1xl text-3xl text-gray-200 py-2 max-lg:text-center"
						>
							{m.section4_proj5_title()}
						</h2>
						<p class="max-sm:text-xl max-md:text-1xl text-2xl text-gray-100">
							{@html m.section4_proj5_desc()}
						</p>

						<a
							class="projects__link bg-white rounded hover:border-blue-600 hover:border-4 absolute -bottom-5 -left-5 m-3"
							href="https://gabrielcm.dev/game-company"
							target="_blank">{m.section4_visitweb()}</a
						>
					</div>
				</article>

				<!-- <article
				use:reveal={{ transition: 'slide', delay: 200, x: 150, duration: 500 }}
				class="card4 blurred-glass p-4  rounded-2xl text-gray-100"
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
		</div>

		<!-- Modal footer -->
		<div class="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
			<button
				class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
				onclick="closeModal('modal')"
			>
				{m.modal_close()}
			</button>
		</div>
	</div>
</div>

<style>
	article:hover {
		transform: scale(1.02);
		transition: transform 0.1s ease-in-out;
	}

	.project__image {
		filter: drop-shadow(0 0 13px rgba(0, 0, 0));
	}

	/* .project__content {
		width: 70%;
	} */

	.projects__link {
		color: #373568;
		box-shadow: 0 0 8px rgba(0, 0, 0);
		border-radius: 99px;
		/* display: inline-block; */
		padding: 5px 14px;
		transition: 25ms;
	}
	/* #projects { */
		/* background: rgba(255, 255, 255, 0.5); */
		/* -webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px); */
	/* } */
</style>
