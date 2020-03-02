import * as bcrypt from 'bcryptjs';
import { UserService } from './user.service';
import { IUserController, IUser, IPayload } from '../../types';
import { Service } from 'typedi';
import { User } from './user';
import { sign } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

@Service()
export class UserController implements IUserController {
    private service: UserService;

    constructor(service: UserService) {
        this.service = service;
    }

    getAll = () => {
        throw new Error('Method not implemented.');
    };

    get(): void {
        throw new Error('Method not implemented.');
    }

    update(): void {
        throw new Error('Method not implemented.');
    }

    /**
     * @swagger
     * /users:
     *   post:
     *     tags:
     *     - User
     *     summary: Creates a user.
     *     description: This endpoint allows it to create a user.
     *     responses:
     *       201:
     *         description: Created a user.
     *         schema:
     *            $ref: '#definitions/User'
     */
    create = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const authorToCreate: IUser = req.body as IUser;

            await this.service.create(authorToCreate);
            res.status(201).json({ message: 'User Created' });
        } catch (error) {
            next(error);
        }
    };

    /**
     * @swagger
     * /login:
     *   post:
     *     summary: Logs in a user.
     *     parameters:
     *       - in: path
     *         name: username
     *         type: string
     *       - in: path
     *         name: username
     *         type: string
     *     description: This endpoint allows it to login a user.
     *     responses:
     *       200:
     *         description: Logs in.
     */
    login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username });
            const valid = await bcrypt.compare(password, user.password);

            if (!user) {
                res.status(400).json({ message: 'User not found.' });
            }

            if (valid) {
                const payload: IPayload = {
                    id: user.id
                };
                const token = sign(payload, process.env.TOKEN_SECRET);
                res.json(token);
            } else {
                res.status(401).json({ message: 'Unauthorized' });
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    };

    delete(): void {
        throw new Error('Method not implemented.');
    }
}
