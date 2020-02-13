import * as mongoose from 'mongoose';
import { IAuthor } from '../interfaces/author';

export const authorSchema = new mongoose.Schema({
    _id: { type: String },
    birthDate: { type: Date, required: true },
    books: [{ type: String, ref: 'Book' }],
    country: { type: String, default: 'NL' },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    ranking: { type: Number, unique: true, min: 1 },
});

export const Author = mongoose.model<IAuthor>('Author', authorSchema);
