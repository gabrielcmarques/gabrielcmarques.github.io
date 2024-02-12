<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	// console.log('DATA: ... \n', data.props.posts);
</script>

<h1>BLOG:</h1>
{#if data.props.posts}
	<ul>
		{#each data.props.posts as post}
			<li>{@html post.id}</li>
			<li>{@html post.title}</li>
			<li>{@html post.content}</li>
		{/each}
	</ul>
{/if}
