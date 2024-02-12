<script lang="ts">
	import { onMount } from 'svelte';

	import gameHeader from '../components/game-images/game1.webp';
	const animateFadeDown = 'animate__animated animate__fadeInDown ';
	const animateFadeLeft = 'button--wayra animate__animated animate__fadeInLeft  ';
	const animateFadeRight = 'button--wayra animate__animated animate__fadeInRight  ';

	onMount(() => {
		// Function to remove "animate__animated" class after a delay
		setTimeout(() => {
			const elements = document.querySelectorAll('.animate__animated');
			elements.forEach((element) => {
				element.classList.remove('animate__animated');
			});
		}, 3000);
	});
</script>

<div class="max-w-screen-xl mx-auto md:px-1 lg:px-28">
	<div class="card-game lg:px-6 px-3 rounded-md">
		<a
			href="/game-company/game-landing-page"
			class="{animateFadeDown} shine-btn card card-large relative block overflow-hidden border border-gray-300 rounded text-center bg-white group transition-transform"
		>
			<p class="z-10 relative lg:w-modal-wide w-fit">Gabriel's Amazing Game Website</p>
			<img
				src={gameHeader}
				alt="Game Header Button"
				class="absolute top-0 left-0 w-full h-full object-cover transform scale-100 hover:scale-105 opacity-50 hover:opacity-60 transition-transform"
			/>
		</a>
	</div>
	<div class="grid-wrapper">
		<a href="#" alt="Wishlist on Steam Button" class=" {animateFadeLeft}  card c-1"
			>Wishlist on Steam <span class="icon-[bi--steam]" role="img" aria-hidden="true" /></a
		>
		<a href="#" alt="Kickstarter Button" class=" {animateFadeRight}  card c-2"
			>Kickstarter <span class="icon-[bxl--kickstarter]" role="img" aria-hidden="true" /></a
		>
		<a href="#" alt="Read More" class=" {animateFadeLeft}  card c-3"
			>Discord <span class="icon-[bi--discord]" role="img" aria-hidden="true" /></a
		>
		<a href="#" alt="Twitter Button" class=" {animateFadeRight}  card c-4"
			>Twitter <span class="icon-[bi--twitter]" role="img" aria-hidden="true" /></a
		>
		<a href="#" alt="TikTok Button" class=" {animateFadeLeft}  card c-5"
			>TikTok <span class="icon-[mingcute--tiktok-fill]" role="img" aria-hidden="true" /></a
		>
		<a href="#" alt="Instagram Button" class=" {animateFadeRight}  card c-6"
			>Instagram <span class="icon-[ri--instagram-fill]" role="img" aria-hidden="true" /></a
		>
		<a href="#" alt="Youtube Button" class=" {animateFadeLeft}  card c-7"
			>Youtube <span class="icon-[mdi--youtube]" role="img" aria-hidden="true" /></a
		>
		<a href="#" alt="Itchio Button" class=" {animateFadeRight}  card c-8"
			>Itchio <span class="icon-[simple-icons--itchdotio]" role="img" aria-hidden="true" /></a
		>
		<a href="#" alt="Reddit Button" class=" {animateFadeLeft}  card c-9"
			>Reddit <span class="icon-[ph--reddit-logo-fill]" role="img" aria-hidden="true" /></a
		>
		<a href="#" alt="Twitch Button" class=" {animateFadeRight}  card c-10"
			>Twitch <span class="icon-[fa6-brands--twitch]" role="img" aria-hidden="true" /></a
		>
		<a href="#" alt="Press Kit Button" class=" {animateFadeLeft}  card c-11"
			>Press Kit <span
				class="icon-[material-symbols--newspaper-rounded]"
				role="img"
				aria-hidden="true"
			/></a
		>
		<a href="#" alt="Ko-fi Button" class=" {animateFadeRight}  card c-12"
			>Ko-fi <span class="icon-[simple-icons--kofi]" role="img" aria-hidden="true" /></a
		>
		<a href="#" alt="Linkedin Button" class=" {animateFadeLeft}  card c-13"
			>Linkedin <span class="icon-[mdi--linkedin]" role="img" aria-hidden="true" /></a
		>
	</div>
</div>

<div class="box bg-3">
	<button
		class="button button--wayra button--border-medium button--text-upper button--size-s button--text-thick button--inverted"
		>Remove</button
	>
	<button
		class="button button--wayra button--border-medium button--text-upper button--size-s button--text-thick button--inverted"
		>Open Project</button
	>
	<button
		class="button button--wayra button--border-medium button--text-upper button--size-s button--text-thick button--inverted"
		>Buy Now</button
	>
</div>

