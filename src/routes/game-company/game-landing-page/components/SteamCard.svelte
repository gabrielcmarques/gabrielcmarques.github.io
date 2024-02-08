<script>
	import wishlistBtn from './images/wishlistButton.webp';
</script>

<div class="">
	<a href="" class="steam-card">
		<img
			src={wishlistBtn}
			class="max-sm:w-6/12 max-md:w-2/4 w-8/12 mx-auto animate__animated animate__fadeInDown animate__delay-1s z-50"
			alt="Wishlist Button"
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

	.steam-card:hover {
		transform: translate(0, -0.2rem);
	}
</style>
