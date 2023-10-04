<script type="ts">
	import {
		django_logo_webp,
		docker_logo_webp,
		github_logo_jpeg,
		mongodb_logo_webp,
		mysql_logo_webp,
		nodejs_logo_webp,
		pandas_logo_webp,
		prisma_logo_webp,
		python_logo_webp,
		reactjs_logo_webp,
		sveltekit_logo_webp,
		tailwind_logo_webp,
		typescript_logo_webp,
		vscode_logo_webp,
		vuejs_logo_webp,
		wsl_logo_webp
	} from '$lib';
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<!-- <div class="img-thumb">
      <img src="https://i.imgur.com/gOriNAM.png" loading="lazy" style="display: none;" />
    </div> -->

<div class="flex flex-col items-center space-y-6 mt-40">
	<h1 class="h1">Gabriel de Christo Marques</h1>
	<h2 class="h3">Desenvolvedor Web Fullstack.</h2>
	<a href="/about" class="btn-xl variant-filled-primary hover:variant-ringed hover:text-white"
		>Entre em contato!</a
	>

	<div class="gap-5 rounded-3xl hover:variant-ringed-primary cursor-pointer">
		<a href="/skills">
			<div id="one-panel">
				<div class="flex flex-wrap gap-3">
					<Avatar
						src={typescript_logo_webp}
						title="Typescript"
						alt="Typescript"
						class="w-18 md:w-24"
						rounded="rounded-3xl"
					/>
					<Avatar
						src={sveltekit_logo_webp}
						title="SvelteKit"
						alt="SvelteKit"
						class="w-18 md:w-24"
						rounded="rounded-3xl"
					/>
					<Avatar
						src={tailwind_logo_webp}
						title="TailwindCSS"
						alt="TailwindCSS"
						class="w-18 md:w-24"
						rounded="rounded-3xl"
					/>
					<Avatar
						src={prisma_logo_webp}
						title="PrismaORM"
						alt="PrismaORM"
						class="w-18 md:w-24"
						rounded="rounded-3xl"
					/>
					<Avatar
						src={nodejs_logo_webp}
						title="NodeJS"
						alt="NodeJS"
						class="w-18 md:w-24"
						rounded="rounded-3xl"
					/>
				</div>
			</div>
		</a>
	</div>
</div>
