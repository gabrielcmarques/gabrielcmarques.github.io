<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { design_responsivo_webp } from '$lib';
	// import design_responsivo_webm from '$lib/assets/videos/design_responsivo.webm';

	import { reveal } from 'svelte-reveal';
</script>

<section
	use:reveal={{ transition: 'slide', duration: 500 }}
	class="responsive-design contact parent max-w-screen-xl text-center mx-auto rounded-3xl p-2 my-2"
>
	<div class=" ">
		<h2
			use:reveal={{ transition: 'slide', duration: 500 }}
			class=" text-5xl text-gray-300 max-md:text-center mx-auto text-center mt-8 "
		>
			{m.section5_title_responsive()}
		</h2>
		<img
			use:reveal={{ transition: 'slide', duration: 500 }}
			src={design_responsivo_webp}
			alt="Foto Mockup Desktop Tablet"
			class="mx-auto w-96 p-2"
		/>
		<video
			src="/design_responsivo.webm"
			autoplay
			loop
			muted
			class="rounded-2xl border border-gray-500"
		/>
	</div>
	<hr class="mt-10 max-w-screen-xl mx-auto" style="border-color: gray;" />
</section>
