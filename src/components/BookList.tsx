import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookItem from "./BookItem";
import { SortMethod } from "../types/BookContext";
import styled from "styled-components";

const BookList: React.FC = () => {
  const { books, sortMethod, setSortMethod } = useContext(BookContext);
  return (
    <div>
      <label htmlFor="sortMethod">Sort by: </label>
      <StyledSelect
        name="sortMethod"
        id="sortMethod"
        value={sortMethod}
        onChange={(e) => setSortMethod(e.target.value as SortMethod)}
      >
        <option value={SortMethod.TitleAsc}>Title (A-Z)</option>
        <option value={SortMethod.TitleDesc}>Title (Z-A)</option>
        <option value={SortMethod.AuthorAsc}>Author (A-Z)</option>
        <option value={SortMethod.AuthorDesc}>Author (Z-A)</option>
      </StyledSelect>
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

const StyledSelect = styled.select`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: none;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  box-shadow: ${(props) => props.theme.boxShadow};

  &:hover {
    background-color: ${(props) => props.theme.hover};
  }
`;
