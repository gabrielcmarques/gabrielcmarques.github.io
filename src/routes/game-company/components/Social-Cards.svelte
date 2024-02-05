<script lang="ts">
	const animateFadeDown = 'animate__animated animate__fadeInDown';
	const animateFadeLeft = 'animate__animated animate__fadeInLeft';
	const animateFadeRight = 'animate__animated animate__fadeInRight';

	// let cards = Array.from({ length: 13 }, (_, i) => i + 1);
	// function calculateAnimation(i) {
	// 	const baseDelay = 0.5;
	// 	const additionalDelay = 0.1 * i;
	// 	const duration = 0.5;

	// 	return {
	// 		delay: baseDelay + additionalDelay + 's',
	// 		duration: duration + 's'
	// 	};
	// }
</script>

<div class="max-w-screen-xl mx-auto">
	<div class="grid-wrapper">
		<a href="/game-company/game-landing-page" class="{animateFadeDown} card card-large"
			>Gabriel's Amazing Game Website</a
		>
		<a href="#" class="{animateFadeLeft} card c-1">Wishlist on Steam</a>
		<a href="#" class="{animateFadeRight} card c-2">Kickstarter</a>
		<a href="#" class="{animateFadeLeft} card c-3">Discord</a>
		<a href="#" class="{animateFadeRight} card c-4">Twitter</a>
		<a href="#" class="{animateFadeLeft} card c-5">TikTok</a>
		<a href="#" class="{animateFadeRight} card c-6">Instagram</a>
		<a href="#" class="{animateFadeLeft} card c-7">Youtube</a>
		<a href="#" class="{animateFadeRight} card c-8">Itchio</a>
		<a href="#" class="{animateFadeLeft} card c-9">Reddit</a>
		<a href="#" class="{animateFadeRight} card c-10">Twitch</a>
		<a href="#" class="{animateFadeLeft} card c-11">Press Kit</a>
		<a href="#" class="{animateFadeRight} card c-12">Ko-fi</a>
		<a href="#" class="{animateFadeLeft} card c-13">Linkedin</a>
	</div>
</div>

<style lang="scss">
	$background: #ffffff;

	.grid-wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
		gap: 1rem;
		justify-content: center;
		padding: 1rem;
	}

	.card {
		transition: transform 0.1s, box-shadow 0.1s;
		text-align: center;
		padding: 1.5rem; /* Increased padding */
		background-color: #ffffff;
		border: 1px solid #ccc;
		border-radius: 8px;
		font-size: 1.2rem; /* Increased font size */
	}

	.card:hover {
		transform: translate(0.5rem, 0.5rem);
		box-shadow: 0rem 0rem 0 -0.25rem darken(#ffffff, 40), 0rem 0rem 0 black,
			0 0 0 0.25rem inset black;
	}

	.card-large {
		grid-column: span 2; /* Span two columns for larger width */
		padding: 3.5rem;
		font-size: 2rem;
		animation-delay: 1.1s;
		animation-duration: 0.4s;
	}

	@for $i from 1 through 13 {
		.c-#{$i} {
			animation-delay: #{1.5s + 0.1s * $i};
			animation-duration: #{0.2s + 0.1s * $i};
		}
	}
</style>
