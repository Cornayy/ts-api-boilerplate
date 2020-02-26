import { Router } from 'express';
import { IController, IRoute } from '../types';
import { BookController } from '../modules/book/book.controller';
import { Service } from 'typedi';

@Service()
export class BookRoute implements IRoute {
    public path: string;
    public router: Router;
    public controller: IController;

    constructor(controller: BookController) {
        this.controller = controller;
        this.router = Router();
        this.path = '/books';
        this.setRoutes();
    }

    private setRoutes(): void {
        this.router.get(this.path, this.controller.getAll);
    }
}
