import dotenv from 'dotenv';
import { IPayload } from '../../types';
import { Response, Request, NextFunction } from 'express';
import { User, roles } from '../modules/user/user';
import { verify } from 'jsonwebtoken';

dotenv.config();

const unauthorized = (res: Response) => res.status(401).json({ message: 'Unauthorized' });

export const auth = (requiredRoles: string[] = [roles.user]) => async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (req.header('Authorization') == null) {
        return unauthorized(res);
    }

    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const { id } = verify(token, process.env.TOKEN_SECRET) as IPayload;
        const user = await User.findOne({ id }).populate('targets');
        if (!user) return unauthorized(res);
        if (!user.hasRoles(requiredRoles)) return unauthorized(res);

        req.user = user;
    } catch (err) {
        return unauthorized(res);
    }

    next();
};
