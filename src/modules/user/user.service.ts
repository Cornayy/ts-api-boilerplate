import { IUser, IUserModel } from '../../types';
import { User } from './user';
import { Service } from 'typedi';
import { RequestError } from '../../errors/errors';
import { UsernameTakenError } from './errors/errors';

@Service()
export class UserService {
    public async create({ username, password, roles }: IUser): Promise<IUserModel> {
        const taken = await User.findOne({ username });
        if (taken) throw new UsernameTakenError(409, 'Username already taken');

        const user = new User({ username, password, roles });

        try {
            await user.save();
        } catch (err) {
            throw new RequestError(400, 'Bad request');
        }

        return user;
    }
}
