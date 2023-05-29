import { IArticle } from "@/app/articles";

type ArticleCardProps = {
  articlePromise: Promise<IArticle>;
};

export async function ArticleCard() {
  const article: any = null;

  return (
    <article className={"Container"}>
      <p>todo article.title und article.body anzeigen</p>
    </article>
  );
}
