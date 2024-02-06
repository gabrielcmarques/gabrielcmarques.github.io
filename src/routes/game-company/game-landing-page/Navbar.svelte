<script>
	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}

	const navbarLinks = '/game-company/game-landing-page';
	const navbarClasses =
		'text-white hover:text-slate-300 text-xl transition-transform transform hover:-translate-y-1';
</script>

<div>
	<div>
		<nav
			class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center animate__animated animate__fadeInDown blurred-glass absolute z-50 max-w-full"
		>
			<!-- animate__delay-2s -->
			<div class="flex items-center justify-between">
				<a
					class="text-xl font-bold text-white md:text-2xl hover:text-slate-300 transition-transform transform hover:-translate-y-1"
					href="/game-company/game-landing-page"
					>Logo
				</a>
				<!-- Mobile menu button -->
				<div class="hamb flex md:hidden">
					<button
						on:click={toggleNavbar}
						type="button"
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
				<hr />
				<a href={navbarLinks} class={navbarClasses}>Home</a>
				<hr />
				<a class={navbarClasses} href={navbarLinks}>Dev Blog</a>
				<hr />
				<a class={navbarClasses} href={navbarLinks}>Gallery</a>
				<hr />
				<a class={navbarClasses} href={navbarLinks}>Press Kit</a>
				<hr />
				<a class={navbarClasses} href={navbarLinks}>Contact</a>
				<hr />
				<a class={navbarClasses} href={navbarLinks}>About Us</a>
				<hr />
				<a class={navbarClasses} href={navbarLinks}>Team</a>

				<hr />
				<a class={navbarClasses} href={navbarLinks}>Work</a>
			</div>
		</nav>
	</div>
</div>

<style>
	a {
		text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
	}

	hr {
		opacity: 0.3;
	}
</style>
