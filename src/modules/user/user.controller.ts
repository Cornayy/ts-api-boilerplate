import { UserService } from './user.service';
import { IController, IUser } from '../../types';
import { Service } from 'typedi';
import { NextFunction, Request, Response } from 'express';

@Service()
export class UserController implements IController {
    private service: UserService;

    constructor(service: UserService) {
        this.service = service;
    }

    getAll(): void {
        throw new Error('Method not implemented.');
    }

    get(): void {
        throw new Error('Method not implemented.');
    }

    update(): void {
        throw new Error('Method not implemented.');
    }

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userToCreate: IUser = req.body as IUser;
            const user = await this.service.create(userToCreate);
            const token = await user.getToken();

            res.status(201).json({ token });
        } catch (err) {
            res.status(err.code).json({
                name: err.name,
                message: err.message
            });
        }
    };

    delete(): void {
        throw new Error('Method not implemented.');
    }
}
