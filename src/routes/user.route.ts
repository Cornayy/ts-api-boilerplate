import { UserController } from './../modules/user/user.controller';
import { Router } from 'express';
import { IUserController, IRoute } from '../types';
import { Service } from 'typedi';

@Service()
export class UserRoute implements IRoute {
    public path: string;
    public router: Router;
    public controller: IUserController;

    constructor(controller: UserController) {
        this.controller = controller;
        this.router = Router();
        this.path = '/users';
        this.setRoutes();
    }

    private setRoutes(): void {
        this.router.post(this.path, this.controller.create);
        this.router.post('/login', this.controller.login);
    }
}
