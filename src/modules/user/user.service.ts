import * as bcrypt from 'bcryptjs';
import { IUserModel } from './../../types';
import { IUser } from '../../types';
import { User } from './user';
import { Service } from 'typedi';

@Service()
export class UserService {
    public async create({ username, password }: IUser): Promise<IUserModel> {
        const hashedPassword = await bcrypt.hash(password, 12);
        return User.create({ username, password: hashedPassword });
    }
}
