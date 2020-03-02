import * as bcrypt from 'bcryptjs';
import { IUser } from '../../types';
import { User } from './user';
import { Service } from 'typedi';

@Service()
export class UserService {
    public async create({ username, password }: IUser): Promise<IUser> {
        const hashedPassword = await bcrypt.hash(password, 12);
        return User.create({ username, password: hashedPassword });
    }
}
