import React from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";

const Books: React.FC = () => {
  return (
    <div>
      <BookList />
      <BookForm />
    </div>
  );
};

export default Books;
