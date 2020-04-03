import { Router, NextFunction, Request, Response } from 'express';

export interface IRoute {
    path: string;
    router: Router;
}

export interface IPayload {
    id: string;
}

export interface IController {
    getAll(req: Request, res: Response, next: NextFunction);
    get(req: Request, res: Response, next: NextFunction);
    update(req: Request, res: Response, next: NextFunction);
    create(req: Request, res: Response, next: NextFunction);
    delete(req: Request, res: Response, next: NextFunction);
}
