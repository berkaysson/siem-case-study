import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { z } from "zod";
import { bookSchema } from "../utils/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type BookFormData = z.infer<typeof bookSchema>;

const BookForm: React.FC = () => {
  const { addBook } = useContext(BookContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
  });

  const onSubmit = (data: BookFormData) => {
    addBook(data.title, data.author);
    reset();
  };

  return (
    <div>
      BookForm
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            Title:
            <input type="text" {...register("title")} placeholder="Title" />
            {errors.title && <p>{errors.title.message}</p>}
          </div>
          <div>
            Author:
            <input type="text" {...register("author")} placeholder="Author" />
            {errors.author && <p>{errors.author.message}</p>}
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
