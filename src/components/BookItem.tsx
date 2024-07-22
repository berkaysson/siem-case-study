import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import { Book } from "../types/Book";
import BookEditForm from "./BookEditForm";
import Button from "./ui/Button";
import { Pencil, Trash2 } from "lucide-react";
import Modal from "./ui/Modal";
import styled from "styled-components";

const BookItem = ({ book }: { book: Book }) => {
  const { deleteBook } = useContext(BookContext);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <StyledBookItem>
      <StylesBookItemContent>
        <p>Title: {book.title}</p>
        <p>Author: {book.author}</p>
      </StylesBookItemContent>
      <StyledBookItemActions>
        <Button
          icon={<Pencil size={16} />}
          type="button"
          onClick={() => setIsEditing(true)}
          fullWidth
        >
          Edit
        </Button>

        <Button
          icon={<Trash2 size={13} />}
          type="button"
          onClick={() => deleteBook(book.id)}
          fullWidth
          size="small"
          destructive
        >
          Delete
        </Button>
      </StyledBookItemActions>

      {isEditing && (
        <Modal onClose={() => setIsEditing(false)}>
          <BookEditForm book={book} setIsEditing={setIsEditing} />
        </Modal>
      )}
    </StyledBookItem>
  );
};

export default BookItem;

const StyledBookItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  padding: 2rem;
  min-width: 250px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  transition: all 0.1s ease;
  box-shadow: ${(props) => props.theme.boxShadow};

  @media (max-width: 426px) {
    padding: 1rem;
    gap: 0.5rem;
    width: 100%;
  }
`;

const StylesBookItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
`;

const StyledBookItemActions = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
