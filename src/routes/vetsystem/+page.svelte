<script>
	import {
		sistemawebvet1_webp,
		sistemawebvet2_webp,
		sistemawebvet3_webp,
		sistemawebvet4_webp
	} from '$lib';

	import { onMount } from 'svelte';

	let slideIndex = 1;

	function plusDivs(n) {
		showDivs((slideIndex += n));
	}

	function showDivs(n) {
		const slides = document.querySelectorAll('.mySlides');

		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}

		slides.forEach((slide) => {
			slide.style.display = 'none';
		});

		slides[slideIndex - 1].style.display = 'block';
	}

	onMount(() => {
		showDivs(slideIndex);
	});
</script>

<svelte:head>
	<title>Veterinarian System - Gabriel Christo | Home</title>
</svelte:head>

<section class="w-full">
	<div class="slider-container max-w-screen-xl mx-auto">
		<button class="slider-button left" on:click={() => plusDivs(-1)}>&#10094;</button>
		<div class="slider-content">
			<img class="mySlides" alt="vet project" src={sistemawebvet4_webp} />
			<img class="mySlides" alt="vet project" src={sistemawebvet1_webp} />
			<img class="mySlides" alt="vet project" src={sistemawebvet2_webp} />
			<img class="mySlides" alt="vet project" src={sistemawebvet3_webp} />
		</div>
		<button class="slider-button right" on:click={() => plusDivs(1)}>&#10095;</button>
	</div>
</section>

<style>
	.mySlides {
		display: none;
		width: 100%;
	}

	.slider-container {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 100%;
		margin: auto;
	}

	.slider-content {
		width: 100%;
	}

	.slider-button {
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
		border: none;
		padding: 10px;
		cursor: pointer;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	.slider-button.left {
		left: 0;
	}

	.slider-button.right {
		right: 0;
	}

	.slider-button:hover {
		background-color: rgba(0, 0, 0, 0.8);
	}
</style>
