<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import copy from 'clipboard-copy';
	import { reveal } from 'svelte-reveal';

	const phoneNumber = '+55 (41) 99827-2752';

	const copyToClipboard = async () => {
		try {
			await copy(phoneNumber);
			alert('Number copied to the clipboard!\n Whatsapp +55 (41) 99827-2752');
		} catch (error) {
			console.error('Erro ao copiar número: \n', error);
		}
	};
</script>

<section class="contact-section">
	<div class="max-w-screen-xl max-sm:w-[362px] text-center mx-auto py-4 ">
		<h2
			class="max-w-screen-xl text-5xl text-gray-300 max-md:text-center mx-auto p-3 text-center mt-16 mb-5 "
			id="contato"
		>
			{m.section7_title_contact()}
		</h2>
		<div class="md:grid contact parent text-gray-200">
			<a
				class="card-contact c-1 opacity-95 text-lg md:text-2xl rounded-full w-80 h-40 max-md:h-32 mx-auto m-5 border border-gray-400 hover:border-white hover:text-white hover:text-sm"
				href="https://www.fiverr.com/gabriel_christo/build-high-performant-websites"
				target="_blank"
			>
				<p class="p-4 text-2xl ">{m.section7_fiverr()}</p>
			</a>
			<a
				href="https://www.upwork.com/freelancers/~01b87c5ba2f0dd1342"
				target="_blank"
				class="card-contact c-2 opacity-95 text-lg md:text-2xl rounded-full w-80 h-40 max-md:h-32 mx-auto m-5 border border-gray-400 hover:border-white hover:text-white hover:text-sm"
			>
				<p class="p-4 text-2xl ">{m.section7_upwork()}</p>
			</a>
			<a
				href="https://www.99freelas.com.br/user/gabriel-de-christo-marques"
				target="_blank"
				class="card-contact c-3 opacity-95 text-lg md:text-2xl rounded-full w-80 h-40 max-md:h-32 mx-auto m-5 border border-gray-400 hover:border-white hover:text-white hover:text-sm"
			>
				<p class="p-4 text-2xl ">{m.section7_99()}</p>
			</a>
			<!-- <div
				use:reveal={{ transition: 'fly', y: -100, delay: 300, duration: 350 }}
				class="card-contact c-3 opacity-95 text-lg md:text-2xl rounded-full w-80 h-40 max-md:h-32 mx-auto m-5 border border-gray-400"
			>
				<a
					href="https://wa.me/5541998272752/?text=Hello,%20I%20am%20interested%20in%20your%20software%20developer%20service"
					target="_blank"
					class="hover:text-blue-200 text-2xl ">Whatsapp</a
				>
				<button class="hover:text-blue-200 text-xl" on:click={copyToClipboard}
					>+55 (41) 99827-2752</button
				>
			</div> -->
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
		background-image: linear-gradient(to bottom, #ff7b0094, #00ff809f);
	}

	.c-3 {
		background-image: linear-gradient(to bottom, #336699, #003366);
	}

	.c-2 {
		background-image: linear-gradient(to bottom, #009966, #006633);
	}
</style>
