<script lang="ts">
	import blogImg2 from './images/blog1.webp';
	import blogImg1 from './images/blog2.webp';
	import blogImg3 from './images/blog3.webp';
</script>

<section
	id="blog_p"
	class="max-w-screen-xl relative m-5 p-5 rounded-lg mx-auto animate__delay-1s
animate__animated animate__fadeInLeft"
>
	<h2
		class="news-title max-sm:text-2xl max-md:text-4xl text-5xl text-gray-900 max-md:text-center ml-5 mb-6"
	>
		News:
	</h2>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		<!-- card1 -->
		<div class="max-w-sm mx-auto">
			<div class="bg-white shadow-md border border-gray-700 rounded-lg overflow-hidden">
				<a href="#blog_p" aria-label="Read Blog Post: Issue #9" class="block group">
					<img
						class="rounded-t-lg object-cover w-full h-56 transition-transform duration-300 ease-in-out transform hover:scale-105"
						src={blogImg1}
						alt="blog"
					/>
				</a>
				<div class="p-5">
					<a href="#blog_p" aria-label="Read Blog Post: Issue #9">
						<h2 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 hover:text-blue-900">
							Blog Post: Issue #9
						</h2>
					</a>
					<p class="font-normal text-gray-700 my-3 text-ellipsis max-h-20">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et mollitia atque saepe
						repellat quia culpa eum deserunt placeat.
					</p>
				</div>
			</div>
		</div>

		<!-- card 2 -->
		<div class="max-w-sm mx-auto">
			<div class="bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden">
				<a href="#blog_p" aria-label="Read Blog Post: Issue #9" class="block group">
					<img
						class="rounded-t-lg object-cover w-full h-56 transition-transform duration-300 ease-in-out transform hover:scale-105"
						src={blogImg2}
						alt="blog 2"
					/>
				</a>
				<div class="p-5">
					<a href="#blog_p" aria-label="Read Blog Post: Issue #9">
						<h2 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 hover:text-blue-900">
							New gameplay trailer
						</h2>
					</a>
					<p class="font-normal text-gray-700 mb-3 overflow-ellipsis max-h-20">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et mollitia atque saepe
						repellat quia culpa eum deserunt placeat.
					</p>
				</div>
			</div>
		</div>

		<!-- card3 -->
		<div class="max-w-sm mx-auto">
			<div class="bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden">
				<a href="#blog_p" aria-label="Read Blog Post: Issue #9" class="block group">
					<img
						class="rounded-t-lg object-cover w-full h-56 transition-transform duration-300 ease-in-out transform hover:scale-105"
						src={blogImg3}
						alt="blog 3"
					/>
				</a>
				<div class="p-5">
					<a href="#blog_p" aria-label="Read Blog Post: Issue #9">
						<h2 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 hover:text-blue-900">
							New Kickstarter Goal Reached
						</h2>
					</a>
					<p class="font-normal text-gray-700 mb-3 overflow-ellipsis max-h-20">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos et mollitia atque saepe
						repellat quia culpa eum deserunt placeat.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
