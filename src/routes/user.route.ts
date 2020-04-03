import { UserController } from './../modules/user/user.controller';
import { Router } from 'express';
import { IRoute } from '../types';
import { Service } from 'typedi';

@Service()
export class UserRoute implements IRoute {
    public path: string;
    public router: Router;
    public controller: UserController;

    constructor(controller: UserController) {
        this.controller = controller;
        this.router = Router();
        this.path = '/users';
        this.setRoutes();
    }

    private setRoutes(): void {
        this.router.post('/', this.controller.create);
    }
}
