<script lang="ts">
	import { linkedin_svg } from '$lib';
    const gallery = Object.values(
		import.meta.glob('$lib/assets/images/tools/*.svg', {
			import: 'default',
			eager: true
		})
	); 

    console.log(gallery);


</script>

<div class="orbit">
	<ul class="orbit-wrap">
		<li class="orbit-center">
			<i class="orbit-center__icon fa fa-code" />
		</li>

		<li>
			<ul class="ring-0">
				<li><i class="orbit-icon fa fa-git" /></li>
				<li><i class="orbit-icon fa fa-free-code-camp" /></li>
				<li><i class="orbit-icon fa fa-meetup" /></li>
				<li><i class="orbit-icon fa fa-codepen" /></li>
			</ul>
		</li>

		<li>
			<ul class="ring-1">
				<li><i class="orbit-icon fa fa-podcast" /></li>
				<li><i class="orbit-icon fa fa-css3" /></li>
				<li><i class="orbit-icon fa fa-html5" /></li>
			</ul>
		</li>
		<li>
			<ul class="ring-2">
				<li><i class="orbit-icon fa fa-windows" /></li>
				<li><i class="orbit-icon fa fa-safari" /></li>
				<li><i class="orbit-icon fa fa-edge" /></li>
				<li><i class="orbit-icon fa fa-linux" /></li>
				<li><i class="orbit-icon fa fa-apple" /></li>
				<li><i class="orbit-icon fa fa-chrome" /></li>
				<li><i class="orbit-icon fa fa-android" /></li>
				<li><i class="orbit-icon fa fa-firefox" /></li>
			</ul>
		</li>
		<li>
			<ul class="ring-3">
				<li><i class="orbit-icon fa fa-coffee" /></li>
				<li><i class="orbit-icon fa fa-terminal" /></li>
				<li><i class="orbit-icon linkedin_svg" /><img src="{linkedin_svg}" alt=""></li>
                
			</ul>
		</li>
	</ul>
</div>

<style lang="scss">
	$orbitItemSize: 1.6em;
	$map: (
		ring-0: 4,
		ring-1: 3,
		ring-2: 8,
		ring-3: 3
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
		width: 100%;
		min-width: 100vw;
		min-height: 100vh;
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
		height: 40em;
		list-style: none;
		font-size: 3em;

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
			$deg: 380deg / $numItems;

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
			animation: clockwiseRotate 35s - ($i * 5) linear infinite;

			i {
				animation: counterClockwiseRotate 35s - ($i * 5) linear infinite;
			}
		}

		@include orbit-item(map-get($map, ring-#{$i}), $i);
	}

	%ring {
		border: solid 1px rgba(33, 150, 243, 0.8);
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
		margin: -$orbitItemSize / 2;
	}

	/*
  center;
*/
	.orbit-center {
		z-index: 5;
		font-size: 2em;
		width: 1.8em;
		height: 1.8em;
		line-height: 1.8em;
		text-align: center;
		background: hotpink;
		border-radius: 50%;

		&:hover .orbit-center__icon {
			transform: rotateZ(0deg);
		}
	}
	.orbit-center__icon {
		transform: rotateZ(-360deg);
		transition: all 300ms ease-in-out;
	}
	.orbit-wrap > li.orbit-center:hover ~ li > ul {
		width: 0;
		height: 0;
		* {
			transform: translate(0, 0);
		}
	}

	/* 
animations 
*/
	@keyframes clockwiseRotate {
		from {
			transform: rotate(360deg);
		}
		to {
			transform: rotate(0deg);
		}
	}

	@keyframes counterClockwiseRotate {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(-360deg);
		}
	}

	/* 
icons 
*/
	// $icons: (
	// 	('linkedin_svg', #b71c1c, white),
	// 	('coffee', #4caf50, #cddc39),
	// 	('safari', white, darkslateblue),
	// 	('firefox', #1565c0, #ff8f00),
	// 	('chrome', #fbc02d, #ef6c00),
	// 	('edge', #03a9f4, white),
	// 	('android', snow, limegreen),
	// 	('apple', #444, white),
	// 	('linux', white, #222),
	// 	('windows', white, #03a9f4),
	// 	('terminal', #222, #fff),
	// 	('html5', white, #e65100),
	// 	('css3', white, #2196f3),
	// 	('git', #222, white),
	// 	('free-code-camp', green, white),
	// 	('meetup', red, white),
	// 	('podcast', red, white),
	// 	('codepen', #333, white)
	// );

	// @each $icon in $icons {
	// 	.fa-#{nth($icon, 1)} {
	// 		background: nth($icon, 2);
	// 		color: nth($icon, 3);
	// 	}
	// }

	
	
</style>
