<script lang="ts">
	import copy from 'clipboard-copy';
	import { reveal } from 'svelte-reveal';

	const phoneNumber = '+55 (41) 99827-2752';

	const copyToClipboard = async () => {
		try {
			await copy(phoneNumber);
			alert('Número copiado para a área de transferência!\n Whatsapp +55 (41) 99827-2752');
		} catch (error) {
			alert('ERROR');
			console.error('Erro ao copiar número: \n', error);
		}
	};
</script>

<section class="contact-section">
	<div class="max-w-screen-xl max-sm:w-[362px] text-center mx-auto py-4 font-normal">
		<h1
			class="max-w-screen-xl text-5xl text-gray-300 max-md:text-center mx-auto p-3 text-center mt-16 mb-5 font-medium"
			id="contato"
		>
			Entre em contato
		</h1>
		<div class="md:grid contact parent">
			<a
				use:reveal={{ transition: 'fly', y: -100, delay: 100, duration: 350 }}
				class="card-contact c-1 opacity-95 text-lg md:text-2xl rounded-full w-80 h-40 max-md:h-32 mx-auto m-5 border border-gray-400"
				href="https://github.com/gabrielcmarques"
				target="_blank"
			>
				<p class="p-4 text-2xl font-normal">Github</p>
			</a>
			<a
				use:reveal={{ transition: 'fly', y: -100, delay: 200, duration: 350 }}
				href="https://twitter.com/gabrielchristom"
				target="_blank"
				class="card-contact c-2 opacity-95 text-lg md:text-2xl rounded-full w-80 h-40 max-md:h-32 mx-auto m-5 border border-gray-400"
			>
				<p class="p-4 text-2xl font-normal">Twitter</p>
			</a>
			<div
				use:reveal={{ transition: 'fly', y: -100, delay: 300, duration: 350 }}
				class="card-contact c-3 opacity-95 text-lg md:text-2xl rounded-full w-80 h-40 max-md:h-32 mx-auto m-5 border border-gray-400"
			>
				<a
					href="https://wa.me/5541998272752/?text=Hello,%20I%20am%20interested%20in%20your%20software%20developer%20service"
					target="_blank"
					class="hover:text-blue-200 text-2xl font-normal">Whatsapp</a
				>
				<button class="hover:text-blue-200 text-xl" on:click={copyToClipboard}
					>+55 (41) 99827-2752</button
				>
			</div>
		</div>
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

	.card-contact {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
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

	.c-1:hover,
	.c-2:hover,
	.c-3:hover {
		transform: translateY(-5px);
		box-shadow: 1px 1px 1px rgba(130, 130, 130, 0.5);
	}
</style>
