import { Document, Model } from 'mongoose';
import { NextFunction, Request, Response, Router } from 'express';

export interface IAuthor extends Document {
    _id: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    country: string;
    ranking: number;
    books: string[];
}

export interface IBook extends Document {
    _id: string;
    title: string;
    publishDate: Date;
    category: string;
    chapter: IChapter[];
}

export interface IChapter extends Document {
    title: string;
    numberOfPages: number;
}

export interface IUserModel extends IUser, Document {
    isValidPassword(password: string): Promise<boolean>;
}

export interface IUser {
    username: string;
    password: string;
}

export interface ISeed {
    Model: Model<Document>;
    data: object[];
}

export interface IRoute {
    path: string;
    router: Router;
}

export interface IPayload {
    id: string;
}

export interface IUserController extends IController {
    login(req: Request, res: Response, next: NextFunction): void;
}

export interface IController {
    getAll(req: Request, res: Response, next: NextFunction): void;
    get(req: Request, res: Response, next: NextFunction): void;
    update(req: Request, res: Response, next: NextFunction): void;
    create(req: Request, res: Response, next: NextFunction): void;
    delete(req: Request, res: Response, next: NextFunction): void;
}
