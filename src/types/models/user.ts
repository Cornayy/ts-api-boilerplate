import { Document } from 'mongoose';

export interface IUserModel extends IUser, Document {
    isValidPassword(password: string): Promise<boolean>;
    getToken(): Promise<string>;
    hasRoles(requiredRoles: string[]): boolean;
}

export interface IUser {
    username: string;
    password: string;
    roles: string[];
}
