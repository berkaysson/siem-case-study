import React, { useState } from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import { BadgePlus } from "lucide-react";
import styled from "styled-components";

const Books: React.FC = () => {
  const [isBookFormModalOpen, setIsBookFormModalOpen] = useState(false);

  return (
    <StyledBooks>
      <div>
        <Button
          onClick={() => setIsBookFormModalOpen(true)}
          variant="primary"
          icon={<BadgePlus size={16} />}
          fullWidth
        >
          Add new book
        </Button>
      </div>
      <BookList />
      {isBookFormModalOpen && (
        <Modal onClose={() => setIsBookFormModalOpen(false)}>
          <BookForm setIsBookFormModalOpen={setIsBookFormModalOpen} />
        </Modal>
      )}
    </StyledBooks>
  );
};

export default Books;

const StyledBooks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  max-width: 1280px;

  @media (max-width: 426px) {
    padding: .5rem;
  }
`;
