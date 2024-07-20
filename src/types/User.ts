import { IBook } from "./Book";

export interface IUser {
    id: string;
    username: string;
    password: string;
    createdAt: Date;
    books: IBook[];
}