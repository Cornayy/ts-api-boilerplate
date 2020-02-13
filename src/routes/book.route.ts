import * as express from 'express';
import { IRoute } from '../interfaces/route';
import { IController } from '../interfaces/controller';
import { BookController } from '../controllers/book.controller';
import { Service } from 'typedi';

@Service()
export class BookRoute implements IRoute {
    public path: string;
    public router: express.Router;
    public controller: IController;

    constructor(controller: BookController) {
        this.controller = controller;
        this.router = express.Router();
        this.path = '/books';
        this.setRoutes();
    }

    private setRoutes(): void {
        this.router.get(this.path, this.controller.getAll);
    }
}
