<script lang="ts">
	import { linkedin_svg } from '$lib';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { onDestroy } from 'svelte';
	import { reveal } from 'svelte-reveal';

	const ring1: any[] = Object.values(
		import.meta.glob('$lib/assets/images/orbit/ring1/*.svg', {
			import: 'default',
			eager: true
		})
	);
	const ring2: any[] = Object.values(
		import.meta.glob('$lib/assets/images/orbit/ring2/*.svg', {
			import: 'default',
			eager: true
		})
	);
	const ring3: any[] = Object.values(
		import.meta.glob('$lib/assets/images/orbit/ring3/*.svg', {
			import: 'default',
			eager: true
		})
	);

	const containerClass = 'w-28 max-sm:w-20'; // Use the flex-grow class to make the containers grow to fill the available space
	const avatarClass =
		'w-full h-auto p-3 hover:border transition-transform transform hover:scale-110'; // Ensure the image doesn't stretch

	const imageStyle = `width: 100%; height: 100%; object-fit: contain; `;

	let rotationAngle = 0;

	const rotateImages = () => {
		console.log('HERE 1');
		rotationAngle += 1; // adjust the rotation speed as needed
		if (rotationAngle >= 360) {
			rotationAngle = 0;
		}
	};

	// Call the rotateImages function periodically
	const rotationInterval = setInterval(rotateImages, 5000); // adjust the interval as needed

	onDestroy(() => {
		console.log('HERE 2');
		clearInterval(rotationInterval); // Clear the interval when the component is destroyed
	});
</script>

<h1
	use:reveal={{ transition: 'fly' }}
	class="max-sm:text-3xl max-lg:text-5xl lg:text-6xl text-center font-normal"
>
	Using modern <br />technologies and tools
