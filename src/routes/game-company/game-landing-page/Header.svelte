<script type="ts">
	import { onMount } from 'svelte';
	import heroHeader from './components/images/splash_header.webp';

	// import bottomWavePattern from './components/svgs/wave-bottom.svg';

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

<header
	class="hero h-[80vh] flex flex-col items-center justify-center relative overflow-hidden border-b"
>
	<div class="relative z-10 text-center">
		<!-- Heading -->
		<h1
			class="hero-title animate__animated animate__fadeInDown max-sm:text-4xl max-md:text-6xl text-7xl max-md:text-center text-white tracking-tight"
		>
			The Legend of the Heroes
		</h1>
		<h2
			class="hero-title2 animate__animated animate__fadeInDown p-5 relative z-20 text-white rounded-lg max-sm:text-2xl max-md:text-4xl text-5xl tracking-tight"
		>
			Now available on all platforms
		</h2>
	</div>
	<img
		src={heroHeader}
		alt="Hero Header"
		class="absolute inset-0 w-full h-full object-cover opacity-70"
	/>
	<!-- <div class="bottom-wave z-50 absolute bottom-0 left-0">
		<img src={bottomWavePattern} alt="" />
	</div> -->
</header>

