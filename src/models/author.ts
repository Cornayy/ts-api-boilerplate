import * as autoIncrement from 'mongoose-auto-increment';
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
 *       type: Date
 *      books:
 *       type: Array
 *      country:
 *       type: String
 *      firstName:
 *       type: String
 *      lastName:
 *       type: String
 *      ranking:
 *       type: Number
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

authorSchema.plugin(autoIncrement.plugin, {
    model: 'Author',
    startAt: 1
});

export const Author = model<IAuthor>('Author', authorSchema);
