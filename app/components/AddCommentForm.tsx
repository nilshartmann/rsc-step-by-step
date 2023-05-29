import AddCommentButton from "@/app/components/AddCommentButton";

// Schritt 1: "nur" Speichern (form-action und Submit Button)
// Schritt 2: AddCommentButton

export function AddCommentForm({ articleId }: { articleId: string }) {
  return (
    <form>
      <label>
        New Comment
        <input type="text" name="comment" />
      </label>
    </form>
  );
}
