import { IController, IAuthor } from '../../types';
import { Service } from 'typedi';
import { AuthorService } from './author.service';
import { Request, Response, NextFunction } from 'express';

@Service()
export class AuthorController implements IController {
    private service: AuthorService;

    constructor(service: AuthorService) {
        this.service = service;
    }

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        const books: IAuthor[] = await this.service.getAuthors();
        res.status(200).json(books);
    };

    get(): void {
        throw new Error('Method not implemented.');
    }

    update(): void {
        throw new Error('Method not implemented.');
    }

    create(): void {
        throw new Error('Method not implemented.');
    }

    delete(): void {
        throw new Error('Method not implemented.');
    }
}
