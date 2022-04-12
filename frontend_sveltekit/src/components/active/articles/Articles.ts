import dbQuery from '$lib/graphql/dbGraphQlcalls';
import type { ArticleType } from '$lib/types/article.type';
import Article from '../../../lib/classes/articleClass';

type ReturnData = {
	_helloworld_article: ArticleType[];
};

/** @type {import('./Articles').RequestHandler} */
export async function get() {
	const query = `{  
    _helloworld_article {
      id
      rating
      title
    }  
  }`;

  console.log("get fired")
  
	const data = await dbQuery(query);

	const articles = (data as ReturnData)['_helloworld_article'].map((article: ArticleType) => {
		return new Article(article);
	});

	if (data) {
		return {
			body: { articles }
		};
	}

	return {
		status: 404
	};
}
