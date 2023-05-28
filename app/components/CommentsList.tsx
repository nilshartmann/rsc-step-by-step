import { IComment } from "@/app/articles";

export async function CommentsList({
  commentsPromise,
}: {
  commentsPromise: Promise<IComment[]>;
}) {
  const comments = await commentsPromise;

  return (
    <div className="Container">
      <h2>Comments</h2>
      {comments.map((c) => (
        <article key={c.id}>
          <p>{c.comment}</p>
        </article>
      ))}
    </div>
  );
}
