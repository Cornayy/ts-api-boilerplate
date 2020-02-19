import * as autoIncrement from 'mongoose-auto-increment';
import { IBook } from './../interfaces/book';
import { model, Schema } from 'mongoose';

export const bookSchema = new Schema({
    _id: { type: String },
    category: { type: String, required: true },
    chapters: [
        {
            numberOfPages: { type: Number, required: true },
            title: { type: String, required: true },
        },
    ],
    publishDate: {
        required: true,
        type: Date,
        validate: {
            message: 'publishDate must be before today',
            validator: value => value && value < new Date(),
        },
    },
    title: { type: String, required: true },
});

bookSchema.plugin(autoIncrement.plugin, {
    model: 'Book',
    startAt: 1,
});

export const Book = model<IBook>('Book', bookSchema);
