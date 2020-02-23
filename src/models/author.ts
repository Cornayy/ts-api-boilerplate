import { Initializer } from '../../src/utils/initializer';
import { model, Schema } from 'mongoose';
import { IAuthor } from '../interfaces/author';

/**
 * @swagger
 * definitions:
 *   Author:
 *     type: object
 *     required:
 *     - name
 *     - firstName
 *     - lastName
 *     - birthDate
 *     properties:
 *      birthDate:
 *       type: string
 *      books:
 *       type: array
 *       items:
 *         $ref: '#definitions/Book'
 *      country:
 *       type: string
 *      firstName:
 *       type: string
 *      lastName:
 *       type: string
 *      ranking:
 *       type: integer
 */

export const authorSchema = new Schema({
    _id: { type: String },
    birthDate: { type: Date, required: true },
    books: [{ type: String, ref: 'Book' }],
    country: { type: String, default: 'NL' },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    ranking: { type: Number, unique: true, min: 1 }
});

Initializer.initializeSchema(authorSchema, 'Author');

export const Author = model<IAuthor>('Author', authorSchema);
