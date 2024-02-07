<script type="ts">
	import { onMount } from 'svelte';
	import heroHeader from './components/images/header.webp';
	import wishlistBtn from './components/images/wishlistButton.webp';
	import bottomWavePattern from './components/svgs/wave-bottom.svg';

	// import topPattern from './components/svgs/top-layered-steps-haikei2.svg';

	onMount(() => {
		// Function to remove "animate__animated" class after a delay
		setTimeout(() => {
			const elements = document.querySelectorAll('.animate__animated');
			elements.forEach((element) => {
				element.classList.remove('animate__animated');
			});
		}, 1500);
	});
</script>

<header class="hero h-[80vh] flex flex-col items-center justify-center relative overflow-hidden">
	<div class="relative z-10 text-center">
		<!-- Heading -->
		<h1
			class="hero-title animate__animated animate__fadeInDown max-sm:text-4xl max-md:text-6xl text-7xl max-md:text-center text-white"
		>
			The Legend of the Heroes
		</h1>
		<h2
			class="hero-title2 animate__animated animate__fadeInDown p-5 relative z-20 text-white rounded-lg max-sm:text-2xl max-md:text-4xl text-5xl"
		>
			Now available on all platforms
		</h2>
		<a href="" class="steam-card">
			<img
				src={wishlistBtn}
				class="steam-card w-2/4 mx-auto animate__animated animate__fadeInDown z-50"
				alt="Wishlist Button"
			/>
		</a>
	</div>
	<img
		src={heroHeader}
		alt="Hero Header"
		class="absolute inset-0 w-full h-full object-cover opacity-70"
	/>
	<div class="bottom-wave z-50 absolute bottom-0 left-0">
		<img src={bottomWavePattern} alt="" />
	</div>
</header>

<style lang="scss">
	.steam-card {
		transition: transform 0.1s;
	}

	.steam-card:hover {
		transform: translate(0, -0.2rem);
		z-index: 1;
	}

	.bottom-wave {
		overflow: hidden;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 50;
	}

	// .bottom-wave img {
	// 	width: 100%;
	// 	height: auto;
	// }

	// .bottom-wave::before {
	// 	content: '';
	// 	font-family: 'shape divider from ShapeDividers.com';
	// 	position: absolute;
	// 	pointer-events: none;
	// 	background-repeat: no-repeat;
	// 	bottom: 0; /* Adjusted to be at the bottom */
	// 	left: 0;
	// 	right: 0;
	// 	top: 0;
	// 	background-size: 100% 49px;
	// 	background-position: 50% 100%;
	// }

	// @media (min-width: 2100px) {
	// 	.bottom-wave::before {
	// 		background-size: 100% calc(2vw + 49px);
	// 	}
	// }
</style>
