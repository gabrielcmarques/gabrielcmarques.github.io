<script>
	import wishlistBtn from './images/wishlistButton.webp';
</script>

<div id="steamCard">
	<a href="#steamCard" class="steam-card">
		<img
			src={wishlistBtn}
			class="max-sm:w-6/12 max-md:w-2/4 w-8/12 mx-auto animate__animated animate__fadeInRight animate__delay-1s z-50"
			alt="Steam Wishlist Button"
		/>
	</a>
</div>

<style>
	.steam-card {
		position: absolute;
		top: 73vh; /* Adjust the value to control the amount of overflow */
		right: 1vw;
		transition: transform 0.1s;
	}

	@media not all and (min-width: 640px) {
		.steam-card {
			top: 50vh;
		}
	}

	.steam-card:hover {
		transform: translate(0, -0.2rem);
	}
</style>
