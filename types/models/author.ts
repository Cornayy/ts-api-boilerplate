import { Document } from 'mongoose';

export interface IAuthor extends Document {
    _id: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    country: string;
    ranking: number;
    books: string[];
}
