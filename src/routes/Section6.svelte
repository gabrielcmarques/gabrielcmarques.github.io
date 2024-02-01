<script lang="ts">
	import copy from 'clipboard-copy';

	const phoneNumber = '+55 (41) 99827-2752';

	const copyToClipboard = async () => {
		try {
			await copy(phoneNumber);
			alert('Phone number copied to clipboard!');
		} catch (error) {
			console.error('Error copying to clipboard:', error);
		}
	};
</script>

<h1
	class="max-w-screen-xl max-sm:text-xl max-md:text-2xl text-5xl text-gray-300 max-md:text-center mx-auto p-3 text-center mt-16 mb-5"
	id="contato"
>
	Entre em contato
</h1>
<section class="contact parent max-w-screen-xl text-center md:grid mx-auto p-4">
	<a
		class="card1 c-1 opacity-95 text-lg md:text-2xl rounded-full w-80 h-40 max-md:h-32 mx-auto m-5"
		href="https://github.com/gabrielcmarques"
		target="_blank"
	>
		<p class="p-4">Github</p>
	</a>
	<a
		href="https://twitter.com/gabrielchristom"
		target="_blank"
		class="card1 c-2 opacity-95 text-lg md:text-2xl rounded-full w-80 h-40 max-md:h-32 mx-auto m-5"
	>
		<p class="p-4">Twitter</p>
	</a>
	<div
		class="card1 c-3 opacity-95 text-lg md:text-2xl rounded-full w-80 h-40 max-md:h-32 mx-auto m-5"
	>
		<a
			href="https://wa.me/5541998272752/?text=Hello,%20I%20am%20interested%20in%20your%20software%20developer%20service"
			target="_blank"
			class="hover:text-blue-200">Whatsapp</a
		>
		<button class="hover:text-blue-200" on:click={copyToClipboard}>+55 (41) 99827-2752</button>
	</div>
</section>

<!-- class="absolute inset-0 w-full h-full object-cover z-0 rounded-lg" -->

<style lang="scss">
	.parent {
		grid-template-columns: repeat(
			auto-fit,
			minmax(320px, 1fr)
		); /* Cards wrap to next line if space is not enough */
		grid-auto-rows: 1fr; /* Automatically adjust row height */
		grid-gap: 1px; /* Spacing between cards */
	}

	.card1 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		// transition: transform .2s ease-in-out;
		transition: transform 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
	}

	.card1:hover {
		transform: translateY(-5px) scale(1.02); /* Adjust the value as per your preference 
		*/
		box-shadow: 1px 1px 3px rgba(255, 255, 255, 0.44); /* Brighter shadow on hover */
	}

	// * {
	// 	border: solid red;
	// }

	.c-1 {
		background-image: linear-gradient(to bottom, #786464, #332c2c);
	}

	.c-2 {
		background-image: linear-gradient(to bottom, #336699, #003366);
	}

	.c-3 {
		background-image: linear-gradient(to bottom, #009966, #006633);
	}
</style>
