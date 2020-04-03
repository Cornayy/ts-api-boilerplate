import { Router } from 'express';
import { IController, IRoute } from '../../types';
import { AuthorController } from '../modules/author/author.controller';
import { Service } from 'typedi';
import { auth } from '../middleware/auth.middleware';
import { roles } from '../modules/user/user';

@Service()
export class AuthorRoute implements IRoute {
    public path: string;
    public router: Router;
    public controller: IController;

    constructor(controller: AuthorController) {
        this.controller = controller;
        this.router = Router();
        this.path = '/authors';
        this.setRoutes();
    }

    private setRoutes(): void {
        this.router.get(
            this.path,
            auth([roles.user]),
            this.controller.getAll
        );
    }
}
