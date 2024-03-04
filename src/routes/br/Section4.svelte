<script lang="ts">
	import { reveal } from 'svelte-reveal';
</script>

<section class="about">
	<div
		class="max-w-screen-xl flex flex-col gap-4 md:justify-center max-md:items-center p-3 mx-auto font-normal relative"
	>
		<h1
			use:reveal={{ transition: 'fly' }}
			class="max-w-screen-xl text-5xl text-gray-300 mt-5 mx-auto text-center font-medium pt-10 pb-2"
		>
			Sobre Mim
		</h1>
		<article
			use:reveal={{ transition: 'slide', delay: 200, x: -100, duration: 500 }}
			class="card4 blurred-glass p-4 opacity-95 hover:opacity-90 rounded-2xl text-gray-100"
		>
			<p class="max-sm:text-xl max-md:text-2xl text-3xl">
				Olá, tudo bem? Meu nome é Gabriel Christo Marques, e eu sou um entusiasta Desenvolvedor Web
				Fullstack, apaixonado por transformar conceitos em experiências digitais memoráveis. Ao
				combinar habilidades técnicas sólidas com uma abordagem criativa, estou comprometido em
				proporcionar soluções completas e inovadoras para os desafios do mundo digital.
			</p>
			<br />

			<p class="max-sm:text-xl max-md:text-2xl text-3xl">
				Com expertise tanto no front-end quanto no back-end, desenvolvo websites e aplicações que
				não apenas cativam visualmente, mas também oferecem desempenho robusto e uma experiência de
				usuário excepcional. Cada linha de código é cuidadosamente elaborada para traduzir a visão
				do cliente em uma presença online impactante.
			</p>
		</article>
		<hr style="border-color: gray;" />
		<!-- <article
			use:reveal={{ transition: 'slide', delay: 200, x: 100, duration: 500 }}
			class="card4 blurred-glass p-4 opacity-95 hover:opacity-90 rounded-2xl text-gray-100"
		/> -->
	</div>
</section>
