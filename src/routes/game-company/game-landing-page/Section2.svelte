<script lang="ts">
	import game2webp from './components/images/game_2.webp';
</script>

<section class="parent max-w-screen-xl text-center relative m-5 p-2 rounded-lg mx-auto border">
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 div1 opacity-95 relative rounded-lg">
		<div class="img-item items-center justify-center sm:order-2 md:order-2">
			<img src={game2webp} alt="Web Dev Photo" class="w-full h-auto object-contain rounded-lg" />
		</div>
		<div class="flex flex-col justify-center sm:order-1 md:order-1">
			<div class="text-container text-left">
				<h1
					class="ml-3 max-sm:text-3xl max-md:text-4xl text-5xl max-md:text-center hero-title text-slate-100"
				>
					Make friends along the way
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
