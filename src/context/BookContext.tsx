import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AuthContext } from "./AuthContext";
import { Book } from "../types/Book";
import { User } from "../types/User";
import { BookContextType, SortMethod } from "../types/BookContext";

export const BookContext = createContext<BookContextType>({
  books: [],
  addBook: () => {},
  deleteBook: () => {},
  updateBook: () => {},
  sortMethod: SortMethod.AuthorAsc,
  setSortMethod: () => {},
});

export const BookProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { user, onUpdateUser } = useContext(AuthContext);
  const [books, setBooks] = useState<Book[]>([]);
  const [sortMethod, setSortMethod] = useState<SortMethod>(
    SortMethod.AuthorAsc
  );

  const sortBooks = useCallback(
    (booksToSort: Book[]) => {
      switch (sortMethod) {
        case SortMethod.TitleAsc:
          return [...booksToSort].sort((a, b) =>
            a.title.localeCompare(b.title)
          );
        case SortMethod.TitleDesc:
          return [...booksToSort].sort((a, b) =>
            b.title.localeCompare(a.title)
          );
        case SortMethod.AuthorAsc:
          return [...booksToSort].sort((a, b) =>
            a.author.localeCompare(b.author)
          );
        case SortMethod.AuthorDesc:
          return [...booksToSort].sort((a, b) =>
            b.author.localeCompare(a.author)
          );
        default:
          return booksToSort;
      }
    },
    [sortMethod]
  );

  useEffect(() => {
    if (user) {
      const sortedBooks = sortBooks(user.books);
      setBooks(sortedBooks);
    }
  }, [user, sortMethod, sortBooks]);

  const addBook = (title: string, author: string) => {
    if (!user) return alert("Please login first");
    if (!title || !author) return alert("Please enter a title and author");
    const newBook: Book = {
      id: crypto.randomUUID(),
      title,
      author,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const newUser: User = {
      ...user,
      books: [...user.books, newBook],
    };
    onUpdateUser(newUser);
  };

  const deleteBook = (bookId: string) => {
    if (!user) return alert("Please login first");
    if (!bookId) return alert("Please select a book to delete");
    const newUser: User = {
      ...user,
      books: user.books.filter((book) => book.id !== bookId),
    };
    onUpdateUser(newUser);
  };

  const updateBook = (id: string, title: string, author: string) => {
    if (!user) return alert("Please login first");
    if (!title || !author) return alert("Please enter a title and author");
    const updatedBooks = user.books.map((book) =>
      book.id === id ? { ...book, title, author, updatedAt: new Date() } : book
    );
    const newUser: User = {
      ...user,
      books: updatedBooks,
    };
    onUpdateUser(newUser);
  };

  const contextValue = useMemo(
    () => ({
      books,
      addBook,
      deleteBook,
      updateBook,
      sortMethod,
      setSortMethod,
    }),
    [books, user]
  );

  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  );
};
