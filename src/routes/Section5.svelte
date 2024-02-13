<script lang="ts">
	import { design_responsivo_webm, design_responsivo_webp } from '$lib';
	import { reveal } from 'svelte-reveal';
</script>

<h1
	use:reveal={{ transition: 'slide', duration: 500 }}
	class="max-w-screen-md lg:max-w-screen-xl text-5xl text-gray-300 max-md:text-center mx-auto p-3 text-center mt-16 mb-5 font-medium"
>
	Responsive design for all devices
</h1>
<img
	use:reveal={{ transition: 'slide', duration: 500 }}
	src={design_responsivo_webp}
	alt="Foto Mockup Desktop Tablet"
	class="mx-auto w-96 p-2 mb-5"
/>
<section
	use:reveal={{ transition: 'slide', duration: 500 }}
	class="contact parent max-w-screen-xl text-center md:grid mx-auto rounded-3xl border"
>
	<video
		src={design_responsivo_webm}
		autoplay
		loop
		muted
		style="max-width: 100%;"
		class="rounded-3xl"
	/>
</section>
