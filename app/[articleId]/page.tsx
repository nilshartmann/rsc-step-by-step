import {
  addComment,
  fetchArticleSlow,
  fetchCommentsSlow,
} from "@/app/articles";
import { Suspense } from "react";
import LoadingIndicator from "@/app/components/LoadingIndicator";
import { ArticleCard } from "@/app/components/ArticleCard";
import { CommentsList } from "@/app/components/CommentsList";
import { revalidatePath } from "next/cache";
import AddCommentButton from "@/app/components/AddCommentButton";

type ArticlePageProps = {
  params: { articleId: string };
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  return (
    <div>
      <Suspense
        fallback={<LoadingIndicator>Articles loading...</LoadingIndicator>}
      >
        {/* @ts-expect-error Async Server Component */}
        <ArticleCard articlePromise={fetchArticleSlow(params.articleId)} />
      </Suspense>

      <Suspense
        fallback={<LoadingIndicator>Comments loading...</LoadingIndicator>}
      >
        {/* @ts-expect-error Async Server Component */}
        <CommentsList commentsPromise={fetchCommentsSlow(params.articleId)} />
      </Suspense>
    </div>
  );
}
