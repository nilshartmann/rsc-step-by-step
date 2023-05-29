import { addComment } from "@/app/articles";
import { revalidatePath } from "next/cache";
import AddCommentButton from "@/app/components/AddCommentButton";

export function AddCommentForm({ articleId }: { articleId: string }) {
  async function saveComment(formData: FormData) {
    "use server";
    const newComment = formData.get("comment") as string;

    await addComment(articleId, newComment);
    revalidatePath(`/`);
  }

  return (
    <form action={saveComment}>
      <label>
        New Comment
        <input type="text" name="comment" />
      </label>

      <AddCommentButton />
    </form>
  );
}
