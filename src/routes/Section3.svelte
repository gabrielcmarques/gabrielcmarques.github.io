<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { pagespeed_lighthouse_webm } from '$lib';
	import { reveal } from 'svelte-reveal';
</script>

<section class="web-vitals mx-auto p-3 m-3">
	<div
		class="max-w-screen-xl flex flex-col justify-center items-center mx-auto  relative card4 dark blurred-glass align-middle rounded-2xl mt-10 z-10"
	>
		<div
			use:reveal={{ transition: 'slide', delay: 100, x: -100, duration: 600 }}
			class="p-3 my-3 h-full flex justify-center items-center rounded-2xl opacity-95"
		>
			<p class=" w-full max-sm:text-xl max-md:text-2xl text-3xl text-gray-100 max-md:text-center">
				{@html m.section2_pagesmeti()}
				
			</p>
		</div>
		<div
			use:reveal={{ transition: 'slide', delay: 200, x: 100, duration: 500 }}
			class="max-sm:p-3 mt-5 sm:mt-1 rounded-2xl opacity-90 p-3"
		>
			<a
				href="https://pagespeed.web.dev/analysis/https-gabrielcm-dev/lxdvq5b35z?form_factor=desktop"
				target="_blank"
			>
				<img
					class=" w-full h-full opacity-100 object-contain rounded-2xl hover:opacity-95"
					src={pagespeed_lighthouse_webm}
					alt="PageSpeed Lighthouse Test"
				/></a
			>
		</div>
	</div>
	<!-- <hr class="mt-10 max-w-screen-xl mx-auto z-50" style="border-color: gray;" /> -->
</section>
