<script lang='ts'>
    import type {ArticleType} from '$lib/types/article.type'
    export let articles: ArticleType[];
    
    let article = articles[0]
    </script>
    
    <div>    
       Hello: {article.title} rating: {article.rating}
    </div>