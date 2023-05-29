import { fetchArticles } from "@/app/articles";
import AppLink from "@/app/components/AppLink";
import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import { AddCommentForm } from "@/app/components/AddCommentForm";

export default async function SlowPage() {
  const articles = await fetchArticles();

  return (
    <>
      <h1>Articles</h1>
      <div>
        {articles.map((a) => (
          <ThemeSwitcher key={a.id}>
            <article className="Container">
              <AppLink href={`/${a.id}`}>
                <h2>{a.title}</h2>
              </AppLink>
              <p>{a.body}</p>
              <p>
                <b>Latest comment</b>
              </p>
              <p>{a.latestComment}</p>
              <AddCommentForm articleId={a.id} />
            </article>
          </ThemeSwitcher>
        ))}
      </div>
    </>
  );
}
