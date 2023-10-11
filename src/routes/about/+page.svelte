<script lang="ts">
	import { github_svg, linkedin_svg } from '$lib';
</script>

<svelte:head>
  <title>Sobre - Portfolio Gabriel C Marques</title>
</svelte:head>

<div class="flex flex-col items-center justify-center min-h-full">
	<div class="items-center">
		<h1 class="text-4xl md:text-5xl text-center">Sobre mim</h1>

		<div class="max-w-screen-lg">
			<p class="text-xl m-4">
				Sou um programador especializado em desenvolvimento web. Sempre fui entusiasta na área de
				computação, então decidi ir para o caminho da programação e automação de sistemas, nos
				últimos 5 anos tenho me dedicado para adquirir o conhecimento necessário para trabalhar com
				algo que eu gosto com programação.
			</p>
		</div>
	</div>
	
	<div class="my-10">
		<a href="/skills" class="btn-xl variant-filled-primary hover:variant-ringed hover:text-white"
			>Conhecimentos e Tecnologias</a
		>
	</div>
	<!-- https://codepen.io/yuhomyan/pen/OJMejWJ -->

	<h1 class="text-4xl md:text-5xl text-center">Entre em Contato</h1>
	<div class="max-w-screen-lg">
		<p class="text-xl m-4">
			Se você precisa de um desenvolvedor web para criar uma aplicação ou solução para o seu
			negócio, estou pronto para ajudar. Entre em contato através do e-mail e responderei o mais
			rápido possível em busca da solução do seu negócio.
		</p>

		<a
			href="mailto:gabrielchristomarques@gmail.com"
			class="flex justify-center m-4 text-blue-500 text-lg"
			target="_blank"
		>
			<p class="text-2xl hover:variant-form-material">gabrielchristomarques@gmail.com</p>
		</a>

		<div>
			<ul class="flex justify-center space-x-4 m-4">
				<li class="hover:variant-form-material">
					<a
						href="https://github.com/gabrielcmarques"
						target="_blank"
						title="Link do meu Perfil no Github"
					>
						<img src={github_svg} width="40" height="40" alt="Github" />
					</a>
				</li>
				<li class="hover:variant-form-material">
					<a
						href="https://www.linkedin.com/in/gabriel-christo-marques/"
						target="_blank"
						title="Link do meu Perfil no Linkedin"
					>
						<img src={linkedin_svg} width="40" height="40" alt="Linkedin" />
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>
