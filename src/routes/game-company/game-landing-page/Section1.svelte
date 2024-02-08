<script lang="ts">
	import game1webp from './components/images/game_1.webp';
	// import topWavePattern from './components/svgs/pattern-top.svg';
</script>

<!-- <img class="pattern-top max-sm:h-32 max-md:h-40 h-52 z-50 w-full" src={topWavePattern} alt="" /> -->
<section class="parent max-w-screen-xl text-center relative m-5 p-2 rounded-lg mx-auto border">
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 div1 opacity-95 relative rounded-lg">
		<div class="flex items-center justify-center">
			<img src={game1webp} alt="Web Dev Photo" class="w-full h-auto object-contain rounded-lg" />
		</div>
		<div class="flex flex-col justify-center">
			<div class="text-container text-left">
				<h1
					class="ml-3 max-sm:text-3xl max-md:text-4xl text-5xl max-md:text-center hero-title text-slate-100"
				>
					Join this amazing adventure
				</h1>
				<p class="md:text-base lg:text-2xl p-3 relative text-gray-200">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting, remaining essentially
					unchanged.
				</p>
			</div>
		</div>
	</div>
</section>
