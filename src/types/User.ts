import { Book } from "./Book";

export interface User {
    id: string;
    username: string;
    password: string;
    createdAt: Date;
    books: Book[];
}