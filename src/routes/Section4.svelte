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
		use:reveal={{ transition: 'slide', delay: 200, x: -100, duration: 500 }}
		class="card4 blurred-glass p-4 opacity-95 hover:opacity-90 rounded-2xl text-gray-100"
	>
		<p class="max-sm:text-xl max-md:text-2xl text-3xl">
			Hello, how are you? My name is Gabriel Christo Marques, and I am a Fullstack Web Developer
			enthusiast, passionate about transforming concepts into memorable digital experiences. By
			combining strong technical skills with a creative approach, I am committed to delivering
			comprehensive and innovative solutions for the challenges of the digital world.
		</p>
	</article>
	<article
		use:reveal={{ transition: 'slide', delay: 200, x: 100, duration: 500 }}
		class="card4 blurred-glass p-4 opacity-95 hover:opacity-90 rounded-2xl text-gray-100"
	>
		<p class="max-sm:text-xl max-md:text-2xl text-3xl">
			With expertise in both front-end and back-end, I develop websites and applications that not
			only captivate visually but also deliver robust performance and an exceptional user
			experience. Every line of code is carefully crafted to translate the client's vision into a
			compelling online presence.
		</p>
	</article>
</section>
