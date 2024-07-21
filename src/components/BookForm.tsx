import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { z } from "zod";
import { bookSchema } from "../utils/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardForm, FormGroup } from "./ui/CardForm";
import Button from "./ui/Button";
import { Input, InputError } from "./ui/Input";
import { BadgePlus } from "lucide-react";

type BookFormData = z.infer<typeof bookSchema>;

interface BookFormProps {
  setIsBookFormModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookForm = ({ setIsBookFormModalOpen }: BookFormProps) => {
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
    setIsBookFormModalOpen(false);
  };

  return (
    <CardForm>
      <h1>Add new book</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <label>Title</label>
          <Input type="text" {...register("title")} placeholder="Title" />
          {errors.title && <InputError>{errors.title.message}</InputError>}
          <label>Author</label>
          <Input type="text" {...register("author")} placeholder="Author" />
          {errors.author && <InputError>{errors.author.message}</InputError>}
          <Button icon={<BadgePlus size={16} />} fullWidth type="submit">
            Add Book
          </Button>
        </FormGroup>
      </form>
    </CardForm>
  );
};

export default BookForm;
