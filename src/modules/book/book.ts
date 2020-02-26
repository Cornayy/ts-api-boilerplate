import { IBook } from '../../types';
import { model, Schema } from 'mongoose';
import { Initializer } from '../../utils/initializer';

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
 *         $ref: '#definitions/Chapter'
 *      publishDate:
 *       type: string
 *      title:
 *       type: string
 */

/**
 * @swagger
 * definitions:
 *   Chapter:
 *     type: object
 *     required:
 *     - numberOfPages
 *     - title
 *     properties:
 *      title:
 *       type: string
 *      numberOfPages:
 *       type: integer
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

Initializer.initializeSchema(bookSchema, 'Book');

export const Book = model<IBook>('Book', bookSchema);
