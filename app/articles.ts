export type IArticle = {
  id: string;
  title: string;
  body: string;
};
const articles: IArticle[] = [
  { id: "A1", title: "First article", body: "Body of first article" },
  { id: "A2", title: "Second article", body: "Body of second article" },
  { id: "A3", title: "Third article", body: "Body of third article" },
];

export type IComment = {
  id: string;
  comment: string;
};

const comments: Record<string, IComment[]> = {
  A1: [
    { id: "C1", comment: "cool article" },
    { id: "C2", comment: "very nice" },
    { id: "C3", comment: "not too bad. wish a little more details though" },
  ],
  A2: [
    { id: "C4", comment: "comment four" },
    { id: "C5", comment: "5th comment" },
    { id: "C6", comment: "666 and still commenting" },
  ],
  A3: [
    { id: "C7", comment: "comment 007" },
    { id: "C8", comment: "comment #8" },
    { id: "C9", comment: "comment #9" },
  ],
};

export async function fetchArticles() {
  return articles;
}

export async function fetchArticleSlow(articleId: string): Promise<IArticle> {
  return new Promise((res) =>
    setTimeout(() => {
      const article = articles.filter((a) => a.id === articleId);
      if (article.length !== 1) {
        throw new Error("Invalid articleId " + articleId);
      }
      res(article[0]);
    }, 2000)
  );
}

export async function fetchCommentsSlow(
  articleId: string
): Promise<IComment[]> {
  return new Promise((res) =>
    setTimeout(() => {
      res(comments[articleId] || []);
    }, 3000)
  );
}
