import { IController } from '../interfaces/controller';
import { NextFunction, Request, Response } from 'express';
import { Service } from 'typedi';
import { UserService } from '../services/user.service';
import { IUser } from '../interfaces/user';

@Service()
export class UserController implements IController {
    private service: UserService;

    constructor(service: UserService) {
        this.service = service;
    }

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const users: IUser[] = await this.service.getUsers();
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    };

    get(): void {
        throw new Error('Method not implemented.');
    }

    update(): void {
        throw new Error('Method not implemented.');
    }

    create(): void {
        throw new Error('Method not implemented.');
    }

    delete(): void {
        throw new Error('Method not implemented.');
    }
}
