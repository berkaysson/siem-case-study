import React, { useState } from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";
import Modal from "./ui/Modal";
import Button from "./ui/Button";
import { BadgePlus } from "lucide-react";

const Books: React.FC = () => {
  const [isBookFormModalOpen, setIsBookFormModalOpen] = useState(false);

  return (
    <div>
      <div>
        <Button
          onClick={() => setIsBookFormModalOpen(true)}
          variant="primary"
          icon={<BadgePlus size={16} />}
        >
          Add new book
        </Button>
      </div>
      <BookList />
      {isBookFormModalOpen && (
        <Modal onClose={() => setIsBookFormModalOpen(false)}>
          <BookForm />
        </Modal>
      )}
    </div>
  );
};

export default Books;
