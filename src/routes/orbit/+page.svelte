<!-- <script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import { reveal, setDefaultOptions } from 'svelte-reveal';
	import '/src/app.postcss';

	import og_image from '$lib/assets/images/og_image_html.webp';
	import {
		// DEFAULT_OG_IMAGE,
		MY_TWITTER_HANDLE,
		OG_IMAGE_HEIGHT,
		OG_IMAGE_WIDTH,
		SITE_DESCRIPTION,
		SITE_TITLE,
		SITE_URL
	} from '$lib/siteConfig';

	import LanguageSelector from '$lib/components/LanguageSelector.svelte';
	import Header from '../Header.svelte';
	import Section1 from '../Section1.svelte';
	import Section3 from '../Section3.svelte';
	import Section4 from '../Section4.svelte';
	import Section5 from '../Section5.svelte';
	import Section6 from '../Section6.svelte';
	import Section7 from '../Section7.svelte';
	import Orbit from './Orbit.svelte';
	import Section2 from './Section2.svelte';
</script>

<svelte:head>
	<title>Freelance Developer - Gabriel Christo | Home</title>
	<link rel="canonical" href={SITE_URL} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content={og_image} />
	<meta property="og:image:width" content={OG_IMAGE_WIDTH} />
	<meta property="og:image:height" content={OG_IMAGE_HEIGHT} />
	<meta name="twitter:image" content={og_image} />
	<meta name="twitter:card" content="Gabriel Christo - Freelancer Developer" />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
</svelte:head>

<div>
	<LanguageSelector />
	<div class="s1">
		<Header />
	</div>
	<div class="s2">
		<Section1 />
		<Section2 />
	</div>
	<div class="s3">
		<Section7 />
		<Section3 />
		<Section5 />
	</div>
	<div class="s4">
		<Section4 />
		<Section6 />
	</div>

	<Footer />
</div>

<style>
	.s1 {
		background-image: linear-gradient(rgba(7, 0, 18, 0.2), rgb(0, 0, 0, 1)),
			url('$lib/assets/images/bg_website_magicpattern.svg');

		/* url('$lib/assets/images/bg_website.webp'); */
		background-size: cover;
		background-position: center;
		background-attachment: fixed;

		border-bottom-left-radius: 50% 50px;
		border-bottom-right-radius: 50% 50px;
	}
	/* .s2 {
		background: linear-gradient(to bottom, #09203f 0%, #537895 100%);

		border-bottom-left-radius: 50% 10px;
		border-bottom-right-radius: 50% 10px;
	} */
	.s3 {
		background: rgb(0, 117, 105);
		background: -moz-linear-gradient(0deg, rgba(0, 117, 105, 1) 0%, rgba(12, 26, 58, 1) 100%);
		background: -webkit-linear-gradient(0deg, rgba(0, 117, 105, 1) 0%, rgba(12, 26, 58, 1) 100%);
		background: linear-gradient(0deg, rgba(1, 52, 75, 1) 0%, rgba(18, 13, 40, 0.982) 7%);
		/* rgb(12,26,58) */
		background-size: contain;
		background-position: center;
		/* background-attachment: fixed; */

		border-top-left-radius: 50% 50px;
		border-top-right-radius: 50% 50px;

		/* border-bottom-left-radius: 50% 50px;
		border-bottom-right-radius: 50% 50px;	 */
	}

	.s4 {
		background: rgb(0, 117, 105);
		background: -moz-linear-gradient(0deg, rgba(0, 117, 105, 1) 0%, rgba(12, 26, 58, 1) 100%);
		background: -webkit-linear-gradient(0deg, rgba(0, 117, 105, 1) 0%, rgba(12, 26, 58, 1) 100%);
		background: linear-gradient(0deg, rgba(0, 117, 105, 1) 0%, rgb(14, 33, 77) 100%);
		/* rgb(12,26,58) */
		background-size: contain;
		background-position: center;
		/* background-attachment: fixed; */

		border-top-left-radius: 50% 50px;
		border-top-right-radius: 50% 50px;
	}
</style> -->
<!-- 
<script>
	const boxes = [];
	const button = document.getElementById('toggle-button');
	const boxContainer = document.getElementById('box-container');
	const animationType = document.getElementById('type');

	// create boxes
	for (let i = 0; i < 1000; i++) {
		const div = document.createElement('div');
		div.classList.add('css-animation');
		div.classList.add('box');
		boxContainer.appendChild(div);
		boxes.push(div.style);
	}

	let toggleStatus = true;
	let rafId;
	button.addEventListener('click', () => {
		if (toggleStatus) {
			animationType.textContent = ' requestAnimationFrame';
			for (const child of boxContainer.children) {
				child.classList.remove('css-animation');
			}
			rafId = window.requestAnimationFrame(animate);
		} else {
			window.cancelAnimationFrame(rafId);
			animationType.textContent = ' CSS animation';
			for (const child of boxContainer.children) {
				child.classList.add('css-animation');
			}
		}
		toggleStatus = !toggleStatus;
	});

	const duration = 6000;
	const translateX = 500;
	const rotate = 360;
	const scale = 1.4 - 0.6;
	let start;
	function animate(time) {
		if (!start) {
			start = time;
			rafId = window.requestAnimationFrame(animate);
			return;
		}

		const progress = (time - start) / duration;
		if (progress < 2) {
			let x = progress * translateX;
			let transform;
			if (progress >= 1) {
				x = (2 - progress) * translateX;
				transform = `translateX(${x}px) rotate(${(2 - progress) * rotate}deg) scale(${
					0.6 + (2 - progress) * scale
				})`;
			} else {
				transform = `translateX(${x}px) rotate(${progress * rotate}deg) scale(${
					0.6 + progress * scale
				})`;
			}

			for (const box of boxes) {
				box.transform = transform;
			}
		} else {
			start = null;
		}
		rafId = window.requestAnimationFrame(animate);
	}
</script>

<h1>hi</h1> -->

<h1>Test</h1>
