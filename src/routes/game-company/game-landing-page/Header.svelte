<script type="ts">
	import heroHeader from './components/images/header.webp';
	import wishlistBtn from './components/images/wishlistButton.webp';
</script>

<header class="hero h-[80vh] flex flex-col items-center justify-center relative">
	<img
		src={heroHeader}
		alt="Hero Header"
		class="absolute inset-0 w-full h-full object-cover opacity-70"
	/>
	<div class="relative z-10 text-center">
		<!-- Heading -->
		<h1
			class="hero-title animate__animated animate__fadeInDown max-sm:text-4xl max-md:text-6xl text-7xl max-md:text-center text-gray-50"
		>
			Gabriel's Amazing Game
		</h1>
		<p class="mt-10 text-2xl p-3 relative z-20 text-white rounded-lg">Available in all platforms</p>
		<img src={wishlistBtn} class="w-1/3 mx-auto mt-10" alt="Wishlist Button" />
	</div>
</header>