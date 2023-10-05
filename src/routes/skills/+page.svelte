<script>
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

<div class="flex flex-col items-center space-y-10 translate-y-5 mt-10">
	<h1 class="h1">Conhecimentos</h1>
	<div class="max-w-screen-lg">
		<div class="gap-5">
			<h2 class="h2 my-4">Stack Principal:</h2>
			<div id="one-panel">
				<div class="flex flex-wrap gap-3">
					<Avatar
						src={typescript_logo_webp}
						title="Typescript"
						alt="Typescript"
						class="w-20 md:w-32"
						rounded="rounded-3xl"
					/>
					<Avatar
						src={sveltekit_logo_webp}
						title="SvelteKit"
						alt="SvelteKit"
						class="w-20 md:w-32"
						rounded="rounded-3xl"
					/>
					<Avatar
						src={tailwind_logo_webp}
						title="TailwindCSS"
						alt="TailwindCSS"
						class="w-20 md:w-32"
						rounded="rounded-3xl"
					/>
					<Avatar
						src={prisma_logo_webp}
						title="PrismaORM"
						alt="PrismaORM"
						class="w-20 md:w-32"
						rounded="rounded-3xl"
					/>
					<Avatar
						src={nodejs_logo_webp}
						title="NodeJS"
						alt="NodeJS"
						class="w-20 md:w-32"
						rounded="rounded-3xl"
					/>
				</div>
			</div>

			<div id="two-panel">
				<h2 class="h2 my-4">Ferramentas do dia a dia:</h2>
				<div class="flex flex-wrap gap-3">
					<Avatar
						src={github_logo_jpeg}
						title="Git e Github"
						alt="Git e Github"
						class="w-20 md:w-32"
						rounded="rounded-3xl"
					/>
					<Avatar
						src={vscode_logo_webp}
						title="VScode"
						alt="VScode"
						class="w-20 md:w-32"
						rounded="rounded-3xl"
					/>
					<Avatar
						src={docker_logo_webp}
						title="Docker"
						alt="Docker"
						class="w-20 md:w-32"
						rounded="rounded-3xl"
					/>
					<Avatar
						src={wsl_logo_webp}
						title="Linux WSL2"
						alt="Linux WSL2"
						class="w-20 md:w-32"
						rounded="rounded-3xl"
					/>
				</div>
			</div>
			<div id="three-panel">
				<h2 class="h2 my-4">Outros conhecimentos:</h2>
				<div class="flex flex-wrap gap-3">
					<Avatar
						src={python_logo_webp}
						title="Python"
						alt="Python"
						class="w-20 md:w-32"
						rounded="rounded-3xl"
					/>
					<Avatar
						src={django_logo_webp}
						title="Django"
						alt="Django"
						class="w-20 md:w-32"
						rounded="rounded-3xl"
					/>
					<Avatar
						src={pandas_logo_webp}
						title="Pandas"
						alt="Pandas"
						class="w-20 md:w-32"
						rounded="rounded-3xl"
					/>
					<Avatar
						src={reactjs_logo_webp}
						title="React"
						alt="React"
						class="w-20 md:w-32"
						rounded="rounded-3xl"
					/>
					<Avatar
						src={mongodb_logo_webp}
						title="MongoDB"
						alt="MongoDB"
						class="w-20 md:w-32"
						rounded="rounded-3xl"
					/>
					<Avatar
						src={mysql_logo_webp}
						title="MongoDB"
						alt="MongoDB"
						class="w-20 md:w-32"
						rounded="rounded-3xl"
					/>
					<Avatar
						src={vuejs_logo_webp}
						title="MongoDB"
						alt="MongoDB"
						class="w-20 md:w-32"
						rounded="rounded-3xl"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
