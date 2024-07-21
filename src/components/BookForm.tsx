import { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookForm: React.FC = () => {
  const { addBook } = useContext(BookContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const title = formData.get("title") as string;
    const author = formData.get("author") as string;
    addBook(title, author);
  };

  return (
    <div>
      BookForm
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" />
          </label>
          <label>
            Author:
            <input type="text" name="author" />
          </label>
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
