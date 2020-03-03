import { UserService } from './user.service';
import { IUserController, IUser } from '../../types';
import { Service } from 'typedi';
import { User } from './user';
import { Request, Response, NextFunction } from 'express';
import { signToken } from '../../middleware/auth.middleware';

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
            const userToCreate: IUser = req.body as IUser;
            const user = await this.service.create(userToCreate);
            const token = signToken(user);

            res.status(201).json({ token });
        } catch (err) {
            next(err);
        }
    };

    /**
     * @swagger
     * /login:
     *   post:
     *     summary: Logs in a user.
     *     parameters:
     *       - in: body
     *         name: user
     *         description: The combination of user and password.
     *         schema:
     *           type: object
     *           required:
     *             - username
     *           properties:
     *               username:
     *                 type: string
     *               password:
     *                 type: string
     *     description: This endpoint allows it to login a user.
     *     responses:
     *       200:
     *         description: Logs in.
     */
    login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username });
            const valid = await user.isValidPassword(password);

            if (!user) {
                res.status(400).json({ message: 'User not found.' });
            }

            if (valid) {
                const token = signToken(user);
                res.json({ token });
            } else {
                res.status(401).json({ message: 'Unauthorized' });
            }
        } catch (err) {
            next(err);
        }
    };

    delete(): void {
        throw new Error('Method not implemented.');
    }
}
