<script>
	import { github_svg, linkedin_svg } from '$lib';
</script>

<div class="flex flex-col items-center space-y-5 translate-y-5">
	<h1 class="h1">Entre em Contato</h1>
	<div class="max-w-screen-lg">
		<p class="text-xl m-4">
			Se você precisa de um desenvolvedor web para criar uma aplicação ou solução para o seu
			negócio, estou pronto para ajudar. Entre em contato através do e-mail e responderei o mais
			rápido possível em busca da solução do seu negócio.
		</p>
		<!-- email  -->
		<a
			href="mailto:gabrielchristomarques@gmail.com"
			class="m-4 text-blue-500 text-lg hover:btn-icon-xl hover:text-slate-400"
			target="_blank">gabrielchristomarques@gmail.com</a
		>

		<!-- Social links -->
		<ul class="flex space-x-4 m-4">
			<li>
				<a
					href="https://github.com/gabrielcmarques"
					target="_blank"
					title="Link do meu Perfil no Github"
				>
					<img src={github_svg} width="40" height="40" alt="Github" />
				</a>
			</li>
			<li>
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
	<div class="flex flex-col items-center space-y-5 translate-y-5">
		<h1 class="h1">Sobre mim</h1>

		<div class="max-w-screen-lg">
			<p class="text-xl m-4">
				Sou um programador especializado em desenvolvimento web. Sempre fui entusiasta na área de
				computação, então decidi ir para o caminho da programação e automação de sistemas, nos
				últimos 5 anos tenho me dedicado para adquirir o conhecimento necessário para trabalhar com
				algo que eu gosto com programação.
			</p>

			<!-- <a href="#" class="btn">Meu currículo</a> -->
		</div>
	</div>
</div>
