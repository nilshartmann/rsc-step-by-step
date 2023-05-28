import { IArticle } from "@/app/articles";

export async function ArticleCard({
  articlePromise,
}: {
  articlePromise: Promise<IArticle>;
}) {
  const article = await articlePromise;

  return (
    <article className={"Container"}>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
    </article>
  );
}
