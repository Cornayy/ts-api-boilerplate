import { IUser } from '../interfaces/user';

export class User implements IUser {
    public name: string;
    public email: string;

    constructor(user: IUser) {
        Object.assign(this, user);
    }
}
