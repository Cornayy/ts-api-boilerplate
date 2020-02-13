import * as mongoose from 'mongoose';

export interface IAuthor extends mongoose.Document {
    _id: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    country: string;
    ranking: number;
    books: string[];
}
