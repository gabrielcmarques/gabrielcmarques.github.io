<div class="animate__animated animate__fadeIn animate__delay-1s absolute top-0 right-0 mr-4 mt-4">
	<!-- Botão para a homepage ("/") com emoji dos Estados Unidos 🇺🇸 -->
	<a href="/" class="text-xl mr-4">
		<button class="br-translation bg-blue-500 text-white px-4 py-2 rounded"> 🇺🇸 </button>
	</a>

	<!-- Botão para a página em português ("/br") com emoji do Brasil 🇧🇷 -->
	<a href="/br" class="text-xl">
		<button class="us-translation bg-green-500 text-white px-4 py-2 rounded"> 🇧🇷 </button>
	</a>
</div>

<style>
	.br-translation,
	.us-translation {
	  transition: transform 0.2s ease-in-out;
	}
  
	.br-translation:hover,
	.us-translation:hover {
	  transform: translateY(-5px); /* Adjust the value to control the jump height */
	}
  </style>