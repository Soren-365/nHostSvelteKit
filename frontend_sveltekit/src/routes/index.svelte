<script lang='ts'>
	import Form from '../components/active/form/Form.svelte';
	import Swiper from '../components/active/swiper/swiper.svelte';
	import Articles from '../components/active/articles/Articles.svelte';
	import type { ArticleType } from '$lib/types/article.type';
	// The page always has access to props from `get`...
	//	export let data;// get data from index.js
	// ...plus props from `post` when the page is rendered
	// in response to a POST request, for example after
	// submitting the form below
	//	export let errors;// get errors from index.js

	export let articles: ArticleType[]
	const devMode = import.meta.env.PRODUCTION ? 'Production mode' : 'Development mode';

	console.log('index.svelte fired');
</script>

<svelte:head>
	<title>first year free</title>
</svelte:head>

<main>
	<!-- <h4>Hello, this is {devMode} {import.meta.env.HASURA_DB_URL} {import.meta.env.VITE_MESSAGE}</h4> -->
	<!-- <MyButton /> -->
	<p><a href="/values">Our values</a></p>
	<h3>The Avantweb development team presents you an amazing oppotunity:</h3>
	<Articles articles={articles}/>
	<Form />
	<div class="swiper"><Swiper /></div>

	<div class="newsletter">
		<input type="text" name="newsletter" placeholder="email" />
		<button type="submit">No thanks, Just the newsletter</button>
	</div>
</main>

<!-- {#each items as item}
	<Preview item={item}/>
  {/each} -->

<!-- <form method="post">
		{#if data}
			<p class="data">
				<!-- {Object.values(Object.values()[0])} -->
<!-- {#each data.formSubmission as entry}
					<ul>
						{#each Object.entries(entry) as [cat_key, cat_val] (cat_key)}
							<div>{cat_key}: {cat_val}</div>
						{/each}
					</ul>
				{/each}
			</p>
		{/if}

		{#if errors?.title}
			<p class="error">{errors.title}</p>
		{/if} -->

<!-- <label for="newsletter">Newsletter</label> -->

<!-- </form> -->
<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 800px;
		margin: 0 auto;
	}

	.newsletter {
		margin-top: 70px;
	}
	.swiper {
		margin-top: 50px;
	}
	@media only screen and (max-width: 600px) {
		main {
			text-align: center;
			padding: 1em;
			max-width: 320px;
			margin: 0 auto;
		}
	}
</style>