<style lang="scss">
	:root {
		--animation-class: animate__animated;
	}

	// $background: #ffffff;

	a:hover {
		text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.1);
	}

	// Cards
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
		padding: 1.5rem;
		background-color: #ffffff;
		border: 1px solid #ccc;
		border-radius: 8px;
		font-size: 1.2rem;
	}

	.card:hover {
		transform: translate(0.2rem, 0.2rem);
		box-shadow: 0rem 0rem 0 -0.25rem darken(#ffffff, 40), 0rem 0rem 0 black,
			0 0 0 0.25rem inset rgb(9, 9, 9);
		z-index: 1;
	}

	.card-large {
		grid-column: span 2;
		padding: 3.5rem;
		font-size: 2rem;
		animation-delay: 1.1s;
		animation-duration: 0.4s;
	}
	// END CARDS

	// Media Queries
	@media (max-width: 1024px) {
		.grid-wrapper {
			grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		}

		.card-large {
			grid-column: span 1;
			padding: 2rem;
			font-size: 1.5rem;
		}
	}

	@media (max-width: 768px) {
		.grid-wrapper {
			grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		}

		.card {
			font-size: 1rem;
		}

		.card-large {
			grid-column: span 1;
			padding: 2rem;
			font-size: 1.5rem;
		}
	}

	@media (max-width: 640px) {
		.grid-wrapper {
			grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		}

		.card {
			padding: 1.3rem;
		}

		.card-large {
			padding: 2rem;
			font-size: 1.2rem;
		}
	}

	.shine-btn::after {
		content: '';
		z-index: -1;
		background-color: hsla(0, 0%, 100%, 0.2);
		position: absolute;
		top: -50%;
		bottom: -50%;
		width: 3em;
		transform: translate3d(-600%, 0, 0) rotate(35deg);
	}

	.shine-btn:hover::after {
		transition: transform 0.45s ease-in-out;
		transform: translate3d(600%, 0, 0) rotate(35deg);
	}

	// .bubble-btn {
	// 	position: relative;
	// 	color: white;
	// 	overflow: hidden;
	// 	transition: color 0.4s ease-in-out;
	// }

	// .bubble-btn::before {
	// 	content: '';
	// 	z-index: -1;
	// 	position: absolute;
	// 	top: 50%;
	// 	left: 50%;
	// 	width: 3em;
	// 	height: 3em;
	// 	border-radius: 50%;
	// 	background-color: #62f2ff;
	// 	transform-origin: center;
	// 	transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
	// 	transition: transform 0.7s ease-in-out;
	// }

	// .bubble-btn:hover {
	// 	cursor: pointer;
	// 	color: #202020;
	// }

	// .bubble-btn:hover::before {
	// 	transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
	// }

	// END Media Queries
	@for $i from 1 through 13 {
		.c-#{$i} {
			animation-delay: #{1.3s + 0.1s * $i};
			animation-duration: #{0.2s + 0.1s * $i};
		}
	}

	/* Wayra */
	.button--wayra {
		overflow: hidden;
		// width: 245px;
		-webkit-transition: border-color 0.3s, color 0.3s;
		transition: border-color 0.3s, color 0.3s;
		-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
		transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	}
	.button--wayra::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 150%;
		height: 100%;
		color: #37474f;
		z-index: -1;
		-webkit-transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
		transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
		-webkit-transform-origin: 0% 100%;
		transform-origin: 0% 100%;
		-webkit-transition: -webkit-transform 0.3s, opacity 0.3s, color 0.3s;
		transition: transform 0.3s, opacity 0.3s, color 0.3s;
	}
	.button--wayra:hover {
		color: #000000;
		border-color: #fff;
	}
	.button--wayra.button--inverted:hover {
		color: #3f51b5;
		border-color: #000000;
	}
	.button--wayra:hover::before {
		opacity: 1;
		background-color: #ffffff9f;
		-webkit-transform: rotate3d(0, 0, 1, 0deg);
		transform: rotate3d(0, 0, 1, 0deg);
		-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
		transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	}
	.button--wayra.button--inverted:hover::before {
		background-color: #fff;
	}

	/* Common button styles */
	// .button {
	// 	float: left;
	// 	min-width: 150px;
	// 	max-width: 250px;
	// 	display: block;
	// 	margin: 1em;
	// 	padding: 1em 2em;
	// 	border: none;
	// 	background: none;
	// 	color: inherit;
	// 	vertical-align: middle;
	// 	position: relative;
	// 	z-index: 1;
	// 	-webkit-backface-visibility: hidden;
	// 	-moz-osx-font-smoothing: grayscale;
	// }
	// .button:focus {
	// 	outline: none;
	// }
	// .button > span {
	// 	vertical-align: middle;
	// }
</style>
