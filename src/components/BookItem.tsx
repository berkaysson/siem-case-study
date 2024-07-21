import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import { Book } from "../types/Book";
import BookEditForm from "./BookEditForm";

const BookItem = ({ book }: { book: Book }) => {
  const { deleteBook } = useContext(BookContext);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      {isEditing ? (
        <BookEditForm book={book} setIsEditing={setIsEditing} />
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
