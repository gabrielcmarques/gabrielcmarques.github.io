<script lang="ts">
	import game1webp from './components/images/game_1.webp';
	import topWavePattern from './components/svgs/pattern-top.svg';
</script>

<img class="pattern-top max-sm:h-32 max-md:h-40 h-52 z-50 w-full" src={topWavePattern} alt="" />
<section class="parent max-w-screen-xl text-center relative m-5 p-2 rounded-lg mx-auto border">
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 div1 opacity-95 relative rounded-lg">
		<div class="flex items-center justify-center">
			<img
				src={game1webp}
				alt="Web Dev Photo"
				class="w-full h-auto object-contain z-0 rounded-lg"
			/>
		</div>
		<div class="flex flex-col justify-center">
			<div class="text-container text-left">
				<h1
					class="max-sm:text-3xl max-md:text-4xl text-5xl max-md:text-center hero-title text-lime-400"
				>
					Join this amazing adventure
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
	</div>
</section>

<style>
	.pattern-top {
		overflow: hidden;
		position: relative;
		/* height: 100%; */
		transform: scale(1, -1);
		width: 100%;
		height: 155px;
		top: 0px;
		left: 0px;
		fill: rgb(255, 213, 26);
	}	
</style>
