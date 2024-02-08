<script lang="ts">
	import game3webp from './components/images/game_3.webp';
</script>

<section class="parent max-w-screen-xl text-center relative m-5 p-2 rounded-lg mx-auto border">
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 div1 opacity-95 relative rounded-lg">
		<div class="flex items-center justify-center">
			<img
				src={game3webp}
				alt="Web Dev Photo"
				class="w-full h-auto object-contain rounded-lg"
			/>
		</div>
		<div class="flex flex-col justify-center">
			<div class="text-container text-left">
				<h1
					class="ml-3 max-sm:text-3xl max-md:text-4xl text-5xl max-md:text-center hero-title text-slate-100"
				>
					Fight epic bosses
				</h1>
				<p class="text-gray-200 md:text-base lg:text-2xl p-3 relative">
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
	</div>
</section>
