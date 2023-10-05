<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let elemCarousel: HTMLDivElement;
	const imageNames = ['lousa1', 'lousa2', 'lousa3'];

	function carouselLeft(): void {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}

	function carouselRight(): void {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}

	function carouselThumbnail(index: number) {
		elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
	}
</script>

<div class="flex justify-center">
	<div class="container">
		<div class="flex flex-col items-center space-y-5 translate-y-5">
			<h1 class="text-2xl md:text-5xl">Projeto Lousa Kanban</h1>

			<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
				<!-- Button: Left -->
				<button type="button" class="btn-icon variant-filled" on:click={carouselLeft}>
					<i class="fa-solid fa-arrow-left" />
				</button>
				<!-- Full Images -->
				<div
					bind:this={elemCarousel}
					class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto"
				>
					{#each imageNames as imageName}
						<img
							class="snap-center w-[1024px] rounded-container-token"
							src="/src/lib/assets/images/lousakanban/{imageName}.webp"
							alt={imageName}
							loading="lazy"
						/>
					{/each}
				</div>
				<!-- Button: Right -->
				<button type="button" class="btn-icon variant-filled" on:click={carouselRight}>
					<i class="fa-solid fa-arrow-right" />
				</button>
			</div>
			<div class="card p-4 grid grid-cols-6 gap-4">
				{#each imageNames as imageName, i}
					<button type="button" on:click={() => carouselThumbnail(i)}>
						<img
							class="rounded-container-token"
							src="/src/lib/assets/images/lousakanban/{imageName}.webp"
							alt={imageName}
							loading="lazy"
						/>
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>
