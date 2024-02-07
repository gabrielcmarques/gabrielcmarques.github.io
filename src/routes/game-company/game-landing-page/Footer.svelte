<script>
	import endPattern from './components/svgs/end-pattern.svg';
	</script>

<div class="pt-12 text-center">
	<img class="z-50 w-full h-40 " src="{endPattern}" alt="">
	<footer id="footer" class="relative z-50 dark:bg-gray-900">
		<div class="border-t border-b border-gray-200 dark:border-gray-700 py-3 border">
			<div
			class="my-10 flex items-center justify-around max-sm:mt-1 gap-5 cursor-pointer hover:text-brand dark:hover:text-brand"
			>
				<span class="icon-[bi--steam] w-12 h-12" role="img" aria-hidden="true" />
				<span class="icon-[cib--epic-games] w-12 h-12" role="img" aria-hidden="true" />
				<span class="icon-[bi--xbox] w-12 h-12" role="img" aria-hidden="true" />
				<span class="icon-[bi--playstation] w-12 h-12" role="img" aria-hidden="true" />
				<span class="icon-[bi--nintendo-switch] w-12 h-12" role="img" aria-hidden="true" />
				<span class="icon-[bi--android2] w-12 h-12" role="img" aria-hidden="true" />
				<span class="icon-[bi--apple] w-12 h-12" role="img" aria-hidden="true" />
			</div>
		</div>
		<div class="flex flex-col justify-center items-center">
			<p class="my-6 text-xs lg:text-sm text-gray-900 dark:text-gray-50">
				Gabriel Christo Marques 2023.
			</p>
		</div>
	</footer>
</div>



<style>
	span {
		transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
	}
	span:hover {
		transform: translateY(-5px) scale(1.08);
	}
</style>


