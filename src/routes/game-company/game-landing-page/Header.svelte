<script type="ts">
	import { onMount } from 'svelte';
	import heroHeader from './components/images/splash_header.webp';

	onMount(() => {
		// Function to remove "animate__animated" class after a delay
		setTimeout(() => {
			const elements = document.querySelectorAll('.animate__animated');
			elements.forEach((element) => {
				element.classList.remove('animate__animated');
			});
		}, 5000);
	});
</script>

<header
	class="hero max-sm:h-[60vh] h-[80vh] flex flex-col justify-center relative overflow-hidden border-b"
>
	<div class="relative z-10 ml-10">
		<!-- Heading -->
		<h1
			class="hero-title animate__animated animate__fadeInDown max-sm:text-5xl max-md:text-6xl text-7xl text-white tracking-tight"
		>
			The Legend of the Heroes
		</h1>
		<h2
			class="hero-title2 animate__animated animate__fadeInDown p-5 relative z-20 text-white rounded-lg max-sm:text-3xl max-md:text-4xl text-5xl tracking-tight"
		>
			Now available on all platforms
		</h2>
	</div>
	<img
		src={heroHeader}
		alt="Hero Header"
		class="absolute inset-0 w-full h-full object-cover opacity-80"
	/>
	<!-- <div class="bottom-wave z-50 absolute bottom-0 left-0">
		<img src={bottomWavePattern} alt="" />
	</div> -->
</header>

<style>
	header.hero::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to right, rgba(0, 0, 0, 0.905) 10%, rgba(0, 0, 0, 0) 70%);
		z-index: 5; /* Adjust the z-index as needed */
		pointer-events: none; /* Allow clicks to pass through the pseudo-element */
	}
</style>
