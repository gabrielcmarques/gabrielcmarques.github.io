<h1>Entre em contato</h1>

<section class="contact parent max-w-screen-xl text-center md:grid ">
	<a
		class="card card1 opacity-95 hover:opacity-90 text-lg md:text-4xl z-10 rounded-lg w-64 h-52 max-md:h-40 mx-auto"
		href="https://github.com/gabrielcmarques"
		target="_blank"
		alt="Web Dev Photo"
	>
		<p class="p-4">Github</p>
	</a>
	<a
		href="https://twitter.com/gabrielchristom"
		target="_blank"
		alt="Automation Photo"
		class="card card1 opacity-95 hover:opacity-90 text-lg md:text-4xl rounded-lg w-64 h-52 max-md:h-40 mx-auto"
	>
		<p class="p-4">Twitter</p>
	</a>
	<a
		href="https://wa.me/5541998272752/?text=Hello,%20I%20am%20interested%20in%20your%20software%20developer%20service"
		target="_blank"
		alt="Deployment Photo"
		class="card card1 opacity-95 hover:opacity-90 text-lg md:text-4xl rounded-lg w-64 h-52 max-md:h-40 mx-auto"
	>
		<p class="p-4">Whatsapp</p>
		<p>[+55] (41) 99827-2752</p>
	</a>
</section>

<!-- class="absolute inset-0 w-full h-full object-cover z-0 rounded-lg" -->

<style lang="scss">
	.parent {
		grid-template-columns: repeat(
			auto-fit,
			minmax(200px, 1fr)
		); /* Cards wrap to next line if space is not enough */
		grid-auto-rows: 1fr; /* Automatically adjust row height */
		grid-gap: 1px; /* Spacing between cards */
	}

	.card1 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	* {
		border: solid red;
	}
</style>
