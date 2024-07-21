import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import { Book } from "../types/Book";
import BookEditForm from "./BookEditForm";
import Button from "./ui/Button";
import { Pencil, Trash2 } from "lucide-react";

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
          <Button
            icon={<Pencil size={16} />}
            type="button"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Button>
        </>
      )}
      <Button
        icon={<Trash2 size={16} />}
        type="button"
        onClick={() => deleteBook(book.id)}
      >
        Delete
      </Button>
    </li>
  );
};

export default BookItem;
