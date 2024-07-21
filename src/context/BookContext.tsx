import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AuthContext } from "./AuthContext";
import { IBook } from "../types/Book";
import { IUser } from "../types/User";
import { BookContextType, SortMethod } from "../types/BookContext";

export const BookContext = createContext<BookContextType>({
  books: [],
  addBook: () => {},
  deleteBook: () => {},
  updateBook: () => {},
  sortMethod: SortMethod.UpdatedDesc,
  setSortMethod: () => {},
});

export const BookProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { user, onUpdateUser } = useContext(AuthContext);
  const [books, setBooks] = useState<IBook[]>([]);
  const [sortMethod, setSortMethod] = useState<SortMethod>(
    SortMethod.UpdatedDesc
  );

  const sortBooks = useCallback(
    (booksToSort: IBook[]) => {
      switch (sortMethod) {
        case SortMethod.UpdatedDesc:
          return [...booksToSort].sort(
            (b, a) =>
              (a.updatedAt instanceof Date ? a.updatedAt.getTime() : 0) -
              (b.updatedAt instanceof Date ? b.updatedAt.getTime() : 0)
          );
        case SortMethod.UpdatedAsc:
          return [...booksToSort].sort(
            (a, b) =>
              (a.updatedAt instanceof Date ? a.updatedAt.getTime() : 0) -
              (b.updatedAt instanceof Date ? b.updatedAt.getTime() : 0)
          );
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
        case SortMethod.CreatedDesc:
          return [...booksToSort].sort(
            (b, a) =>
              (a.createdAt instanceof Date ? a.createdAt.getTime() : 0) -
              (b.createdAt instanceof Date ? b.createdAt.getTime() : 0)
          );
        case SortMethod.CreatedAsc:
          return [...booksToSort].sort(
            (a, b) =>
              (a.createdAt instanceof Date ? a.createdAt.getTime() : 0) -
              (b.createdAt instanceof Date ? b.createdAt.getTime() : 0)
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
    if (!user) return;
    const newBook: IBook = {
      id: crypto.randomUUID(),
      title,
      author,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const newUser: IUser = {
      ...user,
      books: [...user.books, newBook],
    };
    onUpdateUser(newUser);
  };

  const deleteBook = (bookId: string) => {
    if (!user) return;
    const newUser: IUser = {
      ...user,
      books: user.books.filter((book) => book.id !== bookId),
    };
    onUpdateUser(newUser);
  };

  const updateBook = (id: string, title: string, author: string) => {
    if (!user) return;
    const updatedBooks = user.books.map((book) =>
      book.id === id ? { ...book, title, author, updatedAt: new Date() } : book
    );
    const newUser: IUser = {
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
