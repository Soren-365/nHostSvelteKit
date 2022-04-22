<script lang="ts">
	import Form from '../components/active/form/Form.svelte';
	import Swiper from '../components/active/swiper/swiper.svelte';
	//import  '@nordhealth/components';
	console.log('index.svelte fired');
	import Articles from '../components/active/articles/Articles.svelte';
	import type { ArticleType } from '$lib/types/article.type';
	//import CoffeeMug  from '../components/active/coffeeMug/coffeeMug.svelteUnused';
	import NCommandMenu from '../components/active/nCommandMenu/NCommandMenu.svelte';
	
import { onMount } from 'svelte';
//import NHeader from '../components/active/nHeader/NHeader.svelte';
	onMount(async () => {
		await import('@nordhealth/components');
	})



	// The page always has access to props from `get`...
	//	export let data;// get data from index.js
	// ...plus props from `post` when the page is rendered
	// in response to a POST request, for example after
	// submitting the form below
	//	export let errors;// get errors from index.js

	export let articles: ArticleType[]

	console.log('index.svelte fired');
</script>

<svelte:head>
	<title>first year free</title>
</svelte:head>

<main>
	<div class="n-reset">
		<div class="n-typeset">
			<!-- <h4>Hello, this is {devMode} {import.meta.env.HASURA_DB_URL} {import.meta.env.VITE_MESSAGE}</h4> -->
			<!-- <MyButton /> -->
			<svg class="n-color-icon-hover n-color-accent-stroke " width="50" viewBox="0 0 100 100">
				<circle fill="HotPink" cx="50" cy="50" r="40" />
			</svg>
			<div class="n-border-strong-bs">
				<p class="n-font-size-l n-font-weight-strong ">
					<a href="/values" class="n-color-status-info-weak n-color-surface-raised">Our values</a>
				</p>
			</div>
			<!-- <NHeader/> -->
			<NCommandMenu />
					
			<h3>The Avantweb development team presents you an amazing oppotunity:</h3>
			
			<Form />
			<div class="swiper"><Swiper /></div>

			<div class="newsletter">
				<input type="text" name="newsletter" placeholder="Write your email here" />
				<button type="submit">Subscribe to our newsletter</button>
			</div>
			<nord-stack direction="horizontal" gap="s">
				<nord-badge type="info">Info</nord-badge>
				<nord-badge type="success">Success</nord-badge>
				<nord-badge type="warning">Warning</nord-badge>
				<nord-badge type="danger">Danger</nord-badge>
				<nord-badge type="highlight">Highlight</nord-badge>
			</nord-stack>
			<Articles {articles} /> 
			<!-- nord typesetting divs below -->
		</div>
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
<style lang="scss">
	// $color: red;

	// h1 {
	// 	color: $color;
	// }

	// div {
	// 	background: green;

	// 	> p {
	// 		color: #fff;
	// 	}
	// }

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
