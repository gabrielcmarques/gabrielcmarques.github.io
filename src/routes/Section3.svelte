<script lang="ts">
	import { pagespeed_lighthouse_webm } from '$lib';
	import { reveal } from 'svelte-reveal';
</script>

<section
	class="max-w-screen-md lg:max-w-screen-xl flex max-lg:flex-col flex-row justify-center items-center p-3 m-3 mx-auto font-normal relative"
>
	<div
		use:reveal={{ transition: 'slide', delay: 100, x: -100, duration: 600 }}
		class="card4 lg:w-[50%] max-lg:h-full h-[390px] flex align-middle justify-center items-center rounded-2xl opacity-90 blurred-glass dark mr-3 my-2"
	>
		<p
			class="max-sm:text-xl max-md:text-2xl text-3xl text-gray-100 max-md:text-center p-5 max:lgh-5/6"
		>
			Pages meticulously crafted with best practices in web development, resulting in high
			performance, accessibility, and <a
				href="https://www.youtube.com/watch?v=-B58GgsehKQ"
				class="text-blue-400"
				target="_blank">SEO</a
			>, enhancing the website's discoverability by search engines such as Google.
		</p>
	</div>
	<div
		use:reveal={{ transition: 'slide', delay: 200, x: 100, duration: 500 }}
		class="card4 max-sm:p-3 mt-5 sm:mt-1 rounded-2xl opacity-95 blurred-glass"
	>
		<a
			href="https://pagespeed.web.dev/analysis/https-gabrielcm-dev/90n4shnjug?form_factor=mobile"
			target="_blank"
		>
			<img
				class="max-w-3xl w-full h-full opacity-95 object-contain rounded-2xl hover:opacity-90"
				src={pagespeed_lighthouse_webm}
				alt="PageSpeed Lighthouse Test"
			/></a
		>
	</div>
</section>
<hr style="border-color: gray;" />
