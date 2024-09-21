<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { reveal } from 'svelte-reveal';
</script>

<section class="about">
	<div
		class="max-w-screen-xl flex flex-col gap-4 md:justify-center max-md:items-center p-3 mx-auto relative"
	>
		<h2
			use:reveal={{ transition: 'fly' }}
			class="max-w-screen-xl text-5xl text-gray-300 mt-5 mx-auto text-center  pt-10 pb-2"
		>
			{m.section6_about_title()}
		</h2>
		<article
			use:reveal={{ transition: 'slide', delay: 200, x: -100, duration: 500 }}
			class="card4 blurred-glass p-4 opacity-95 hover:opacity-90 rounded-2xl text-gray-100"
		>
			<p class="max-sm:text-xl max-md:text-2xl text-3xl">
				{m.section6_description()}
			</p>
			<br />

			<p class="max-sm:text-xl max-md:text-2xl text-3xl">
				{m.section6_description2()}
			</p>
		</article>
		<hr style="border-color: gray;" />
		<!-- <article
			use:reveal={{ transition: 'slide', delay: 200, x: 100, duration: 500 }}
			class="card4 blurred-glass p-4 opacity-95 hover:opacity-90 rounded-2xl text-gray-100"
		/> -->
	</div>
</section>
