import { IUserModel } from '../../../types';
import { model, Schema } from 'mongoose';
import { Initializer } from '../../utils/initializer';
import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

export const roles = {
    user: 'user',
    admin: 'admin'
};

export const userSchema = new Schema({
    _id: { type: String },
    username: { type: String, required: true },
    password: { type: String, required: true },
    roles: {
        type: [String],
        required: true,
        validate: [
            value =>
                value.length > 0 &&
                value.length <= 2 &&
                value.every(
                    role => role.toLowerCase() === roles.user || role.toLowerCase() === roles.admin
                ),
            'No roles defined, or error in defined roles.'
        ]
    }
});

userSchema.pre<IUserModel>('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await hash(this.password, 8);
    }
    next();
});

userSchema.methods.isValidPassword = async function(password: string): Promise<boolean> {
    return await compare(password, this.password);
};

userSchema.methods.getToken = async function() {
    return sign({ _id: this._id }, process.env.TOKEN_SECRET);
};

userSchema.methods.hasRoles = function hasRoles(requiredRoles: string[]) {
    return requiredRoles.filter(role => !this.roles.includes(role)).length === 0;
};

Initializer.initializeSchema(userSchema, 'User');

export const User = model<IUserModel>('User', userSchema);
