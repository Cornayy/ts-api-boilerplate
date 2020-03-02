import { IUser } from '../../types';
import { model, Schema } from 'mongoose';
import { Initializer } from '../../utils/initializer';

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     required:
 *     - username
 *     - password
 *     properties:
 *      username:
 *       type: string
 *      password:
 *       type: string
 */

export const userSchema = new Schema({
    _id: { type: String },
    username: { type: String, required: true },
    password: { type: String, required: true }
});

Initializer.initializeSchema(userSchema, 'User');

export const User = model<IUser>('User', userSchema);
