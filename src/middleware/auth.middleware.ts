import * as dotenv from 'dotenv';
import { IPayload, IUserModel } from '../types';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { User } from '../modules/user/user';
import { sign } from 'jsonwebtoken';

dotenv.config();

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.TOKEN_SECRET
};

export const signToken = (user: IUserModel) => {
    const { id } = user;

    return sign(
        {
            id,
            iat: new Date().getTime(),
            exp: new Date().setDate(new Date().getDate() + 1)
        },
        process.env.TOKEN_SECRET
    );
};

export const jwtStrategy = new Strategy(opts, async ({ id }: IPayload, next: VerifiedCallback) => {
    try {
        const user = await User.findOne({ _id: id });

        if (!user) return next(null, false);
        next(null, { id: user.id });
    } catch (err) {
        next(err, false);
    }
});
