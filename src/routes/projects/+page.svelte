<script>
	import { lousa1_webp, statmed_thumb_webp } from '$lib';
</script>

<div class="text-white">
	<div class="px-5 md:px-10">
        <div class="mx-auto w-full max-w-7xl">
            <div class="py-12 md:py-4 lg:py-3">
                <div class="flex-col flex items-center">
                    <div class="max-w-[800px] text-center mb-8 md:mb-12 lg:mb-16">
                        <div class="mx-auto mt-4 max-w-[528px]" />
                        <h1 class="h1 mt-10">Projetos</h1>
					</div>
					<div
						class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch mb-12 md:mb-16 lg:mb-20"
					>
						<a href="/projects/statmed" target="_blank">
							<div
								class="flex-col flex grid-cols-1 gap-4 bg-[#07132d] p-8 text-white max-[991px]:text-left max-[767px]:items-center max-[767px]:px-4 max-[767px]:py-8 max-[479px]:w-full rounded-xl hover:cursor-pointer hover:border"
							>
								<div class="flex-row flex w-full items-center justify-between" />
								<div class="relative h-full w-full">
									<!-- svelte-ignore a11y-img-redundant-alt -->
									<img
										src={statmed_thumb_webp}
										alt="Testimonial Image"
										class="inline-block w-full max-w-full object-cover rounded-md h-60"
									/>
								</div>
								<h5 class="text-xl font-bold">Statmed</h5>
								<div class="flex-col flex w-full items-start gap-5 p-0">
									<div>
										Uma aplicação de exercício que fiz com meu colega Diego Gomez baseado em um
										gerenciamento de PEP com funções de SAME para hospitais com funções de Login,
										SQL, CRUD funcional, Cookie-Parser.
									</div>
									<div class="mt-6 flex-wrap flex gap-2 mb-5 md:mb-6 lg:mb-8">
										<div
											class="bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262] rounded-sm"
										>
											<div>JAVASCRIPT</div>
										</div>
										<div
											class="bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262] rounded-sm"
										>
											<div>EXPRESS</div>
										</div>
										<div
											class="bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262] rounded-sm"
										>
											<div>REACT</div>
										</div>
									</div>
								</div>
							</div>
						</a>
						<a href="/projects/kanbanboard" target="_blank">
							<div
								class="flex-col flex grid-cols-1 gap-4 bg-[#07132d] p-8 text-white max-[991px]:text-left max-[767px]:items-center max-[767px]:px-4 max-[767px]:py-8 max-[479px]:w-full rounded-xl hover:cursor-pointer hover:border"
							>
								<div class="flex-row flex w-full items-center justify-between" />
								<div class="  w-full">
									<!-- svelte-ignore a11y-img-redundant-alt -->
									<img
										src={lousa1_webp}
										alt="Testimonial Image"
										class="inline-block w-full max-w-full object-cover rounded-md h-60"
									/>
								</div>
								<h5 class="text-xl font-bold">Lousa Kanban</h5>
								<div class="flex-col flex w-full items-start gap-5 p-0">
									<div>
										Uma aplicação de exercício que fiz com meu colega Diego Gomez para treinar
										conhecimentos com Javascript Drag and Drop.
									</div>
									<div class="mt-6 flex-wrap flex gap-2 mb-5 md:mb-6 lg:mb-8">
										<div
											class="bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262] rounded-sm"
										>
											<div>JAVASCRIPT</div>
										</div>
										<div
											class="bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262] rounded-sm"
										>
											<div>HTML</div>
										</div>
										<div
											class="bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262] rounded-sm"
										>
											<div>CSS</div>
										</div>
									</div>
								</div>
							</div></a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
