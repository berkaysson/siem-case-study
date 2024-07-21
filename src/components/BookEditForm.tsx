import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { z } from "zod";
import { bookSchema } from "../utils/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Book } from "../types/Book";
import { CardForm, FormGroup } from "./ui/CardForm";
import Button from "./ui/Button";
import { Input, InputError } from "./ui/Input";
import { Save } from "lucide-react";

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
    <CardForm>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit(onSave)}>
        <FormGroup>
          <label>Title</label>
          <Input
            type="text"
            {...register("title")}
            placeholder="Title"
            defaultValue={book.title}
          />
          {errors.title && <InputError>{errors.title.message}</InputError>}

          <label>Author</label>
          <Input
            type="text"
            {...register("author")}
            placeholder="Author"
            defaultValue={book.author}
          />
          {errors.author && <InputError>{errors.author.message}</InputError>}

          <Button fullWidth type="submit" icon={<Save size={16} />}>
            Save Book
          </Button>
        </FormGroup>
      </form>
    </CardForm>
  );
};

export default BookEditForm;
