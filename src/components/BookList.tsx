import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookItem from "./BookItem";
import { SortMethod } from "../types/BookContext";

const BookList: React.FC = () => {
  const { books, sortMethod, setSortMethod } = useContext(BookContext);
  return (
    <div>
      <label htmlFor="sortMethod">Sort by:</label>
      <select
        name="sortMethod"
        id="sortMethod"
        value={sortMethod}
        onChange={(e) => setSortMethod(e.target.value as SortMethod)}
      >
        <option value={SortMethod.UpdatedDesc}>Latest Update</option>
        <option value={SortMethod.UpdatedAsc}>Oldest Update</option>
        <option value={SortMethod.TitleAsc}>Title (A-Z)</option>
        <option value={SortMethod.TitleDesc}>Title (Z-A)</option>
        <option value={SortMethod.AuthorAsc}>Author (A-Z)</option>
        <option value={SortMethod.AuthorDesc}>Author (Z-A)</option>
        <option value={SortMethod.CreatedDesc}>Latest Created</option>
        <option value={SortMethod.CreatedAsc}>Oldest Created</option>
      </select>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
