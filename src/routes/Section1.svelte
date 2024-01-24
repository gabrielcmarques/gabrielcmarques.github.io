<section class="parent max-w-screen-xl text-center">
	<div class="card div1 opacity-95 hover:opacity-90 text-lg md:text-4xl h-96">
	  <p class="p-4">Desenvolvimento de websites</p>
	</div>
	<div class="card div2 opacity-95 hover:opacity-90 text-lg md:text-4xl h-96">
	  <p class="p-4">Automação de processos</p>
	</div>
	<div class="card div3 opacity-95 hover:opacity-90 text-lg md:text-4xl h-[500px]">
	  <p class="p-4">Implementação e integração</p>
	</div>
  </section>
  
  <style>
	.parent {
	  display: grid;
	  grid-template-columns: repeat(1, 1fr) repeat(1, 1fr);
	  grid-template-rows: repeat(1, 1fr);
	  grid-column-gap: 5px;
	  grid-row-gap: 5px;
	  margin: auto; /* Center the section horizontally */
	  
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
  