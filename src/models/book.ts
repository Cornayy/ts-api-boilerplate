import * as autoIncrement from 'mongoose-auto-increment';
import { IBook } from './../interfaces/book';
import { model, Schema } from 'mongoose';
import { Initializer } from '../../src/utils/initializer';

/**
 * @swagger
 * definitions:
 *   Book:
 *     type: object
 *     required:
 *     - category
 *     - publishDate
 *     - title
 *     properties:
 *      category:
 *       type: string
 *      chapters:
 *       type: array
 *       items:
 *          type: object
 *      publishDate:
 *       type: string
 *      title:
 *       type: string
 */

export const bookSchema = new Schema({
    _id: { type: String },
    category: { type: String, required: true },
    chapters: [
        {
            numberOfPages: { type: Number, required: true },
            title: { type: String, required: true }
        }
    ],
    publishDate: {
        required: true,
        type: Date,
        validate: {
            message: 'publishDate must be before today',
            validator: value => value && value < new Date()
        }
    },
    title: { type: String, required: true }
});

try {
    bookSchema.plugin(autoIncrement.plugin, {
        model: 'Book',
        startAt: 1
    });
} catch (err) {
    Initializer.increment();
}

export const Book = model<IBook>('Book', bookSchema);
