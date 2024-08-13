<script lang="ts">
	import {
		app_99_svg,
		fiverr_svg,
		github_svg,
		linkedin_svg,
		twitter_svg,
		upwork_svg,
		whatsapp_svg
	} from '$lib';
</script>

<div class=" text-center">
	<footer id="footer" class="relative z-50 dark:bg-gray-900">
		<div class="border-t border-b border-gray-200 dark:border-gray-700 py-3">
			<div class="my-10 flex items-center justify-around max-sm:mt-1 gap-2">
				<a
					class="p-2"
					href="https://www.fiverr.com/gabriel_christo/build-high-performant-websites"
					aria-label="Fiverr"
				>
					<img src={fiverr_svg} class="w-10" alt="fiverr_logo" />
					<div
						class="text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand"
					/>
				</a>
				<a
					class="p-2"
					href="https://www.upwork.com/freelancers/~01b87c5ba2f0dd1342"
					aria-label="Upwork"
				>
					<img src={upwork_svg} class="w-10" alt="upwork_logo" />
					<div
						class="text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand"
					/>
				</a>
				<a
					class="p-2"
					href="https://www.99freelas.com.br/user/gabriel-de-christo-marques"
					aria-label="99Freelas"
				>
					<img src={app_99_svg} class="w-10" alt="99freelas_logo" />
					<div
						class="text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand"
					/>
				</a>
				<a class="p-2" href="https://github.com/gabrielcmarques" aria-label="GitHub">
					<img src={github_svg} class="w-10" alt="github_logo" />
					<div
						class="text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand"
					/>
				</a>
				<a
					class="p-2"
					href="https://www.linkedin.com/in/gabriel-christo-marques/"
					target="_blank"
					aria-label="Linkedin"
				>
					<img src={linkedin_svg} class="w-10" alt="linkedin_logo" />
				</a>
				<a
					class="p-2"
					href="https://twitter.com/gabrielchristom"
					target="_blank"
					aria-label="Twitter"
				>
					<img src={twitter_svg} class="w-10" alt="twitter_logo" />
				</a>
				<a
					href="https://wa.me/5541998272752/?text=Hello,%20I%20am%20interested%20in%20your%20software%20developer%20service"
					target="_blank"
					aria-label="Twitter"
				>
					<img src={whatsapp_svg} class="w-15" alt="twitter_logo" />
				</a>
			</div>
		</div>
		<div class="flex flex-col justify-center items-center">
			<p class="my-6 text-xs lg:text-sm text-gray-900 dark:text-gray-50">
				Gabriel Christo Marques 2024.
			</p>
		</div>
	</footer>
</div>

<style>
	a {
		transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
	}
	a:hover {
		transform: translateY(-5px) scale(1.08);
	}
</style>
