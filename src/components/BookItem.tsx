import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import { IBook } from "../types/Book";

const BookItem = ({ book }: { book: IBook }) => {
  const { deleteBook, updateBook } = useContext(BookContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get("title") as string;
    const author = formData.get("author") as string;
    updateBook(book.id, title, author);
    setIsEditing(false);
  };

  const editForm = (
    <form onSubmit={handleSave}>
      <label>
        Title:
        <input type="text" name="title" defaultValue={book.title} />
      </label>
      <label>
        Author:
        <input type="text" name="author" defaultValue={book.author} />
      </label>
      <button type="submit">Save</button>
    </form>
  );

  return (
    <li>
      {isEditing ? (
        editForm
      ) : (
        <>
          <div>{book.title}</div>
          <div>{book.author}</div>
          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      )}
      <button type="button" onClick={() => deleteBook(book.id)}>
        Delete
      </button>
    </li>
  );
};

export default BookItem;
