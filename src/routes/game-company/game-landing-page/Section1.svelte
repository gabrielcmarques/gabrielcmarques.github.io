<script lang="ts">
	import game1webp from './components/images/game_1.webp';
</script>

<section class="parent max-w-screen-xl text-center relative m-5 p-5 rounded-lg mx-auto">
	<div class="grid grid-cols-2 gap-4 div1 opacity-95 relative rounded-lg border">
		<div class="my-auto col-span-1">
			<div class="">
				<h1
					class="hero-title max-sm:text-xl max-md:text-2xl text-6xl max-md:text-center text-lime-400"
				>
					Join the Beginning of this Epic Journey
				</h1>

				<p class="text-xl p-3 relative text-white">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting, remaining essentially
					unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
					Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
					PageMaker including versions of Lorem Ipsum
				</p>
			</div>
		</div>
		<div class="col-span-1 p-2">
			<img
				src={game1webp}
				alt="Web Dev Photo"
				class="inset-0 w-full h-full object-contain z-0 rounded-lg"
			/>
		</div>
	</div>
</section>