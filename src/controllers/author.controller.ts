import { IController } from '../interfaces/controller';
import { NextFunction, Request, Response } from 'express';
import { Service } from 'typedi';
import { AuthorService } from '../services/author.service';
import { IAuthor } from '../interfaces/author';

@Service()
export class AuthorController implements IController {
    private service: AuthorService;

    constructor(service: AuthorService) {
        this.service = service;
    }

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const books: IAuthor[] = await this.service.getAuthors();
            res.status(200).json(books);
        } catch (error) {
            next(error);
        }
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
