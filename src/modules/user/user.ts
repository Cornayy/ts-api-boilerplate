import * as bcrypt from 'bcryptjs';
import { IUserModel } from './../../types';
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

userSchema.methods.isValidPassword = async function(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
};

Initializer.initializeSchema(userSchema, 'User');

export const User = model<IUserModel>('User', userSchema);
