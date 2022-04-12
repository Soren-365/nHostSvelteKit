<script lang="ts">
	import { onMount } from 'svelte';
	import type { ArticleType } from '$lib/types/article.type';
	import Article from './Article.svelte';
	//import Article from './Article.svelte'
	export let articles: ArticleType[]

	// onMount(async () => {
	// 	articles = await query();
	// 	return () => console.log('destroyed onMount');
	// });
</script>

{#if articles}
	<!-- {JSON.stringify(articles)} -->
	<!-- content here -->

	{#each articles as article}
		<Article {article} />
	{/each}
{:else}
	<!-- else content here -->
{/if}
