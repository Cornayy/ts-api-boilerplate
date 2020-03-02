import * as passport from 'passport';
import { Router } from 'express';
import { IController, IRoute } from '../types';
import { AuthorController } from '../modules/author/author.controller';
import { Service } from 'typedi';

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
            passport.authenticate('jwt', { session: false }),
            this.controller.getAll
        );
    }
}
