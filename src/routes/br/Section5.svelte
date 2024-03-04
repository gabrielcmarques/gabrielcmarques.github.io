<script lang="ts">
	import { design_responsivo_webm, design_responsivo_webp } from '$lib';
	import { reveal } from 'svelte-reveal';
</script>

<section
	use:reveal={{ transition: 'slide', duration: 500 }}
	class="responsive-design contact parent max-w-screen-xl text-center mx-auto rounded-3xl p-2 my-2"
>
	<div class=" ">
		<h1
			use:reveal={{ transition: 'slide', duration: 500 }}
			class=" text-5xl text-gray-300 max-md:text-center mx-auto text-center mt-8 font-medium"
		>
			Design responsivo para todos os dispositivos
		</h1>
		<img
			use:reveal={{ transition: 'slide', duration: 500 }}
			src={design_responsivo_webp}
			alt="Foto Mockup Desktop Tablet"
			class="mx-auto w-96 p-2"
		/>
		<video
			src={design_responsivo_webm}
			autoplay
			loop
			muted
			style=""
			class="rounded-2xl border border-gray-500"
		/>
	</div>
	<hr class="mt-10 max-w-screen-xl mx-auto" style="border-color: gray;" />
</section>
