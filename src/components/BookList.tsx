import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookItem from "./BookItem";
import { SortMethod } from "../types/BookContext";
import styled from "styled-components";

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
        <option value={SortMethod.TitleAsc}>Title (A-Z)</option>
        <option value={SortMethod.TitleDesc}>Title (Z-A)</option>
        <option value={SortMethod.AuthorAsc}>Author (A-Z)</option>
        <option value={SortMethod.AuthorDesc}>Author (Z-A)</option>
      </select>
      <StyledBooklist>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </StyledBooklist>
    </div>
  );
};

export default BookList;

const StyledBooklist = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
  min-width: 320px;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
`;
