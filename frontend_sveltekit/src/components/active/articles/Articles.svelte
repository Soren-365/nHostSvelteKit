<script lang="ts">
	import type { ArticleType } from '$lib/types/article.type';
	export let articles: ArticleType[];

</script>

{#if articles}
	<nord-table density="default">
		<table>
			<thead>
				<tr>
					<th class="n-table-align-left">Title</th>
					<th>Description</th>
					<th>Method</th>
					<th class="n-table-align-right">Rating</th>
				</tr>
			</thead>
			<tbody>
				{#each articles as article}
					<tr>
						<td class="n-table-align-left"> {article.title}</td>
						<td class="n-table-ellipsis"> Lorem ipsum .. </td>
						<td>Card</td>
						<td class="n-table-align-right"> {article.rating}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</nord-table>
{:else}
<nord-empty-state>
	<h2>Something’s wrong</h2>
	<p>We were unable to connect to the service. Click Retry to try again or View log to learn what happened.</p>
	<nord-stack justify-content="center" gap="s" direction="horizontal">
	  <nord-button>View log</nord-button>
	  <nord-button variant="primary">Retry</nord-button>
	</nord-stack>
  </nord-empty-state>
{/if}
