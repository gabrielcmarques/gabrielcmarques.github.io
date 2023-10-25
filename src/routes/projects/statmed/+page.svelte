<script lang="ts">
	import { statmed_webm } from '$lib';
</script>

<svelte:head>
	<title>Statmed - Portfolio Gabriel C Marques</title>
</svelte:head>

<div class="flex flex-col items-center space-y-5">
    <div class="max-w-screen-2xl">
        <div class="video-container">
            <!-- svelte-ignore a11y-media-has-caption -->
            <video controls playsinline style="width: 100%; height: 100%;">
                <source src={statmed_webm} type="video/webm" />
            </video>
        </div>
    </div>
</div>

<style>

	.video-container {
		position: relative;
		padding-bottom: 56.25%; /* 16:9 aspect ratio (9 / 16 * 100%) */
		overflow: hidden;
	}
	
	.video-container video {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	
	</style>