</h1>
<div class="orbit">
	<ul class="orbit-wrap">
		<li class="orbit-center z-10">
			<i class="orbit-center__icon fa fa-code" />
		</li>

		<!-- Iterate over the imported SVGs and create corresponding HTML elements -->

		<li>
			<ul class="ring-1" style="will-change: transform, opacity;">
				{#each Object.entries(ring3) as [key, image]}
					<li class={containerClass}>
						<i class="orbit-icon fa"
							><Avatar src={image} title={key} alt={key} class={avatarClass} style={imageStyle} /><i
							/></i
						>
					</li>
				{/each}
			</ul>
		</li>
		<li>
			<ul class="ring-2" style="will-change: transform, opacity;">
				{#each Object.entries(ring2) as [key, image]}
					<li class={containerClass}>
						<i class="orbit-icon fa"
							><Avatar
								src={image}
								title={key}
								alt={key}
								class=" {avatarClass}"
								style={imageStyle}
							/></i
						>
					</li>
				{/each}
			</ul>
		</li>
		<li>
			<ul class="ring-3" style="will-change: transform, opacity;">
				{#each Object.entries(ring1) as [key, image]}
					<li class="{containerClass}}">
						<i class="orbit-icon fa"
							><Avatar
								src={image}
								title={key}
								alt={key}
								class=" {avatarClass}"
								style={imageStyle}
							/></i
						>
					</li>
				{/each}
			</ul>
		</li>
	</ul>
</div>

<style lang="scss">
	@use 'sass:math';

	$orbitItemSize: 1.5em;
	$map: (
		ring-0: 0,
		ring-1: 5,
		ring-2: 5,
		ring-3: 5
	);
	$lastRing: 3;

	* {
		box-sizing: border-box;
	}

	// html {
	// 	font-size: 100%;
	// }

	.orbit {
		background: darken(#1a237e, 20%);
		float: left;
	}

	.orbit-icon {
		width: $orbitItemSize;
		height: $orbitItemSize;
		line-height: $orbitItemSize;
		font-size: 1.2em;
		border-radius: 50%;
		background: #ccc;
		color: #fff;
		text-align: center;
		display: block;
	}

	.orbit-wrap {
		// position: relative;
		height: 5em;
		list-style: none;
		font-size: 5em;

		@media only screen and (max-width: 640px) {
			/* Styles for phones */
			font-size: 2.5em;
		}

		@media only screen and (min-width: 641px) and (max-width: 968px) {
			/* Styles for tablets */
			font-size: 3.5em;
		}

		> li {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);

			&:hover {
				ul {
					border-width: 2px;
					border-color: #fff;
				}
				~ li ul {
					border-color: rgba(255, 255, 255, 0.2);
					li {
						opacity: 0.4;
					}
				}
			}
		}
	}

	ul[class^='ring'] {
		@extend %ring;
		transition: all 300ms ease-in-out;
		li {
			@extend %orbiting-object;
			transition: all 300ms ease-in-out;
		}
	}

	@mixin orbit-item($numItems, $numRing) {
		@for $s from 1 through $numItems {
			// Spread items over the ring
			// $deg: 380deg / $numItems;
			$deg: math.div(380deg, $numItems);

			.ring-#{$numRing} > *:nth-of-type(#{$s}) {
				transform: rotate($s * $deg) translate(12.5em - ($numRing * 2.5)) rotate(-$s * $deg);
			}
		}
	}

	// Render rings
	@for $i from 0 through $lastRing {
		.ring-#{$i} {
			// decrease each ring in size
			width: 25em - ($i * 5);
			height: 25em - ($i * 5);
			animation: clockwiseRotate 60s - ($i * 5) linear infinite;

			i {
				animation: counterClockwiseRotate 60s - ($i * 5) linear infinite;
			}
		}

		@include orbit-item(map-get($map, ring-#{$i}), $i);
	}

	%ring {
		border: dashed 1.5px rgba(33, 150, 243, 0.8);
		position: relative;
		padding: 0;
		border-radius: 50%;
		list-style: none;
		box-sizing: content-box;
	}

	%orbiting-object {
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		width: $orbitItemSize;
		height: $orbitItemSize;
		// margin: -$orbitItemSize / 2;
		margin: math.div(-$orbitItemSize, 2);
		transition: transform 300ms ease-in-out, opacity 300ms ease-in-out; // Only animate transform and opacity
	}

	/*
  center;
*/
	// .orbit-center {
	// z-index: 1;
	// font-size: 2em;
	// width: 1.8em;
	// height: 1.8em;
	// line-height: 1.8em;
	// text-align: center;
	// background: hotpink;
	// border-radius: 50%;

	// &:hover .orbit-center__icon {
	// 	transform: rotateZ(0deg);
	// }
	// }
	// .orbit-center__icon {
	// 	transform: rotateZ(-360deg);
	// 	transition: all 300ms ease-in-out;
	// }
	// .orbit-wrap > li.orbit-center:hover ~ li > ul {
	// 	width: 0;
	// 	height: 0;
	// 	* {
	// 		transform: translate(0, 0);
	// 	}
	// }

	/* 
animations 
*/
	$rotationAngle: 360; // Define the rotation angle variable

	@keyframes clockwiseRotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(#{$rotationAngle}deg);
		}
	}

	@keyframes counterClockwiseRotate {
		0% {
			transform: rotate(#{$rotationAngle}deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
	/* 
icons 
*/
	$icons: (
		('linkedin_svg', #b71c1c, white),
		('coffee', #4caf50, #cddc39),
		('safari', white, darkslateblue),
		('firefox', #1565c0, #ff8f00),
		('chrome', #fbc02d, #ef6c00),
		('edge', #03a9f4, white),
		('android', snow, limegreen),
		('apple', #444, white),
		('linux', white, #222),
		('windows', white, #03a9f4),
		('terminal', #222, #fff),
		('html5', white, #e65100),
		('css3', white, #2196f3),
		('git', #222, white),
		('free-code-camp', green, white),
		('meetup', red, white),
		('podcast', red, white),
		('codepen', #333, white)
	);

	@each $icon in $icons {
		.fa-#{nth($icon, 1)} {
			background: nth($icon, 2);
			color: nth($icon, 3);
		}
	}
</style>
