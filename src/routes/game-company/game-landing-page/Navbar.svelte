<script>
	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}

	const hrClass = 'max-sm:block';
	const navbarLinks = '/game-company/game-landing-page';
	const navbarClasses =
		'text-white py-2 hover:text-slate-300 text-xl hover:underline transition-transform transform hover:-translate-y-1';
</script>
<!-- max-sm:h-[60vh] -->
<div>
	<div>
		<nav
			class="container max-md:py-3 px-6 py-8 mx-auto md:flex md:justify-between md:items-center blurred-glass absolute z-50 max-w-full animate__delay-2s animate__animated animate__fadeInDown"
		>
			<div class="flex items-center justify-between">
				<a
					class="logoHeader sm:text-lg text-xl font-bold text-white md:text-2xl hover:text-slate-300 transition-transform transform hover:-translate-y-1"
					href="/game-company/game-landing-page"
					>[Logo]
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
							class="w-12 h-12"
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

			
			<div
				class="flex-col whitespace-nowrap mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 text-center md:mt-0 {showMenu
					? 'flex'
					: 'hidden'}"
			>
				<a href={navbarLinks} class={navbarClasses}>Home</a>
				<a class={navbarClasses} href={navbarLinks}>Dev Blog</a>
				<a class={navbarClasses} href={navbarLinks}>Gallery</a>
				<a class={navbarClasses} href={navbarLinks}>Press Kit</a>
				<a class={navbarClasses} href={navbarLinks}>Contact</a>
				<a class={navbarClasses} href={navbarLinks}>About Us</a>
				<a class={navbarClasses} href={navbarLinks}>Team</a>
			</div>
		</nav>
	</div>
</div>

<style>
	a,
	.logoHeader {
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
	}
</style>
