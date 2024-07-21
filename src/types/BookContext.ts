import { Book } from "./Book";

export enum SortMethod {
  UpdatedDesc = "updated_desc",
  UpdatedAsc = "updated_asc",
  TitleAsc = "title_asc",
  TitleDesc = "title_desc",
  AuthorAsc = "author_asc",
  AuthorDesc = "author_desc",
  CreatedDesc = "created_desc",
  CreatedAsc = "created_asc",
}

export interface BookContextType {
  books: Book[];
  addBook: (title: string, author: string) => void;
  deleteBook: (bookId: string) => void;
  updateBook: (id: string, title: string, author: string) => void;
  sortMethod: SortMethod;
  setSortMethod: (method: SortMethod) => void;
}
