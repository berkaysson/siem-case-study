import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { z } from "zod";
import { bookSchema } from "../utils/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Book } from "../types/Book";

type BookFormData = z.infer<typeof bookSchema>;

interface BookEditFormProps {
  book: Book;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookEditForm = ({ book, setIsEditing }: BookEditFormProps) => {
  const { updateBook } = useContext(BookContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
  });

  const onSave = (data: BookFormData) => {
    updateBook(book.id, data.title, data.author);
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit(onSave)}>
      <div>
        Title:
        <input
          type="text"
          {...register("title")}
          placeholder="Title"
          defaultValue={book.title}
        />
        {errors.title && <p>{errors.title.message}</p>}
      </div>
      <div>
        Author:
        <input
          type="text"
          {...register("author")}
          placeholder="Author"
          defaultValue={book.author}
        />
        {errors.author && <p>{errors.author.message}</p>}
      </div>
      <button type="submit">Save Book</button>
    </form>
  );
};

export default BookEditForm;
