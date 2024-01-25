<script lang="ts">
	import { github_svg, linkedin_svg, twitter_svg } from '$lib';
</script>

<div class="pt-12 text-center">
	<footer id="footer" class="relative z-50 dark:bg-gray-900">
		<div class="border-t border-b border-gray-200 dark:border-gray-700 py-3">
			<div class="mx-auto container px-4 xl:px-12 2xl:px-4">
				<div class="">
					<div class="w-full my-8 lg:mb-0 flex">
						<div class="w-full lg:w-1/2 px-1 ">
							<ul class="text-lg">
								<li>
									<a
										class="leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
										href="/">Contato</a
									>
								</li>
								<li class="mt-6">
									<a
										class="leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
										href="/">Sobre</a
									>
								</li>

								<li class="mt-6">
									<a
										href="/"
										class="leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
										>Blog</a
									>
								</li>
							</ul>
						</div>
						<div class="w-full lg:w-1/2 px-1 ">
							<ul class="text-lg">
								<li>
									<a
										class="leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
										href="/"
										>Termos de privacidade
									</a>
								</li>
								<li class="mt-6">
									<a
										class="leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
										href="/">Termos de serviço</a
									>
								</li>
								<li class="mt-6">
									<a
										class="leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
										href="/">Changelog</a
									>
								</li>
							</ul>
						</div>
						<div class="w-full lg:w-1/2 lg:px-1 flex flex-col justify-between ">
							<div class="flex items-center justify-around max-lg:flex-col max-sm:mt-1  gap-5">
								<a href="/" role="link" aria-label="GitHub">
									<img src={github_svg} class="w-10" alt="github_logo" />
									<div
										class="text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand"
									/>
								</a>
								<a href="/" role="link" aria-label="Linkedin">
									
										<img src={linkedin_svg} class="w-10" alt="linkedin_logo" />
									
								</a>
								<a href="/" role="link" aria-label="Twitter">
									
										<img src={twitter_svg} class="w-10" alt="twitter_logo" />
									
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col justify-center items-center">
			<p class="my-6 text-xs lg:text-sm text-gray-900 dark:text-gray-50">
				Gabriel Christo Marques 2023.
			</p>
		</div>
	</footer>
</div>