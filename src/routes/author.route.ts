import { Router } from 'express';
import { IRoute } from '../interfaces/route';
import { IController } from '../interfaces/controller';
import { AuthorController } from '../controllers/author.controller';
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
        this.router.get(this.path, this.controller.getAll);
    }
}
