<script lang="ts">
	import { reveal } from 'svelte-reveal';

	import { arabesco_tiny_webp, game_company_tiny_webp, legend_of_heroes_tiny_webp } from '$lib';
</script>

<h1
	id="projects"
	use:reveal={{ transition: 'fly' }}
	class="max-w-fit mx-auto text-5xl text-gray-100 text-center font-medium z-[30] relative p-5"
>
	Meus Projetos
</h1>
<section class="max-w-screen-md lg:max-w-screen-xl gap-3 px-3 mx-auto font-normal">
	<article
		use:reveal={{ transition: 'slide', delay: 50, x: -100, duration: 500 }}
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
				Adoro videogames e decidi criar um site bem sobre o tema. Este projeto envolveu a criação de
				um site de um jogo fictício com imagens geradas por IA para fins ilustrativos. O site é
				totalmente responsivo em todos os dispositivos e otimizado meticulosamente para carregamento
				rápido.
			</p>
			<a
				class="projects__link bg-white rounded hover:border-blue-600 hover:border-4 absolute -bottom-5 -right-5 m-3 font-bold"
				href="/game-company/game-landing-page"
				target="_blank">Visite o site</a
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
				Clone de LinkTree
			</h2>
			<p class="max-sm:text-xl max-md:text-1xl text-2xl text-gray-100">
				O app <a href="https://linktr.ee/s/templates/">LinkTree</a> centraliza links de redes sociais
				de criadores de conteúdo, artistas e empresas, fiz um modelo similar para o site fictício de
				jogos que criei. Este modelo permite uma apresentação harmoniosa de diversos canais de mídias
				sociais, aprimorando a experiência geral do usuário sobre um produto, empresa ou criador de conteúdo.
			</p>

			<a
				class="projects__link bg-white rounded hover:border-blue-600 hover:border-4 absolute -bottom-5 -left-5 m-3 font-bold"
				href="/game-company"
				target="_blank">Visite o site</a
			>
		</div>
	</article>
	<article
		use:reveal={{ transition: 'slide', delay: 200, x: -100, duration: 500 }}
		class="project_3 flex max-lg:flex-col card4 blurred-glass p-4 m-4 opacity-95 hover:opacity-90 rounded-2xl border relative max-md:text-center z-30"
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
				Arabesco Artesanato e Cartonagem
			</h2>
			<p class="max-sm:text-xl max-md:text-1xl text-2xl text-gray-200">
				Como exercicio, desenvolvi um site de showcase para os trabalhos criativos de minha irmã,
				abrangendo designs em cartonagem, bijuteria e artesanato. O site foi projetado para ser
				totalmente responsivo em todos os dispositivos e prioriza o carregamento rápido, assegurando
				uma experiência suave e envolvente para os visitantes.
			</p>
			<a
				class="projects__link bg-white rounded hover:border-blue-600 hover:border-4 absolute -bottom-5 -right-5 m-3 font-bold"
				href="https://arabescocartonagem.store/"
				target="_blank">Visite o site</a
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
	#projects {
		/* background: rgba(255, 255, 255, 0.5); */
		-webkit-backdrop-filter: blur(5px);
		backdrop-filter: blur(5px);
	}
</style>
