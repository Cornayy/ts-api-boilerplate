import * as dotenv from 'dotenv';
import { IPayload } from './../types';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { User } from '../modules/user/user';

dotenv.config();

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.TOKEN_SECRET
};

export const jwtStrategy = new Strategy(opts, async ({ id }: IPayload, next: VerifiedCallback) => {
    const user = await User.find({ _id: id });
    next(null, user);
});
