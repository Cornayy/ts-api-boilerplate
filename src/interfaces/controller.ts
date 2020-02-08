import { NextFunction, Request, Response } from 'express';

export interface IController {
    getAll(req: Request, res: Response, next: NextFunction): void;
    get(req: Request, res: Response, next: NextFunction): void;
    update(req: Request, res: Response, next: NextFunction): void;
    create(req: Request, res: Response, next: NextFunction): void;
    delete(req: Request, res: Response, next: NextFunction): void;
}
