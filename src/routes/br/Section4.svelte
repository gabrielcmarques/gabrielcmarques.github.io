<script lang="ts">
	import { reveal } from 'svelte-reveal';
</script>

<h1
	use:reveal={{ transition: 'fly' }}
	class="max-w-screen-md lg:max-w-screen-xl text-5xl text-gray-300 mt-10 mx-auto text-center font-medium"
>
	About me
</h1>
<section
	class="max-w-screen-md lg:max-w-screen-xl flex flex-col gap-4 lg:flex-row md:justify-center max-md:items-center m-3 p-3 mx-auto font-normal"
>
	<article
		use:reveal={{ transition: 'slide', delay: 200, x: -150, duration: 500 }}
		class="card4 blurred-glass p-4 opacity-95 hover:opacity-90 rounded-2xl text-gray-100"
	>
		<p class="max-sm:text-xl max-md:text-2xl text-3xl">
			Olá, tudo bem? Meu nome é Gabriel Christo Marques, e eu sou um entusiasta Desenvolvedor Web
			Fullstack, apaixonado por transformar conceitos em experiências digitais memoráveis. Ao
			combinar habilidades técnicas sólidas com uma abordagem criativa, estou comprometido em
			proporcionar soluções completas e inovadoras para os desafios do mundo digital.
		</p>
	</article>
	<article
		use:reveal={{ transition: 'slide', delay: 200, x: 150, duration: 500 }}
		class="card4 blurred-glass p-4 opacity-95 hover:opacity-90 rounded-2xl text-gray-100"
	>
		<p class="max-sm:text-xl max-md:text-2xl text-3xl">
			Com expertise tanto no front-end quanto no back-end, desenvolvo websites e aplicações que não
			apenas cativam visualmente, mas também oferecem desempenho robusto e uma experiência de
			usuário excepcional. Cada linha de código é cuidadosamente elaborada para traduzir a visão do
			cliente em uma presença online impactante.
		</p>
	</article>
</section>
