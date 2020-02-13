import 'reflect-metadata';
import { IRoute } from './../interfaces/route';
import { AuthorRoute } from './author.route';
import { BookRoute } from './book.route';
import { Service, Container } from 'typedi';

@Service()
export class Router {
    public routes: IRoute[];

    constructor() {
        this.routes = [];
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.routes.push(Container.get(BookRoute));
        this.routes.push(Container.get(AuthorRoute));
    }
}
