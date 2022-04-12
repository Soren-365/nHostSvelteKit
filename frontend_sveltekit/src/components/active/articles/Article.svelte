<script lang='ts'>
import type {ArticleType} from '$lib/types/article.type'
export let article: ArticleType;

</script>

<div>    
   Hello: {article.title} rating: {article.rating}
</div>