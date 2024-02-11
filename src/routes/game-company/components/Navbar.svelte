<script>
	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<div>
	<div>
		<nav
			class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center animate__animated animate__fadeInDown"
		>
			<!-- animate__delay-2s -->
			<div class="flex items-center justify-between">
				<a
					class="text-xl font-bold text-white md:text-2xl hover:text-slate-300 transition-transform transform hover:translate-x-1 hover:translate-y-1"
					href="/game-company"
					>Logo
				</a>
				<!-- Mobile menu button -->
				<div class="hamb flex md:hidden">
					<button
						on:click={toggleNavbar}
						type="button"
						aria-label="Toggle Navigation"
						class="text-white hover:text-slate-300 focus:outline-none focus:text-slate-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				</div>
			</div>

			<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
			<div
				class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 text-center md:mt-0 {showMenu
					? 'flex'
					: 'hidden'}"
			>
				<hr class="opacity-30" />
				<a
					class="text-white hover:text-slate-300 text-xl transition-transform transform hover:translate-x-1 hover:translate-y-1"
					href="/game-company">Home</a
				>
				<hr class="opacity-30" />
				<a
					class="text-white hover:text-slate-300 text-xl transition-transform transform hover:translate-x-1 hover:translate-y-1"
					href="/game-company">Blog</a
				>
				<hr class="opacity-30" />
				<a
					class="text-white hover:text-slate-300 text-xl transition-transform transform hover:translate-x-1 hover:translate-y-1"
					href="/game-company">Contact</a
				>
				<hr class="opacity-30" />
				<a
					class="text-white hover:text-slate-300 text-xl transition-transform transform hover:translate-x-1 hover:translate-y-1"
					href="/game-company">About</a
				>
			</div>
		</nav>
	</div>
</div>
