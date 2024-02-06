<!-- <script lang="ts">
	import Card from './Card.svelte';

	const animateFadeDown = 'animate__animated animate__fadeInDown';

	let cards = [
		{ index: 1, title: 'Wishlist on Steam', link: '#' },
		{ index: 2, title: 'Kickstarter', link: '#' },
		{ index: 3, title: 'Discord', link: '#' },
		{ index: 4, title: 'Twitter', link: '#' },
		{ index: 5, title: 'TikTok', link: '#' },
		{ index: 6, title: 'Instagram', link: '#' },
		{ index: 7, title: 'Youtube', link: '#' },
		{ index: 8, title: 'Itchio', link: '#' },
		{ index: 9, title: 'Reddit', link: '#' },
		{ index: 10, title: 'Twitch', link: '#' },
		{ index: 11, title: 'Press Kit', link: '#' },
		{ index: 12, title: 'Ko-fi', link: '#' },
		{ index: 13, title: 'Linkedin', link: '#' }
	];
</script>

<div class="max-w-screen-xl mx-auto">
	<div class="grid-wrapper">
		<a href="/game-company/game-landing-page" class="{animateFadeDown} card card-large">
			Gabriel's Amazing Game Website
		</a>

		{#each cards as card (card.index)}
			<Card {index} {title} {link} />
		{/each}
	</div>
</div>

<style>
	@keyframes animateFadeDown {
		from {
			opacity: 0;
			transform: translateY(-20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.card {
		animation-fill-mode: both;
		opacity: 0;
		transform: translateY(-20px);
	}
</style> -->
