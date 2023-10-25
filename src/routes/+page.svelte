<script lang="ts">
	import ImageGrid from './ImageGrid.svelte';	

	const stack: any[] = Object.values(
		import.meta.glob('$lib/assets/images/stack/*.svg', {
			import: 'default',
			eager: true
		})
	);

	import {
		// DEFAULT_OG_IMAGE,
		MY_TWITTER_HANDLE,
		SITE_DESCRIPTION,
		SITE_TITLE,
		SITE_URL
	} from '$lib/siteConfig';
</script>

<svelte:head>
	<title>Home - Portfolio Gabriel C Marques</title>
	<link rel="canonical" href={SITE_URL} />
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={SITE_DESCRIPTION} />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<!-- <meta property="og:image" content={DEFAULT_OG_IMAGE} /> -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={SITE_DESCRIPTION} />
	<!-- <meta name="twitter:image" content={DEFAULT_OG_IMAGE} /> -->
</svelte:head>

<!-- <div class="img-thumb">
      <img src="https://i.imgur.com/gOriNAM.png" loading="lazy" style="display: none;" />
    </div> -->

<div class="flex items-center justify-center min-h-screen">
	<div class="max-w-screen-lg text-center mb-32 space-y-15">
		<h1 class="text-4xl md:text-5xl">Gabriel Christo Marques</h1>
		<h2 class="text-2xl md:text-3xl">Desenvolvedor Web Fullstack</h2>
		<div class="mt-10">
			<a href="/about" class="btn-xl variant-filled-primary hover:variant-ringed hover:text-white"
				>Entre em contato!</a
			>
		</div>
		<div class="mt-16 gap-5 rounded-3xl">
			<div>
				<a href="/skills" class="hover:variant-form-material cursor-pointer">
					<div id="one-panel">
						<ImageGrid images={stack} />
					</div>
				</a>
			</div>
		</div>
	</div>
</div>
