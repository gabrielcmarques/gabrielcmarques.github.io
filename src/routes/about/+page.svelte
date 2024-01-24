<section class="parent">
	<div class="card div1 opacity-95 hover:opacity-90 text-lg md:text-5xl h-96">
		<p>Desenvolvimento de websites</p>
	</div>
	<div class="card div2 opacity-95 hover:opacity-90 text-lg md:text-5xl h-96">
		<p>Automação de processos</p>
	</div>
	<div class="card div3 opacity-95 hover:opacity-90 text-lg md:text-5xl h-96">
		<p>Implementação e integração</p>
	</div>
</section>

<style>
	.parent {
		display: grid;
		grid-template-columns: repeat(2, 3fr) repeat(3, 1fr);
		grid-template-rows: repeat(2, 3fr);
		grid-column-gap: 5px;
		grid-row-gap: 5px;
	}

	.div1 {
		grid-area: 1 / 1 / 2 / 2;
	}
	.div2 {
		grid-area: 1 / 2 / 2 / 3;
	}
	.div3 {
		grid-area: 2 / 1 / 3 / 3;
	}
</style>
