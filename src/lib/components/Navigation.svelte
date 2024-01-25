<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();
	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="flex justify-center list-nav p-4 md:hidden">
	<ul>
		<span class="close-icon">
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a href="#" on:click={drawerClose}>X</a>
		</span>
		<li
			class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active"
		>
			<a href="/" on:click={drawerStore.close}>Home</a>
		</li>
		<li
			class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active"
		>
			<a href="/about" on:click={drawerStore.close}>Sobre</a>
		</li>

		<li
			class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active"
		>
			<a href="/skills" on:click={drawerStore.close}>Conhecimentos</a>
		</li>
		<li
			class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active"
		>
			<a href="/projects" on:click={drawerStore.close}>Projetos</a>
		</li>
		<li
			class="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active"
		>
			<a href="/experience" on:click={drawerStore.close}>Experiência</a>
		</li>
	</ul>
</nav>

<style>
	.close-icon {
		position: fixed;
		top: 10px; /* Adjust as needed to position vertically */
		left: 50px; /* Adjust as needed to position horizontally */
		font-size: 2rem; /* Adjust the font size as needed */
		cursor: pointer;
	}
</style>
