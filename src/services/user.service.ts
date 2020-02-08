import { IUser } from '../interfaces/user';
import { User } from '../models/user';
import { Service } from 'typedi';

@Service()
export class UserService {
    public getUsers(): Promise<IUser[]> {
        return new Promise((resolve, reject) => {
            const users = [
                new User({ name: 'Henk', email: 'henk@gmail.com' }),
                new User({ name: 'Kees', email: 'kees@gmail.com' }),
            ];

            resolve(users);
        });
    }
}
