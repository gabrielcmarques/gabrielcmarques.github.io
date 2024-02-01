<script lang="ts">
	import { pagespeed_lighthouse_webm } from '$lib';
	import { reveal } from 'svelte-reveal';
</script>

<section class="max-w-screen-xl flex max-lg:flex-col flex-row justify-center items-center p-3 m-3 mx-auto"
>
	<div  use:reveal={{ transition: "slide", delay: 100, x: -150, duration: 600 }} 
		class="lg:w-[45%] flex align-middle justify-center items-center lg:h-[380px] rounded-2xl card opacity-90"
	>
		<p class="max-sm:text-xl max-md:text-2xl text-3xl text-gray-300 max-md:text-center p-5 h-5/6">
			Páginas cuidadosamente criadas com as melhores práticas em desenvolvimento web, resultando em
			alta Performance, Acessibilidade e <a
				href="https://www.youtube.com/watch?v=-B58GgsehKQ"
				class="text-blue-400"
				target="_blank">SEO</a
			>, aprimorando a do website descoberta por mecanismos de busca como Google.
		</p>
	</div>
	<div use:reveal={{ transition: "slide", delay: 200, x: 150, duration: 500 }} class="lg:w-[55%] sm:p-3 mt-5 sm:mt-1 rounded-2xl opacity-95">
		<a
			href="https://pagespeed.web.dev/analysis/https-gabrielcm-dev/90n4shnjug?form_factor=mobile"
			target="_blank"
		>
			<img
				class="max-w-3xl w-full h-full opacity-95 object-contain rounded-2xl hover:border"
				src={pagespeed_lighthouse_webm}
				alt="PageSpeed Lighthouse Test"
			/></a
		>
	</div>
</section>
